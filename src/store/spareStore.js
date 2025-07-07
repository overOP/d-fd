import { create } from "zustand";
import { v4 as uuid } from "uuid";

const key = "spares";
const load = () => JSON.parse(localStorage.getItem(key) || "[]");
const save = (d) => localStorage.setItem(key, JSON.stringify(d));

export const useSpares = create((set) => ({
  spares: load(),

  addSpare: (s) =>
    set((state) => {
      const next = [...state.spares, { id: uuid(), ...s }];
      save(next);
      return { spares: next };
    }),

  updateSpare: (id, patch) =>
    set((state) => {
      const next = state.spares.map((sp) =>
        sp.id === id ? { ...sp, ...patch } : sp,
      );
      save(next);
      return { spares: next };
    }),

  removeSpare: (id) =>
    set((state) => {
      const next = state.spares.filter((sp) => sp.id !== id);
      save(next);
      return { spares: next };
    }),
}));
