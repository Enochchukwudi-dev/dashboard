import React from "react";
import type { Metadata } from "next";
import MyCustomer from "@/components/transactions/MyCustomer";

export const metadata: Metadata = {
  title: "Customers — Customer List",
  description: "Customer directory and transactions.",
};

export default function CustomersPage() {
  return (
    <div className="space-y-6">

      <MyCustomer />
    </div>
  );
}
