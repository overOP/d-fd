import { create } from "zustand";
import { v4 as uuid } from "uuid";

const key = "tickets";

const load = () => JSON.parse(localStorage.getItem(key) || "[]");
const save = (t) => localStorage.setItem(key, JSON.stringify(t));

export const useTickets = create((set) => ({
  tickets: load(),

  addTicket: (data) =>
    set((s) => {
      const ticket = { id: uuid(), status: "open", ...data };
      const next = [...s.tickets, ticket];
      save(next);
      return { tickets: next };
    }),

  updateTicket: (id, patch) =>
    set((s) => {
      const next = s.tickets.map((t) => (t.id === id ? { ...t, ...patch } : t));
      save(next);
      return { tickets: next };
    }),
}));
