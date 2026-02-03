# GT Officials Website

## Deployment to Netlify

1. **Create a Git repo** or drag and drop the `gt-officials` folder into Netlify's deploy interface.
2. **Netlify Forms**: The forms use `data-netlify="true"` and will be automatically detected on deploy. No additional setup needed — form submissions appear in your Netlify dashboard under "Forms" and also send email notifications (configure the notification email in Netlify → Site settings → Forms → Form notifications).
3. **Custom domain**: Once deployed, add your domain (e.g., gtofficials.com) in Netlify → Domain settings. Netlify provides free SSL.

## Placeholders to Replace Before Launch

Search the HTML files for `[` to find all placeholder text. Here's the full list:

### become-an-official.html
- `[$ – $ per game]` — Pay ranges for Baseball/Softball and Basketball (2 places in the pay section)

### join-our-team.html
- `[Placeholder — collect a quote...]` — 2 testimonial quotes from officials

### for-associations.html
- `[Placeholder — collect a quote...]` — 1 testimonial quote from an association director
- Photo placeholder in the right column

### about.html
- `[This section needs Gail's real story...]` — Replace the entire story section with Gail's actual background
- `[Add: How long she's been in the industry...]` — Additional story details
- `[X]+` — 3 stat numbers (Years in Business, Games Assigned Annually, Officials on Roster)
- Photo placeholder for Gail's headshot

### faq.html
- `[$ – $ per game]` — Pay range in the "How much can I earn?" answer
- `[within X days / weekly / describe actual cadence]` — Payout timing in the "How quickly do you pay?" answer

### Image Placeholders (all pages)
Look for `<div class="img-placeholder">` — each has a suggestion for what photo to use.

## Photo Suggestions

| Location | Suggested Photo |
|----------|----------------|
| Home page — About section | Gail at a game, or officials on the field |
| Become an Official — What It Takes | Umpire behind the plate or referee on the court |
| For Associations — sidebar | Youth game in progress with officials visible |
| About page — Gail's photo | Professional headshot, approachable and confident |

## File Structure

```
gt-officials/
├── index.html              (Home page)
├── become-an-official.html (New officials)
├── join-our-team.html      (Experienced officials)
├── for-associations.html   (Leagues & associations)
├── about.html              (Gail's story)
├── faq.html                (FAQ by audience)
├── contact.html            (Contact info + form)
├── css/
│   └── styles.css          (All styles)
├── js/
│   └── main.js             (Nav, accordion, animations, forms)
└── images/                 (Add your photos here)
```

## Tech Notes

- **Pure HTML/CSS/JS** — no build step, no framework, no dependencies
- **Google Fonts**: Sora (headings) + DM Sans (body) loaded from Google Fonts CDN
- **Responsive**: Mobile-first, works on all screen sizes
- **Netlify Forms**: Built-in, just needs `data-netlify="true"` on form elements
- **SVG Icons**: All inline, no external icon library needed
- **Arbiter Links**: Footer includes link to Arbiter sign-in for officials
