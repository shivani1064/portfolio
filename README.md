# Shivani Reddy Katta - Portfolio

React, Vite, and Tailwind CSS portfolio based on the supplied resume. Includes an objective, skills, education, academic projects, activities, social links, and a downloadable resume.

## Development

Run `npm install`, then `npm run dev`. Use `npm run build` for a production build and `npm run lint` for static checks.

## Contact

The contact form opens the visitor's email app with a draft addressed to Shivani. It does not send messages automatically or require EmailJS credentials. The resume is served from `public/shivanikatta_Resume.pdf`.

Project repository and demo links are omitted because the resume does not supply them. Project cards use text-based visuals.

## GitHub repository

Source: [shivani1064/portfolio](https://github.com/shivani1064/portfolio).

To publish future updates from this checkout:

```sh
git add .
git commit -m "Update portfolio"
git push origin main
```

## Publish with GitHub Pages

Live site: [shivani1064.github.io/portfolio](https://shivani1064.github.io/portfolio/).

After pushing source changes to `main`, publish the updated site with:

```sh
npm run deploy
```

This builds the site with the `/portfolio/` base path and publishes `dist` to the `gh-pages` branch in `shivani1064/portfolio`. GitHub Pages uses **Deploy from a branch**, **gh-pages**, and **/ (root)**. The deployment includes `.nojekyll` to serve the Vite build directly. No custom domain or `CNAME` file is used. GitHub may take a few minutes to publish each update.

The base path is configured in `vite.config.js`; asset links and the resume download use it. Local development also opens at `/portfolio/`.

On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Update resume content

- Downloadable PDF: `public/shivanikatta_Resume.pdf`
- Introduction and objective: `src/components/Hero.jsx` and `src/components/About.jsx`
- Skills and activities: `src/components/Skills.jsx` and `src/components/Activities.jsx`
- Education and projects: `src/data/educationData.js` and `src/data/projects.json`
- Contact and social links: `src/components/Contact.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx`

Website text and the PDF are separate files; updating one does not automatically update the other.
