// Mobile menu + interaction QA at 375px.
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 100)));
  await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });

  // open mobile menu
  const menuBtn = page.locator('button[aria-controls="mobile-menu"]');
  await menuBtn.click();
  await page.waitForTimeout(400);
  const menuState = await page.evaluate(() => {
    const panel = document.getElementById("mobile-menu");
    const style = panel ? getComputedStyle(panel) : null;
    const links = panel ? Array.from(panel.querySelectorAll("a")).map((a) => a.textContent.trim()) : [];
    return { opacity: style ? style.opacity : "?", ariaHidden: panel ? panel.getAttribute("aria-hidden") : "?", links };
  });
  console.log("MENU_OPEN", JSON.stringify(menuState));

  // click a nav link inside the menu
  await page.locator('#mobile-menu a[href="/services"]').click();
  await page.waitForLoadState("networkidle");
  const urlAfter = page.url();
  const menuClosed = await page.evaluate(() => {
    const panel = document.getElementById("mobile-menu");
    return panel ? getComputedStyle(panel).opacity : "gone";
  });
  console.log("NAV_RESULT", JSON.stringify({ urlAfter, menuClosed }));

  // FAQ accordion interaction on the homepage
  await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.85));
  const btns = page.locator('button[aria-expanded]');
  const count = await btns.count();
  await btns.nth(2).click();
  await page.waitForTimeout(300);
  const states = await page.evaluate(() =>
    Array.from(document.querySelectorAll("button[aria-expanded]")).map((b) => b.getAttribute("aria-expanded")),
  );
  console.log("FAQ", JSON.stringify({ count, states }));

  console.log("ERRORS", JSON.stringify(errors));
  await browser.close();
})().catch((e) => {
  console.error("FAIL", e);
  process.exit(1);
});
