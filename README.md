# Next.js Demo

A minimal, production-shaped Next.js demo app: **App Router**, **React Server Components**, **TypeScript (strict)**, **Tailwind CSS v4**, and a typed **API route**.

## What's inside

```
app/
  layout.tsx        # root layout + metadata
  page.tsx          # landing page (server component)
  globals.css       # Tailwind entry + theme tokens
  api/hello/route.ts# GET handler returning JSON
components/
  Counter.tsx       # client component (useState)
  ApiStatus.tsx     # client component calling the API route
```

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Routes

| Route        | Type             | Description                              |
| ------------ | ---------------- | ---------------------------------------- |
| `/`          | Server component | Landing page with interactive demos       |
| `/api/hello` | Route handler    | Returns `{ message, timestamp, runtime }` |

## Notes

- `app/globals.css` uses the Tailwind v4 single-import form (`@import "tailwindcss"`) — there is no `tailwind.config.js` by default; theme tokens are declared with `@theme`.
- Styling is intentionally dependency-free otherwise, so the demo stays easy to read.
- `next-env.d.ts` is generated on first run and is git-ignored.

## License

MIT
