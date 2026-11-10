# metinma.github.io

Personal website: CV and blog. Plain HTML and CSS, no build step, served by GitHub Pages.

```
index.html             CV (home page)
404.html               shown by GitHub Pages for any missing page
blog/index.html        list of posts
blog/*.html            one file per post
blog/feed.xml          RSS feed
blog/_template.html    starting point for a new post (not published)
style.css              all styling, incl. light/dark palette
assets/icon.svg        favicon
assets/cv.pdf          downloadable CV (generated from index.html)
_tools/                helper scripts (not published)
```

## Placeholders still to fill in

Elements with `class="todo"` in `index.html` show a dashed gold outline on the
page. Replace their text with your information, then remove the `todo` class.
Search the file for `todo`. They are: photo, LinkedIn and GitHub links,
summary, degree dates, research dates, tracer project context and languages.

## Updating the PDF CV

After changing `index.html`, regenerate `assets/cv.pdf`, either:

- **In a browser:** open the CV page, Print → Save as PDF (A4), and save it
  over `assets/cv.pdf`. The print styles hide the menu and footer.
- **With the script:** `node _tools/make-cv-pdf.js` (needs Node.js and Playwright).

## Writing a new post

1. Copy `blog/_template.html` to `blog/your-post-name.html`.
2. Fill in the title, summary, date, page URL and content.
3. Add a new `<li>` at the top of the list in `blog/index.html`.
4. Add a new `<item>` at the top of `blog/feed.xml`.

## Colors

All colors are CSS variables at the top of `style.css`: one set for light mode
and one inside `@media (prefers-color-scheme: dark)`. Change them there and
the whole site follows.
