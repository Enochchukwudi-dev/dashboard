"use client";

import React, { useMemo, useState } from "react";
import { UserRound } from "lucide-react";

type Ticket = {
  id: number;
  name: string;
  phone: string;
  items: number;
  amount: number;
  status: "Collected" | "Processing" | "Unpicked";
};

export default function MyCustomer() {
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
    const res = tickets.filter((t) => {
      if (activeTab === "collected" && t.status !== "Collected") return false;
      if (activeTab === "processing" && t.status !== "Processing") return false;
      if (activeTab === "unpicked" && t.status !== "Unpicked") return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return t.name.toLowerCase().includes(q) || t.phone.includes(q);
    });

    // Rank by highest number of times visited
    res.sort((a, b) => b.items - a.items);
    return res;
  }, [tickets, activeTab, query]);

  const formatCurrency = (n: number) => `₦${n.toLocaleString()}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white px-4 pb-4 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Top  Customers</h3>
        </div>

     
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((t) => (
          <div key={t.id} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserRound className="h-6 w-6 text-gray-500" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-800 dark:text-white/90">{t.name}</div>
                <div className="text-xs text-gray-400">{t.phone} <span className="block">Times Visited: {t.items}</span></div>
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
