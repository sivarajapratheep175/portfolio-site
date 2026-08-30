# Sivaraja Pratheep — Portfolio

A single-page personal portfolio and link hub, built with plain HTML, CSS, and JavaScript. No frameworks, no build step — clone it and open `index.html`.

🔗 **Live demo:** _add your GitHub Pages URL here once deployed_

---

## Preview

A clean, modern, single-accent blue theme with a sticky nav, scroll-reveal sections, and a responsive layout down to mobile.

---

## Sections

| Section | What it covers |
|---|---|
| **Hero** | Name, role, short intro, resume download |
| **About** | Background, university, focus areas |
| **Skills** | Development, Cloud & AI, and Design tooling |
| **Work** | Featured projects with links |
| **Credentials** | Certificates and recognitions |
| **Elsewhere** | Links to every other profile (LinkedIn, GitHub, socials, etc.) |
| **Contact** | Email and LinkedIn call-to-action |

---

## Tech stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid/flexbox, no framework
- **Vanilla JavaScript** — mobile nav toggle, scroll-reveal via `IntersectionObserver`
- **Font Awesome** (via CDN) — icons
- **Google Fonts** — Space Grotesk (display) + Inter (body)

---

## Project structure

```
portfolio-site/
├── index.html      # all page content/sections
├── style.css        # design tokens + styles
├── script.js         # nav toggle + scroll-reveal
├── resume.pdf         # downloadable resume
└── images/
    └── logo.jpeg        # profile photo
```

---

## Running locally

No build step required.

```bash
git clone <this-repo-url>
cd portfolio-site
# then just open index.html in your browser
```

Or serve it locally for a closer-to-production feel:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## Deploying to GitHub Pages

1. Push this folder's contents to a GitHub repo (e.g. `portfolio`).
2. Go to **Settings → Pages** in the repo.
3. Under **Source**, select the branch (usually `main`) and root folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## Customizing

- **Colors & type** — edit the CSS custom properties at the top of `style.css` under `:root`.
- **Content** — edit the text directly in `index.html`; each section is clearly commented.
- **Links** — update the `href` values in the *Work* and *Elsewhere* sections.
- **Resume** — replace `resume.pdf` with your own file (same filename, or update the link in `index.html`).
- **Photo** — replace `images/logo.jpeg` with your own image (same filename, or update the `src` in `index.html`).

---

## Future improvements

- 🌗 Light mode toggle
- 📊 Project case-study pages
- 📬 Working contact form (e.g. via Formspree)
- 🧭 Active-section highlighting in the nav on scroll

---

## License

Open-source under the MIT License. Feel free to fork and adapt for your own portfolio.

---

Built by **Sivaraja Pratheep**.
