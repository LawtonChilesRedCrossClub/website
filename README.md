# LCHS Red Cross Club Website

This repository contains the source code for the **Lawton Chiles High School Red Cross Club** website.  
It is designed to be easily maintained by underclassmen after leadership transitions.

---

## 🌐 Live Site
- GitHub Pages: https://<org>.github.io/website/  
- Custom Domain (if configured): https://www.lchsredcross.org

---

## 📂 Repo Structure
index.html        # main page
/css              # stylesheets
/js               # scripts
/assets           # images, documents, logos
/content          # frequently updated text (officers, events)

---

## 🛠 How to Edit the Website
1. Clone the repo or use GitHub’s web editor.
2. Make changes in a new branch (e.g., `update-events`).
3. Test locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit http://localhost:8000 in a browser.
4. Open a **Pull Request (PR)**.
5. Another Web Team member reviews → merge to `main`.
6. GitHub Pages deploys automatically (~1–2 minutes).

---

## 👥 Managing Members (Web Team)
The **Web Team** is responsible for maintaining this site.  
At least 2–3 officers should always be in the team.

### Adding a New Member
1. Go to the org page: https://github.com/<org>  
2. Click **People → Invite member**.  
3. Enter their **GitHub username**.  
4. Role = **Member** (default).  
5. Assign them to the **Web Team**.

### Removing Graduated Seniors
1. Go to **People**.  
2. Find the member.  
3. Click **Remove from organization**.  
4. (Optional) Remove them from the Web Team as well.

### Promoting Leadership
- At the end of each school year:
  - Add next year’s **President/VP** as an **Owner**.
  - Keep at least one advisor/teacher as backup if possible.

---

## 🔑 Permissions
- **Members**: Default access.  
- **Web Team**: Write/Maintain access to `website` repo.  
- **Owners**: Club President + one other trusted officer.

---

## 📜 Yearly Checklist
At the first meeting each school year:
- [ ] Verify site loads correctly.  
- [ ] Update officer names in `/content/officers.html` (or `.md`).  
- [ ] Update meeting times/events in `/content/events.html`.  
- [ ] Remove graduated seniors from the org.  
- [ ] Add new Web Team members.  
- [ ] Verify domain & SSL still active.  

---

## 🤝 Contributing
- Always work on a branch.  
- Open Pull Requests for changes.  
- Follow PR template checklist before merging.

---

## 📧 Contact
For questions about access or recovery, use the club email:  
**lchsredcrossclub@gmail.com**
