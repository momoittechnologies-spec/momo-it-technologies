import os
import json

PROJECT_DIR = "/Users/momope/Documents/My Projects/Momo IT Technologies"
JSON_PATH = os.path.join(PROJECT_DIR, "public", "gmb_ready_content.json")
HTML_PATH = os.path.join(PROJECT_DIR, "public", "gmb-manager.html")
DOWNLOADS_HTML = "/Users/momope/Downloads/MOMO_IT_GMB_Manager.html"

with open(JSON_PATH, "r") as f:
    data = json.load(f)

LIVE_LINK = data.get("gmb_live_share_link", "https://share.google/ar7YZvarRrJtzXq70")
REVIEWSMART_LINK = data.get("reviewsmart_link", "https://www.reviewsmart.online/r/momo-it-technologies")

weekly_posts_html = ""
for i, p in enumerate(data["weekly_posts"]):
    weekly_posts_html += f"""
    <div class="card">
      <div class="card-header">
        <span class="badge badge-emerald">{p['week']}</span>
        <span class="badge-type">{p['type']}</span>
      </div>
      <h3 class="post-title">{p['title']}</h3>
      <div class="post-meta">
        <span>🔘 Button: <strong>{p['cta_button']}</strong></span>
        <span>🔗 Destination: <a href="{p['cta_url']}" target="_blank">{p['cta_url'][:45]}...</a></span>
      </div>
      <div class="post-body">
        <pre id="post-{i}">{p['content']}</pre>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="copyText('post-{i}', this)">📋 Copy Post Text</button>
        <span class="photo-hint">📷 Recommended Image: <code>{p['photo_suggestion']}</code></span>
      </div>
    </div>
    """

reviews_html = ""
for i, r in enumerate(data["review_templates"]):
    reviews_html += f"""
    <div class="card">
      <div class="card-header">
        <span class="badge badge-purple">{r['scenario']}</span>
      </div>
      <div class="post-body">
        <pre id="review-{i}">{r['recommended_reply']}</pre>
      </div>
      <div class="card-actions">
        <button class="btn btn-secondary" onclick="copyText('review-{i}', this)">📋 Copy Response</button>
      </div>
    </div>
    """

# Review request WhatsApp messages
request_reviews_html = f"""
<div class="card" style="border: 1.5px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.05); margin-bottom: 20px;">
  <div class="card-header">
    <span class="badge badge-blue">Official ReviewSmart Portal</span>
  </div>
  <h3 class="post-title" style="color: #60A5FA;">{REVIEWSMART_LINK}</h3>
  <p style="font-size: 14px; color: #CBD5E1; margin-top: 6px;">
    Use this link for automated review collection. Clients submit their ratings here, and positive reviews are routed to your Google Profile!
  </p>
  <div class="card-actions" style="margin-top: 14px;">
    <button class="btn btn-primary" onclick="copyRawText('{REVIEWSMART_LINK}', this)">🔗 Copy ReviewSmart Link</button>
    <a href="{REVIEWSMART_LINK}" target="_blank" class="btn btn-outline" style="text-decoration: none;">Open ReviewSmart Portal ↗</a>
  </div>
</div>
<div class="card" style="border: 1.5px solid rgba(0, 237, 135, 0.4); background: rgba(0, 237, 135, 0.05);">
  <div class="card-header">
    <span class="badge badge-emerald">Google Business Live Share Link</span>
  </div>
  <h3 class="post-title" style="color: #00ED87;">{LIVE_LINK}</h3>
  <p style="font-size: 14px; color: #CBD5E1; margin-top: 6px;">
    This is your permanent Google Knowledge Graph share link for MOMO IT Technologies.
  </p>
  <div class="card-actions" style="margin-top: 14px;">
    <button class="btn btn-primary" onclick="copyRawText('{LIVE_LINK}', this)">🔗 Copy Google Profile Link</button>
    <a href="{LIVE_LINK}" target="_blank" class="btn btn-outline" style="text-decoration: none;">View Live on Google ↗</a>
  </div>
</div>
"""
for i, msg in enumerate(data.get("review_request_messages", [])):
    safe_msg = msg['message'].replace('"', '&quot;')
    request_reviews_html += f"""
    <div class="card">
      <div class="card-header">
        <span class="badge badge-blue">WhatsApp Request: {msg['audience']}</span>
      </div>
      <div class="post-body">
        <pre id="req-msg-{i}">{msg['message']}</pre>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="copyText('req-msg-{i}', this)">📋 Copy WhatsApp Message</button>
        <a href="https://wa.me/?text={msg['message'].replace(' ', '%20').replace(chr(10), '%0A')}" target="_blank" class="btn btn-secondary" style="text-decoration: none;">📲 Open in WhatsApp</a>
      </div>
    </div>
    """

