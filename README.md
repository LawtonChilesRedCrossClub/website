LCHS Red Cross Club Website — Web Team Onboarding
==================================================

Welcome to the Web Team 🎉  
This guide is your step-by-step manual for maintaining the club website.  
It’s designed to be *complete but easy to follow*.

--------------------------------------------------
🌐 Live Site
--------------------------------------------------
- GitHub Pages (default): https://<org>.github.io/website/
- Custom Domain (if set up): https://www.lchsredcross.org

--------------------------------------------------
👥 Roles & Access
--------------------------------------------------
• Owners → Club President + one trusted officer/advisor (full control).  
• Web Team → Students maintaining the site (Write/Maintain access).  
• Members → Everyone else in the org (read-only).  

Add a new member:
1. Org → People → Invite member
2. Role = Member
3. Add them to the Web Team

At least 2 Owners should exist at all times.

--------------------------------------------------
📂 Repo Structure
--------------------------------------------------
/index.html        → Homepage  
/css/              → Stylesheets  
/js/               → Scripts  
/assets/img/       → Images  
/assets/docs/      → PDFs/flyers  
/content/          → Officers, events, announcements  
/README.md         → Main instructions  

--------------------------------------------------
🛠 How to Update the Website
--------------------------------------------------
1. Create a branch → example: `update-events-2025`  
2. Edit the relevant file(s):  
   - Officers → /content/officers.html  
   - Events → /content/events.html  
3. Preview locally:  
   ```
   python -m http.server 8000
   ```
   Open http://localhost:8000 in browser  
4. Commit with a clear message:  
   "Update officer list for 2025–26"  
5. Push your branch and open a Pull Request (PR).  
6. Another Web Team member reviews & approves.  
7. Merge to main → GitHub Pages auto-deploys (~2 minutes).  

--------------------------------------------------
📋 Common Updates
--------------------------------------------------
• Update Officers → edit /content/officers.html  
• Add Events → edit /content/events.html, upload flyers to /assets/docs/  
• Add Images → save in /assets/img/, reference in HTML with alt text  
• Create New Page → copy existing .html, adjust content, add link in nav  

--------------------------------------------------
🔑 Best Practices
--------------------------------------------------
• Use RELATIVE paths → href="css/style.css" (not /css/style.css)  
• Filenames lowercase + hyphens → blood-drive-2025.jpg  
• Always add alt text to images  
• Test on both desktop and mobile before merging  
• Do not commit secrets or personal student data  

--------------------------------------------------
📆 Yearly Checklist
--------------------------------------------------
At the start of each school year:  
[ ] Update officer names in /content/officers.html  
[ ] Update meeting times & events  
[ ] Remove graduated seniors from org  
[ ] Add new Web Team members  
[ ] Promote President/VP to Owner  
[ ] Verify custom domain + HTTPS still active  
[ ] Confirm club Gmail is accessible  

--------------------------------------------------
❓ Troubleshooting
--------------------------------------------------
• CSS/JS not loading → check relative paths + filename case  
• Old content showing → hard refresh (Ctrl+F5 / Cmd+Shift+R)  
• 404 page → make sure index.html is in root & Pages is enabled  
• Broken image → check filename is exact (case-sensitive)  
• Roll back mistake → use PR “Revert” or restore file from commit history  

--------------------------------------------------
⚙️ Advanced (Optional)
--------------------------------------------------
• CODEOWNERS → require Web Team review before merging changes  
• Pull Request Template → ensures checklist (links/images tested, mobile OK)  
• CONTRIBUTING.md → explains branch → PR → review workflow  

--------------------------------------------------
📧 Contact
--------------------------------------------------
• Club Email: lchsredcrossclub@gmail.com  
• Org Owners: Current President + one trusted officer  
• Faculty Advisor: (update yearly)  

End of Web Team Onboarding Guide















Porkbun + Cloudflare DNS — Cost & Setup Guide
==================================================

Purpose
-------
This guide explains the costs and setup steps for
**Porkbun as the domain registrar** with **Cloudflare DNS**.

