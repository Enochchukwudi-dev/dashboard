"use client";
import type React from "react";
import { useEffect, useRef } from "react";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  // allows callers to override positioning (e.g., fixed on mobile)
  positionClass?: string;
  // when true, show a fullscreen clickable backdrop (for blur/dim)
  backdrop?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  positionClass = "absolute right-0 mt-2",
  backdrop = false,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.dropdown-toggle')
    ) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [onClose]);


  if (!isOpen) return null;

  return (
    <>
      {backdrop && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
        />
      )}

      <div
        ref={dropdownRef}
        className={`${positionClass} z-40 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${className}`}
      >
        {children}
      </div>
    </>
  );
};
