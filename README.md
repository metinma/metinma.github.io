# metinma.github.io

Personal website: CV and blog. Plain HTML and CSS, no build step, served by GitHub Pages.

```
index.html            CV (home page)
blog/index.html       list of posts
blog/*.html           one file per post
blog/_template.html   starting point for a new post (not published)
style.css             all styling, incl. light/dark palette
assets/               avatar and favicon
```

## Writing a new post

1. Copy `blog/_template.html` to `blog/your-post-name.html`.
2. Fill in the title, summary, date and content.
3. Add a new `<li>` at the top of the list in `blog/index.html`.

## Colors

All colors are CSS variables at the top of `style.css`: one set for light mode
and one inside `@media (prefers-color-scheme: dark)`. Change them there and
the whole site follows.
