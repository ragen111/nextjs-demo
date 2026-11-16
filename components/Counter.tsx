"use client";

import { useState } from "react";

export default function Counter({ step = 1 }: { step?: number }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-4xl font-semibold tabular-nums tracking-tight">
          {count}
        </span>
        <span className="text-sm text-slate-400">clicks counted</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCount((c) => c + step)}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
        >
          +{step}
        </button>
        <button
          onClick={() => setCount((c) => c - step)}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          -{step}
        </button>
        <button
          onClick={() => setCount(0)}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
