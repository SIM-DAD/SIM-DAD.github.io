import React from "react";

// Inlined from tass/assets/tass_logo.svg — background rect removed so it
// composites cleanly over the video background (#08111e).
export const TassLogo: React.FC<{ size?: number; opacity?: number }> = ({
  size = 200,
  opacity = 1,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 160 160"
    width={size}
    height={size}
    style={{ opacity, display: "block" }}
  >
    {/* Blue bar + column (main icon) */}
    <rect x="17.37" y="40.45" width="72.35" height="12.68" rx="4.38" ry="4.38" fill="#2ea8ff" />
    <rect x="47.21" y="57.06" width="12.68" height="12.68" rx="1.83" ry="1.83" fill="#2ea8ff" />
    <rect x="47.21" y="73.66" width="12.68" height="12.68" rx="1.83" ry="1.83" fill="#2ea8ff" />
    <rect x="47.21" y="90.26" width="12.68" height="12.68" rx="1.83" ry="1.83" fill="#2ea8ff" />
    <rect x="47.21" y="106.86" width="12.68" height="12.68" rx="1.83" ry="1.83" fill="#2ea8ff" />
    {/* Amber rows (text lines) */}
    <rect x="72.65" y="73.66" width="62.74" height="12.68" rx="4.08" ry="4.08" fill="#caa57a" />
    <rect x="72.65" y="90.26" width="54.24" height="12.68" rx="3.79" ry="3.79" fill="#caa57a" />
    <rect x="72.65" y="106.86" width="69.97" height="12.68" rx="4.31" ry="4.31" fill="#caa57a" />
  </svg>
);
