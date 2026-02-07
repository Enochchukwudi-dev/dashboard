"use client";
import React from "react";
import TimeframeDropdown from "../ui/dropdown/TimeframeDropdown";
import { ChevronRight, ClockArrowUp, UsersRound, Shirt } from "lucide-react";
import { useRouter } from "next/navigation";

export const EcommerceMetrics = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-400 bg-white p-5 dark:border-gray-700 dark:bg-white/[0.02] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <Shirt className="text-gray-800 w-6 h-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Clothes Received  -Per item
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              765
            </h4>
          </div>
          <div className="absolute top-4 right-4">
            <TimeframeDropdown />
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="relative rounded-2xl border border-gray-400 bg-white p-5 dark:border-gray-700 dark:bg-white/[0.02] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <UsersRound className="text-green-500 w-6 h-6 dark:text-green-400/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
             Clothes Received - Per Customer
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              53
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <TimeframeDropdown />
          </div>
        </div>
      </div>


      
        <div className="relative rounded-2xl border border-gray-400 bg-white p-5 dark:border-gray-700 dark:bg-white/[0.02] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ClockArrowUp className="text-yellow-400 w-6 h-6 dark:text-yellow-300/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Clothes ready for Pickup
            </span>
            <h4 className="mt-2 font-bold text-yellow-400 text-title-sm dark:text-yellow-300/90">
              14
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <TimeframeDropdown />
          </div>
        </div>
      </div>

          <div className="relative rounded-2xl border border-gray-400 bg-white p-5 dark:border-gray-700 dark:bg-white/[0.02] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <img src="/images/iconss/readyforpickup.png" alt="Ready for pickup" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Clothes Picked up Today
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5
            </h4>
          </div>

          <div className="absolute top-4 right-4">
            <TimeframeDropdown />
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
