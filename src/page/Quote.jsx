import React from "react";
import { useParams } from "react-router";
import { useTickets } from "../store/ticketStore";

const Quote = () => {
  const { ticketId } = useParams();
  const ticket = useTickets((s) =>
    s.tickets.find((t) => t.id === ticketId),
  );

  if (!ticket) return <p className="text-center text-white">Ticket not found.</p>;

  // naive quote calculation
  const labour = 50;
  const parts = 30;
  const total = labour + parts;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Quote</h1>
      <p>
        <strong>Device:</strong> {ticket.device}
      </p>
      <p>
        <strong>Issue:</strong> {ticket.issue}
      </p>
      <hr className="my-4" />
      <p>Labour: ${labour}</p>
      <p>Parts: ${parts}</p>
      <p className="font-bold mt-2">Total: ${total}</p>
    </div>
  );
};

export default Quote;
