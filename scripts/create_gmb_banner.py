import os
import base64
import subprocess

PROJECT_DIR = "/Users/momope/Documents/My Projects/Momo IT Technologies"
LOGO_PATH = os.path.join(PROJECT_DIR, "public", "logo_avatar.png")
if not os.path.exists(LOGO_PATH):
    LOGO_PATH = os.path.join(PROJECT_DIR, "public", "logo.png")

with open(LOGO_PATH, "rb") as f:
    LOGO_B64 = f"data:image/png;base64,{base64.b64encode(f.read()).decode('utf-8')}"

HTML_PATH = os.path.join(PROJECT_DIR, "scripts", "gmb_banner_preview.html")
OUTPUT_PNG = os.path.join(PROJECT_DIR, "public", "google-business-banner.png")
OUTPUT_JPG = os.path.join(PROJECT_DIR, "public", "google-business-banner.jpg")
DOWNLOADS_PNG = "/Users/momope/Downloads/MOMO_IT_Google_Business_Banner.png"
DOWNLOADS_JPG = "/Users/momope/Downloads/MOMO_IT_Google_Business_Banner.jpg"

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MOMO IT Technologies — Google Business Profile Banner</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    * {{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }}

    body {{
      width: 1920px;
      height: 1080px;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #050B18;
      color: #FFFFFF;
      position: relative;
    }}

    /* Background Ambient Gradients & Tech Mesh */
    .bg-mesh {{
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 18% 25%, rgba(0, 237, 135, 0.15) 0%, transparent 45%),
        radial-gradient(circle at 82% 35%, rgba(2, 132, 199, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 50% 85%, rgba(168, 85, 247, 0.12) 0%, transparent 55%),
        linear-gradient(180deg, #070F22 0%, #030712 100%);
      z-index: 1;
    }}

    /* Futuristic Grid Overlay */
    .bg-grid {{
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 60%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 60%, transparent 100%);
      z-index: 2;
    }}

    /* Subtle Geometric Accent Lines */
    .accent-border {{
      position: absolute;
      inset: 28px;
      border: 1.5px solid rgba(0, 237, 135, 0.25);
      border-radius: 28px;
      pointer-events: none;
      z-index: 3;
    }}

    .accent-corner {{
      position: absolute;
      width: 24px;
      height: 24px;
      border: 3px solid #00ED87;
      z-index: 4;
    }}
    .tl {{ top: 22px; left: 22px; border-right: none; border-bottom: none; border-top-left-radius: 8px; }}
    .tr {{ top: 22px; right: 22px; border-left: none; border-bottom: none; border-top-right-radius: 8px; }}
    .bl {{ bottom: 22px; left: 22px; border-right: none; border-top: none; border-bottom-left-radius: 8px; }}
    .br {{ bottom: 22px; right: 22px; border-left: none; border-top: none; border-bottom-right-radius: 8px; }}

    /* Main Container (Safe Zone) */
    .container {{
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      padding: 70px 95px 60px 95px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}

    /* Top Bar */
    .top-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 24px;
    }}

    .brand-group {{
      display: flex;
      align-items: center;
      gap: 24px;
    }}

    .logo-frame {{
      width: 88px;
      height: 88px;
      border-radius: 22px;
      background: #0B1938;
      border: 2px solid #00ED87;
      box-shadow: 0 0 30px rgba(0, 237, 135, 0.35);
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }}

    .logo-img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }}

    .brand-title-box {{
      display: flex;
      flex-direction: column;
    }}

    .brand-name {{
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.8px;
      color: #FFFFFF;
      line-height: 1.1;
    }}

    .brand-name span {{
      color: #00ED87;
    }}

    .brand-sub {{
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 3px;
      color: #38BDF8;
      text-transform: uppercase;
      margin-top: 4px;
    }}

    .top-badges {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}

    .badge-pill {{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: 9999px;
      background: rgba(15, 23, 42, 0.85);
      border: 1.5px solid rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }}

    .badge-rating {{
      border-color: rgba(245, 158, 11, 0.4);
    }}

    .star-icon {{
      color: #FBBF24;
      font-size: 22px;
    }}

    .badge-text-bold {{
      font-size: 18px;
      font-weight: 800;
      color: #FFFFFF;
    }}

    .badge-subtext {{
      font-size: 14px;
      color: #94A3B8;
      font-weight: 600;
    }}

    .location-dot {{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #00ED87;
      box-shadow: 0 0 10px #00ED87;
    }}

    /* Center Hero Content */
    .hero-content {{
      margin-top: 25px;
      margin-bottom: 25px;
    }}

    .hero-eyebrow {{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 20px;
      border-radius: 9999px;
      background: rgba(0, 237, 135, 0.12);
      border: 1.5px solid rgba(0, 237, 135, 0.35);
      color: #00ED87;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }}

    .hero-heading {{
      font-size: 58px;
      font-weight: 900;
      letter-spacing: -1.5px;
      line-height: 1.15;
      color: #FFFFFF;
      max-width: 1500px;
    }}

    .hero-heading .highlight {{
      background: linear-gradient(90deg, #00ED87 0%, #38BDF8 60%, #818CF8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }}

    .hero-tagline {{
      font-size: 22px;
      color: #CBD5E1;
      font-weight: 500;
      margin-top: 14px;
      max-width: 1400px;
      line-height: 1.4;
    }}

    /* 4 Software Pillars Grid */
    .pillars-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 20px;
    }}

    .pillar-card {{
      background: rgba(11, 25, 56, 0.65);
      border: 1.5px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      padding: 24px 22px;
      backdrop-filter: blur(12px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }}

    .pillar-card::before {{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
    }}

    .card-1::before {{ background: #00ED87; }}
    .card-2::before {{ background: #38BDF8; }}
    .card-3::before {{ background: #F59E0B; }}
    .card-4::before {{ background: #A855F7; }}

    .card-icon-title {{
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 12px;
    }}

    .card-icon-box {{
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }}

    .c1-icon {{ background: rgba(0, 237, 135, 0.15); color: #00ED87; }}
    .c2-icon {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; }}
    .c3-icon {{ background: rgba(245, 158, 11, 0.15); color: #F59E0B; }}
    .c4-icon {{ background: rgba(168, 85, 247, 0.15); color: #A855F7; }}

    .card-title {{
      font-size: 20px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.2px;
      line-height: 1.2;
    }}

    .card-stack {{
      font-size: 13px;
      font-weight: 700;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }}

    .card-desc {{
      font-size: 14px;
      color: #CBD5E1;
      line-height: 1.45;
      font-weight: 500;
    }}

    /* Bottom Info Strip */
    .bottom-strip {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(8, 17, 39, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 18px;
      padding: 18px 30px;
      margin-top: 15px;
    }}

    .contact-item {{
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 16px;
      font-weight: 700;
      color: #E2E8F0;
    }}

    .contact-item .icon {{
      font-size: 20px;
    }}

    .contact-item strong {{
      color: #00ED87;
    }}

    .bottom-address {{
      font-size: 14px;
      color: #94A3B8;
      font-weight: 600;
    }}
  </style>
</head>
<body>
  <div class="bg-mesh"></div>
  <div class="bg-grid"></div>
  <div class="accent-border"></div>

  <div class="accent-corner tl"></div>
  <div class="accent-corner tr"></div>
  <div class="accent-corner bl"></div>
  <div class="accent-corner br"></div>

  <div class="container">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="brand-group">
        <div class="logo-frame">
          <img src="{LOGO_B64}" alt="MOMO IT Logo" class="logo-img" />
        </div>
        <div class="brand-title-box">
          <div class="brand-name">MOMO <span>IT TECHNOLOGIES</span></div>
          <div class="brand-sub">Software Development &amp; Cloud Solutions</div>
        </div>
      </div>

      <div class="top-badges">
        <div class="badge-pill badge-rating">
          <span class="star-icon">★</span>
          <div>
            <span class="badge-text-bold">5.0</span>
            <span class="badge-subtext">Google Rated</span>
          </div>
        </div>

        <div class="badge-pill">
          <span class="location-dot"></span>
          <div>
            <span class="badge-text-bold">Kadapa, AP</span>
            <span class="badge-subtext">Headquarters</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Center Hero -->
    <div class="hero-content">
      <div class="hero-eyebrow">
        <span>⚡ Registered Software Company · Kadapa</span>
      </div>
      <h1 class="hero-heading">
        Engineering Scalable <span class="highlight">Web &amp; SaaS Products</span>,<br />
        Custom Mobile Apps &amp; Enterprise ERP Systems.
      </h1>
      <p class="hero-tagline">
        Empowering businesses in Kadapa and worldwide with modern full-stack architectures, sub-second performance, cloud integration, and enterprise QA automation.
      </p>
    </div>

    <!-- 4 Pillars Grid -->
    <div class="pillars-grid">
      <!-- Pillar 1 -->
      <div class="pillar-card card-1">
        <div>
          <div class="card-icon-title">
            <div class="card-icon-box c1-icon">💻</div>
            <div class="card-title">Web &amp; SaaS Development</div>
          </div>
          <div class="card-stack">Next.js 15 · React 19 · Spring Boot</div>
          <div class="card-desc">Production-grade web apps, cloud portals, and multi-tenant SaaS platforms built for scale.</div>
        </div>
      </div>

      <!-- Pillar 2 -->
      <div class="pillar-card card-2">
        <div>
          <div class="card-icon-title">
            <div class="card-icon-box c2-icon">📱</div>
            <div class="card-title">Mobile App Engineering</div>
          </div>
          <div class="card-stack">Google Flutter · iOS &amp; Android</div>
          <div class="card-desc">High-performance cross-platform mobile apps with cloud database sync and offline capabilities.</div>
        </div>
      </div>

      <!-- Pillar 3 -->
      <div class="pillar-card card-3">
        <div>
          <div class="card-icon-title">
            <div class="card-icon-box c3-icon">⚡</div>
            <div class="card-title">Custom Business ERPs</div>
          </div>
          <div class="card-stack">Billing · Inventory · WhatsApp Invoicing</div>
          <div class="card-desc">Tailor-made billing software, POS systems, and automated operational management for businesses.</div>
        </div>
      </div>

      <!-- Pillar 4 -->
      <div class="pillar-card card-4">
        <div>
          <div class="card-icon-title">
            <div class="card-icon-box c4-icon">🛡️</div>
            <div class="card-title">QA &amp; Test Automation</div>
          </div>
          <div class="card-stack">Selenium 4 · Playwright · TestNG</div>
          <div class="card-desc">Enterprise test automation pipelines, API validation, and zero-defect regression test suites.</div>
        </div>
      </div>
    </div>

    <!-- Bottom Strip -->
    <div class="bottom-strip">
      <div class="contact-item">
        <span class="icon">🌐</span>
        <span>www.<strong>momoittechnologies</strong>.com</span>
      </div>

      <div class="bottom-address">
        📍 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa — 516003
      </div>

      <div class="contact-item">
        <span class="icon">📞</span>
        <span>Call / WhatsApp: <strong>+91 86398 31132</strong></span>
      </div>
    </div>
  </div>
</body>
</html>
"""

with open(HTML_PATH, "w") as f:
    f.write(html_content)

print(f"HTML generated at: {HTML_PATH}")

# Render using Chrome Headless Screenshot
chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cmd = [
    chrome,
    "--headless=new",
    "--disable-gpu",
    "--window-size=1920,1080",
    "--hide-scrollbars",
    f"--screenshot={OUTPUT_PNG}",
    f"file://{HTML_PATH}"
]

print("Rendering 1920x1080 PNG banner with Chrome headless...")
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode == 0:
    print(f"PNG banner rendered at: {OUTPUT_PNG}")
    # Also create JPG using sips
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "90", OUTPUT_PNG, "--out", OUTPUT_JPG])
    print(f"JPG banner created at: {OUTPUT_JPG}")
    
    # Copy to Downloads for 1-click user access
    import shutil
    shutil.copy2(OUTPUT_PNG, DOWNLOADS_PNG)
    shutil.copy2(OUTPUT_JPG, DOWNLOADS_JPG)
    print(f"Copied to Downloads:")
    print(f"  - {DOWNLOADS_PNG}")
    print(f"  - {DOWNLOADS_JPG}")
else:
    print("Chrome screenshot failed:", res.stderr)
