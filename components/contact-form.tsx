"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

type FormState = { name: string; email: string; company: string; message: string };
const initialState: FormState = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [opened, setOpened] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setOpened(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project conversation — ${form.name}${form.company ? `, ${form.company}` : ""}`);
    const body = encodeURIComponent(`Hello Kanat,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  const fieldClass = "mt-2.5 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-base outline-none transition focus:border-accent focus:ring-4 focus:ring-[color-mix(in_srgb,var(--accent)_12%,transparent)]";

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-[0.9rem] font-semibold text-ink-soft">Your name <span className="text-accent">*</span><input className={fieldClass} required autoComplete="name" placeholder="Jane Smith" value={form.name} onChange={(event) => updateField("name", event.target.value)} /></label>
        <label className="text-[0.9rem] font-semibold text-ink-soft">Work email <span className="text-accent">*</span><input className={fieldClass} required type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={(event) => updateField("email", event.target.value)} /></label>
      </div>
      <label className="mt-6 block text-[0.9rem] font-semibold text-ink-soft">Company / organization<input className={fieldClass} autoComplete="organization" placeholder="Your organization" value={form.company} onChange={(event) => updateField("company", event.target.value)} /></label>
      <label className="mt-6 block text-[0.9rem] font-semibold text-ink-soft">How can Kanat help? <span className="text-accent">*</span><textarea className={`${fieldClass} min-h-40 resize-y`} required minLength={20} placeholder="Share the role, project, or challenge…" value={form.message} onChange={(event) => updateField("message", event.target.value)} /></label>
      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[0.82rem] leading-6 text-muted">This opens a pre-filled draft in your email app. No form data is stored.</p>
        <button className="button-primary shrink-0" type="submit">{opened ? <><CheckIcon /> Draft opened</> : <>Compose email <ArrowUpRightIcon /></>}</button>
      </div>
    </form>
  );
}
