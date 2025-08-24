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

End of Guide
