# Lighttown Barbershop

Static website for Lighttown Barbershop, a barbershop located in Eindhoven. Its design combines a classic dark aesthetic with gold accents, serif typography, and ornamental details.

## Pages

- `index.html`: home page
- `history.html`: history of the barbershop and the trade
- `services.html`: services and pricing
- `contact.html`: contact details, opening hours, booking, and map
- `assets/`: logos, photographs, and other site images

## Running Locally

The project uses plain HTML, CSS, and JavaScript. It does not require installation, dependencies, or a build process.

You can open `index.html` directly in a browser. To test it through a local server, run the following command from the project directory:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Business Details

- Address: Leenderweg 80-b, 5615 AB Eindhoven
- Phone and WhatsApp: +31 6 138 77 236
- Email: info@lighttown-barbershop.nl
- Instagram: [@lighttownbarbershop](https://www.instagram.com/lighttownbarbershop?igsh=MXQyZ3ZpamFlamZxYg%3D%3D)

### Opening Hours

| Day | Hours |
|---|---|
| Monday | Closed |
| Tuesday to Friday | 10:00–19:00 |
| Saturday | 09:00–17:00 |
| Sunday | Closed |

## Maintenance

When updating the site:

- Keep the `Home`, `History`, `Services`, and `Contact` menu on every page.
- Point contact and booking calls to action to `contact.html`, except for direct WhatsApp links.
- Keep the address, opening hours, and contact details synchronized across all pages.
- Verify navigation and readability on both desktop and mobile.
- Do not introduce frameworks or build tools without a concrete need.

## Main Assets

- Navigation and footer logo: `assets/logo.png`
- Favicon and app icon: `assets/logoico.png`
- Main hero logo: `assets/main logo.png`
