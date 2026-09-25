import base64
import os

with open("/tmp/white_porsche.jpg", "rb") as f:
    white_b64 = "data:image/jpeg;base64," + base64.b64encode(f.read()).decode("utf-8")

with open("/tmp/red_porsche.jpg", "rb") as f:
    red_b64 = "data:image/jpeg;base64," + base64.b64encode(f.read()).decode("utf-8")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="100%" height="100%">
  <defs>
    <!-- Porsche Electric Orange Gradient -->
    <linearGradient id="porscheOrange" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#ff4500" />
      <stop offset="100%" stopColor="#e03200" />
    </linearGradient>

    <!-- 3D 911 Extrusion Gradients -->
    <linearGradient id="extrudeFace" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ff5914" />
      <stop offset="60%" stopColor="#ff4200" />
      <stop offset="100%" stopColor="#d63400" />
    </linearGradient>

    <!-- Distressed Dark Camo for PORSCHE text -->
    <linearGradient id="porscheDistress" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#1a0b12" />
      <stop offset="25%" stopColor="#2e1424" />
      <stop offset="50%" stopColor="#151b29" />
      <stop offset="75%" stopColor="#401018" />
      <stop offset="100%" stopColor="#0d0e14" />
    </linearGradient>

    <!-- Clip path for the center red car in garage -->
    <clipPath id="centerCarClip">
      <rect x="204" y="466" width="968" height="412" />
    </clipPath>

    <!-- Clip path for white car top right -->
    <clipPath id="whiteCarClip">
      <rect x="566" y="190" width="534" height="276" />
    </clipPath>
  </defs>

  <!-- Pitch Black Canvas -->
  <rect width="1200" height="1600" fill="#000000" />

  <!-- Upper Center-Left Vertical Orange Block -->
  <rect x="318" y="190" width="248" height="754" fill="url(#porscheOrange)" />

  <!-- PORSCHE Stamped Brand Logotype -->
  <g transform="translate(442, 246)">
    <text
      x="0"
      y="0"
      text-anchor="middle"
      font-family="'Space Grotesk', 'Inter', sans-serif"
      font-weight="900"
      font-size="32"
      letter-spacing="14"
      fill="url(#porscheDistress)"
    >PORSCHE</text>
  </g>

  <!-- Top Right White Porsche Cayman Front 3/4 Photo -->
  <g clip-path="url(#whiteCarClip)">
    <image
      href="{white_b64}"
      x="566"
      y="190"
      width="534"
      height="276"
      preserveAspectRatio="xMidYMid slice"
    />
  </g>

  <!-- Center Photographic Box: Carmine Red Cayman GTS in Garage -->
  <g clip-path="url(#centerCarClip)">
    <image
      href="{red_b64}"
      x="204"
      y="466"
      width="968"
      height="412"
      preserveAspectRatio="xMidYMid slice"
    />
  </g>

  <!-- Left Monumental Condensed Typography: WHEN PRO IS HERE -->
  <g
    font-family="'Anton', 'Syne', 'Impact', 'Arial Black', sans-serif"
    font-weight="900"
    font-size="134"
    letter-spacing="-1"
    fill="#ffffff"
  >
    <text x="156" y="560">WHEN</text>
    <text x="45" y="687">PRO</text>
    <text x="153" y="814">IS</text>
    <text x="200" y="941">HERE</text>
  </g>

  <!-- Monumental 3D Extruded 911 -->
  <g transform="translate(835, 930)" font-family="'Syne', 'Anton', 'Impact', sans-serif" font-weight="900" font-size="240">
    <!-- Base Shadow -->
    <text x="14" y="18" fill="#000000" opacity="0.8">911</text>
    <!-- Isometric 3D Extrusion Side Wall Layers -->
    <text x="12" y="15" fill="#380600">911</text>
    <text x="10" y="12" fill="#631000">911</text>
    <text x="8" y="10" fill="#8c1a00">911</text>
    <text x="6" y="7" fill="#b52600">911</text>
    <text x="4" y="5" fill="#e03400">911</text>
    <text x="2" y="2" fill="#ff5914">911</text>
    <!-- Front Face -->
    <text x="0" y="0" fill="url(#extrudeFace)">911</text>
  </g>

  <!-- Centered Editorial & Provenance Information -->
  <g transform="translate(600, 1045)" fill="#ffffff" font-family="'Space Grotesk', 'Inter', sans-serif" text-anchor="middle">
    <!-- Designer Handle -->
    <text x="0" y="0" font-size="19" font-weight="700" letter-spacing="2.5">@designsfleek</text>

    <!-- Historic Endurance Racing Provenance Paragraph (3 Centered Lines) -->
    <g font-size="13.5" font-weight="400" fill="#e4e4e7" letter-spacing="0.3">
      <text x="0" y="32">In the mid-1970s, the naturally aspirated 911 Carrera RSR won world championship races including Targa Florio and the 24 Hours of Daytona.</text>
      <text x="0" y="58">The 911-derived 935 turbo also won the 24 Hours of Le Mans in 1979. Porsche won the World Championship for Makes in 1976, 1977, 1978, and</text>
      <text x="0" y="84">1979 with 911-derived models.</text>
    </g>
  </g>
</svg>"""

with open("public/Black & Orange Typographic Inspiring Quote T-shirt_20260923_232755_0000.svg", "w") as f:
    f.write(svg_content)

with open("public/porsche-poster.svg", "w") as f:
    f.write(svg_content)

print("Saved SVG files successfully!")
