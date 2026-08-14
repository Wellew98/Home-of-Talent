# Vectorize the Home of Talent logo JPG into SVG.
# v2: evenodd fill with outer + hole contours — handles the truss network exactly.
import math
from collections import deque
from PIL import Image

SRC = 'f208b88a-f188-4fcc-8c52-4225a6d3023e.jpg'
BROWN, TERR, SLATE = (0x69, 0x3F, 0x26), (0xD6, 0x85, 0x46), (0x53, 0x6A, 0x62)
MIN_SIZE = 90

im = Image.open(SRC).convert('RGB')
W, H = im.size
px = im.load()

def close(c, t, tol=30):
    return all(abs(a - b) <= tol for a, b in zip(c, t))

def components_mask(mask):
    comps, seen = [], set()
    for p in mask:
        if p in seen:
            continue
        q = deque([p]); seen.add(p); pts = [p]
        while q:
            x, y = q.popleft()
            for n in ((x+1, y), (x-1, y), (x, y+1), (x, y-1)):
                if n in mask and n not in seen:
                    seen.add(n); q.append(n); pts.append(n)
        comps.append(pts)
    return comps

def moore_trace(grid, start):
    dirs = [(1,0),(1,1),(0,1),(-1,1),(-1,0),(-1,-1),(0,-1),(1,-1)]
    d = 0
    cur = start
    boundary = []
    for _ in range(200000):
        found = False
        for i in range(8):
            nd = (d + i) % 8
            n = (cur[0] + dirs[nd][0], cur[1] + dirs[nd][1])
            if n in grid:
                boundary.append(cur)
                cur = n
                d = (nd + 6) % 8
                found = True
                break
        if not found:
            break
        if cur == start and len(boundary) > 4:
            break
    return boundary

def simplify(points, eps):
    if len(points) < 4:
        return points
    def perp(p, a, b):
        dx, dy = b[0]-a[0], b[1]-a[1]
        if dx == 0 and dy == 0:
            return math.hypot(p[0]-a[0], p[1]-a[1])
        t = ((p[0]-a[0])*dx + (p[1]-a[1])*dy) / (dx*dx + dy*dy)
        t = max(0.0, min(1.0, t))
        return math.hypot(p[0]-(a[0]+t*dx), p[1]-(a[1]+t*dy))
    def rec(seg):
        a, b = seg[0], seg[-1]
        dmax, idx = 0.0, -1
        for i in range(1, len(seg)-1):
            dd = perp(seg[i], a, b)
            if dd > dmax:
                dmax, idx = dd, i
        if dmax > eps and idx != -1:
            return rec(seg[:idx+1])[:-1] + rec(seg[idx:])
        return [a, b]
    return rec(points)

def trace_component_contours(pts, bbox):
    """Return list of contour rings (outer + holes) for a pixel set within bbox."""
    grid = set(pts)
    start = min(pts, key=lambda p: (p[1], p[0]))
    outer = moore_trace(grid, start)
    # holes: background pixels inside bbox not connected to bbox border
    x0, x1, y0, y1 = bbox
    bg = set()
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            if (x, y) not in grid:
                bg.add((x, y))
    # components of bg
    holes = []
    for comp in components_mask(bg):
        touches_edge = any(x <= x0 or x >= x1 or y <= y0 or y >= y1 for x, y in comp)
        if not touches_edge and len(comp) > 6:
            hs = min(comp, key=lambda p: (p[1], p[0]))
            holes.append(moore_trace(comp, hs))
    return [outer] + holes

def rings_to_path(rings, eps):
    parts = []
    for ring in rings:
        simp = simplify(ring, eps)
        if len(simp) < 3:
            continue
        d = 'M' + ' L'.join(f'{x},{y}' for x, y in simp) + ' Z'
        parts.append(d)
    return '<path fill-rule="evenodd" d="' + ' '.join(parts) + '"/>'

