import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Droplets, Home, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flamingo Fresh — Pressure Washing in Wesley Chapel, FL" },
      { name: "description", content: "Flamingo Fresh delivers professional driveway and house washing in Wesley Chapel, FL and surrounding areas. Book your free quote today." },
      { property: "og:title", content: "Flamingo Fresh — Pressure Washing in Wesley Chapel, FL" },
      { property: "og:description", content: "Professional pressure washing that leaves your property flamingo fresh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// TODO(owner): update this once you have insurance in place, if "Insured" isn't accurate yet.
const HIGHLIGHTS = [
  { Icon: Home, title: "Driveways & House Washing", text: "Our two specialties, done right — more services coming as we grow." },
  { Icon: ShieldCheck, title: "Safe & Insured", text: "Surface-safe soft washing, done carefully on every job." },
  { Icon: Sparkles, title: "Like-New Results", text: "We strip away built-up dirt, mold and grime." },
];

function HomePage() {
  return (
    <div>
      <section className="bg-wave-hero">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flamingo-soft px-3 py-1 text-xs font-semibold text-flamingo">
              <MapPin className="size-3.5" /> Locally Owned & Operated
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Make Your Home <span className="text-gradient-brand">Flamingo Fresh</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Professional driveway and house washing that brings your property back to life — fast, affordable, and spotless.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
              >
                Book Now <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-aqua bg-aqua-soft px-6 py-3 font-semibold text-aqua-foreground transition-transform hover:scale-105"
              >
                <Droplets className="size-4" /> View Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-flamingo-soft via-card to-aqua-soft p-1 shadow-soft">
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-card/70 text-center">
                <Droplets className="size-16 text-aqua" />
                <p className="font-display text-2xl font-semibold">Before &amp; After Photos</p>
                <p className="max-w-xs text-sm text-muted-foreground">Show off your best transformations here — add your photos to this spot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Flamingo Fresh, proudly serving <span className="text-gradient-brand">Wesley Chapel, FL & surrounding areas</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're a locally owned pressure washing business focused on driveways and house washing — nothing spread too
          thin, just careful, thorough work on the two jobs we do best. We show up on time, treat your property like
          our own, and won't leave until it's spotless.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Why Flamingo Fresh?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-xl bg-flamingo-soft text-flamingo">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-aqua-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
          <BadgeCheck className="size-10 text-flamingo" />
          <h2 className="text-3xl font-bold tracking-tight">Ready for a fresh clean?</h2>
          <p className="max-w-md text-muted-foreground">Get a free quote in minutes. No pressure — just pressure washing.</p>
          <Link
            to="/book"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
          >
            Book Now <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
