import os
import json
import datetime

PROJECT_DIR = "/Users/momope/Documents/My Projects/Momo IT Technologies"
PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")
DOWNLOADS_DIR = "/Users/momope/Downloads"

# 1. GMB Content Strategist Agent: Weekly Posts for October 2026
WEEKLY_POSTS = [
    {
        "week": "Week 1 (Immediate Launch Post)",
        "type": "What's New / Announcement",
        "title": "Welcome to MOMO IT TECHNOLOGIES — Kadapa's Premier Software Development Hub!",
        "content": (
            "Looking to scale your business with custom software, a high-converting website, or a native mobile app? "
            "MOMO IT TECHNOLOGIES is your dedicated technology engineering partner based right here in Krishnapuram, Kadapa!\n\n"
            "💻 Custom Web & SaaS Development (Next.js 15, React 19)\n"
            "📱 Cross-Platform Mobile Apps (Google Flutter iOS & Android)\n"
            "⚡ Custom Business ERP & Billing Software\n"
            "🛡️ Enterprise QA & Automated Testing\n\n"
            "Visit our office or click below to explore our services and get a free project consultation!"
        ),
        "cta_button": "Learn more",
        "cta_url": "https://www.momoittechnologies.com/services?utm_source=google_my_business&utm_medium=post_launch",
        "photo_suggestion": "google-business-banner.jpg",
        "keywords": ["software company in kadapa", "web development kadapa", "custom software"]
    },
    {
        "week": "Week 2 (Focus: Custom ERP & Billing)",
        "type": "Product / Offer",
        "title": "Automate Your Business Billing & Invoicing in Kadapa",
        "content": (
            "Still managing store inventory, billing, or accounts on manual ledgers or rigid software? "
            "MOMO IT Technologies builds custom business ERPs and POS systems tailored to your exact store or distribution workflow.\n\n"
            "✓ Instant GST & Non-GST Billing\n"
            "✓ Automated WhatsApp Invoicing & Receipts to Customers\n"
            "✓ Real-time Inventory & Stock Tracking\n"
            "✓ Cloud Access — monitor your sales from your phone anywhere\n\n"
            "Call us today to schedule a live demo of our business software at our Krishnapuram office!"
        ),
        "cta_button": "Call now",
        "cta_url": "tel:+918639831132",
        "photo_suggestion": "Billing software dashboard mockup / Krishnapuram lab",
        "keywords": ["billing software kadapa", "erp software kadapa", "inventory software"]
    },
    {
        "week": "Week 3 (Focus: Mobile Apps)",
        "type": "What's New / Showcase",
        "title": "Launch Your iOS & Android Mobile App with Flutter",
        "content": (
            "Reach thousands of customers directly on their smartphones. At MOMO IT Technologies, we engineer high-performance cross-platform mobile apps using Google Flutter.\n\n"
            "🚀 Single codebase for both Android & Apple iOS\n"
            "⚡ 60 FPS buttery-smooth user experience\n"
            "☁️ Cloud database sync & instant push notifications\n"
            "💳 Integrated UPI, Razorpay & PhonePe payments\n\n"
            "Whether you need an e-commerce app, a delivery app, or a service portal, talk to our development team today!"
        ),
        "cta_button": "Learn more",
        "cta_url": "https://www.momoittechnologies.com/services/mobile-app-development-kadapa?utm_source=google_my_business&utm_medium=post_flutter",
        "photo_suggestion": "Mobile app UI preview on smartphone frame",
        "keywords": ["mobile app development in kadapa", "flutter developers kadapa"]
    },
    {
        "week": "Week 4 (Focus: Web & SaaS Scaling)",
        "type": "What's New / Engineering Excellence",
        "title": "Sub-Second Speed: Why Kadapa Businesses Trust Next.js 15",
        "content": (
            "Slow websites lose customers and rank poorly on Google Search. At MOMO IT Technologies, our web applications load in under 1 second using Next.js 15 and modern cloud architecture.\n\n"
            "✨ 95+ Google PageSpeed Score guaranteed\n"
            "✨ Mobile-first responsive UX that converts visitors into leads\n"
            "✨ Built-in local SEO to dominate Google Maps 3-Pack\n"
            "✨ Zero maintenance headaches with dedicated support\n\n"
            "Get a free audit of your existing website or request a quote for a new web platform!"
        ),
        "cta_button": "Get offer",
        "cta_url": "https://www.momoittechnologies.com/contact?utm_source=google_my_business&utm_medium=post_speed",
        "photo_suggestion": "PageSpeed 100/100 score badge + Next.js code visual",
        "keywords": ["best website design company in kadapa", "web developers in kadapa"]
    }
]

