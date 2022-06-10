# Neutralino + Vue3 starter

Starter template for Neutralino.js projects with Vue3 and Vite following the [Using Frontend libraries](https://neutralino.js.org/docs/how-to/use-a-frontend-library) guide.

It uses PNPM to manage dependencies and run scripts.

## Usage

Install dependencies:

```bash
pnpm install
```

You might need to install the Vue project dependencies too:

```bash
cd neutralino/vue && pnpm install
```

### Running the dev server

You need to run first the Vue+vite dev server:

```bash
pnpm run dev
```

You can develop the client side part just like that, but when you want to interact with Neutralino and the nativa APIs, you need to run the desktop app server:

```bash
pnpm run desktop
```

### Building

```bash
pnpm run build
```
