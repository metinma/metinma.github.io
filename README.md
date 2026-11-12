# metinma.github.io

Personal website: CV and blog. Plain HTML and CSS, no build step, served by GitHub Pages.

```
index.html             About page, laid out as a CV (home page)
cv.pdf                 one-page PDF of the About page (generated from index.html)
404.html               shown by GitHub Pages for any missing page
blog/index.html        list of posts
blog/*.html            one file per post
blog/feed.xml          RSS feed
blog/_template.html    starting point for a new post (not published)
style.css              all styling, incl. light/dark palette
assets/icon.svg        favicon
```

## Placeholders still to fill in

Elements with `class="todo"` in `index.html` still hold placeholder text. The
class has no visual effect; it only marks what is left. Replace the text with
your information, then remove the `todo` class. Search the file for `todo`.
They are: photo, B.Sc. dates, UHS research dates and languages.

## PDF version of the CV

`cv.pdf` is printed from `index.html` using the page's print styles, which hide
the menu, logo, download link and footer and lay the CV out on one A4 page.
Whenever the About page changes, regenerate it from the repository root:

```bash
chromium --headless --no-pdf-header-footer --print-to-pdf=cv.pdf index.html
```

Then check it is still exactly one page (`pdfinfo cv.pdf`). If it spills onto a
second page, tighten the spacing in the `@media print` block of `style.css`;
keep body text at 9 pt or larger.

## Writing a new post

1. Copy `blog/_template.html` to `blog/your-post-name.html`.
2. Fill in the title, summary, date, page URL and content.
3. Add a new `<li>` at the top of the list in `blog/index.html`.
4. Add a new `<item>` at the top of `blog/feed.xml`.

## Colors

All colors are CSS variables at the top of `style.css`: one set for light mode
and one inside `@media (prefers-color-scheme: dark)`. Change them there and
the whole site follows.
