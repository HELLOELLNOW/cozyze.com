# Cozyze — Coming Soon Site

A simple one-page "coming soon" site for cozyze.com. Plain HTML/CSS/JS, no build step — works as-is on GitHub Pages.

## Files

- `index.html` — page structure and content
- `styles.css` — all styling (black/cream theme matching the logo)
- `script.js` — footer year + email form handling
- `assets/logo.png` — your CZ7 logo

## Deploy on GitHub Pages

1. Copy these files into your repo (root, or a `/docs` folder — your choice).
2. In the repo, go to **Settings → Pages**, set the source branch/folder to wherever you put these files.
3. GitHub will give you a `*.github.io` URL. To use `cozyze.com` instead:
   - In your domain registrar, add a `CNAME` record pointing `www` to `<username>.github.io`, and `A` records for the apex domain to GitHub's IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153).
   - In the repo's **Settings → Pages**, set the custom domain to `cozyze.com`.
   - Add a file named `CNAME` (no extension) at the site root containing just: `cozyze.com`

## Hooking up the email signup

The "Notify Me" form doesn't send anywhere yet — it's a static site, so there's no backend. Easiest free fix:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form, copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxx`).
3. In `index.html`, add it to the form tag: `<form class="signup" id="signup-form" action="https://formspree.io/f/xxxxxxx" method="POST">`
4. In `script.js`, delete the `e.preventDefault();` line (and the comment above it) so the form actually submits.

Alternatives: Mailchimp, ConvertKit, or Google Forms all offer similar free embeddable signup endpoints.

## Customizing

- Colors live at the top of `styles.css` under `:root`.
- Swap the Instagram/TikTok placeholder links in `index.html` (`<div class="socials">`) for your real profiles.
- Fonts are pulled from Google Fonts (Anton for the wordmark, Inter for body text) — swap the `<link>` in `index.html`'s `<head>` to change them.
