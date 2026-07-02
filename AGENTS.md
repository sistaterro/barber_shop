# AGENTS.md

Maintenance guide for AI agents working on this project.

## 1) Quick overview
- Static project, no build pipeline: plain HTML/CSS/JS.
- Pages:
  - `index.html` (home)
  - `history.html`
  - `services.html`
  - `contact.html`
- Assets folder: `assets/`
- Visual direction: classic dark barber style + gold accents, serif typography, ornamental details.

## 2) Navigation contract (do not break)
- Required top menu: `Home`, `History`, `Services`, `Contact`.
- Correct links:
  - Home -> `index.html`
  - History -> `history.html`
  - Services -> `services.html`
  - Contact -> `contact.html`
- CTA rule:
  - Any `Contact` or `Afspraak Maken` reference should point to `contact.html`.
  - Exception: WhatsApp links must stay on `wa.me`.
- In `contact.html`, do not add redundant extra nav CTA unless explicitly requested.

## 3) Canonical external links
- Instagram:
  - `https://www.instagram.com/lighttownbarbershop?igsh=MXQyZ3ZpamFlamZxYg%3D%3D`
- WhatsApp:
  - `https://wa.me/31613877236`
- Phone:
  - `tel:+31613877236`
- Email:
  - `mailto:info@lighttown-barbershop.nl`

## 4) Logos and icons
- Main logo (nav/footer): `assets/logo.png`
- Favicon/app icon: `assets/logoico.png`
- Extra home hero logo: `assets/main logo.png`
  - Placed in `index.html` inside `.hero-content`, above the title block.

## 5) Current business hours (source of truth)
- Tuesday to Friday: `10:00 - 19:00`
- Saturday: `09:00 - 17:00`
- Monday and Sunday: `Gesloten`
- Must be consistent in:
  - `index.html` hours summary
  - `contact.html` daily hours table

## 6) Readability rules (high priority)
- Avoid tiny text and low contrast.
- Recommended minimums:
  - body/paragraph text: 18px+
  - footer/secondary list text: 17px+
- In `contact.html`, hours table uses grid to prevent day/time collisions:
  - `.hour-row` has 2 columns + fixed gap + `white-space: nowrap` on time.

## 7) Ornaments and symbols
- Prefer `✦` (or elegant equivalents).
- Do not revert to `❧ ❧ ❧`.
- Keep ornament style consistent across pages.

## 8) Hero treatment (current snapshot)
- A subtle “premium” adjustment was applied across all pages:
  - slightly deeper background treatment (brightness/contrast/sepia tuning)
  - slightly darker overlays for stronger text readability
  - slightly stronger title shadows
- Goal: preserve mood while improving readability on low/uneven brightness displays.

## 9) Page-specific notes
- `index.html`
  - Main hero includes `assets/main logo.png`.
  - Welkom section image is `assets/barber2.jpg`.
  - Uses `scrollTo_` for internal anchor scrolling.
- `history.html`
  - Hero already has premium treatment.
  - Historical content + CTA blocks.
- `services.html`
  - Hero aligned with history/contact treatment.
  - Services/pricing cards and CTA.
- `contact.html`
  - Hero aligned with other pages.
  - Contact details + business hours + booking/map widget.

## 10) Map and booking widget in contact
- Keep provider zoom controls (+/-) available when possible.
- Do not break embed behavior when editing `overflow`, `pointer-events`, `z-index`, or container sizing.

## 11) Minimum QA before closing changes
1. Open `index.html`, `history.html`, `services.html`, `contact.html`.
2. Verify desktop + mobile nav behavior.
3. Confirm Home always points to `index.html`.
4. Verify CTA links (`contact.html`) and WhatsApp exception.
5. Verify current business hours in home and contact.
6. Check text readability (especially footer, disclaimers, hours).
7. Validate logos/icons:
   - nav/footer logos visible
   - favicon is `logoico.png`
   - home hero logo `main logo.png` visible
8. Test Instagram/WhatsApp/phone/email links.

## 12) Useful commands (Windows PowerShell)
- Find key links and routing:
  - `rg -n "index\\.html|history\\.html|services\\.html|contact\\.html|afspraak|booking" -g "*.html" .`
- Find business hours:
  - `rg -n "10:00|19:00|09:00|17:00|Gesloten|Openingstijden" -g "*.html" .`
- Find external links:
  - `rg -n "instagram|wa\\.me|mailto:|tel:" -g "*.html" .`
- Find ornament symbols:
  - `rg -n "❧|✦|ornament-symbol" -g "*.html" .`

## 13) Editing rules for agents
- Do not introduce frameworks or build tools unless explicitly requested.
- Keep current structure and conventions.
- Avoid large copy rewrites unless requested.
- If you change nav/footer/icons/links, replicate changes across all pages.
- Decision priority:
  1. Correct navigation
  2. Readability
  3. Cross-page consistency
  4. Visual polish

