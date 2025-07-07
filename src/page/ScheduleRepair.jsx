import React from "react";
import { useTickets } from "../store/ticketStore";

const ScheduleRepair = () => {
  const tickets = useTickets((s) => s.tickets);

  if (!tickets.length) {
    return (
      <p className="text-center text-white mt-10">
        No open tickets – submit one first.
      </p>
    );
  }

  // very simple demo: just list tickets and allow the user to choose a date
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-20">
      <h1 className="text-2xl font-bold mb-6">Schedule Repair</h1>
      <ul className="space-y-4">
        {tickets.map((t) => (
          <li key={t.id} className="border p-4 rounded">
            <h3 className="font-semibold">{t.device}</h3>
            <p className="text-sm text-gray-600">{t.issue}</p>
            <label className="block mt-2 text-sm font-medium">
              Preferred Date:
              <input
                type="date"
                className="ml-2 border rounded p-1"
                onChange={(e) =>
                  useTickets.getState().updateTicket(t.id, {
                    preferredDate: e.target.value,
                  })
                }
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleRepair;
