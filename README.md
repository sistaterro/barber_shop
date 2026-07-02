# Lighttown Barbershop

Sitio web estático de Lighttown Barbershop, una barbería ubicada en Eindhoven. El diseño combina una estética clásica y oscura con detalles dorados, tipografía serif y elementos ornamentales.

## Páginas

- `index.html`: página de inicio
- `history.html`: historia de la barbería y del oficio
- `services.html`: servicios y precios
- `contact.html`: contacto, horarios, reservas y mapa
- `assets/`: logotipos, fotografías e imágenes del sitio

## Ejecutar localmente

El proyecto usa HTML, CSS y JavaScript puro. No necesita instalación, dependencias ni proceso de compilación.

Podés abrir `index.html` directamente en el navegador. Para probarlo mediante un servidor local, desde la carpeta del proyecto ejecutá:

```powershell
python -m http.server 8000
```

Después visitá `http://localhost:8000`.

## Datos del negocio

- Dirección: Leenderweg 80-b, 5615 AB Eindhoven
- Teléfono y WhatsApp: +31 6 138 77 236
- Email: info@lighttown-barbershop.nl
- Instagram: [@lighttownbarbershop](https://www.instagram.com/lighttownbarbershop?igsh=MXQyZ3ZpamFlamZxYg%3D%3D)

### Horarios

| Día | Horario |
|---|---|
| Lunes | Cerrado |
| Martes a viernes | 10:00–19:00 |
| Sábado | 09:00–17:00 |
| Domingo | Cerrado |

## Mantenimiento

Al modificar el sitio:

- Conservá el menú `Home`, `History`, `Services` y `Contact` en todas las páginas.
- Dirigí las llamadas a contacto o reserva hacia `contact.html`, salvo los enlaces directos de WhatsApp.
- Mantené sincronizados la dirección, los horarios y los datos de contacto en todas las páginas.
- Verificá la navegación y la legibilidad tanto en escritorio como en móvil.
- No introduzcas frameworks o herramientas de compilación sin una necesidad concreta.

## Recursos principales

- Logo de navegación y pie: `assets/logo.png`
- Favicon: `assets/logoico.png`
- Logo principal del hero: `assets/main logo.png`

