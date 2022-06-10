# Neutralino + Vue3 starter

Starter template for Neutralino.js projects with Vue3 and Vite following the [Using Frontend libraries](https://neutralino.js.org/docs/how-to/use-a-frontend-library) guide.

It uses PNPM to manage dependencies and run scripts.

## Setup

If you haven't already, install globally Neutralino's neu CLI

```bash
pnpm install -g @neutralinojs/neu
```

Then install Vue dependencies and setup the Neutralino app:

```bash
pnpm run install:all
```

### Running the dev server

First you always need to run the Vue + vite dev server:

```bash
pnpm run dev
```

You can develop the client side part by just running this command and opening the browser on the indicated URL, but when you want to interact with Neutralino and the native APIs, you need to run the desktop app server on other terminal:

```bash
pnpm run desktop
```

### Building

The following command will build the Vue app and then bundle it up with Neutralino:

```bash
pnpm run build
```
