import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Laptop won’t power on",
    body:
      "Unplug, remove battery, hold power button 30 s, reconnect. If still dead, likely DC‑jack or motherboard.",
  },
  {
    id: 2,
    title: "Windows blue screen 0x0000007B",
    body:
      "Usually corrupted bootloader. Boot to recovery, run `chkdsk /f` and `bootrec /fixmbr`.",
  },
];

const KnowledgeBase = () => {
  const [q, setQ] = useState("");

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      a.body.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Knowledge Base</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search…"
        className="w-full p-3 border rounded mb-6"
      />
      {filtered.map((a) => (
        <article key={a.id} className="mb-6">
          <h2 className="font-semibold">{a.title}</h2>
          <p className="text-sm text-gray-700">{a.body}</p>
        </article>
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500">No articles found.</p>
      )}
    </div>
  );
};

export default KnowledgeBase;
