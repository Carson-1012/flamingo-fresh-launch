import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-aqua-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
        <div className="flex items-center gap-2">
          <img src="/flamingo-logo-192.png" alt="Flamingo Fresh Pressure Washing" className="size-10" />
          <span className="font-display text-lg font-semibold">Flamingo Fresh</span>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Professional pressure washing that leaves your property flamingo fresh — driveways, siding, decks, and more.
        </p>
        <div className="flex gap-5 text-sm font-medium">
          <Link to="/services" className="text-muted-foreground hover:text-flamingo">Services</Link>
          <Link to="/reviews" className="text-muted-foreground hover:text-flamingo">Reviews</Link>
          <Link to="/book" className="text-muted-foreground hover:text-flamingo">Book Now</Link>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Flamingo Fresh Pressure Washing. All rights reserved.</p>
      </div>
    </footer>
  );
}