Cost Breakdown (.org domain)
----------------------------
- First-year registration: **~$6.68**
- Annual renewal: **~$10.72/year**
- Cloudflare DNS: **Free**

Total cost:
- Year 1: ~$6.68
- Each subsequent year: ~$10.72

Included in Porkbun price:
- Free WHOIS privacy (protects club info)
- Free SSL certificates (via Let’s Encrypt, if using Porkbun DNS)
- Free email forwarding (up to 20 addresses)
- Free URL forwarding

Cloudflare DNS adds:
- Strong, fast, reliable DNS
- Free performance/security tools
- DNSSEC support for extra protection

Setup Steps
-----------
1. **Buy domain at Porkbun** using club Gmail (lchsredcrossclub@gmail.com).  
2. In Porkbun, go to DNS → set **nameservers** to Cloudflare’s pair (given after adding domain at Cloudflare).  
3. In Cloudflare dashboard:  
   - Add domain  
   - Verify nameservers are set correctly  
   - Enable **DNSSEC** (extra protection)  
4. In GitHub repo:  
   - Settings → Pages → Custom domain = www.lchsredcross.org  
   - Check “Enforce HTTPS”  
5. Test domain → should load in ~15–30 min, HTTPS enforced.  

Yearly Checklist
----------------
[ ] Verify domain still active in Porkbun  
[ ] Renewal date updated in Domain Renewal Reminder Wiki  
[ ] Cloudflare DNS settings still valid  
[ ] HTTPS enforced and working  

Budget Reminder
---------------
- Renewal is **~$11/year**.  
- Ensure a club or advisor card is attached in Porkbun.  
- Update “Next renewal due” in the repo Wiki each year.

End of Cost & Setup Guide















LCHS Red Cross Club — Domain Management Guide
(Porkbun Registrar + Cloudflare DNS)
==================================================

Purpose
-------
This guide explains how to manage and renew the club’s custom domain
(www.lchsredcross.org) when registered at **Porkbun** and managed with **Cloudflare DNS**.

Costs
-----
- First year: ~$6.68  
- Annual renewal: ~$10.72  
- Cloudflare DNS: Free  

Registrar Account
-----------------
- Registrar: Porkbun  
- Login: lchsredcrossclub@gmail.com  
- Renewal is paid through Porkbun.  

DNS Provider
------------
- Provider: Cloudflare (Free plan)  
- Cloudflare provides DNS, DNSSEC, and extra security features.  
- Porkbun’s nameservers must be set to Cloudflare’s values.  

Setup Steps
-----------
1. Buy domain at Porkbun using club Gmail.  
2. Add domain in Cloudflare dashboard (Free plan).  
3. Set Porkbun nameservers → Cloudflare nameservers.  
4. Enable DNSSEC in Cloudflare, then copy values into Porkbun DNSSEC settings.  
5. In Cloudflare DNS:  
   - Add CNAME record: `www` → `<org>.github.io`  
   - Add redirect rule: `lchsredcross.org` → `www.lchsredcross.org`  
6. In GitHub repo → Settings → Pages:  
   - Custom domain = `www.lchsredcross.org`  
   - Enforce HTTPS  

Yearly Checklist
----------------
[ ] Verify domain still active in Porkbun  
[ ] Renewal date updated in **Domain Renewal Reminder (Wiki)**  
[ ] Auto-renew enabled or renewal completed  
[ ] Cloudflare DNS still pointing correctly  
[ ] HTTPS enforced and working  

Renewal Reminder
----------------
- Renewal handled in Porkbun (~$11/year).  
- Future officers should ensure billing is updated yearly.  
- Update the renewal date in the Wiki page.  

Contingency Plan
----------------
If the domain expires accidentally:  
• Log into Porkbun with club Gmail → manually renew.  
• Reactivate DNSSEC and Cloudflare if needed.  
• Test site after renewal.  

Quick Reference
---------------
Domain: www.lchsredcross.org  
Registrar: Porkbun  
DNS: Cloudflare  
Club Gmail: lchsredcrossclub@gmail.com  
Renewal Cost: ~$11/year  
Responsible: Org Owners (President + trusted officer/advisor)  

End of Domain Management Guide
