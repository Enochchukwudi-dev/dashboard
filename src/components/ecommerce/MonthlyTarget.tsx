"use client";
// import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { MoreDotIcon } from "@/icons";
import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlyTarget() {
  const series = [75.55];
  const options: ApexOptions = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1D2939",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#465FFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Notifications</h3>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">Manage recent activity and alerts</p>
          </div>
          <button onClick={closeDropdown} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">✕</button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">All</button>
          <button className="px-3 py-1 rounded-full bg-white border text-sm text-gray-700">Remainders</button>
          <button className="px-3 py-1 rounded-full bg-white border text-sm text-gray-700">Payment</button>
          <button className="px-3 py-1 rounded-full bg-white border text-sm text-gray-700">Booking</button>
          <button className="px-3 py-1 rounded-full bg-white border text-sm text-gray-700">Confirmation</button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">24 May</h4>
            <button className="text-sm text-theme-xs text-gray-500 hover:underline">Mark as all read</button>
          </div>

          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L12 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Booking confirmed!</p>
                  <span className="text-xs text-gray-400">10:04 am</span>
                </div>
                <p className="text-sm text-gray-500">Your booking for Slot-02 is confirmed for 23. Please <span className="font-medium">view details</span> for more info</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Payment Method Saved</p>
                  <span className="text-xs text-gray-400">9:23 am</span>
                </div>
                <p className="text-sm text-gray-500">Your payment method has been securely saved and is now ready to use for future transactions</p>
              </div>
            </li>
          </ul>

          <h4 className="mt-6 mb-3 text-sm font-medium text-gray-500">Earlier</h4>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Session reminder</p>
                  <span className="text-xs text-gray-400">10:04 am</span>
                </div>
                <p className="text-sm text-gray-500">You have an upcoming session. Don’t forget to show up on time!</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Session cancelled</p>
                  <span className="text-xs text-gray-400">9:23 am</span>
                </div>
                <p className="text-sm text-gray-500">Your booking has been cancelled. You can <span className="font-medium">reschedule</span> anytime</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Payment successful</p>
                  <span className="text-xs text-gray-400">9:45 am</span>
                </div>
                <p className="text-sm text-gray-500">Thank you for your purchase! A confirmation email has been sent to your address.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 dark:text-white/90">Goal Achieved</p>
                  <span className="text-xs text-gray-400">9:45 am</span>
                </div>
                <p className="text-sm text-gray-500">Great job! You’ve attended your 30th class in your journey</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 py-4 text-center">
        <a href="#" className="text-sm text-gray-500 hover:underline">View all notifications</a>
      </div>
    </div>
  );
}
