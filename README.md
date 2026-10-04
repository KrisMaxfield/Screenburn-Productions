# Screenburn Productions site

Static site built with Eleventy. Free to host, no subscriptions.

## Run it locally
Needs Node 18+.

    npm install
    npm start

Open http://localhost:8080. It reloads when you save a file.

## Add a film
1. Copy `src/films/_TEMPLATE.md.txt` to `src/films/your-film.md`.
2. Fill in the front matter (any line you don't need can be deleted).
3. Put the poster in `src/images/`.

The home page gallery and the film's own page are generated automatically.

## Where things live
- `src/_data/site.json` – site name, tagline, About text
- `src/_includes/` – page layouts (`base.njk`, `film.njk`)
- `src/css/style.css` – all styling (colors are variables at the top)
- `src/index.njk`, `src/about.njk` – gallery and About pages

## Put it online (free)
Push the folder to a GitHub repo, then use Cloudflare Pages (or Netlify / GitHub Pages):
- Build command: `npm run build`
- Output directory: `_site`

Then add your domain in the host's dashboard and update the DNS records at your registrar as it instructs. You keep paying only for the domain.

## GitHub Pages
A workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. For your domain, set it under Settings > Pages > Custom domain and add the DNS records GitHub lists.
