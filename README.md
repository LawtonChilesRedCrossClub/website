Purpose
-------
This document onboards new Web Team members so the site remains easy to update year after year.
It explains access, tools, workflow, common tasks, deployment, troubleshooting, and handover.

Live URLs
---------
• Staging (GitHub Pages default): https://<org>.github.io/website/
• Custom Domain (if configured):  https://www.<your-domain>.org
  (The custom domain is optional. If you use one, keep the club Gmail as the domain owner email.)

Access & Roles
--------------
• Organization: <org>  (example: lchs-red-cross-club)
• Repository:  website (public)
• Teams:
  - Web Team (Write or Maintain access to the website repo)
  - Owners (Organization owners: current President + one trusted officer/advisor)
• Invite flow: Org → People → Invite member → choose Member → add to Web Team.
• At least two Owners should exist at all times for continuity.

Tools You Need
--------------
• A web browser (Chrome, Edge, Firefox, Safari).
• Optional editor (recommended): VS Code or any code editor.
• Optional local preview tools (any ONE of the following):
  1) Python 3 (ships with macOS; on Windows install from python.org)
     - Run:  python -m http.server 8000
     - Visit: http://localhost:8000
  2) VS Code “Live Server” extension (one-click local preview).

Repository Layout
-----------------
Use or adapt the following structure (keep names lower-case; case matters):
/index.html                 → main page
/css/                       → stylesheets (e.g., style.css)
/js/                        → scripts (e.g., main.js)
/assets/img/                → images (png/jpg/svg/webp)
/assets/docs/               → PDFs and other downloads
/content/                   → frequently updated snippets (officers, events, announcements)
/404.html                   → optional custom 404 page (recommended)
/favicon.ico                → optional site icon (recommended)

General Rules
-------------
• NEVER commit secrets (API keys, passwords). This is a static site—no backend.
• Use RELATIVE paths for links and assets (e.g., href="css/style.css", not href="/css/style.css").
• Keep filenames and links EXACT (case-sensitive). “Events.html” ≠ “events.html”.
• Keep images small (usually < 200 KB per image). Use webp or optimized jpg when possible.
• Add alt text to all images for accessibility and better SEO.
• Don’t use personal emails or personal cloud links; use the club Gmail and the repo itself.

Daily Workflow (Branches → PR → Review → Merge)
-----------------------------------------------
1) Create a branch for your change:
   - Example: yourname/update-events-2025-09
2) Make edits (see “Common Updates” below).
3) Preview locally (python server or Live Server) and test all pages/links.
4) Commit with clear messages:
   - Example: "Update officers for 2025–26" or "Add Sept meeting dates"
5) Push your branch and open a Pull Request (PR).
6) Another Web Team member reviews and approves.
7) Merge to main. GitHub Pages deploys automatically in ~1–2 minutes.

