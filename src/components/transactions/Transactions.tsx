"use client";

import Image from "next/image";
import { useState } from "react";


const tabs = ["All", "Collected", "Processing", "Unpicked"] as const;

const STATUS_MAP: Record<typeof tabs[number], string | undefined> = {
  All: undefined,
  Collected: "Success",
  Processing: "Pending",
  Unpicked: undefined,
};

export default function Transactions() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Live Staff Activity</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">See what staff are doing in real-time</p>
          <div className="mt-5 flex items-center gap-2">
            {tabs.map((c) => (
              <button
                key={c}
                onClick={() => setTab(c)}
                className={`min-w-[92px] text-center rounded-full px-3 py-1 text-theme-xs font-medium border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
                  tab === c
                    ? "bg-green-50 text-green-600 border-green-200 shadow-sm focus-visible:ring-green-200 dark:bg-green-900/10 dark:text-green-300 dark:border-green-800"
                    : "bg-white text-gray-500 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                }`}
                aria-pressed={tab === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>


      </div>

      {/* Feed / Timeline View */}
      <div className="space-y-4">
          {(() => {
          type FeedEvent = {
            id: number;
            time: string;
            actor: string;
            action: string;
            ticketId: number | string;
            items?: number;
            amount?: string;
            meta?: string;
            type?: "info" | "success" | "warning";
          };

          const feed: FeedEvent[] = [
            { id: 1, time: "09:12 AM", actor: "Chioma", action: "registered", ticketId: 4821, items: 6, amount: "₦4,500", type: "info" },
            { id: 2, time: "09:28 AM", actor: "Musa", action: "marked", ticketId: 4821, meta: "Processing (Washing started)", type: "warning" },
            { id: 3, time: "09:45 AM", actor: "Ada", action: "registered", ticketId: 4822, items: 3, type: "info" },
            { id: 4, time: "10:03 AM", actor: "Musa", action: "marked", ticketId: 4821, meta: "Processing (Ironing)", type: "warning" },
            { id: 5, time: "11:15 AM", actor: "Chioma", action: "marked", ticketId: 4821, meta: "Ready for Pickup", type: "info" },
            { id: 6, time: "12:02 PM", actor: "Tunde", action: "registered", ticketId: 4823, items: 2, type: "info" },
            { id: 7, time: "01:47 PM", actor: "Chioma", action: "marked", ticketId: 4821, meta: "Ready for Pickup", type: "info" },
            { id: 8, time: "02:30 PM", actor: "Musa", action: "picked up", ticketId: 4824, items: 4, type: "success" },
            { id: 9, time: "03:05 PM", actor: "Zainab", action: "registered", ticketId: 4825, items: 1, type: "info" },
            { id: 10, time: "03:50 PM", actor: "Musa", action: "completed Pickup for", ticketId: 4821, items: 6, meta: "6 items confirmed", type: "success" },
            { id: 11, time: "04:10 PM", actor: "Musa", action: "received payment", ticketId: 4821, amount: "₦4,500", type: "success" },
            { id: 12, time: "04:23 PM", actor: "Femi", action: "marked", ticketId: 4826, meta: "Processing (Stain treatment)", type: "warning" },
            { id: 13, time: "04:40 PM", actor: "Chioma", action: "registered", ticketId: 4827, items: 5, type: "info" },
            { id: 14, time: "05:05 PM", actor: "Musa", action: "marked", ticketId: 4827, meta: "Ready for Pickup", type: "info" },
            { id: 15, time: "05:30 PM", actor: "Musa", action: "received payment", ticketId: 4824, amount: "₦1,800", type: "success" },
          ];

          const getInitials = (name: string) => {
            return name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
          };

          const getDotColor = (type?: string) =>
            type === "success" ? "bg-emerald-500" : type === "warning" ? "bg-yellow-400" : "bg-sky-500";

          // Filter events based on selected tab
          const filterByTab = (e: FeedEvent) => {
            switch (tab) {
              case "Collected":
                return (
                  // payments or completed pickups
                  e.action.toLowerCase().includes("received payment") ||
                  e.action.toLowerCase().includes("completed") ||
                  !!e.amount ||
                  e.type === "success"
                );
              case "Processing":
                return (
                  (e.meta && e.meta.toLowerCase().includes("processing")) ||
                  e.action.toLowerCase().includes("processing") ||
                  e.type === "warning"
                );
              case "Unpicked":
                return (
                  // registrations and ready-for-pickup events that are not yet completed
                  (e.action === "registered" || (e.meta && e.meta.toLowerCase().includes("ready"))) &&
                  !e.action.toLowerCase().includes("completed") &&
                  !e.action.toLowerCase().includes("received")
                );
              case "All":
              default:
                return true;
            }
          };

          const visible = feed.filter(filterByTab);

          return (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Activity</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">{visible.length} of {feed.length} events</span>
              </div>

              <div className="min-h-[180px] max-h-[420px] overflow-y-auto thin-scrollbar mt-2">
                {visible.length === 0 ? (
                  <div className="p-4 text-sm text-center text-gray-500 dark:text-gray-400">No events for this filter</div>
                ) : (
                  <ul className="space-y-3">
                    {visible.map((e) => (
                      <li key={e.id} className="">
                        <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex items-start gap-3 md:gap-4">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-white/90">
                            {getInitials(e.actor)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-3 md:gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-800 dark:text-white/90">{e.actor}</span>
                                  <span className="text-xs text-gray-500">{e.action} • Ticket #{e.ticketId}{e.items ? ` • ${e.items} items` : ''}</span>
                                </div>

                                {e.meta && <div className="text-xs text-gray-400 mt-1 truncate">{e.meta}</div>}

                                {e.amount && (
                                  <div className="mt-2">
                                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border shadow-sm bg-green-50 text-green-600 border-green-200 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-green-200 dark:bg-green-900/10 dark:text-green-300 dark:border-green-800">
                                      {e.amount}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="text-xs text-gray-400 whitespace-nowrap">{e.time}</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
