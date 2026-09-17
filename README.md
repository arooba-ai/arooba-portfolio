# Arooba — Portfolio

A dark-themed, lavender-accented personal portfolio site. Plain HTML/CSS/JS —
no build step, no dependencies, opens straight in a browser.

## File structure

```
portfolio/
├── index.html      # Page structure (semantic HTML, all sections)
├── style.css        # Design tokens + all styling, organized by section
├── data.js           # All content: skills, projects, education, journey, contact
├── main.js             # Rendering + interactions (nav, reveals, project cards)
├── profile.png          # Profile photo, used in the About section
└── README.md
```

## Running it locally

Just open `index.html` in a browser. For live-reload while editing, you can
also serve it with any static server, e.g.:

```
npx serve .
```

## Before you publish this

1. **Add real contact info.** Open `js/data.js` and find `CONTACT_LINKS` near
   the bottom — replace the placeholder email and LinkedIn URL with your real
   ones, and remove `placeholder: true` from each entry once it's real.
2. **Profile photo.** Already wired in — `profile.png` is used in the About
   section. Replace that file (keep the same name) to update the photo.
3. **Live demo links.** If any project ever gets a live/hosted demo, open
   `js/data.js` and set that project's `demo` field to the URL — a "Live
   demo" button will appear automatically next to "View on GitHub."

## Adding a new project

Open `js/data.js` and add another object to the `PROJECTS` array, following
the same shape as the existing ones:

```js
{
  name: "Project Name",
  tagline: "One short line.",
  description: "1-3 sentences, what it is.",
  features: ["Feature one", "Feature two"],
  tech: ["Tech", "Stack"],
  github: "https://github.com/arooba-ai/your-repo",
  demo: null, // or a URL
}
```

The project grid and case-study cards will pick it up automatically — no
other file needs to change.

## Notes on content accuracy

Every fact on this site (projects, coursework, tools) reflects what was
provided directly — nothing was invented. If anything changes (new project,
finished course, new tool you're comfortable listing), edit the corresponding
array in `js/data.js` rather than editing the HTML directly, so the content
stays in one place.