# 2. GMB Reputation & ReviewSmart Agent: Ready Review Responses
REVIEW_TEMPLATES = [
    {
        "scenario": "5-Star Review with No Comment (Rating Only)",
        "recommended_reply": (
            "Thank you so much for the 5-star rating! We are delighted to have you as a valued partner. "
            "At MOMO IT Technologies, our team remains committed to delivering world-class software engineering, "
            "web applications, and digital solutions right here in Kadapa. Feel free to connect with us whenever you need technical support!"
        )
    },
    {
        "scenario": "5-Star Review Praising Software / Web Development",
        "recommended_reply": (
            "Thank you for your fantastic review and kind words! It was an absolute pleasure developing your project. "
            "Our engineering team takes immense pride in delivering clean code, fast loading speeds, and robust functionality. "
            "We look forward to supporting your business as it continues to grow!"
        )
    },
    {
        "scenario": "5-Star Review Praising Communication & Technical Support",
        "recommended_reply": (
            "Thank you for sharing your positive experience! Clear communication, transparent delivery timelines, and dependable "
            "ongoing support are the foundations of how we work at MOMO IT Technologies. We are always just a call or WhatsApp message away."
        )
    },
    {
        "scenario": "5-Star Review from Student / Trainee (MOMO Academy)",
        "recommended_reply": (
            "Congratulations on your achievements with MOMO Academy! We are proud to see your growth in automation testing and software development. "
            "Our goal has always been to provide genuine, live-project experience from our Kadapa campus. Wishing you a stellar career in the IT industry!"
        )
    },
    {
        "scenario": "Constructive / Feedback Review (3 or 4 Stars)",
        "recommended_reply": (
            "Thank you for taking the time to share your feedback. We continuously strive for 100% client satisfaction across every software build. "
            "We would love to understand how we can make your experience even better. Please reach out to Mohan Damerla directly at +91 86398 31132 so we can assist you right away."
        )
    }
]

# 3. GMB Q&A Agent: Strategic Questions & Answers for Google Maps
STRATEGIC_QAS = [
    {
        "question": "What software development services does MOMO IT Technologies provide in Kadapa?",
        "answer": (
            "MOMO IT Technologies provides end-to-end software engineering including custom Web & SaaS applications (Next.js 15, React 19), "
            "cross-platform mobile app development (Google Flutter for iOS & Android), custom business ERP & billing software, "
            "enterprise QA automation testing (Selenium 4), and cloud solutions. We are located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa."
        )
    },
    {
        "question": "Can you build custom billing and inventory software for shops and businesses in Kadapa?",
        "answer": (
            "Yes! We build custom ERP, POS, and billing software tailored to retail stores, wholesalers, cloud kitchens, and service providers. "
            "Our systems feature instant GST invoicing, automated customer WhatsApp receipts, stock tracking, and mobile owner dashboards."
        )
    },
    {
        "question": "How can I get a quote or discuss a new website or app project?",
        "answer": (
            "You can call or WhatsApp our team directly at +91 86398 31132, visit our website at www.momoittechnologies.com, "
            "or walk into our Kadapa office at Krishnapuram (Mon-Sat, 8:00 AM - 8:00 PM) for an in-person discovery consultation."
        )
    },
    {
        "question": "Do you provide software testing and QA automation services for external companies?",
        "answer": (
            "Yes. We offer enterprise QA & test automation services using Selenium 4, Playwright, Cucumber BDD, and TestNG to ensure zero-defect releases for web and mobile products."
        )
    },
    {
        "question": "Does MOMO IT Technologies also offer IT training and internships in Kadapa?",
        "answer": (
            "Yes. Through MOMO Academy, our in-house engineers conduct specialized, job-oriented career training in Automation Testing, Java, and Full-Stack Development with verified course certificates and live client project internships."
        )
    }
]

