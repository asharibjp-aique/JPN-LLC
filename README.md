# JPN LLC

A premium, bilingual single-page portfolio for JPN LLC's Japanese vehicle sourcing and export business.

## Highlights

- One-click English ↔ Japanese full-site language toggle
- Six-car responsive showcase with three photographic exterior-color previews per model
- Full original company logo in the hero and the owner's supplied Prado photograph
- Owner profile and direct contact actions
- WhatsApp and LINE QR codes
- Front-end only React architecture
- Automated GitHub Pages deployment

## Hosting

Primary free address: https://jpnllc.pages.dev/

GitHub Pages mirror: https://asharibjp-aique.github.io/JPN-LLC/

Cloudflare Pages project: `jpnllc` (Direct Upload). For updates, run `pnpm build` and upload the contents of `dist` to this project's production deployment. GitHub Pages continues to deploy automatically from `main`.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm preview
```

Managed by **AIQUE**.

Vehicle imagery is illustrative; colors and stock are confirmed during sourcing. The logo, owner photograph and contact QR codes are preserved from the supplied files.

The built-in ImageGen prompt set and saved asset paths are recorded in [docs/vehicle-imagery.md](docs/vehicle-imagery.md).
