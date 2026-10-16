"use client";

import { PrinterIcon } from "@/components/icons";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="button-secondary">
      <PrinterIcon /> Print / Save as PDF
    </button>
  );
}
