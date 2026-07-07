import os, pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'icons'
OUT.mkdir(parents=True, exist_ok=True)

GLASS = """<defs>
  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.45)"/>
    <stop offset="50%" stop-color="rgba(107,143,197,0.25)"/>
    <stop offset="100%" stop-color="rgba(255,255,255,0.08)"/>
  </linearGradient>
  <linearGradient id="g2" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.05)"/>
    <stop offset="100%" stop-color="rgba(255,255,255,0.40)"/>
  </linearGradient>
  <radialGradient id="gr" cx="35%" cy="35%" r="65%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.50)"/>
    <stop offset="60%" stop-color="rgba(107,143,197,0.15)"/>
    <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
  </radialGradient>
</defs>"""

def shadow():
    return '<filter id="sh"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="rgba(0,0,0,0.3)"/></filter><filter id="sh2"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.25)"/></filter>'

ICONS = {}

def svg(body, view='0 0 64 64'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}">{GLASS}{body}</svg>'

# === COMPÉTENCES ===

ICONS['compass'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="3" fill="url(#g1)" stroke="rgba(255,255,255,0.5)" stroke-width="1.2"/>
<path d="M32 12 L35 27 L32 32 L29 27 Z" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<path d="M32 52 L35 37 L32 32 L29 37 Z" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<path d="M12 32 L27 29 L32 32 L27 35 Z" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<path d="M52 32 L37 29 L32 32 L37 35 Z" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="32" cy="32" r="18" fill="none" stroke="url(#g1)" stroke-width="1.5" opacity="0.4"/>
''')

ICONS['mesh'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M14 14 L32 10 L50 14 L50 50 L32 54 L14 50 Z" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<path d="M14 14 L32 10 L32 54 L14 50 Z" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<path d="M32 10 L50 14 L50 50 L32 54" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<path d="M14 24 L50 24 M14 34 L50 34 M14 44 L50 44" stroke="url(#g1)" stroke-width="0.8" opacity="0.4"/>
<path d="M23 12 L23 52 M41 12 L41 52" stroke="url(#g1)" stroke-width="0.8" opacity="0.4"/>
<circle cx="14" cy="14" r="2.5" fill="url(#g1)"/>
<circle cx="32" cy="10" r="2.5" fill="url(#g1)"/>
<circle cx="50" cy="14" r="2.5" fill="url(#g1)"/>
<circle cx="14" cy="50" r="2.5" fill="url(#g1)"/>
<circle cx="32" cy="54" r="2.5" fill="url(#g1)"/>
<circle cx="50" cy="50" r="2.5" fill="url(#g1)"/>
''')

ICONS['truss'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M10 48 L22 16 L34 48 L46 16 L58 48" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linejoin="round"/>
<circle cx="22" cy="16" r="3.5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="34" cy="48" r="3.5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="46" cy="16" r="3.5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<path d="M16 32 L40 32 M26 24 L44 40" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
''')

ICONS['gear'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="18" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
<circle cx="32" cy="32" r="10" fill="none" stroke="url(#g2)" stroke-width="3"/>
<circle cx="32" cy="32" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<g stroke="url(#g1)" stroke-width="3.5" stroke-linecap="round">
 <line x1="32" y1="8" x2="32" y2="14"/>
 <line x1="32" y1="50" x2="32" y2="56"/>
 <line x1="8" y1="32" x2="14" y2="32"/>
 <line x1="50" y1="32" x2="56" y2="32"/>
 <line x1="16" y1="16" x2="20" y2="20"/>
 <line x1="44" y1="44" x2="48" y2="48"/>
 <line x1="48" y1="16" x2="44" y2="20"/>
 <line x1="20" y1="44" x2="16" y2="48"/>
</g>
''')

ICONS['signal'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M8 48 Q20 20 32 36 Q44 52 56 16" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M8 38 Q20 10 32 26 Q44 42 56 6" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
<circle cx="8" cy="48" r="3" fill="url(#g1)"/>
<circle cx="32" cy="36" r="3" fill="url(#g1)"/>
<circle cx="56" cy="16" r="3" fill="url(#g1)"/>
''')

ICONS['dice'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="10" y="10" width="44" height="44" rx="8" fill="none" stroke="url(#g1)" stroke-width="2"/>
<circle cx="22" cy="22" r="3.5" fill="url(#g1)"/>
<circle cx="42" cy="22" r="3.5" fill="url(#g1)"/>
<circle cx="22" cy="42" r="3.5" fill="url(#g1)"/>
<circle cx="42" cy="42" r="3.5" fill="url(#g1)"/>
<circle cx="32" cy="32" r="3.5" fill="url(#g2)"/>
<path d="M54 54 L10 10 M54 10 L10 54" stroke="url(#g2)" stroke-width="0.8" opacity="0.3"/>
''')

