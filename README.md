# Nishant Deshmukh | Salesforce Developer Portfolio

Personal portfolio built with React (Create React App) and styled-components, published on GitHub Pages at https://nishant-deshmukh.github.io

## Run locally

```bash
npm install
npm start          # opens http://localhost:3000
```

## Publish

```bash
npm run deploy     # builds the site and pushes it to the gh-pages branch
```

## How to update the site

| What to change | Where |
|---|---|
| Any text, links, skills, experience, projects, certifications | `src/data/constants.js` |
| Profile photo | Replace `src/images/profile.png` (portrait, about 680 × 840) |
| Project screenshots | Replace files in `src/images/projects/` (about 1200 × 760) |
| Certification badges | Replace files in `src/images/certifications/` (square, about 352 × 352) |
| Skill icons | Replace or add files in `src/images/skills/` |
| Resume | Put `Nishant_Deshmukh_Resume.pdf` in `public/resume/` |
| Colors and fonts | `src/utils/theme.js` |
| Show or hide Salesforce Implementations | `showImplementations` (true / false) at the top of `src/data/constants.js` |
| "Open to roles" pill above the name | `Bio.openToWork` in `src/data/constants.js` (set to `""` to hide) |
| Phone number in Contact | `Bio.phone` in `src/data/constants.js` (empty = hidden) |
| Tags floating around the photo | `Bio.heroChips` in `src/data/constants.js` |
| Section order | `src/App.js` and `allNavLinks` in `src/data/constants.js` |

To replace an image, keep the same file name. If you use a new name or a
different file type (for example `.jpg` instead of `.png`), update the
matching `import` line at the top of `src/data/constants.js`.

## Folder structure

```
public/
  favicon.ico
  index.html
  resume/                  ← resume PDF goes here
src/
  App.js                   ← section order
  App.css                  ← global styles
  data/constants.js        ← ALL site content
  utils/theme.js           ← colors and fonts
  images/
    profile.png
    skills/
    certifications/
    projects/
  components/
    Navbar/  HeroSection/  About/  Skills/  Certifications/
    Experience/  Implementations/  Projects/  Contact/  Footer/
    BackToTop/             ← corner button after scrolling
    Section/               ← shared section title, background and fade-in
    Cards/                 ← skill chip, experience, implementation, project cards
    Icons/                 ← small line icons
```
