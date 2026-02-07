"use client";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { ITEM_COST } from "../../lib/config";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  // Replace small dot with a numeric badge
  const notificationCount = 7;

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  // Recent Activity feed (mirrors Transactions Recent Activity view)
  type FeedEvent = {
    id: number;
    time: string;
    actor: string;
    action: string;
    ticketId: number | string;
    items?: number;
    amount?: string;
    meta?: string;
    type?: "info" | "success" | "warning";
  };

  const feed: FeedEvent[] = [
    { id: 1, time: "09:12 AM", actor: "Staff 2", action: "registered", ticketId: 4821, items: 6, amount: "₦4,500", type: "info" },
    { id: 2, time: "09:28 AM", actor: "Staff 1", action: "marked", ticketId: 4821, meta: "Processing (Washing started)", type: "warning" },
    { id: 3, time: "09:45 AM", actor: "Staff 1", action: "registered", ticketId: 4822, items: 3, type: "info" },
    { id: 4, time: "10:03 AM", actor: "Staff 1", action: "marked", ticketId: 4821, meta: "Processing (Ironing)", type: "warning" },
    { id: 5, time: "11:15 AM", actor: "Staff 2", action: "marked", ticketId: 4821, meta: "Ready for Pickup", type: "info" },
    { id: 6, time: "12:02 PM", actor: "Staff 1", action: "registered", ticketId: 4823, items: 2, type: "info" },
    { id: 7, time: "01:47 PM", actor: "Staff 2", action: "marked", ticketId: 4821, meta: "Ready for Pickup", type: "info" },
    { id: 8, time: "02:30 PM", actor: "Staff 1", action: "picked up", ticketId: 4824, items: 4, type: "success" },
    { id: 9, time: "03:05 PM", actor: "Staff 3", action: "registered", ticketId: 4825, items: 1, type: "info" },
    { id: 10, time: "03:50 PM", actor: "Staff 1", action: "completed Pickup for", ticketId: 4821, items: 6, meta: "6 items confirmed", type: "success" },
    { id: 11, time: "04:10 PM", actor: "Staff 1", action: "received payment", ticketId: 4821, amount: "₦4,500", type: "success" },
    { id: 12, time: "04:23 PM", actor: "Femi", action: "marked", ticketId: 4826, meta: "Processing (Stain treatment)", type: "warning" },
    { id: 13, time: "04:40 PM", actor: "Staff 2", action: "registered", ticketId: 4827, items: 5, type: "info" },
    { id: 14, time: "05:05 PM", actor: "Staff 1", action: "marked", ticketId: 4827, meta: "Ready for Pickup", type: "info" },
    { id: 15, time: "05:30 PM", actor: "Staff 1", action: "received payment", ticketId: 4824, amount: "₦1,800", type: "success" },
    { id: 16, time: "12:30 PM", actor: "Staff 2", action: "registered", ticketId: 4828, items: 2, type: "info" },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const getItemsCount = (ticketId: number | string) => {
    const found = feed.find((f) => f.ticketId === ticketId && typeof f.items === "number");
    return found?.items ?? 0;
  };

  const formatCurrency = (n: number) => `₦${n.toLocaleString()}`;

  const isReceivedPayment = (e: FeedEvent) => e.action.toLowerCase().includes("received payment");
  const isPickedUp = (e: FeedEvent) => e.action.toLowerCase().includes("picked up");
  const isMarkedReady = (e: FeedEvent) => e.action === "marked" && e.meta?.toLowerCase().includes("ready for pickup");
  const isCompletedPickup = (e: FeedEvent) => e.action.toLowerCase().includes("completed pickup");
  const isRegistered = (e: FeedEvent) => e.action.toLowerCase().includes("registered");

  const showMeta = (e: FeedEvent) => !!e.meta && !/processing|confirmed/i.test(e.meta as string);

  const displayAction = (e: FeedEvent) => {
    if (isReceivedPayment(e)) return "received payment";
    if (isMarkedReady(e)) return "marked ready for pickup";
    if (isPickedUp(e)) return "picked up";
    if (isCompletedPickup(e)) return "completed pickup";
    return e.action;
  };

  const cleanedFeed = feed.filter((e) => !((e.action === "marked" && e.meta?.toLowerCase().includes("processing")) || e.action.toLowerCase() === "picked up"));
  const visibleAll = cleanedFeed.sort((a, b) => b.id - a.id);
  const displayed = visibleAll.slice(0, 5);
  const eventsToShow = visibleAll.slice(0, 7);
  return (
    <div className="relative">
      <button
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        {notifying && notificationCount > 0 && (
          <span
            aria-label={`${notificationCount} notifications`}
            className="absolute -top-1 -right-3 z-10 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-semibold"
          >
            {notificationCount}
          </span>
        )}
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        backdrop
        positionClass="fixed inset-x-3 top-16 sm:absolute sm:right-[6%] sm:left-auto sm:top-auto sm:translate-x-0 lg:right-0"
        className="w-full max-w-[350px] max-h-[80vh] mt-0 flex flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[90vw] md:w-[80vw] lg:w-[350px]"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Recent Activity</h5>
          <span className="text-sm text-gray-500 whitespace-nowrap mr-3">{eventsToShow.length} events</span>
          <button onClick={toggleDropdown} className="text-gray-500 transition dropdown-toggle dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="p-0">
          <div className="p-2 max-h-[60vh] overflow-y-auto custom-scrollbar yellow-scrollbar">
            {visibleAll.length === 0 ? (
              <div className="p-4 text-sm text-center text-gray-500 dark:text-gray-400">No events for this filter</div>
            ) : (
              <ul className="space-y-3">
                {eventsToShow.map((e) => {
                  const itemsCount = e.items ?? getItemsCount(e.ticketId);
                  const computedAmount = itemsCount > 0 ? formatCurrency(itemsCount * ITEM_COST) : undefined;
                  const amountToShow = isReceivedPayment(e) ? computedAmount : (e.amount ?? undefined);
                  const actionText = displayAction(e);
                  return (
                    <li key={e.id} className="">
                      <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex items-start gap-3 md:gap-4">
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-white/90">{getInitials(e.actor)}</div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                            <div className="flex-1">
                              <div className="flex md:flex-row flex-col md:items-center items-start gap-2">
                                <span className="text-sm font-medium text-gray-800 dark:text-white/90">{e.actor}</span>
                                <div className="text-xs text-gray-500 mt-1 md:mt-0">-{actionText} • Ticket #{e.ticketId}{itemsCount > 0 ? ` • ${itemsCount} items` : ''}
                                  {isPickedUp(e) && (
                                    <svg className="ml-2 inline-block w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H21M4.5 12a8.25 8.25 0 0116.5 0 8.25 8.25 0 01-16.5 0z" />
                                    </svg>
                                  )}
                                  {isMarkedReady(e) && (
                                    <svg className="ml-2 inline-block w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    </svg>
                                  )}
                                </div>
                              </div>

                              {showMeta(e) && <div className="text-xs text-gray-400 mt-1 truncate">{e.meta}</div>}

                              {isCompletedPickup(e) && itemsCount > 0 && (
                                <div className="text-xs text-gray-400 mt-1">Total item cost: {formatCurrency(itemsCount * ITEM_COST)}</div>
                              )}

                              {isMarkedReady(e) && itemsCount > 0 && (
                                <div className="text-xs text-gray-400 mt-1">Total item cost: {formatCurrency(itemsCount * ITEM_COST)}</div>
                              )}

                              {isRegistered(e) && itemsCount > 0 && (
                                <div className="text-xs text-gray-400 mt-1">Total item cost: {formatCurrency(itemsCount * ITEM_COST)}</div>
                              )}

                              {amountToShow && isReceivedPayment(e) && (
                                <div className="mt-2">
                                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border shadow-sm bg-green-50 text-green-600 border-green-200 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-green-200 dark:bg-green-900/10 dark:text-green-300 dark:border-green-800">{amountToShow}</span>
                                </div>
                              )}
                            </div>

                            <div className="text-xs text-gray-400 whitespace-nowrap md:ml-2 md:mt-0 mt-2">{e.time}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
