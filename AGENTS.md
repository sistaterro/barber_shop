# AGENTS.md

Maintenance guide for AI agents working on this project.

## 1) Project overview
- Static project with no build pipeline: plain HTML, CSS, and JavaScript.
- Public pages:
  - `index.html` (home)
  - `history.html`
  - `services.html`
  - `booking/index.html` (canonical contact and booking page at `/booking/`)
- Compatibility route:
  - `booking.html` redirects old links to `booking/`; keep it unless compatibility is intentionally dropped.
- Shared editable data: `configuration.json`.
- Assets folder: `assets/`.
- Visual direction: classic dark barber style, gold accents, serif typography, and ornamental details.

## 2) Navigation and booking route contract
- Required top menu: `Home`, `History`, `Services`, `Contact`.
- Correct links:
  - Home -> `index.html`
  - History -> `history.html`
  - Services -> `services.html`
  - Contact -> `booking/`
- Any `Contact`, `Afspraak Maken`, or equivalent booking CTA must point to `booking/`.
- WhatsApp links are the exception and must remain on `wa.me`.
- The printed QR code points to `https://lighttown-barbershop.nl/booking/`.
- `booking/index.html` contains `<base href="../">`; preserve it so root-relative project assets and links continue to work from the nested route.
- Do not add a redundant extra nav CTA inside the booking page unless explicitly requested.

## 3) Canonical external links
- Instagram:
  - `https://www.instagram.com/lighttownbarbershop?igsh=MXQyZ3ZpamFlamZxYg%3D%3D`
- WhatsApp:
  - `https://wa.me/31613877236`
- Phone:
  - `tel:+31613877236`
- Email:
  - `mailto:info@lighttown-barbershop.nl`
- Booking provider:
  - Salonized iframe in `booking/index.html`.
- Map provider:
  - Google Maps iframe in `booking/index.html`.

## 4) Editable configuration
- `configuration.json` is the intended central editing file for business hours, services, durations, prices, and frontend associations.
- Opening hours are stored in `openingHours` with Dutch day names.
- Use `open: true` for open days and `open: false` for closed days.
- Open days use 24-hour `opens` and `closes` strings.
- Services are grouped under `categories[].treatments[]`.
- Every category and treatment has a stable unique `id`.
- `price` is the intended current/source price in EUR.
- `priceType` can distinguish values such as `exact`, `from`, or `included`.
- `frontendAssociations` records semantic matches even when frontend wording differs.
- `displayedPrice` records the legacy price currently hardcoded on the referenced page; it is not the authoritative new price.
- `needsClientConfirmation: true` marks data inferred from the old frontend rather than supplied in the original service list.
- Current inventory: 3 categories and 11 treatments.
- Important limitation: the HTML pages do not yet fetch or render `configuration.json`. Editing the JSON alone will not update the visible site until runtime rendering is implemented.
- The Salonized booking catalog is external and is not controlled by `configuration.json`.

## 5) Current business hours (source of truth)
- Tuesday to Friday: `10:00 - 19:00`.
- Saturday: `10:00 - 17:00`.
- Monday and Sunday: `Gesloten`.
- Keep these consistent in:
  - `configuration.json` opening hours
  - `index.html` hours summary
  - `booking/index.html` daily hours table

## 6) Logos and icons
- Main nav/footer logo: `assets/logo.png`.
- Favicon/app icon: `assets/logoico.png`.
- Home hero logo: `assets/main logo.png`.
  - It belongs inside `.hero-content`, above the title block in `index.html`.

## 7) Readability and responsive rules
- Avoid tiny text and low contrast.
- Recommended minimums:
  - body/paragraph text: 18px+
  - footer/secondary list text: 17px+
- The booking hours table uses a two-column grid, a fixed gap, and `white-space: nowrap` for times.
- The home hero can grow beyond the viewport and has a short-screen breakpoint so the main logo is not clipped behind the fixed nav.
- Preserve the premium hero treatment: deeper background tuning, dark overlays, and strong title shadows.

## 8) Ornaments and symbols
- Prefer `✦` or an elegant equivalent.
- Do not revert to `❧ ❧ ❧`.
- Keep ornament style consistent across pages.

## 9) Page-specific notes
- `index.html`
  - Main hero includes `assets/main logo.png`.
  - Welkom image is `assets/barber2.jpg`.
  - Uses `scrollTo_` for internal anchor scrolling.
  - Featured service cards and prices are currently hardcoded.
- `history.html`
  - Contains historical content and CTA blocks.
- `services.html`
  - Full price lists are currently hardcoded.
  - Semantic equivalents and legacy displayed prices are documented in `configuration.json`.
- `booking/index.html`
  - Canonical URL is `/booking/`.
  - Contains contact details, business hours, Salonized booking widget, and map.
  - Keep provider zoom controls available when possible.
  - Do not break iframe behavior when editing `overflow`, `pointer-events`, `z-index`, or container sizing.
- `booking.html`
  - Redirect-only compatibility file; it is not the editable booking page.

## 10) Minimum QA before closing changes
1. Open `index.html`, `history.html`, `services.html`, and `booking/`.
2. Verify desktop and mobile navigation.
3. Confirm Home points to `index.html` everywhere.
4. Confirm Contact and booking CTAs point to `booking/`.
5. Verify `booking.html` redirects to `booking/`.
6. Verify the QR URL path resolves to `booking/index.html`.
7. Verify business hours against `configuration.json`.
8. Check text readability, especially footer text, disclaimers, and hours.
9. Verify nav/footer logos, favicon, and home hero logo.
10. Test Instagram, WhatsApp, phone, and email links.
11. Test the Salonized widget and map controls.
12. Parse `configuration.json` and check unique IDs, prices, and associations.

## 11) Useful commands (Windows PowerShell)
- Find navigation and booking routes:
  - `rg -n "index\\.html|history\\.html|services\\.html|booking/|booking\\.html|afspraak" -g "*.html" .`
- Find business hours:
  - `rg -n "10:00|19:00|17:00|Gesloten|Openingstijden" -g "*.html" -g "*.json" .`
- Find service prices and configuration references:
  - `rg -n "price|displayedPrice|price-amount|service-price|€" -g "*.html" -g "*.json" .`
- Find external links:
  - `rg -n "instagram|wa\\.me|mailto:|tel:|salonized" -g "*.html" .`
- Find ornament symbols:
  - `rg -n "❧|✦|ornament-symbol" -g "*.html" .`
- Validate configuration JSON:
  - `Get-Content -Raw configuration.json | ConvertFrom-Json | Out-Null`

## 12) Editing rules for agents
- Do not introduce frameworks or build tools unless explicitly requested.
- Keep the current structure and conventions.
- Avoid large copy rewrites unless requested.
- If nav, footer, icons, or links change, replicate the change across all pages.
- Preserve `booking.html` compatibility and the canonical `/booking/` route.
- Do not treat `displayedPrice` as the authoritative service price.
- Do not assume that changing `configuration.json` updates the live HTML until the renderer exists.
- Decision priority:
  1. Correct navigation and QR compatibility
  2. Correct business data
  3. Readability
  4. Cross-page consistency
  5. Visual polish
