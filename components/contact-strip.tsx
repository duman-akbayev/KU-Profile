import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export function ContactStrip() {
  return (
    <section className="bg-ink text-[var(--canvas)]">
      <div className="shell py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold text-[color-mix(in_srgb,var(--canvas)_58%,transparent)]">Available for the right challenge</p>
            <h2 className="balance max-w-4xl text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.06em]">Let’s make the next project clearer.</h2>
          </div>
          <Link href="/contact" className="button-primary w-fit">Start a conversation <ArrowUpRightIcon /></Link>
        </div>
      </div>
    </section>
  );
}