Branch Protection & Reviews
---------------------------
• main is protected: require at least 1 PR review.
• CODEOWNERS (recommended) can require Web Team approval on key paths:
  /index.html @<org>/web-team
  /css/*     @<org>/web-team
  /js/*      @<org>/web-team

Common Updates (How-To)
-----------------------
A) Update Officers
   • File: /content/officers.html (or .md if you use Markdown)
   • Add/remove names and roles; keep consistent formatting.
   • If you add headshots, place them in /assets/img/ and reference with alt text.

B) Add Events/Announcements
   • File: /content/events.html (or .md)
   • Include: date, title, short description, optional link to PDF/flyer.
   • Put flyers in /assets/docs/ and link relatively (e.g., assets/docs/blood-drive-flyer.pdf).

C) Add or Replace Images
   • Put images in /assets/img/ (lowercase names, hyphens not spaces).
   • Use descriptive names (e.g., home-fire-campaign-2025.jpg).
   • In HTML: <img src="assets/img/home-fire-campaign-2025.jpg" alt="Volunteers installing smoke alarms">

D) Create a New Page
   • Copy an existing simple page as a starter (or create new .html).
   • Update the <title>, heading, and content.
   • Add a link to it from the site navigation and any relevant pages.
   • Keep links relative (e.g., href="projects/home-fire.html").

E) Link to External Resources
   • For external links, consider target="_blank" rel="noopener". Example:
     <a href="https://www.redcross.org/" target="_blank" rel="noopener">American Red Cross</a>

Navigation & Linking Tips
-------------------------
• Relative links work both locally and on GitHub Pages. Examples:
  - href="index.html"                    → same folder
  - href="css/style.css"                 → sibling folder
  - href="../assets/img/logo.png"        → go up one level
• Avoid leading slashes ("/css/style.css")—that breaks on project sites.
• If you reorganize folders, update all affected links; test them locally.

CSS & JS Guidelines
-------------------
• Prefer editing /css/style.css rather than adding inline styles.
• Keep JavaScript simple; place scripts at the end of <body> or use defer:
  <script src="js/main.js" defer></script>
• If you embed third-party scripts, get advisor approval and note why in the PR.

Accessibility & Content Quality
-------------------------------
• Use proper headings (only one <h1> per page; then <h2>, <h3>, ...).
• Provide alt text for images and descriptive link text (“View blood drive form” not “Click here”).
• Ensure good color contrast; don’t rely on color alone to convey meaning.
• Check keyboard navigation (Tab through links/buttons) and focus states.
• Keep copy concise and consistent; avoid jargon when possible.

Pre-Merge QA Checklist
----------------------
• Links: Click every link and menu item (including footer).
• Images: Load correctly (no broken images); reasonable file sizes.
• Mobile: Test on a phone or dev tools responsive mode; text is readable and layout isn’t broken.
• 404s: Try a wrong URL (e.g., /not-real) to see your 404 page if you have one.
• Spelling/Grammar: Quick pass for obvious typos.
• Performance: Large images compressed; no giant PDFs unless necessary.

Deploying with GitHub Pages
---------------------------
• Repo → Settings → Pages
  - Source: “Deploy from a branch”
  - Branch: main, Folder: / (root)
• After merging to main, deployment is automatic.
• First-time setup may take a couple of minutes.

Custom Domain (Optional, Recommended)
------------------------------------
• In Settings → Pages, set Custom Domain to: www.<your-domain>.org and Save.
• DNS at your registrar:
  - CNAME record: Host “www” → <org>.github.io   (example: lchs-red-cross-club.github.io)
  - Root domain: set a URL redirect to https://www.<your-domain>.org (or ALIAS/ANAME to “www” if supported)
• Add a CNAME file in the repo root (one line):  www.<your-domain>.org
• Enable “Enforce HTTPS” once GitHub finishes issuing the certificate.

Troubleshooting
---------------
• CSS/JS Not Loading
  - Fix paths to be relative (href="css/style.css" not href="/css/style.css").
  - Check filename case and folder names.
• Page Shows Old Content
  - Hard-refresh your browser (Ctrl+F5 or Cmd+Shift+R) or open in a private window.
• 404 at Deployed URL
  - Ensure Pages is enabled (Settings → Pages).
  - Make sure index.html is in the repo root.
• HTTPS Toggle Missing
  - DNS not pointing correctly yet or still validating. Re-check records; wait a bit.
• Broken Image on Case-Sensitive Hosting
  - “ClubLogo.png” won’t match “clublogo.png”. Make them identical.
• Rollback a Bad Change
  - On the PR page, click “Revert” to create a new PR that undoes the merge.
  - Or browse commit history and restore a previous file version via the GitHub UI.

Security & Privacy
------------------
• Do not publish private student info or contact details without consent.
• Don’t commit API keys, passwords, or secrets (ever).
• Keep organization recovery email set to the club Gmail.
• Use official logos and names per your club/school guidelines; get advisor approval for branding changes.

Yearly Handover (Start of New School Year)
------------------------------------------
• Update officers in /content/officers.html.
• Update meeting times and recurring events.
• Remove graduated seniors from the org; add new Web Team members.
• Promote next President/VP to Organization Owner.
• Verify the custom domain and “Enforce HTTPS” are still active.
• Confirm the club Gmail account is accessible and recovery info is current.

Issues & Requests
-----------------
• Use GitHub Issues to track tasks.
• Labels to consider: “content”, “bug”, “design”, “good first issue”, “help wanted”.
• Optional: Add an Issue Template for “Website Update Request” to collect date, description, links.

Appendix: Useful Templates (Copy/Paste)
---------------------------------------
1) CODEOWNERS (put in repo root)
--------------------------------
/index.html @<org>/web-team
/css/*     @<org>/web-team
/js/*      @<org>/web-team
/content/* @<org>/web-team

2) Pull Request Template (.github/pull_request_template.md)
-----------------------------------------------------------
### What changed?
- [ ] Content updated (officers/events/announcements)
- [ ] Links and images verified locally
- [ ] Relative paths only (no leading /)
- [ ] Mobile layout checked

### Screenshots (if UI changed)

3) CONTRIBUTING.md (minimal)
----------------------------
# Contributing
1. Create a branch: yourname/short-description
2. Preview locally:
   python -m http.server 8000
   (Open http://localhost:8000)
3. Commit with a clear message.
4. Open a Pull Request; request a Web Team review.
5. After approval, merge to main (Pages deploys automatically).

4) CNAME (repo root; if using custom domain)
--------------------------------------------
www.<your-domain>.org

Quick Contacts
--------------
• Club email (shared & for recovery): lchsredcrossclub@gmail.com
• Organization Owners: current President + one trusted officer/advisor
• Faculty Advisor: <name> (<email>)  [keep current each year]

End of document.
