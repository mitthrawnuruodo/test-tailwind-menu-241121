# Simple responsive menu styled with Tailwind

## Initialize

`nmp i`

## Scripts

### Run Tailwind

`npm run tailwind`

This uses the watch flag, so you can change the tailwind.css file to re-generate the style.css file on save.

### Run Live-Server

`npm run start`

Opens the page in your default browser, using port `8080`

### Run Tailwind and Live-Server

`npm run dev`

Uses `npm-run-all` to sequensially run Tailwind and then Live-Server

Note that when it detects changess to the tailwind.css it trigges a refresh, but then you need to wait for Tailwind to finish building, and then updated style.css makes it refresh again. 

Annoyance: The logo svg tends to re-build itselt, covering the entire page, every time the css changes.