ICONS['neurons'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="12" cy="32" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="32" cy="16" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="32" cy="48" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<circle cx="52" cy="32" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
<path d="M12 32 L32 16 L52 32 L32 48 Z" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<path d="M12 32 L32 48 L52 32 L32 16" fill="none" stroke="url(#g1)" stroke-width="1.2" opacity="0.3"/>
<circle cx="12" cy="32" r="2" fill="white" opacity="0.7"/>
<circle cx="32" cy="16" r="2" fill="white" opacity="0.7"/>
<circle cx="32" cy="48" r="2" fill="white" opacity="0.7"/>
<circle cx="52" cy="32" r="2" fill="white" opacity="0.7"/>
''')

ICONS['code'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M18 22 L8 32 L18 42" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46 22 L56 32 L46 42" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36 14 L28 50" fill="none" stroke="url(#g2)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
<circle cx="32" cy="32" r="2" fill="url(#g1)"/>
''')

ICONS['chart'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="10" y="38" width="8" height="18" rx="2" fill="url(#g1)"/>
<rect x="24" y="26" width="8" height="30" rx="2" fill="url(#g1)"/>
<rect x="38" y="16" width="8" height="40" rx="2" fill="url(#g1)"/>
<rect x="52" y="30" width="8" height="26" rx="2" fill="url(#g1)"/>
<path d="M10 56 L56 56" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
<rect x="24" y="26" width="8" height="30" rx="2" fill="url(#g2)" opacity="0.3"/>
<circle cx="14" cy="38" r="1.5" fill="white" opacity="0.6"/>
<circle cx="28" cy="26" r="1.5" fill="white" opacity="0.6"/>
<circle cx="42" cy="16" r="1.5" fill="white" opacity="0.6"/>
<circle cx="56" cy="30" r="1.5" fill="white" opacity="0.6"/>
''')

ICONS['sphere'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="20" fill="none" stroke="url(#g1)" stroke-width="2"/>
<ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<ellipse cx="32" cy="32" rx="8" ry="20" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<line x1="12" y1="32" x2="52" y2="32" stroke="url(#g1)" stroke-width="1" opacity="0.3"/>
<line x1="32" y1="12" x2="32" y2="52" stroke="url(#g1)" stroke-width="1" opacity="0.3"/>
<path d="M14 46 L50 18" stroke="url(#g2)" stroke-width="0.8" opacity="0.3"/>
<circle cx="32" cy="22" r="5" fill="url(#g1)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
''')

# === EXPÉRIENCE ===

ICONS['grad-cap'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M8 36 L32 14 L56 36" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M56 36 L32 58 L8 36" fill="none" stroke="url(#g2)" stroke-width="2" opacity="0.4" stroke-linejoin="round"/>
<line x1="32" y1="14" x2="32" y2="44" stroke="url(#g1)" stroke-width="2"/>
<path d="M12 40 L12 48 Q32 56 52 48 L52 40" fill="none" stroke="url(#g1)" stroke-width="1.8" stroke-linejoin="round"/>
<circle cx="32" cy="32" r="2" fill="url(#g1)"/>
''')

ICONS['cube-fem'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M16 20 L32 12 L48 20 L48 44 L32 52 L16 44 Z" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<path d="M16 20 L16 44 L32 52" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<path d="M48 20 L48 44 M32 12 L32 52" fill="none" stroke="url(#g1)" stroke-width="1.2" opacity="0.3"/>
<line x1="24" y1="16" x2="24" y2="40" stroke="url(#g2)" stroke-width="0.8" opacity="0.2"/>
<line x1="40" y1="16" x2="40" y2="40" stroke="url(#g2)" stroke-width="0.8" opacity="0.2"/>
<line x1="16" y1="32" x2="48" y2="32" stroke="url(#g1)" stroke-width="0.8" opacity="0.2"/>
<line x1="20" y1="24" x2="44" y2="24" stroke="url(#g1)" stroke-width="0.8" opacity="0.2"/>
<line x1="20" y1="40" x2="44" y2="40" stroke="url(#g1)" stroke-width="0.8" opacity="0.2"/>
<circle cx="16" cy="20" r="2.5" fill="url(#g1)"/>
<circle cx="48" cy="20" r="2.5" fill="url(#g1)"/>
<circle cx="16" cy="44" r="2.5" fill="url(#g1)"/>
<circle cx="48" cy="44" r="2.5" fill="url(#g1)"/>
<circle cx="32" cy="12" r="2.5" fill="url(#g1)"/>
<circle cx="32" cy="52" r="2.5" fill="url(#g1)"/>
''')

