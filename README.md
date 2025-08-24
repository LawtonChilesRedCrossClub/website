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











LCHS Red Cross Club — Domain Management Guide
=============================================

Purpose
-------
This guide explains how to manage and renew the club’s custom domain
(e.g., www.lchsredcross.org) so that the website remains live year after year.

Registrar Choice
----------------
We recommend using **Cloudflare Registrar** or **Porkbun** for stability and low renewal costs.
- Cloudflare: ~$10/year renewal, no markups
- Porkbun: ~$11/year renewal
- GoDaddy is *not recommended* — cheap first-year promos but renewals cost $20–25+.

Registrar Account
-----------------
• Register the domain under the **club Gmail account** (not a personal email).  
• Club Gmail: lchsredcrossclub@gmail.com  
• This ensures that future officers can reset passwords and manage billing.

First-Year Setup (Important)
----------------------------
For the 2025-2026 setup (Brandon’s graduating year):
1. Domain is purchased using Brandon’s personal payment card.  
2. Account login = club Gmail (so it can be passed down).  
3. **Auto-renew must be turned OFF** after the first purchase to protect Brandon’s billing info.  
4. Future officers will need to log into Cloudflare with the club Gmail and  
   - Add their own billing method (advisor’s card, prepaid card, or school card).  
   - Re-enable auto-renew before the expiration date.  
5. Optional: Brandon may choose to prepay 2–3 years to give the club extra time.

Billing & Renewal
-----------------
• Renewal is around $10–11 per year.  
• Preferred: pay multiple years upfront or ensure next officers add billing info.  
• Future officers should:  
  - Add their payment method under club Gmail account.  
  - Enable auto-renew to prevent lapses.  

How to Configure Domain with GitHub Pages
-----------------------------------------
1. In the registrar’s DNS settings:
   - Add a CNAME record: Host = www, Value = <org>.github.io
     Example: lchs-red-cross-club.github.io
   - For the root domain (lchsredcross.org without www):
     - If supported, add ALIAS/ANAME → www.lchsredcross.org
     - Otherwise, set a URL redirect to https://www.lchsredcross.org

2. In GitHub:
   - Repo → Settings → Pages → Custom domain = www.lchsredcross.org
   - Save, then check "Enforce HTTPS"

3. In the repo root, ensure a file named CNAME exists with:
   www.lchsredcross.org

Handover Process
----------------
At the start of each school year:
[ ] Verify the domain is active and resolves correctly  
[ ] Confirm billing info is still valid  
[ ] Check that auto-renew is enabled (if new card added)  
[ ] Make sure the club Gmail account is accessible  
[ ] Document renewal date and cost in the Web Team README  

Renewal Reminder
----------------
• Always track the **next renewal date**.  
• Update this line each year after renewal:  
  **Next renewal due: ___________________**  
• Pin this information in the repo Wiki or as a pinned GitHub Issue so it’s visible.  
• Missing a renewal means the website will go offline until restored.

Contingency Plan
----------------
If the domain expires accidentally:
• Log into the registrar account with club Gmail  
• Renew the domain manually (can take up to 24 hours to restore)  
• If lost completely, re-purchase as soon as possible

Quick Reference
---------------
Club Gmail: lchsredcrossclub@gmail.com  
Registrar Login: (use club Gmail)  
Renewal Cycle: Every year (~$10)  
Responsible Roles: Org Owners (President + 1 other officer/advisor)

End of Domain Management Guide
