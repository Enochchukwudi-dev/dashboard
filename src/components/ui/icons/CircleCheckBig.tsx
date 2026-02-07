import React from "react";

interface Props {
  className?: string;
}

const CircleCheckBig: React.FC<Props> = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <path d="M9 12.5l1.8 1.8L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CircleCheckBig;
