import os, pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'icons'
OUT.mkdir(parents=True, exist_ok=True)

W = '0 0 64 64'

WHITE = 'fill="rgba(255,255,255,0.92)"'

def svg(body):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{W}">{body}</svg>'

def p(d):
    return f'<path d="{d}" {WHITE}/>'

def r(x, y, w, h, rx=0):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" {WHITE}/>'

def c(cx, cy, r):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" {WHITE}/>'

def e(cx, cy, rx, ry):
    return f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" {WHITE}/>'

S = 2  # stroke width
R = 'stroke-linecap="round" stroke-linejoin="round"'

def ps(d, sw=S):
    return f'<path d="{d}" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="{sw}" {R}/>'

def fs(d):
    return f'<path d="{d}" fill="rgba(255,255,255,0.92)"/>'

# === ICONS ===
ICONS = {}

# compass
ICONS['compass'] = svg(
    c(32,32,24) +
    c(32,32,4) +
    ps('M32 8 L35 27 L32 32 L29 27 Z', 2.5) +
    ps('M32 56 L35 37 L32 32 L29 37 Z', 2.5) +
    ps('M8 32 L27 29 L32 32 L27 35 Z', 2.5) +
    ps('M56 32 L37 29 L32 32 L37 35 Z', 2.5)
)

# mesh
ICONS['mesh'] = svg(
    ps('M14 12 L32 8 L50 12 L50 52 L32 56 L14 52 Z', 2.5) +
    ps('M14 22 L50 22', 1.5) +
    ps('M14 32 L50 32', 1.5) +
    ps('M14 42 L50 42', 1.5) +
    ps('M23 10 L23 54', 1.5) +
    ps('M41 10 L41 54', 1.5) +
    c(14,12,3) + c(32,8,3) + c(50,12,3) +
    c(14,52,3) + c(32,56,3) + c(50,52,3)
)

# truss
ICONS['truss'] = svg(
    ps('M10 48 L22 16 L34 48 L46 16 L58 48', 3) +
    c(22,16,3.5) + c(34,48,3.5) + c(46,16,3.5) +
    ps('M16 32 L40 32', 1.5) +
    ps('M26 24 L44 40', 1.5)
)

# gear
ICONS['gear'] = svg(
    c(32,32,18) +
    c(32,32,12) +
    c(32,32,5) +
    ps('M32 6 L32 14', 3.5) +
    ps('M32 50 L32 58', 3.5) +
    ps('M6 32 L14 32', 3.5) +
    ps('M50 32 L58 32', 3.5) +
    ps('M14 14 L20 20', 3.5) +
    ps('M44 44 L50 50', 3.5) +
    ps('M50 14 L44 20', 3.5) +
    ps('M20 44 L14 50', 3.5)
)

# cnc
ICONS['cnc'] = svg(
    ps('M10 18 L32 8 L54 18 L54 50 L32 58 L10 50 Z', 2.5) +
    ps('M18 26 L46 26 L46 38 L18 38 Z', 2) +
    ps('M32 38 L32 50', 2)
)

# signal
ICONS['signal'] = svg(
    ps('M8 46 Q20 18 32 34 Q44 50 56 14', 3) +
    ps('M8 36 Q20 8 32 24 Q44 40 56 4', 2) +
    c(8,46,3) + c(32,34,3) + c(56,14,3)
)

# dice
ICONS['dice'] = svg(
    r(10, 10, 44, 44, 8) +
    c(22,22,3.5) + c(42,22,3.5) +
    c(22,42,3.5) + c(42,42,3.5) +
    c(32,32,3.5)
)

# neurons
ICONS['neurons'] = svg(
    c(12,32,5) + c(32,16,5) + c(32,48,5) + c(52,32,5) +
    ps('M12 32 L32 16 L52 32 L32 48 Z', 1.5) +
    ps('M12 32 L32 48 L52 32 L32 16', 1.5) +
    c(12,32,2) + c(32,16,2) + c(32,48,2) + c(52,32,2)
)

# code
ICONS['code'] = svg(
    ps('M16 22 L6 32 L16 42', 3) +
    ps('M48 22 L58 32 L48 42', 3) +
    ps('M36 14 L28 50', 2.5)
)

# finance
ICONS['finance'] = svg(
    ps('M10 50 L10 14 L22 14 L22 50 Z', 2.5) +
    ps('M24 50 L24 26 L36 26 L36 50 Z', 2.5) +
    ps('M38 50 L38 18 L50 18 L50 50 Z', 2.5) +
    ps('M52 50 L52 34 L58 34 L58 50 Z', 2.5) +
    ps('M8 54 L58 54', 2)
)

# grad-cap
ICONS['grad-cap'] = svg(
    ps('M8 36 L32 14 L56 36', 3) +
    ps('M8 36 L32 58 L56 36', 2.5) +
    ps('M32 14 L32 44', 2.5) +
    ps('M12 44 L12 52 Q32 60 52 52 L52 44', 2.5)
)

# chart
ICONS['chart'] = svg(
    ps('M14 48 Q26 16 38 34 Q50 52 56 12', 3) +
    c(14,48,3) + c(38,34,3) + c(56,12,3)
)

# axle
ICONS['axle'] = svg(
    ps('M8 28 L56 28', 3) +
    ps('M8 36 L56 36', 3) +
    c(20,32,12) + c(44,32,12) +
    c(20,32,4) + c(44,32,4)
)

