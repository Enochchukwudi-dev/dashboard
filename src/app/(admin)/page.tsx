import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";


import StatisticsChart from "@/components/ecommerce/StatisticsChart";


import Transactions from "@/components/transactions/Transactions";

export const metadata: Metadata = {
  title: "Proofly — Laundry SaaS Dashboard",
  description: "Proofly: Laundry SaaS to manage orders, customers, revenue, and operations for laundry businesses.",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <Transactions />
      </div>     
      <div className="col-span-12">
        <StatisticsChart />
      </div>
     
   
    </div>
  );
}