# 4. GMB Services Catalog Agent: Ready for "Edit Services" in GMB (max 300 chars each)
GMB_SERVICES_CATALOG = [
    {
        "service_name": "Custom Web & SaaS Development",
        "description": "High-performance web applications and multi-tenant cloud SaaS platforms built on Next.js 15, React 19, Supabase, and Spring Boot with sub-second page loads.",
        "category": "Software company"
    },
    {
        "service_name": "Mobile App Development",
        "description": "Cross-platform iOS and Android mobile applications engineered with Google Flutter and Dart. Features cloud database synchronization, offline support, and push notifications.",
        "category": "Software company"
    },
    {
        "service_name": "Custom Business ERP & Billing Software",
        "description": "Tailor-made billing software, POS systems, inventory management, and automated WhatsApp invoicing built specifically for growing businesses in Kadapa.",
        "category": "Software company"
    },
    {
        "service_name": "QA & Automation Testing Services",
        "description": "Enterprise test automation frameworks built with Selenium 4, Playwright, TestNG, and Cucumber BDD to deliver zero-defect regression test suites and continuous quality.",
        "category": "Software company"
    },
    {
        "service_name": "Agentic AI & Cloud Automation",
        "description": "Custom AI agent workflows, Retrieval-Augmented Generation (RAG) systems, vector database integrations, and smart operational automation for modern enterprises.",
        "category": "Software company"
    },
    {
        "service_name": "Digital Marketing & Local SEO",
        "description": "Strategic Google Business Profile 3-Pack optimization, Google Ads PPC management, Meta Ads, and social media growth funnels to drive qualified daily customer enquiries.",
        "category": "Software company"
    }
]

# Compile into JSON
all_data = {
    "generated_at": datetime.datetime.now().isoformat(),
    "company": "MOMO IT TECHNOLOGIES",
    "location": "Krishnapuram, Kadapa, AP — 516003",
    "phone": "+91 86398 31132",
    "website": "https://www.momoittechnologies.com",
    "weekly_posts": WEEKLY_POSTS,
    "review_templates": REVIEW_TEMPLATES,
    "strategic_qas": STRATEGIC_QAS,
    "services_catalog": GMB_SERVICES_CATALOG
}

json_path = os.path.join(PUBLIC_DIR, "gmb_ready_content.json")
with open(json_path, "w") as f:
    json.dump(all_data, f, indent=2)

# Generate Markdown Playbook
md_path = os.path.join(PROJECT_DIR, "GMB_MANAGEMENT_PLAYBOOK.md")
with open(md_path, "w") as f:
    f.write("# MOMO IT TECHNOLOGIES — Google Business Profile (GMB) AI Management Playbook\n\n")
    f.write(f"Generated on: {datetime.date.today().strftime('%B %d, %Y')}\n\n")
    f.write("This playbook is generated by your autonomous GMB AI Agents to manage, update, and rank your Google Maps listing in Kadapa.\n\n")
    
    f.write("## 📅 Section 1: Ready-to-Publish Weekly Google Updates\n\n")
    for p in WEEKLY_POSTS:
        f.write(f"### {p['week']} — {p['title']}\n")
        f.write(f"- **Type:** {p['type']}\n")
        f.write(f"- **CTA Button:** `{p['cta_button']}` -> {p['cta_url']}\n")
        f.write(f"- **Photo to Upload:** `{p['photo_suggestion']}`\n\n")
        f.write("```text\n" + p['content'] + "\n```\n\n")
    
    f.write("## 💬 Section 2: ReviewSmart AI Response Templates\n\n")
    for r in REVIEW_TEMPLATES:
        f.write(f"### Scenario: {r['scenario']}\n")
        f.write("```text\n" + r['recommended_reply'] + "\n```\n\n")

    f.write("## ❓ Section 3: Strategic Google Maps Q&A (Seed These on Profile)\n\n")
    for q in STRATEGIC_QAS:
        f.write(f"**Q: {q['question']}**\n\n")
        f.write(f"**A:** {q['answer']}\n\n---\n\n")

    f.write("## 🛠️ Section 4: Services Catalog (Paste in 'Edit Services')\n\n")
    for s in GMB_SERVICES_CATALOG:
        f.write(f"### {s['service_name']}\n")
        f.write(f"*{s['description']}*\n\n")

print(f"Generated Playbook at: {md_path}")
print(f"Generated JSON at: {json_path}")

# Copy Playbook to Downloads for 1-click access
import shutil
downloads_md = os.path.join(DOWNLOADS_DIR, "MOMO_IT_GMB_Playbook.md")
shutil.copy2(md_path, downloads_md)
print(f"Playbook copied to: {downloads_md}")
