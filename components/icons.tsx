import type { SVGProps } from "react";

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

export function ArrowRightIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function DownloadIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>;
}

export function MailIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export function PhoneIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M8.5 3.5 11 8 8.8 9.7c1.2 2.5 3 4.3 5.5 5.5L16 13l4.5 2.5-.7 4c-.1.8-.9 1.4-1.7 1.3C9.8 19.9 4.1 14.2 3.2 5.9c-.1-.8.5-1.6 1.3-1.7l4-.7Z" /></svg>;
}

export function MapPinIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function LinkedInIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7m0-10v.01M12 17v-4a3 3 0 0 1 6 0v4m-6-7v7" /></svg>;
}

export function SunIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
}

export function MoonIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20.2 15.2A9 9 0 0 1 8.8 3.8 9 9 0 1 0 20.2 15.2Z" /></svg>;
}

export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 8h16M4 16h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function CopyIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>;
}

export function ChevronLeftIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m15 18-6-6 6-6" /></svg>;
}

export function ClockIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

export function BriefcaseIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>;
}

export function AwardIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9" /></svg>;
}

export function PrinterIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="7" y="14" width="10" height="7" /></svg>;
}

export function CompassIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>;
}
