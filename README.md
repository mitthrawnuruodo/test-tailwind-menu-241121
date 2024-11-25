# Simple responsive menu styled with Tailwind

## Initialize

`nmp i`

Initializes npm and installs dependencies.

## Scripts

### Run Tailwind

`npm run tailwind`

This uses the watch flag, so you can change the tailwind.css file to re-generate the style.css file on save.

### Run Live-Server

`npm run start`

Opens the page in your default browser, using port `8080`

### Run Tailwind and Live-Server

`npm run dev`

Uses `npm-run-all` to run Tailwind and Live-Server in parallel.

Annoyance 1: When it detects changes to the tailwind.css it does trigger a refresh, but you need to wait for Tailwind to finish building, and then updated style.css makes it refresh again. 

Annoyance 2: The logo svg tends to re-build itself, covering the entire page, every time the css changes.

## Warnings in VS Code

Ignore any warnings in the tailwind.css file from the linter in VS Code, or install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Preview

https://tailwind-menu.netlify.app/