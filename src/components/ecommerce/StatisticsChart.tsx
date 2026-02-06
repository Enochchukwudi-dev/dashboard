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
    <div className="relative rounded-2xl mb-20 border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Total Revenue</h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">Money In (Today)</p>
        </div>
      </div>
      

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="mt-1 text-xl font-semibold text-gray-800 dark:text-white/90">{today}</p>
          
        </div>
         

    
      </div>

      <button
        type="button"
        aria-label="Check Earnings (Today)"
        className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 gap-2 rounded-md text-sm font-semibold bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-800 dark:text-white dark:hover:bg-gray-800"
      >
        Check Earnings
      </button>
    </div>
  );
}