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
```

## Placeholders still to fill in

Elements with `class="todo"` in `index.html` still hold placeholder text. The
class has no visual effect; it only marks what is left. Replace the text with
your information, then remove the `todo` class. Search the file for `todo`.
They are: photo, summary, degree dates, research dates, tracer project context
and languages.

## PDF version of the CV

Open the CV page and use the browser's Print → Save as PDF. The print styles
hide the menu and footer and switch to black and white.

## Writing a new post

1. Copy `blog/_template.html` to `blog/your-post-name.html`.
2. Fill in the title, summary, date, page URL and content.
3. Add a new `<li>` at the top of the list in `blog/index.html`.
4. Add a new `<item>` at the top of `blog/feed.xml`.

## Colors

All colors are CSS variables at the top of `style.css`: one set for light mode
and one inside `@media (prefers-color-scheme: dark)`. Change them there and
the whole site follows.
