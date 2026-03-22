# Ankit Gupta Portfolio v2 — Dark 3D Geometric
### Built with Angular 17 (Standalone) · Space Grotesk + JetBrains Mono

---

## Design Highlights
- **Animated particle + geometric background** (canvas-based, 60 connected nodes)
- **Custom dual cursor** (cyan dot + ring follower)
- **Geometric AI-style avatar** (custom SVG illustration)
- **Rotating orbit rings** around avatar
- **Floating tech tags** beside avatar
- **Marquee ticker** with tech stack
- **Animated counters** on hero stats
- **Dark cyber theme** — cyan `#00e5c3` + purple `#7c6bff` accents

## Pages
| Route | Component | Highlights |
|---|---|---|
| `/home` | Hero | Avatar, stats, animated counters, marquee |
| `/about` | About | Bio, info table, hobbies grid |
| `/skills` | Skills | Filterable grid, color-coded icons, animated bars |
| `/timeline` | Timeline | Work history, current role highlighted |
| `/projects` | Projects | Featured project span, status badges |
| `/contact` | Contact | Dark form, reactive validation, social links |

---

## Getting Started

```bash
npm install
ng serve
# Open http://localhost:4200
```

## Build for production

```bash
ng build
# Output in dist/ankit-portfolio-v2/browser
```

---

## Customization

### Your info lives in:
- `hero.component.ts` — name, tagline, links
- `about.component.ts` — details array, hobbies array
- `skills.component.ts` — skills array (name, percent, color, icon)
- `timeline.component.ts` — work history array
- `projects.component.ts` — projects array
- `contact.component.ts` — contact info links

### Change accent color:
In `styles.scss`:
```scss
--cyan: #00e5c3;   /* Change this */
--purple: #7c6bff; /* And/or this */
```

---

## Deploy Free

### Vercel (Recommended)
```bash
npm i -g vercel
ng build
vercel dist/ankit-portfolio-v2/browser
```

### Netlify
1. `ng build`
2. Drag `dist/ankit-portfolio-v2/browser` to netlify.com

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy
```

---

Built with Angular 17 — proving Angular makes elite-level frontends! 💪
