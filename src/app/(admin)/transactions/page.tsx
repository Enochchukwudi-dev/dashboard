import React from "react";
import type { Metadata } from "next";
import Transactions from "@/components/transactions/Transactions";

export const metadata: Metadata = {
  title: "Transactions — Clothes Received",
  description: "List of clothes received today.",
};

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Clothes Received Today</h1>
      <Transactions />
    </div>
  );
}