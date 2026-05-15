# Sarwan Ali — Refreshed Personal Website

Drop-in replacement / addition for your existing
`https://github.com/sarwanpasha/sarwanpasha.github.io` repo.

## What's in this bundle

```
index.html          ← REPLACES your current index.html
publications.html   ← NEW
talks.html          ← NEW
teaching.html       ← NEW
news.html           ← NEW
assets/style.css    ← NEW
assets/site.js      ← NEW (theme toggle)
```

## Deploy steps (5 min)

1. **Back up your current `index.html`** (in case you want to roll back):
   ```bash
   cd sarwanpasha.github.io
   git mv index.html index.old.html
   ```
2. **Copy the new files in** (extract this zip into the repo root):
   - `index.html`, `publications.html`, `talks.html`, `teaching.html`, `news.html` → repo root
   - `assets/` folder → repo root
3. **Update the CV link.** The new site links to `Sarwan_Ali_CV.pdf` in the repo root.
   You already have `Sarwan_Ali_CV.pdf` there — just make sure it's the latest version.
4. **(Optional) Add a favicon.** Currently uses your `cthulu.png`. If you'd like, replace with a proper favicon.
5. **Commit & push:**
   ```bash
   git add .
   git commit -m "Refresh site: modern academic design, multi-page, dark mode"
   git push origin master
   ```
6. **Visit `https://sarwanpasha.github.io/`** — GitHub Pages will rebuild within ~30s.

## Things to do AFTER pushing (when you have a few minutes)

These are placeholders you'll want to swap in real data for:

- [ ] **ORCID link.** The footer/socials link points to `https://orcid.org/` — replace with your actual ORCID URL.
- [ ] **Hero photo.** Currently uses your existing `cthulu.png`. If you want a more professional headshot (recommended for an industry job application this month), replace that file in-place (keep the filename or update the `<img src>` in `index.html`).
- [ ] **Profile photo cropping.** A square crop, head + shoulders, 600×600 minimum, works best.
- [ ] **Google Scholar URL.** I used `user=NYzqnv0AAAAJ` (from your CV). If your active Scholar profile is the older `user=9dtXSoAAAAAJ`, update the four places it appears (grep `NYzqnv0AAAAJ` in all five HTML files).

## What I kept vs. removed

**Kept** (existing files in your repo continue to work — no changes needed):
- Your Slides folder (`Slides/`) — talks page links into it
- `Sarwan_Ali_CV.pdf` — header CV link
- `Courses/course_home.html` — teaching page links to `Courses/int_ml.html`
- `cthulu.png` — hero photo

**Replaced**:
- `index.html` — full rewrite with new design, current bio (postdoc at Columbia), 2025 publications, recent news.

**Files you can clean up later** (not used by the new site, optional):
- `About.html`, `Contact.html`, `PapersDiscussion.html`, `big_data_analytics.html`, `conferences.html` — these are old pages no longer linked from the new site. Leave them in the repo or delete; up to you.
- All the social PNG icons (`fb.png`, `tw.png`, etc.) — the new site uses text labels instead. Keep them if you want them around.

## Design notes

- **Typography**: Crimson Pro (serif display) + Source Sans 3 (body) + JetBrains Mono (accents). Loaded from Google Fonts — no install required.
- **Light/dark mode**: Toggle in top-right; respects system preference; persists in localStorage.
- **Responsive**: Tested at 1280px desktop and 390px mobile.
- **Performance**: Pure static HTML/CSS/JS. No build step, no framework. Total page weight ~ 50 KB excluding fonts.
- **Accessibility**: Semantic landmarks, sufficient color contrast in both themes, respects `prefers-reduced-motion`.

## Local preview

```bash
cd <where you extracted the bundle>
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing checklist for future updates

When a paper gets accepted:
1. Add an entry at the top of the relevant section in `publications.html`.
2. Add a one-line entry at the top of `news.html` (latest year section).
3. If it's a flagship result, also add it to the **Selected Publications** on `index.html`.

When you give a talk:
1. Add an entry to `talks.html` under **Invited talks** or **Selected conference presentations**.
2. Drop the slides PDF into `Slides/` and link to it.

Good luck with the Calico application.