qas_html = ""
for i, q in enumerate(data["strategic_qas"]):
    qas_html += f"""
    <div class="card">
      <div class="qa-q">❓ <strong>Question:</strong> {q['question']}</div>
      <div class="qa-a">
        <p id="qa-ans-{i}"><strong>Answer:</strong> {q['answer']}</p>
      </div>
      <div class="card-actions">
        <button class="btn btn-outline" onclick="copyRawText('{q['question']}', this)">Copy Question</button>
        <button class="btn btn-secondary" onclick="copyText('qa-ans-{i}', this)">Copy Answer</button>
      </div>
    </div>
    """

services_html = ""
for i, s in enumerate(data["services_catalog"]):
    services_html += f"""
    <div class="card">
      <div class="card-header">
        <h4 style="font-size: 16px; font-weight: 800; color: #FFFFFF;">{s['service_name']}</h4>
        <span class="badge badge-blue">Max 300 chars</span>
      </div>
      <p id="serv-{i}" style="font-size: 14px; color: #CBD5E1; margin: 10px 0; line-height: 1.5;">{s['description']}</p>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="copyText('serv-{i}', this)">📋 Copy Service Description</button>
      </div>
    </div>
    """

html_doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MOMO IT Technologies — Google Business Profile AI Agent Dashboard</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      background: #060D1E;
      color: #F8FAFC;
      padding: 40px 24px;
      line-height: 1.5;
    }}
    .container {{
      max-width: 1200px;
      margin: 0 auto;
    }}
    header {{
      background: linear-gradient(135deg, #0B1B3D 0%, #0F2960 100%);
      border: 1.5px solid rgba(0, 237, 135, 0.3);
      border-radius: 20px;
      padding: 32px 40px;
      margin-bottom: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }}
    .header-title h1 {{
      font-size: 28px;
      font-weight: 900;
      color: #FFFFFF;
    }}
    .header-title h1 span {{ color: #00ED87; }}
    .header-title p {{
      font-size: 14px;
      color: #94A3B8;
      margin-top: 6px;
    }}
    .header-actions {{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }}
    .tabs {{
      display: flex;
      gap: 12px;
      margin-bottom: 28px;
      flex-wrap: wrap;
    }}
    .tab-btn {{
      padding: 10px 20px;
      border-radius: 12px;
      background: #0B1938;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #CBD5E1;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }}
    .tab-btn:hover, .tab-btn.active {{
      background: #00ED87;
      color: #060D1E;
      border-color: #00ED87;
    }}
    .section {{
      display: none;
    }}
    .section.active {{
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }}
    .card {{
      background: #0B1938;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
    }}
    .card-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }}
    .badge {{
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .badge-emerald {{ background: rgba(0, 237, 135, 0.15); color: #00ED87; }}
    .badge-purple {{ background: rgba(168, 85, 247, 0.15); color: #C084FC; }}
    .badge-blue {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; }}
    .badge-type {{ font-size: 12px; color: #94A3B8; font-weight: 600; }}
    .post-title {{ font-size: 20px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px; }}
    .post-meta {{ font-size: 13px; color: #94A3B8; display: flex; gap: 18px; margin-bottom: 14px; }}
    .post-meta a {{ color: #38BDF8; text-decoration: none; }}
    pre {{
      background: #060D1E;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px;
      font-family: inherit;
      white-space: pre-wrap;
      font-size: 13.5px;
      color: #E2E8F0;
      line-height: 1.6;
    }}
    .card-actions {{
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }}
    .btn {{
      padding: 9px 18px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }}
    .btn-primary {{
      background: #00ED87;
      color: #060D1E;
    }}
    .btn-primary:hover {{ background: #00BA66; }}
    .btn-secondary {{
      background: #38BDF8;
      color: #060D1E;
    }}
    .btn-outline {{
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #FFFFFF;
    }}
    .photo-hint {{ font-size: 12px; color: #64748B; }}
    .qa-q {{ font-size: 16px; color: #38BDF8; margin-bottom: 8px; }}
    .qa-a {{ font-size: 14px; color: #E2E8F0; background: #060D1E; padding: 14px; border-radius: 10px; }}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="header-title">
        <h1>MOMO <span>IT TECHNOLOGIES</span> — GMB AI Manager</h1>
        <p>Live Profile: <a href="{LIVE_LINK}" target="_blank" style="color: #00ED87; text-decoration: underline;">{LIVE_LINK}</a></p>
      </div>
      <div class="header-actions">
        <a href="{LIVE_LINK}" target="_blank" class="btn btn-secondary" style="text-decoration: none; display: inline-block;">
          View Live Profile ↗
        </a>
        <a href="https://business.google.com" target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">
          Open GMB Dashboard ↗
        </a>
      </div>
    </header>

    <div class="tabs">
      <button class="tab-btn active" onclick="showTab('posts', this)">📅 Weekly Posts ({len(data['weekly_posts'])})</button>
      <button class="tab-btn" onclick="showTab('collect', this)">⭐ Collect Reviews (WhatsApp Links)</button>
      <button class="tab-btn" onclick="showTab('reviews', this)">💬 ReviewSmart Replies ({len(data['review_templates'])})</button>
      <button class="tab-btn" onclick="showTab('qas', this)">❓ Strategic Q&amp;A ({len(data['strategic_qas'])})</button>
      <button class="tab-btn" onclick="showTab('services', this)">🛠️ Service Catalog ({len(data['services_catalog'])})</button>
    </div>

    <!-- Posts Section -->
    <div id="posts" class="section active">
      {weekly_posts_html}
    </div>

    <!-- Collect Reviews Section -->
    <div id="collect" class="section">
      {request_reviews_html}
    </div>

    <!-- Reviews Section -->
    <div id="reviews" class="section">
      {reviews_html}
    </div>

    <!-- Q&A Section -->
    <div id="qas" class="section">
      {qas_html}
    </div>

    <!-- Services Section -->
    <div id="services" class="section">
      {services_html}
    </div>
  </div>

  <script>
    function showTab(tabId, btn) {{
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      btn.classList.add('active');
    }}

    function copyText(elemId, btn) {{
      const text = document.getElementById(elemId).innerText;
      navigator.clipboard.writeText(text).then(() => {{
        const original = btn.innerText;
        btn.innerText = "✓ Copied to Clipboard!";
        btn.style.background = "#22FFA1";
        btn.style.color = "#0B1B3D";
        setTimeout(() => {{
          btn.innerText = original;
          btn.style.background = "";
          btn.style.color = "";
        }}, 2000);
      }});
    }}

    function copyRawText(text, btn) {{
      navigator.clipboard.writeText(text).then(() => {{
        const original = btn.innerText;
        btn.innerText = "✓ Copied!";
        setTimeout(() => {{ btn.innerText = original; }}, 2000);
      }});
    }}
  </script>
</body>
</html>
"""

with open(HTML_PATH, "w") as f:
    f.write(html_doc)

import shutil
shutil.copy2(HTML_PATH, DOWNLOADS_HTML)
print(f"Generated GMB Dashboard at: {HTML_PATH}")
print(f"Copied to Downloads at: {DOWNLOADS_HTML}")
