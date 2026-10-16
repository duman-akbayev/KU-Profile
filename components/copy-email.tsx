"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-[0.85rem] text-muted transition hover:border-[var(--line-strong)] hover:text-ink" aria-live="polite">{copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}{copied ? "Copied" : "Copy email"}</button>;
}