# factory
ICONS['factory'] = svg(
    ps('M8 54 L56 54', 2.5) +
    ps('M8 22 L8 54', 2.5) +
    ps('M24 22 L24 54', 2.5) +
    ps('M40 22 L40 54', 2.5) +
    ps('M56 14 L56 54', 2.5) +
    ps('M8 22 L24 22', 2.5) +
    c(16,36,3) + c(32,36,3) + c(48,36,3)
)

# matrix
ICONS['matrix'] = svg(
    ps('M6 6 L58 6 L58 56 L6 56 Z', 2.5) +
    ps('M22 6 L22 56', 1.5) +
    ps('M42 6 L42 56', 1.5) +
    ps('M6 22 L58 22', 1.5) +
    ps('M6 42 L58 42', 1.5) +
    c(14,14,3) + c(32,14,3) + c(50,14,3) +
    c(14,32,3) + c(32,32,3) + c(50,32,3) +
    c(14,50,3) + c(32,50,3) + c(50,50,3)
)

# cart-lift
ICONS['cart-lift'] = svg(
    ps('M14 20 L50 20 L50 50 L14 50 Z', 2.5) +
    ps('M14 20 L10 50', 2.5) +
    ps('M50 20 L54 50', 2.5) +
    c(16,50,3.5) + c(48,50,3.5) +
    ps('M32 8 L32 20', 2) +
    ps('M26 8 L38 8', 2)
)

# grain
ICONS['grain'] = svg(
    ps('M14 10 L50 10 L56 26 L50 54 L14 54 L8 26 Z', 2.5) +
    ps('M14 10 Q26 24 32 20 Q40 16 50 14', 1.5) +
    ps('M8 26 Q20 36 32 34 Q44 30 56 26', 1.5) +
    c(14,14,2) + c(32,18,2) + c(48,16,2)
)

# engine
ICONS['engine'] = svg(
    r(10, 16, 44, 30, 6) +
    r(18, 22, 10, 8, 2) +
    r(36, 22, 10, 8, 2) +
    ps('M24 30 L24 46', 2.5) +
    ps('M40 30 L40 46', 2.5) +
    ps('M32 8 L32 16', 2.5) +
    ps('M24 8 L40 8', 2)
)

# books
ICONS['books'] = svg(
    ps('M12 14 L32 10 L32 54 L12 58 Z', 2.5) +
    ps('M32 10 L52 14 L52 58 L32 54 Z', 2.5) +
    ps('M12 48 L32 44', 1.5) +
    ps('M32 44 L52 48', 1.5) +
    ps('M32 10 L32 54', 1.5)
)

# sphere
ICONS['sphere'] = svg(
    c(32,32,22) +
    e(32,32,22,8) +
    e(32,32,8,22) +
    ps('M10 32 L54 32', 1) +
    ps('M32 10 L32 54', 1)
)

# envelope
ICONS['envelope'] = svg(
    r(6, 18, 52, 32, 4) +
    ps('M6 22 L32 42 L58 22', 2.5)
)

# phone
ICONS['phone'] = svg(
    r(18, 6, 28, 52, 6) +
    r(22, 10, 20, 32, 2) +
    ps('M26 48 L38 48', 2.5)
)

# briefcase
ICONS['briefcase'] = svg(
    r(6, 20, 52, 34, 4) +
    ps('M24 20 L24 14 Q24 10 32 10 Q40 10 40 14 L40 20', 2.5) +
    c(32,34,3) +
    ps('M32 20 L32 38', 2)
)

ICONS['github'] = svg(
    c(32,28,18) +
    c(32,28,4) +
    ps('M28 24 Q26 28 28 32', 2) +
    ps('M36 24 Q38 28 36 32', 2) +
    ps('M30 30 Q30 34 32 36 Q34 34 34 30', 2)
)

ICONS['huggingface'] = svg(
    c(32,32,20) +
    ps('M20 26 Q24 22 32 22 Q40 22 44 26', 2.5) +
    ps('M20 38 Q24 42 32 42 Q40 42 44 38', 2.5) +
    c(26,30,2.5) + c(38,30,2.5) +
    ps('M28 34 L36 34', 2.5)
)

# ruler
ICONS['ruler'] = svg(
    r(8, 22, 48, 22, 4) +
    ps('M16 22 L16 44', 1.5) +
    ps('M26 22 L26 44', 1.5) +
    ps('M36 22 L36 44', 1.5) +
    ps('M46 22 L46 44', 1.5)
)

# flame
ICONS['flame'] = svg(
    ps('M32 10 Q16 28 20 40 Q24 50 32 50 Q40 50 44 40 Q48 28 32 10 Z', 3) +
    c(32,44,3)
)

# fe2
ICONS['fe2'] = svg(
    r(6, 6, 22, 22, 4) +
    r(36, 6, 22, 22, 4) +
    r(6, 36, 22, 22, 4) +
    r(36, 36, 22, 22, 4) +
    ps('M28 17 L36 17', 2) +
    ps('M28 47 L36 47', 2) +
    ps('M17 28 L17 36', 2) +
    ps('M47 28 L47 36', 2)
)

# contact
ICONS['contact'] = svg(
    c(16,32,9) + c(48,32,9) +
    ps('M16 23 Q32 16 48 23', 2) +
    ps('M16 41 Q32 48 48 41', 2) +
    c(16,32,3) + c(48,32,3)
)

# === WRITE FILES ===
count = 0
for name, content in ICONS.items():
    filepath = OUT / f'{name}.svg'
    filepath.write_text(content)
    count += 1
    print(f'  ✓ {name}.svg')

print(f'\n→ {count} icons generated in {OUT}')
