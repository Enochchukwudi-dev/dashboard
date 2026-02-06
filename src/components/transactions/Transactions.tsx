"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { transactions as mockTransactions, Transaction } from "@/lib/mockData";

const tabs = ["All", "Success", "Pending", "Failed"] as const;

export default function Transactions() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return mockTransactions.filter((t) => {
      const matchStatus = tab === "All" ? true : t.status === tab;
      const matchQuery =
        !query ||
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        (t.phone && t.phone.includes(query));
      return matchStatus && matchQuery;
    });
  }, [tab, query]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Tickets</h3>
          <div className="mt-2 flex items-center gap-2">
            {tabs.map((c) => (
              <button
                key={c}
                onClick={() => setTab(c)}
                className={`rounded-full px-3 py-1 text-theme-xs font-medium ${
                  tab === c
                    ? "bg-green-50 text-green-600"
                    : "bg-white text-gray-500"
                } border border-gray-200`}
                aria-pressed={tab === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
          <div className="relative w-full sm:w-auto">
            <input
              aria-label="Search transactions"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-56 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-theme-sm text-gray-500 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-400 shadow-theme-xs dark:shadow-none focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-400"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-300 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-theme-sm font-medium text-gray-700 dark:text-gray-200 shadow-theme-xs hover:bg-gray-50 dark:hover:bg-gray-700">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 17H21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7 6H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7 12H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span>Filter</span>
            </button>

            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-theme-sm font-medium text-gray-700 dark:text-gray-200 shadow-theme-xs hover:bg-gray-50 dark:hover:bg-gray-700">
              Export Data
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto hidden md:block">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Ticket Details
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                No. of items
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Ticket ID
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Amount
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>

            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {filtered.map((t: Transaction) => (
              <TableRow key={t.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
                      {t.countryImage && (
                        <Image
                          width={40}
                          height={40}
                          src={t.countryImage}
                          alt={t.country}
                          className="h-[40px] w-[40px]"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{t.name}</p>
                      {t.phone && <span className="text-gray-500 text-theme-xs">{t.phone}</span>}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{t.items !== undefined ? `No. of items : ${t.items}` : '-'}</TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-theme-sm text-gray-700 dark:text-white/90">{t.country}</span>
                  </div>
                </TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{t.amount}</TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge size="sm" color={t.status === "Success" ? "success" : t.status === "Pending" ? "warning" : "error"}>{t.status}</Badge>
                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile layout: stacked cards */}
      <div className="md:hidden space-y-3">
        {filtered.map((t: Transaction) => (
          <div key={t.id} className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                {t.countryImage && (
                  <Image width={48} height={48} src={t.countryImage} alt={t.country} className="h-12 w-12" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{t.name}</p>
                {t.phone && <span className="text-gray-500 text-theme-xs">{t.phone}</span>}
                <div className="text-theme-xs text-gray-400">{t.items !== undefined ? `No. of items : ${t.items}` : ''}</div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-gray-500 text-theme-sm dark:text-gray-400">{t.amount}</div>
              <Badge size="sm" color={t.status === "Success" ? "success" : t.status === "Pending" ? "warning" : "error"}>{t.status}</Badge>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}
