"use client";

import React, { useMemo, useState } from "react";
import Avatar from "@/components/ui/avatar/Avatar";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

type Ticket = {
  id: number;
  name: string;
  phone: string;
  items: number;
  amount: number;
  status: "Collected" | "Processing" | "Unpicked";
};

export default function MyTickets() {
  const [activeTab, setActiveTab] = useState<"all" | "collected" | "processing" | "unpicked">("all");
  const [query, setQuery] = useState("");

  const tickets: Ticket[] = [
    { id: 1, name: "Chinedu Okafor", phone: "08011223344", items: 3, amount: 3000, status: "Collected" },
    { id: 2, name: "Aisha Bello", phone: "08022334455", items: 5, amount: 5000, status: "Processing" },
    { id: 3, name: "Emeka Obi", phone: "08033445566", items: 17, amount: 17000, status: "Collected" },
    { id: 4, name: "Ngozi Nwosu", phone: "08044556677", items: 3, amount: 3000, status: "Collected" },
    { id: 5, name: "Kelechi Ibe", phone: "08055667788", items: 5, amount: 5000, status: "Processing" },
  ];

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      if (activeTab === "collected" && t.status !== "Collected") return false;
      if (activeTab === "processing" && t.status !== "Processing") return false;
      if (activeTab === "unpicked" && t.status !== "Unpicked") return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return t.name.toLowerCase().includes(q) || t.phone.includes(q);
    });
  }, [tickets, activeTab, query]);

  const formatCurrency = (n: number) => `₦${n.toLocaleString()}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-4 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Clothes Received Today</h3>
          <p className="text-sm text-gray-500 mt-1">See items received today</p>
        </div>

        <div className="mt-3 sm:mt-0 flex items-center gap-2">
          <div className="flex items-center rounded-full bg-gray-50 p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${activeTab === "all" ? "bg-success-50 text-success-700 shadow-sm" : "text-gray-500 hover:bg-white"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("collected")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${activeTab === "collected" ? "bg-success-50 text-success-700 shadow-sm" : "text-gray-500 hover:bg-white"}`}
            >
              Collected
            </button>
            <button
              onClick={() => setActiveTab("processing")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${activeTab === "processing" ? "bg-yellow-50 text-yellow-600 shadow-sm" : "text-gray-500 hover:bg-white"}`}
            >
              Processing
            </button>
            <button
              onClick={() => setActiveTab("unpicked")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${activeTab === "unpicked" ? "bg-gray-100 text-gray-700 shadow-sm" : "text-gray-500 hover:bg-white"}`}
            >
              Unpicked
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-sm dark:border-gray-800 dark:bg-white/[0.02]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search here..."
            className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
          />
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 justify-center" startIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18M7 9h10M9 13.5h6M10 18h4"/></svg>}>Filter</Button>
          <Button variant="outline" size="sm" className="flex-1 justify-center">Export Data</Button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((t) => (
          <div key={t.id} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src="/images/avatar.svg" alt={t.name} size="medium" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-800 dark:text-white/90">{t.name}</div>
                <div className="text-xs text-gray-400">{t.phone} <span className="block">No. of items : {t.items}</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold text-gray-800">{formatCurrency(t.amount)}</div>
              <div>
                {t.status === "Collected" ? (
                  <Badge size="sm" color="success">Collected</Badge>
                ) : t.status === "Processing" ? (
                  <Badge size="sm" color="warning">Processing</Badge>
                ) : (
                  <Badge size="sm" color="light">Unpicked</Badge>
                )}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-4 text-sm text-center text-gray-500">No items match your filter</div>
        )}
      </div>
    </div>
  );
}
