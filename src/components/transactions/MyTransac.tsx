"use client";

import React, { useMemo, useState } from "react";
import Avatar from "@/components/ui/avatar/Avatar";
import Badge from "@/components/ui/badge/Badge";

type Ticket = {
  id: number;
  name: string;
  phone: string;
  items: number;
  amount: number;
  status: "Collected" | "Processing" | "Unpicked";
};

export default function MyTransac() {
  const [activeTab, setActiveTab] = useState<"all" | "collected" | "processing" | "unpicked">("all");
  const [query, setQuery] = useState("");

  const tickets = useMemo<Ticket[]>(
    () => [
      { id: 1, name: "Chinedu Okafor", phone: "08011223344", items: 3, amount: 3000, status: "Collected" },
      { id: 2, name: "Aisha Bello", phone: "08022334455", items: 5, amount: 5000, status: "Processing" },
      { id: 3, name: "Emeka Obi", phone: "08033445566", items: 17, amount: 17000, status: "Collected" },
      { id: 4, name: "Ngozi Nwosu", phone: "08044556677", items: 3, amount: 3000, status: "Collected" },
      { id: 5, name: "Kelechi Ibe", phone: "08055667788", items: 5, amount: 5000, status: "Processing" },
    ],
    []
  );

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
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white px-4 pb-4 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Transaction History</h3>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="ticket-filter-mobile" className="sr-only">Filter tickets</label>
          <select
            id="ticket-filter-mobile"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as "all" | "collected" | "processing" | "unpicked")}
            className="block sm:hidden rounded-md border bg-white dark:bg-gray-800 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 border-gray-800 dark:border-gray-700 shadow-sm focus:outline-none"
          >
            <option value="all">All</option>
            <option value="collected">Collected</option>
            <option value="processing">Processing</option>
            <option value="unpicked">Unpicked</option>
          </select>

          <div role="tablist" aria-label="Ticket filters" className="hidden sm:flex items-center rounded-full bg-gray-50 p-1.5 gap-1 whitespace-nowrap overflow-x-auto sm:overflow-visible dark:bg-white/[0.03]">
            <button
              role="tab"
              aria-selected={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm font-medium transition ${activeTab === "all" ? "bg-success-50 text-success-700 shadow-sm dark:bg-success-900/20 dark:text-success-300" : "text-gray-500 hover:bg-white dark:text-gray-300 dark:hover:bg-white/[0.03]"}`}
            >
              All
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "collected"}
              onClick={() => setActiveTab("collected")}
              className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm font-medium transition ${activeTab === "collected" ? "bg-success-50 text-success-700 shadow-sm dark:bg-success-900/20 dark:text-success-300" : "text-gray-500 hover:bg-white dark:text-gray-300 dark:hover:bg-white/[0.03]"}`}
            >
              Collected
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "processing"}
              onClick={() => setActiveTab("processing")}
              className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm font-medium transition ${activeTab === "processing" ? "bg-yellow-50 text-yellow-600 shadow-sm dark:bg-yellow-900/20 dark:text-yellow-300" : "text-gray-500 hover:bg-white dark:text-gray-300 dark:hover:bg-white/[0.03]"}`}
            >
              Processing
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "unpicked"}
              onClick={() => setActiveTab("unpicked")}
              className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm font-medium transition ${activeTab === "unpicked" ? "bg-gray-100 text-gray-700 shadow-sm dark:bg-gray-700 dark:text-white/90" : "text-gray-500 hover:bg-white dark:text-gray-300 dark:hover:bg-white/[0.03]"}`}
            >
              Unpicked
            </button>
          </div>
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
