"use client";
import React from "react";

export default function StatisticsChart() {
  // Simple Total Revenue card showing Today / This Week / This Month
  const todayAmount = 132320;
  const weekAmount = 870000;
  const monthAmount = 3200000;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 2 }).format(n);

  const today = formatCurrency(todayAmount);
  const week = formatCurrency(weekAmount);
  const month = formatCurrency(monthAmount);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Total Revenue</h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">Overview of revenue figures</p>
        </div>
        <div>
          <a href="/transactions" className="text-sm text-gray-500  hover:underline dark:text-gray-400">View Transaction history</a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Today</p>
          <p className="mt-1 text-xl font-semibold text-gray-800 dark:text-white/90">{today}</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="mt-1 text-xl font-semibold text-gray-800 dark:text-white/90">{week}</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">This Month</p>
          <p className="mt-1 text-xl font-semibold text-gray-800 dark:text-white/90">{month}</p>
        </div>
      </div>
    </div>
  );
}