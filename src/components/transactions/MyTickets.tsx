"use client";

import React from "react";
import Transactions from "./Transactions";

export default function MyTickets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">My Tickets</h1>
        <p className="text-sm text-gray-500">Overview of tickets and their current status.</p>
      </div>

      <Transactions />
    </div>
  );
}
