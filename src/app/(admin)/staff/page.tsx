import React from "react";
import type { Metadata } from "next";
import MyStaff from "@/components/transactions/MyStaff";

export const metadata: Metadata = {
  title: "Staff — Staff List",
  description: "Staff directory and activity.",
};

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <MyStaff />
    </div>
  );
}
