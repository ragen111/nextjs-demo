"use client";

import { useState } from "react";

type ApiResult = {
  message: string;
  timestamp: string;
  runtime: string;
};

export default function ApiStatus() {
  const [data, setData] = useState<ApiResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ping() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/hello", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData((await res.json()) as ApiResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={ping}
        disabled={loading}
        className="self-start rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/10 disabled:opacity-50"
      >
        {loading ? "Calling…" : "Call /api/hello"}
      </button>

      {error && <p className="text-sm text-red-400">Error: {error}</p>}

      {data && (
        <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-xs leading-relaxed text-emerald-300">
{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