def collect(target, tol, min_size=MIN_SIZE, y_lo=0, y_hi=H):
    mask = set()
    for y in range(y_lo, y_hi):
        for x in range(W):
            if close(px[x, y], target, tol):
                mask.add((x, y))
    comps = [c for c in components_mask(mask) if len(c) >= min_size]
    comps.sort(key=lambda c: (-len(c)))
    return comps

def build_paths(comps, eps):
    out = []
    for c in comps:
        xs = [p[0] for p in c]; ys = [p[1] for p in c]
        bbox = (min(xs), max(xs), min(ys), max(ys))
        if len(c) < 40:
            # tiny dot/period — emit a small rect, tracing tiny blobs is fragile
            out.append(f'<rect x="{bbox[0]}" y="{bbox[2]}" width="{bbox[1]-bbox[0]+1.5}" height="{bbox[3]-bbox[2]+1.5}"/>')
            continue
        try:
            rings = trace_component_contours(c, bbox)
            p = rings_to_path(rings, eps)
            if p:
                out.append(p)
        except Exception as e:
            print('  trace failed for', bbox, e)
    return out

# Roof + wordmark (brown): two zones so glyph EPS can be tighter
brown_roof = collect(BROWN, 30, y_hi=340)
brown_text = collect(BROWN, 30, y_lo=341, min_size=6)
terr = collect(TERR, 30, y_hi=341)
slate = collect(SLATE, 30, y_hi=341)

print('brown roof comps:', len(brown_roof), ' brown text comps:', len(brown_text),
      ' terr:', len(terr), ' slate:', len(slate))

roof_paths  = build_paths(brown_roof, 1.6)
text_paths  = build_paths(brown_text, 1.0)
terr_paths  = build_paths(terr, 1.6)
slate_paths = build_paths(slate, 1.6)

import json
with open('_paths.json', 'w') as f:
    json.dump({'roof': roof_paths, 'text': text_paths, 'terr': terr_paths, 'slate': slate_paths}, f)

def emit(fills, path, vb=(0, 0, W, H)):
    body = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="%d %d %d %d" width="640" height="640">' % vb]
    for group, key in ((roof_paths, 'brown'), (text_paths, 'brown'), (terr_paths, 'terr'), (slate_paths, 'slate')):
        body.append(f'<g fill="{fills[key]}">')
        body.extend(group)
        body.append('</g>')
    body.append('</svg>')
    with open(path, 'w') as f:
        f.write('\n'.join(body))
    print('wrote', path, len(roof_paths)+len(text_paths)+len(terr_paths)+len(slate_paths), 'paths')

emit({'brown': '#693F26', 'terr': '#D68546', 'slate': '#536A62'}, 'logo-light.svg')
emit({'brown': '#F6F4EF', 'terr': '#D68546', 'slate': '#536A62'}, 'logo-dark.svg')

# Favicon: emblem only. Emblem bbox: x36-618, y89-324 (slate bottom 324).
emblem = {'brown': [], 'terr': [], 'slate': []}
for key, paths in (('brown', roof_paths), ('terr', terr_paths), ('slate', slate_paths)):
    for p in paths:
        nums = [float(n) for n in __import__('re').findall(r'-?[\d.]+', p)]
        pts = list(zip(nums[0::2], nums[1::2]))
        emblem[key].append([(x - 36, y - 89) for x, y in pts if 36 <= x <= 618 and 89 <= y <= 330])
def emit_emblem(polys_map, fills, path):
    body = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 582 235" width="640" height="640">']
    for key in ('brown', 'terr', 'slate'):
        body.append(f'<g fill="{fills[key]}">')
        for pts in polys_map[key]:
            if len(pts) >= 3:
                body.append('<polygon fill-rule="evenodd" points="' + ' '.join(f'{x},{y}' for x, y in pts) + '"/>')
        body.append('</g>')
    body.append('</svg>')
    with open(path, 'w') as f:
        f.write('\n'.join(body))
    print('wrote', path)
emit_emblem(emblem, {'brown': '#693F26', 'terr': '#D68546', 'slate': '#536A62'}, 'favicon.svg')
print('done')
