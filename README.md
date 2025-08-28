LCHS Red Cross Club Website — Web Team Onboarding
==================================================

Welcome to the Web Team 🎉  
This guide is your step-by-step manual for maintaining the club website.  
It’s designed to be *complete but easy to follow* — perfect for new members.

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
🔄 How Pull Requests (PRs) Work
--------------------------------------------------
GitHub uses **branches**, **commits**, and **pull requests** to manage changes.  
Here’s how it works step by step:

### 1. Branch → Your Safe Workspace
- A **branch** is like your own copy of the repo where you can work safely.  
- Example branch names:  
  - `update-officer-list`  
  - `add-jane-doe`  
  - `fix-footer-links`  

### 2. Commit → Save Points
- A **commit** is like hitting *Save* with a message.  
- Each commit records what changed and why.  
- Example commit messages:  
  - `Add Jane Doe to Meet the Web Team`  
  - `Update blood drive date in Events`  

### 3. Pull Request (PR) → Ask to Merge
- A PR is how you propose merging your branch back into `main`.  
- It lets other Web Team members **review** your changes first.  
- In the PR, you:  
  - Write a **title** → short and clear.  
  - Add a **description** → what changed and why.  

### 4. Review → Peer Check
- Another Web Team member looks at your PR.  
- They can:  
  - Approve ✅  
  - Suggest changes 📝  
- Nothing goes live until at least one other team member approves.  

### 5. Merge → Goes Live 🚀
- Once approved, the PR is merged into `main`.  
- GitHub Pages automatically redeploys the site within ~2 minutes.  

--------------------------------------------------
🧪 Practice: “Meet the Web Team” Page
--------------------------------------------------
To practice, new members should:  
1. Create a branch called `add-your-name`.  
2. Open `meet-the-web-team.md`.  
3. Add their name + role to the list.  
4. Commit changes.  
5. Open a Pull Request.  
6. Ask another Web Team member to review and approve.  

When merged, their name will appear on the page — and they’ll have learned the entire GitHub workflow 🎉  

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
- [ ] Update officer names in /content/officers.html  
- [ ] Update meeting times & events  
- [ ] Remove graduated seniors from org  
- [ ] Add new Web Team members  
- [ ] Promote President/VP to Owner  
- [ ] Verify custom domain + HTTPS still active  
- [ ] Confirm club Gmail is accessible  

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
   - Add CNAME record:  
     • Name = www  
     • Target = lawtonchilesredcrossclub.github.io  
   - Add A records (for root domain):  
     • @ → 185.199.108.153  
     • @ → 185.199.109.153  
     • @ → 185.199.110.153  
     • @ → 185.199.111.153  

Why 4 A Records?
----------------
GitHub Pages provides four different IP addresses.  
- They are part of a distributed server network (Anycast).  
- This improves **reliability** (if one IP/server goes down, others still respond).  
- This improves **performance** (visitors are routed to the nearest server).  

⚠️ You must add **all four** A records.  
If you only add one, the site may still work, but it will be less reliable.  

6. In GitHub repo → Settings → Pages:  
   - Custom domain = www.lchsredcross.org  
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
