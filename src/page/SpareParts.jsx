import React, { useState } from "react";
import { useSpares } from "../store/spareStore";

const SpareParts = () => {
  const { spares, addSpare, updateSpare, removeSpare } = useSpares();
  const [form, setForm] = useState({ name: "", stock: 0, cost: 0 });

  const submit = () => {
    addSpare(form);
    setForm({ name: "", stock: 0, cost: 0 });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Spare Parts Inventory</h1>

      <div className="flex gap-4 mb-8">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: +e.target.value })}
          className="border p-2 rounded w-24"
        />
        <input
          type="number"
          placeholder="Cost $"
          value={form.cost}
          onChange={(e) => setForm({ ...form, cost: +e.target.value })}
          className="border p-2 rounded w-24"
        />
        <button onClick={submit} className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Stock</th>
            <th className="border-b p-2">Cost</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {spares.map((sp) => (
            <tr key={sp.id}>
              <td className="border-b p-2">{sp.name}</td>
              <td className="border-b p-2">
                <input
                  type="number"
                  value={sp.stock}
                  className="border rounded w-20 p-1"
                  onChange={(e) =>
                    updateSpare(sp.id, { stock: +e.target.value })
                  }
                />
              </td>
              <td className="border-b p-2">${sp.cost}</td>
              <td className="border-b p-2">
                <button
                  onClick={() => removeSpare(sp.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {spares.length === 0 && (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                Inventory empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SpareParts;
