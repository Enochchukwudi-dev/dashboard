"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Timeframe = "Today" | "Yesterday" | "This Week" | "This Month" | "All";

interface Props {
  value?: Timeframe;
  onChange?: (v: Timeframe) => void;
}

export default function TimeframeDropdown({ value = "Today", onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Timeframe>(value);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };

    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const options: Timeframe[] = ["Today", "Yesterday", "This Week", "This Month", "All"];

  const handleSelect = (opt: Timeframe) => {
    setSelected(opt);
    setOpen(false);
    onChange?.(opt);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-medium bg-white border border-gray-200 text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
      >
        <span className="text-xs">{selected}</span>
        <ChevronDown className="ml-1 w-3 h-3" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[140px] rounded-md bg-white shadow-lg dark:bg-gray-800 z-50">
          <ul role="listbox" aria-label="Timeframe options" className="py-1">
            {options.map((opt) => (
              <li key={opt} role="option">
                <button
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${opt === selected ? "font-semibold" : ""}`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
