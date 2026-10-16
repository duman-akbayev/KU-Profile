import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[82vh] place-items-center px-4 pb-16 pt-28 text-center">
      <div>
        <p className="font-mono text-sm font-bold text-brand">404 / OFF DRAWING</p>
        <h1 className="mt-5 text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-[-0.07em]">Nothing built here.</h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted">The page may have moved, or the address may be incomplete. Return to the portfolio and continue exploring.</p>
        <Link href="/" className="button-primary mt-8">Back to home <ArrowRightIcon /></Link>
      </div>
    </section>
  );
}
