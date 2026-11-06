import {
  Bluetooth,
  Download,
  Droplets,
  Eye,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Pipette,
  Send,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  droplets: Droplets,
  pipette: Pipette,
  bluetooth: Bluetooth,
  sparkles: Sparkles,
  user: User,
  network: Network,
  phone: Phone,
  mail: Mail,
  whatsapp: MessageCircle,
  telegram: Send,
  view: Eye,
  download: Download,
};

export function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const C = icons[name] ?? Sparkles;
  return <C aria-hidden className={className} strokeWidth={1.5} />;
}

/** Lucide dropped brand marks, so the few social glyphs we need are inline. */
export function SocialIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  if (name === "instagram")
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" strokeLinejoin="round" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5V16M8 7.75v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.5-2.5s2 1 2 2.5V16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return <Icon name={name} className={className} />;
}
