import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Car, Droplets, Fence, Home, Sun } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Flamingo Fresh Pressure Washing" },
      { name: "description", content: "Driveway, house siding, deck, patio, fence and commercial pressure washing services from Flamingo Fresh." },
      { property: "og:title", content: "Services — Flamingo Fresh Pressure Washing" },
      { property: "og:description", content: "Driveways, siding, decks, patios, fences and commercial cleaning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { Icon: Car, title: "Driveways & Walkways", text: "Blast away oil stains, tire marks and built-up grime for curb appeal that pops." },
  { Icon: Home, title: "House Siding (Soft Wash)", text: "Gentle low-pressure soft washing removes mold, algae and dirt without damage." },
  { Icon: Sun, title: "Decks & Patios", text: "Wood and composite decking cleaned and prepped — ready for grilling season." },
  { Icon: Fence, title: "Fences", text: "Restore weathered wood and vinyl fencing to its original color." },
  { Icon: Droplets, title: "Pool Decks & Lanais", text: "Slip-resistant, spotless pool areas your family can enjoy safely." },
  { Icon: Building2, title: "Commercial Properties", text: "Storefronts, parking areas and building exteriors that impress customers." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our <span className="text-gradient-brand">Services</span></h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Every job starts with a free quote. We use surface-appropriate pressure and eco-friendly detergents.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ Icon, title, text }) => (
          <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
            <span className="flex size-12 items-center justify-center rounded-xl bg-aqua-soft text-aqua-foreground transition-colors group-hover:bg-flamingo-soft group-hover:text-flamingo">
              <Icon className="size-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
        >
          Get a Free Quote <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
