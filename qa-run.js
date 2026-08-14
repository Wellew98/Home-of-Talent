// Real perf measurement + mobile QA via Playwright (Lighthouse CLI is flaky on this box).
const { chromium } = require("playwright");

const BASE = "http://localhost:3001";

async function perfCheck() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const longTasks = [];
  await page.addInitScript(() => {
    window.__longTasks = [];
    try {
      const obs = new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__longTasks.push(e.duration);
      });
      obs.observe({ entryTypes: ["longtask"] });
    } catch {}
  });

  const navStart = Date.now();
  const resp = await page.goto(BASE, { waitUntil: "load" });
  const loadMs = Date.now() - navStart;

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const hero = Array.from(document.images).find((i) => i.src.includes("hero") || i.sizes.includes("100vw"));
    return {
      ttfb: nav ? nav.responseStart : -1,
      domContentLoaded: nav ? nav.domContentLoadedEventEnd : -1,
      loadEvent: nav ? nav.loadEventEnd : -1,
      heroComplete: hero ? hero.complete : false,
      heroNaturalWidth: hero ? hero.naturalWidth : 0,
      longTasks: window.__longTasks || [],
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      h1Visible: (() => {
        const h1 = document.querySelector("h1");
        if (!h1) return false;
        const s = getComputedStyle(h1);
        return s.opacity === "1";
      })(),
    };
  });
  metrics.loadMs = loadMs;
  console.log("PERF", JSON.stringify(metrics));
  await browser.close();
}

async function mobileQA() {
  const browser = await chromium.launch();
  const viewports = [
    { width: 375, height: 812 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
  ];
  const routes = ["/", "/services/kitchen-bathroom", "/quote", "/areas/sandton"];
  for (const vp of viewports) {
    for (const route of routes) {
      const page = await browser.newPage({ viewport: vp });
      const errors = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 80)));
      page.on("pageerror", (e) => errors.push(String(e).slice(0, 80)));
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      const name = `qa-${vp.width}x${vp.height}-${route === "/" ? "home" : route.replace(/\//g, "_").slice(1)}`;
      await page.screenshot({ path: `qa-shots/${name}.png`, fullPage: route === "/" ? false : false });
      console.log("QA", JSON.stringify({ vp: `${vp.width}x${vp.height}`, route, overflow, errors: errors.length }));
      await page.close();
    }
  }
  await browser.close();
}

(async () => {
  await perfCheck();
  await mobileQA();
})().catch((e) => {
  console.error("FAIL", e);
  process.exit(1);
});