ICONS['pinn'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M10 50 Q20 10 32 30 Q44 50 54 14" fill="none" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M10 50 Q20 20 32 40 Q44 60 54 24" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
<circle cx="10" cy="50" r="4" fill="url(#g1)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="32" cy="30" r="4" fill="url(#g1)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="54" cy="14" r="4" fill="url(#g1)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<rect x="10" y="50" width="8" height="6" rx="1" fill="url(#g2)" opacity="0.3"/>
<rect x="28" y="30" width="8" height="6" rx="1" fill="url(#g2)" opacity="0.3"/>
<rect x="50" y="14" width="8" height="6" rx="1" fill="url(#g2)" opacity="0.3"/>
''')

ICONS['axle'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="8" y="28" width="48" height="8" rx="3" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
<circle cx="16" cy="32" r="10" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
<circle cx="48" cy="32" r="10" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
<circle cx="16" cy="32" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="48" cy="32" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<line x1="8" y1="28" x2="8" y2="36" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="56" y1="28" x2="56" y2="36" stroke="url(#g1)" stroke-width="1.5"/>
''')

ICONS['factory'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="8" y="22" width="18" height="34" rx="2" fill="none" stroke="url(#g1)" stroke-width="2"/>
<rect x="38" y="14" width="18" height="42" rx="2" fill="none" stroke="url(#g1)" stroke-width="2"/>
<circle cx="17" cy="32" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="17" cy="46" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="47" cy="24" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<circle cx="47" cy="38" r="4" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<path d="M26 28 L38 20 M26 36 L38 28 M26 44 L38 36" stroke="url(#g1)" stroke-width="1.5" opacity="0.5"/>
<line x1="8" y1="56" x2="56" y2="56" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
''')

ICONS['cnc'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="10" y="18" width="44" height="34" rx="3" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M10 18 L32 8 L54 18" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<rect x="18" y="26" width="28" height="12" rx="2" fill="none" stroke="url(#g2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="4" fill="url(#g1)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<path d="M32 38 L32 50" stroke="url(#g1)" stroke-width="2"/>
<circle cx="32" cy="44" r="3" fill="none" stroke="url(#g2)" stroke-width="1.2"/>
''')

# === PROJETS ===

ICONS['matrix'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="6" y="6" width="52" height="52" rx="4" fill="none" stroke="url(#g1)" stroke-width="2"/>
<line x1="22" y1="6" x2="22" y2="58" stroke="url(#g1)" stroke-width="1.2" opacity="0.4"/>
<line x1="42" y1="6" x2="42" y2="58" stroke="url(#g1)" stroke-width="1.2" opacity="0.4"/>
<line x1="6" y1="22" x2="58" y2="22" stroke="url(#g1)" stroke-width="1.2" opacity="0.4"/>
<line x1="6" y1="42" x2="58" y2="42" stroke="url(#g1)" stroke-width="1.2" opacity="0.4"/>
<circle cx="14" cy="14" r="3" fill="url(#g1)"/>
<circle cx="32" cy="14" r="3" fill="url(#g2)"/>
<circle cx="50" cy="14" r="3" fill="url(#g1)"/>
<circle cx="14" cy="32" r="3" fill="url(#g2)"/>
<circle cx="32" cy="32" r="3" fill="url(#g1)"/>
<circle cx="50" cy="32" r="3" fill="url(#g2)"/>
<circle cx="14" cy="50" r="3" fill="url(#g1)"/>
<circle cx="32" cy="50" r="3" fill="url(#g2)"/>
<circle cx="50" cy="50" r="3" fill="url(#g2)"/>
''')

ICONS['cart-lift'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="14" y="18" width="36" height="24" rx="3" fill="none" stroke="url(#g1)" stroke-width="2"/>
<line x1="14" y1="18" x2="10" y2="52" stroke="url(#g1)" stroke-width="2.5"/>
<line x1="50" y1="18" x2="54" y2="52" stroke="url(#g1)" stroke-width="2.5"/>
<circle cx="16" cy="52" r="4" fill="none" stroke="url(#g1)" stroke-width="2"/>
<circle cx="48" cy="52" r="4" fill="none" stroke="url(#g1)" stroke-width="2"/>
<line x1="32" y1="8" x2="32" y2="18" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
<line x1="26" y1="8" x2="38" y2="8" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
''')

ICONS['grain'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M10 10 L30 8 L50 14 L52 34 L46 54 L26 56 L6 50 L8 28 Z" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<path d="M10 10 Q20 24 30 20 Q40 16 50 14" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<path d="M8 28 Q16 38 26 36 Q36 34 46 34" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<path d="M10 10 L8 28 M30 8 L26 36 M50 14 L46 34" stroke="url(#g1)" stroke-width="0.8" opacity="0.3"/>
<path d="M6 50 L26 56 L46 54" stroke="url(#g2)" stroke-width="0.8" opacity="0.2"/>
<circle cx="12" cy="12" r="1.5" fill="white" opacity="0.5"/>
<circle cx="28" cy="18" r="1.5" fill="white" opacity="0.5"/>
<circle cx="48" cy="16" r="1.5" fill="white" opacity="0.5"/>
''')

ICONS['engine'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="10" y="16" width="44" height="30" rx="6" fill="none" stroke="url(#g1)" stroke-width="2"/>
<rect x="18" y="22" width="12" height="8" rx="2" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<rect x="34" y="22" width="12" height="8" rx="2" fill="url(#g2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
<path d="M24 30 L24 46 M40 30 L40 46" stroke="url(#g1)" stroke-width="2"/>
<rect x="8" y="42" width="8" height="6" rx="1" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<rect x="48" y="42" width="8" height="6" rx="1" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.5"/>
<path d="M32 8 L32 16" stroke="url(#g1)" stroke-width="2"/>
<path d="M26 8 L38 8" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
''')

ICONS['books'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M12 14 L32 10 L32 54 L12 58 Z" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<path d="M32 10 L52 14 L52 58 L32 54 Z" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<line x1="12" y1="48" x2="32" y2="44" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<line x1="32" y1="44" x2="52" y2="48" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<line x1="12" y1="36" x2="32" y2="32" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<line x1="32" y1="32" x2="52" y2="36" stroke="url(#g2)" stroke-width="1.2" opacity="0.4"/>
<circle cx="22" cy="24" r="2" fill="url(#g1)"/>
<circle cx="42" cy="26" r="2" fill="url(#g1)"/>
<line x1="32" y1="10" x2="32" y2="54" stroke="url(#g1)" stroke-width="1" opacity="0.3"/>
''')

# === CONTACT ===

ICONS['envelope'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="6" y="18" width="52" height="30" rx="4" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M6 22 L32 38 L58 22" fill="none" stroke="url(#g2)" stroke-width="2" opacity="0.5" stroke-linejoin="round"/>
<circle cx="32" cy="33" r="2" fill="url(#g1)"/>
''')

ICONS['phone'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="18" y="6" width="28" height="52" rx="6" fill="none" stroke="url(#g1)" stroke-width="2"/>
<rect x="22" y="10" width="20" height="32" rx="2" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.3"/>
<line x1="28" y1="48" x2="36" y2="48" stroke="url(#g1)" stroke-width="2"/>
<circle cx="32" cy="44" r="1.5" fill="url(#g1)"/>
''')

ICONS['briefcase'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="6" y="20" width="52" height="34" rx="4" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M24 20 L24 14 Q24 10 32 10 Q40 10 40 14 L40 20" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<line x1="32" y1="20" x2="32" y2="38" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
<circle cx="32" cy="34" r="3" fill="none" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="6" y1="36" x2="20" y2="36" stroke="url(#g2)" stroke-width="1" opacity="0.3"/>
<line x1="44" y1="36" x2="58" y2="36" stroke="url(#g2)" stroke-width="1" opacity="0.3"/>
''')

ICONS['github'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="28" r="18" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M32 10 Q38 10 38 14 Q42 14 44 18 Q46 22 44 26" fill="none" stroke="url(#g2)" stroke-width="1.2" opacity="0.3"/>
<circle cx="32" cy="28" r="3" fill="url(#g1)"/>
<path d="M28 24 Q26 28 28 32 M36 24 Q38 28 36 32" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
<path d="M30 30 Q30 34 32 36 Q34 34 34 30" fill="none" stroke="url(#g1)" stroke-width="1.2"/>
''')

ICONS['huggingface'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="20" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M22 26 Q26 22 32 22 Q38 22 42 26" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linecap="round"/>
<path d="M22 38 Q26 42 32 42 Q38 42 42 38" fill="none" stroke="url(#g2)" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
<circle cx="26" cy="30" r="2" fill="url(#g1)"/>
<circle cx="38" cy="30" r="2" fill="url(#g1)"/>
<line x1="28" y1="34" x2="36" y2="34" stroke="url(#g1)" stroke-width="1.5"/>
''')

# === ACADEMIC ===

ICONS['ruler'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="8" y="22" width="48" height="24" rx="3" fill="none" stroke="url(#g1)" stroke-width="2"/>
<line x1="16" y1="22" x2="16" y2="46" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="26" y1="22" x2="26" y2="46" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="36" y1="22" x2="36" y2="46" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="46" y1="22" x2="46" y2="46" stroke="url(#g1)" stroke-width="1.5"/>
<line x1="8" y1="34" x2="56" y2="34" stroke="url(#g2)" stroke-width="1" opacity="0.3"/>
<text x="32" y="58" text-anchor="middle" font-size="8" fill="url(#g1)" font-family="sans-serif" opacity="0.5">mm</text>
''')

ICONS['flame'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<path d="M32 10 Q20 28 22 38 Q24 46 32 48 Q40 46 42 38 Q44 28 32 10 Z" fill="none" stroke="url(#g1)" stroke-width="2" stroke-linejoin="round"/>
<path d="M28 42 Q26 32 32 24 Q38 32 36 42" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.4" stroke-linejoin="round"/>
<path d="M32 48 L32 54" stroke="url(#g1)" stroke-width="1.5"/>
<path d="M26 50 L38 50" stroke="url(#g2)" stroke-width="1" opacity="0.4"/>
''')

ICONS['fe2'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<rect x="8" y="8" width="20" height="20" rx="3" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<rect x="36" y="8" width="20" height="20" rx="3" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<rect x="8" y="36" width="20" height="20" rx="3" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<rect x="36" y="36" width="20" height="20" rx="3" fill="none" stroke="url(#g1)" stroke-width="1.8"/>
<line x1="28" y1="18" x2="36" y2="18" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
<line x1="28" y1="46" x2="36" y2="46" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
<line x1="18" y1="28" x2="18" y2="36" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
<line x1="46" y1="28" x2="46" y2="36" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
''')

ICONS['finance'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="32" cy="32" r="20" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M32 12 L32 52" stroke="url(#g1)" stroke-width="1.5"/>
<ellipse cx="32" cy="24" rx="14" ry="5" fill="none" stroke="url(#g1)" stroke-width="1.5"/>
<ellipse cx="32" cy="40" rx="14" ry="5" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.5"/>
<path d="M18 24 L18 40 M46 24 L46 40" stroke="url(#g1)" stroke-width="1" opacity="0.4"/>
<circle cx="32" cy="32" r="2" fill="url(#g1)"/>
''')

ICONS['contact'] = svg(f'''
{shadow()}
<rect x="2" y="2" width="60" height="60" rx="14" fill="url(#gr)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<circle cx="16" cy="32" r="9" fill="none" stroke="url(#g1)" stroke-width="2"/>
<circle cx="48" cy="32" r="9" fill="none" stroke="url(#g1)" stroke-width="2"/>
<path d="M16 23 Q32 16 48 23" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
<path d="M16 41 Q32 48 48 41" fill="none" stroke="url(#g2)" stroke-width="1.5" opacity="0.4"/>
<circle cx="16" cy="32" r="3" fill="url(#g1)"/>
<circle cx="48" cy="32" r="3" fill="url(#g1)"/>
<circle cx="32" cy="32" r="2" fill="white" opacity="0.4"/>
''')

# === WRITE FILES ===
count = 0
for name, content in ICONS.items():
    filepath = OUT / f'{name}.svg'
    filepath.write_text(content)
    count += 1
    print(f'  ✓ {name}.svg')

print(f'\n→ {count} icons generated in {OUT}')
