import React from "react";
import type { Metadata } from "next";
import MyTickets from "@/components/transactions/MyTickets";

export const metadata: Metadata = {
  title: "My Tickets — Clothes Received",
  description: "My tickets and their current status.",
};

export default function MyTicketsPage() {
  return (
    <div className="space-y-6">
      <MyTickets />
    </div>
  );
}
