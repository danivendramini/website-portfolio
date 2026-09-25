# Illustrator portfolio

A lightweight, responsive portfolio site built with plain HTML, CSS, and JavaScript. It can be uploaded directly to GitHub and published with GitHub Pages.

## Replace the placeholders

1. Open `index.html` and replace `Your Name`, `[your city]`, the biography, email address, and social links.
2. Replace the CSS-built artwork placeholders with your own images. The easiest route is to put your files in an `assets/` folder and replace each `.art-frame` block with an image, for example:

```html
<div class="project-art art-frame">
  <img src="assets/project-one.jpg" alt="Description of the illustration" />
</div>
```

Add this to `styles.css` so the image fills its frame:

```css
.project-art img { width: 100%; height: 100%; object-fit: cover; display: block; }
```

3. Update the page title and description in the `<head>` of `index.html`.

## Preview locally

Because this is a static site, you can double-click `index.html` to preview it. For a more accurate local preview, run a simple server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

Create a GitHub repository, upload `index.html`, `styles.css`, `script.js`, `README.md`, and your `assets/` folder, then enable **Settings → Pages → Deploy from a branch** and select the main branch.
