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

After pushing to your own repository, run:

```sh
npm run deploy
```

This builds the site with the `/portfolio/` base path and publishes `dist` to the `gh-pages` branch. In your repository's **Settings > Pages**, select **Deploy from a branch**, then **gh-pages** and **/ (root)**. Your site will be available at `https://shivani1064.github.io/portfolio/` once GitHub finishes deployment.

If your repository has a different name, change `/portfolio/` in the `predeploy` script in `package.json` to match. For a `YOUR_USERNAME.github.io` repository or a custom domain, use `/` instead. The resume download and asset URLs use the configured base path.

On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Update resume content

- Downloadable PDF: `public/shivanikatta_Resume.pdf`
- Introduction and objective: `src/components/Hero.jsx` and `src/components/About.jsx`
- Skills and activities: `src/components/Skills.jsx` and `src/components/Activities.jsx`
- Education and projects: `src/data/educationData.js` and `src/data/projects.json`
- Contact and social links: `src/components/Contact.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx`

Website text and the PDF are separate files; updating one does not automatically update the other.
