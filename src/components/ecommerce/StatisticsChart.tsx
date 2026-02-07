"use client";
import React from "react";
import TimeframeDropdown from "../ui/dropdown/TimeframeDropdown";

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
        <div className="relative inline-block">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Money Made Today</h3>
          <span className="absolute left-3 -bottom-2 w-12 h-0.5 bg-yellow-400 dark:bg-yellow-300/90 rounded" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <TimeframeDropdown />
      </div>
      

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="mt-1 text-xl font-semibold text-gray-800 dark:text-yellow-50/90">{today}</p>
          
        </div>
         

    
      </div>

   
    </div>
  );
}