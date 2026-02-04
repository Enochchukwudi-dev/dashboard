"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Tickets (Lifetime)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              13,782
            </h4>
          </div>
          <div className="absolute top-4 right-4">
            <Badge color="success">
              <ArrowUpIcon />
              11.01%
            </Badge>
          </div>

          <button
            type="button"
            aria-label="View Ticket: Total Tickets (Lifetime)"
            className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 gap-2 rounded-md text-sm font-semibold bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-800 dark:text-white dark:hover:bg-gray-800"
          >
            View All Tickets
          </button>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-00">
             Total Customers (Lifetime)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              534
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <Badge color="error">
              <ArrowDownIcon className="text-error-500" />
              9.05%
            </Badge>
          </div>

          <button
            type="button"
            aria-label="View Ticket: Total Customers (Lifetime)"
            className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 gap-2 rounded-md text-sm font-semibold bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-800 dark:text-white dark:hover:bg-gray-800"
          >
           View Customers
          </button>
        </div>
      </div>


        <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
             Active / Pending Tickets (Today)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              53
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <Badge color="error">
              <ArrowDownIcon className="text-error-500 " />
              9.05%
            </Badge>
          </div>

          <button
            type="button"
            aria-label="View Ticket: Active / Pending Tickets (Today)"
            className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 gap-2 rounded-md text-sm font-semibold bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-800 dark:text-white dark:hover:bg-gray-800"
          >
           View Active Jobs
          </button>
        </div>
      </div>

        <div className="relative rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
             Completed Tickets Today (Paid / Completed)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              14
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <Badge color="success">
              <ArrowUpIcon className="text-success-500" />
              19.05%
            </Badge>
          </div>

          <button
            type="button"
            aria-label="View Ticket: Completed Tickets Today (Paid / Completed)"
            className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 gap-2 rounded-md text-sm font-semibold bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-800 dark:text-white dark:hover:bg-gray-800"
          >
            Payments Today
          </button>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
