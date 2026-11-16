import ApiStatus from "@/components/ApiStatus";
import Counter from "@/components/Counter";

const features = [
  {
    title: "App Router",
    body: "File-system routing with nested layouts, streaming and React Server Components.",
  },
  {
    title: "TypeScript",
    body: "Strict typing end to end, including typed API responses on the client.",
  },
  {
    title: "Tailwind CSS v4",
    body: "Utility-first styling compiled through a single PostCSS plugin.",
  },
  {
    title: "API Routes",
    body: "Server-side request handlers living next to the pages that use them.",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_60%)]"
      />

      <header className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
          Next.js 16 · React 19 · TypeScript
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          A minimal{" "}
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
            Next.js demo
          </span>{" "}
          project.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Server components by default, one client component where interaction is
          needed, and a typed API route. Clone it, run{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">
            npm run dev
          </code>
          , and start building.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <h2 className="mb-2 font-medium">{f.title}</h2>
            <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-1 text-sm font-medium tracking-wide text-slate-300 uppercase">
            Client state
          </h2>
          <p className="mb-5 text-sm text-slate-500">
            A client component hydrated in the browser.
          </p>
          <Counter step={1} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-1 text-sm font-medium tracking-wide text-slate-300 uppercase">
            Server data
          </h2>
          <p className="mb-5 text-sm text-slate-500">
            Fetches <code className="font-mono">/api/hello</code> on demand.
          </p>
          <ApiStatus />
        </div>
      </section>

      <footer className="mt-auto border-t border-white/10 pt-6 text-sm text-slate-500">
        Built with{" "}
        <a
          className="text-slate-300 underline decoration-white/30 underline-offset-4 hover:decoration-white"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="text-slate-300 underline decoration-white/30 underline-offset-4 hover:decoration-white"
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        .
      </footer>
    </main>
  );
}
