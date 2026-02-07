import React from "react";
import type { Metadata } from "next";
import MyTransac from "@/components/transactions/MyTransac";

export const metadata: Metadata = {
  title: "Transactions — Clothes Received",
  description: "List of clothes received today.",
};

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <MyTransac />
    </div>
  );
}