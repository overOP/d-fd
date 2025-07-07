import React from "react";
import { useForm } from "react-hook-form";
import { useTickets } from "../store/ticketStore";
import { useNavigate } from "react-router-dom";

const SupportRequest = () => {
  const { register, handleSubmit, reset } = useForm();
  const addTicket = useTickets((s) => s.addTicket);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const t = addTicket(data);
    console.log(t);
    reset();
    alert("Ticket submitted!");
    navigate("/schedule", { replace: true });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Submit Support Ticket</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("device")}
          placeholder="Device (e.g. HP Laptop)"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          {...register("issue")}
          placeholder="Describe the problem"
          className="w-full p-3 border rounded h-32"
          required
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SupportRequest;
