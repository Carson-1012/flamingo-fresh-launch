import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

// TODO: Replace these URLs with your real social media pages.
const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/", Icon: MusicIcon },
];

function MusicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      {/* TODO(owner): this is a standing "new customer" offer, not date-limited — add an end date here if you want it time-limited. */}
      <Link
        to="/book"
        className="bg-gradient-brand block px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        🎉 New customer? Get $20 off your first wash — Book Now
      </Link>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img src="/flamingo-logo-512.png" alt="Flamingo Fresh Pressure Washing" className="size-12" />
          <span className="font-display text-xl font-semibold tracking-tight max-sm:hidden">
            <span className="text-gradient-brand">Flamingo Fresh</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-flamingo" activeProps={{ className: "text-flamingo" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/services" className="text-muted-foreground transition-colors hover:text-flamingo" activeProps={{ className: "text-flamingo" }}>
            Services
          </Link>
          <Link to="/reviews" className="text-muted-foreground transition-colors hover:text-flamingo" activeProps={{ className: "text-flamingo" }}>
            Reviews
          </Link>
          <Link
            to="/book"
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
          >
            Book Now
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Flamingo Fresh on ${label}`}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-flamingo hover:text-flamingo"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <nav className="flex items-center justify-center gap-5 border-t border-border px-4 py-2 text-sm font-medium md:hidden">
        <Link to="/" className="text-muted-foreground" activeProps={{ className: "text-flamingo" }} activeOptions={{ exact: true }}>Home</Link>
        <Link to="/services" className="text-muted-foreground" activeProps={{ className: "text-flamingo" }}>Services</Link>
        <Link to="/reviews" className="text-muted-foreground" activeProps={{ className: "text-flamingo" }}>Reviews</Link>
        <Link to="/book" className="rounded-full bg-black px-3 py-1 text-flamingo-foreground">Book Now</Link>
      </nav>
    </header>
  );
}
