import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useTickets } from "../store/ticketStore";

const Dashboard = () => {
  const tickets = useTickets((s) => s.tickets);

  // group by status
  const groups = tickets.reduce((acc, t) => {
    acc[t.status] = (acc[t.status] || 0) + 1;
    return acc;
  }, {});
  const data = Object.keys(groups).map((k) => ({ status: k, count: groups[k] }));

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Analytics</h1>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
