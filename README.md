# TextCrafter project site

This subproject contains a single-page `Next.js` site for the `TextCrafter` paper and is configured for `GitHub Pages` via static export.

## Local development

Run the site locally:

```bash
cd site
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Files you will likely edit

- `site/src/data/project.ts`: title, authors, links, section text, citation
- `site/src/app/page.tsx`: page layout and section ordering
- `site/public/images/paper/`: project figures used on the page

## Build for production

```bash
cd site
npm run build
```

The static output is generated into `site/out`.

## GitHub Pages deployment

This repository includes a workflow at `.github/workflows/deploy-pages.yml`.

To enable deployment:

1. Push the repository to GitHub.
2. In the GitHub repository, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the default branch again, or manually run the workflow.

The workflow builds `site/`, exports static files, and deploys `site/out` to GitHub Pages.

## Notes

- External project links are placeholders right now and can be filled in later in `site/src/data/project.ts`.
- The current BibTeX block is a safe manuscript placeholder and should be updated after final publication details are available.
