import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useTickets } from "../store/ticketStore";

/* ------------------------------------------------------------------ */
/*  Utilities                                                         */
/* ------------------------------------------------------------------ */
const STATUS_LABELS = {
  OPEN: "Open",
  SCHEDULED: "Scheduled",
  IN_REPAIR: "In Repair",
  COMPLETED: "Completed",
  CLOSED: "Closed",
};

const STATUS_COLOURS = {
  OPEN: "bg-red-500",
  SCHEDULED: "bg-orange-500",
  IN_REPAIR: "bg-yellow-500",
  COMPLETED: "bg-emerald-500",
  CLOSED: "bg-gray-400",
};

/* resize hook – returns parent width */
function useParentWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return [ref, width];
}

export default function Dashboard() {
  const tickets = useTickets((s) => s.tickets);
  const fetchTickets = useTickets((s) => s.fetchTickets);

  /* fetch once on mount */
  useEffect(() => {
    if (tickets.length === 0) fetchTickets();
  }, [fetchTickets]);

  /* group tickets → chart */
  const { grouped, chartData, total } = useMemo(() => {
    const grouped = tickets.reduce((acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    }, {});
    return {
      grouped,
      chartData: Object.entries(grouped).map(([status, count]) => ({ status, count })),
      total: tickets.length,
    };
  }, [tickets]);

  /* container width for chart */
  const [containerRef, width] = useParentWidth();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8" ref={containerRef}>
      <h1 className="text-3xl font-bold text-center text-white">Service Dashboard</h1>

      {/* summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Object.keys(STATUS_LABELS).map((key) => (
          <div
            key={key}
            className="rounded-lg bg-white shadow flex flex-col items-center py-4"
          >
            <div className={`w-2.5 h-2.5 rounded-full mb-1 ${STATUS_COLOURS[key]}`} />
            <p className="text-sm text-gray-500">{STATUS_LABELS[key]}</p>
            <p className="text-xl font-bold text-gray-800">{grouped[key] ?? 0}</p>
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1 rounded-lg bg-indigo-100 shadow flex flex-col items-center py-4">
          <p className="text-sm text-indigo-600">Total</p>
          <p className="text-2xl font-bold text-indigo-900">{total}</p>
        </div>
      </div>

      {/* chart */}
      <div className="rounded-lg bg-white shadow p-4 overflow-x-auto">
        {width > 0 && (
          <BarChart
            width={width - 32 /* padding */}
            height={350}
            data={chartData}
            margin={{ top: 10, right: 20, bottom: 40, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="status"
              tickFormatter={(s) => STATUS_LABELS[s]}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
            />
            <YAxis allowDecimals={false} />
            <Tooltip
              isAnimationActive={false}
              formatter={(v) => [v, "Tickets"]}
              labelFormatter={(l) => STATUS_LABELS[l]}
            />
            <Bar
              dataKey="count"
              isAnimationActive={false} /* disable Recharts animation loop */
              fill="url(#gradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </BarChart>
        )}
      </div>
    </div>
  );
}
