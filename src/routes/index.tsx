import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Calendar, Camera, CheckCircle2, Droplets, Home, MapPin, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flamingo Fresh — Pressure Washing in Wesley Chapel, Florida" },
      { name: "description", content: "Flamingo Fresh delivers professional driveway and house washing in Wesley Chapel, Florida, and surrounding areas. Book your free quote today." },
      { property: "og:title", content: "Flamingo Fresh — Pressure Washing in Wesley Chapel, Florida" },
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

// TODO(owner): remove "Insured" here too if that's not accurate yet — see the note on HIGHLIGHTS above.
const WHY_CHOOSE_US = [
  "Locally Owned & Operated",
  "Professional-Grade Equipment",
  "Careful, Surface-Safe Techniques",
  "Free, No-Obligation Quotes",
  "Satisfaction Focused — We're Not Done Until You're Happy",
];

// TODO(owner): fill these in as you take real before/after photo pairs on jobs —
// each needs a separate "before" and "after" shot from the same angle, not a
// pre-combined image. Leave a slot as `null` to show a "coming soon" tile instead.
type GalleryPair = { before: string; after: string; alt: string } | null;
const GALLERY: GalleryPair[] = [
  { before: "/gallery-garage-before.png", after: "/gallery-garage-after.png", alt: "Garage floor cleaning" },
  { before: "/gallery-walkway-before.png", after: "/gallery-walkway-after.png", alt: "Walkway cleaning" },
  null,
  null,
];

const STEPS = [
  { Icon: MessageSquareText, step: "1", title: "Request Your Free Quote", text: "Tell us about the job — we'll follow up same day with a straightforward price." },
  { Icon: Calendar, step: "2", title: "We Schedule Your Clean", text: "Pick a day that works for you, including weekends." },
  { Icon: Sparkles, step: "3", title: "Enjoy the Fresh Reveal", text: "We handle the mess, you enjoy a spotless driveway or home." },
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
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-105"
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
          Flamingo Fresh, proudly serving <span className="text-gradient-brand">Wesley Chapel, Florida, and surrounding areas</span>
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

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-flamingo">You Can't Beat Flamingo Fresh</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Why Choose Flamingo Fresh?</h2>
            <p className="mt-3 text-muted-foreground">
              We're dedicated to a job well done, with the right tools and the attention that comes from being new
              and hungry to earn every customer.
            </p>
            <ul className="mt-6 space-y-3">
              {WHY_CHOOSE_US.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <CheckCircle2 className="size-5 flex-none text-flamingo" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/book"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
            >
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-background text-center md:aspect-auto md:h-full">
            <Camera className="size-8 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Photo coming soon</p>
          </div>
        </div>
      </section>

      <section className="bg-aqua-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map(({ Icon, step, title, text }) => (
              <div key={step} className="relative text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-flamingo text-flamingo-foreground shadow-soft">
                  <Icon className="size-6" />
                </span>
                <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-flamingo">Step {step}</p>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Before &amp; After Gallery</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Nothing sells a clean like seeing it for yourself. Photos from every job go up here as we complete them.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((pair, i) =>
            pair ? (
              <BeforeAfterSlider key={i} before={pair.before} after={pair.after} alt={pair.alt} />
            ) : (
              <div
                key={i}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card p-4 text-center"
              >
                <Camera className="size-8 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Photo coming soon</p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="bg-aqua-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
          <BadgeCheck className="size-10 text-flamingo" />
          <h2 className="text-3xl font-bold tracking-tight">Ready for a fresh clean?</h2>
          <p className="max-w-md text-muted-foreground">Get a free quote in minutes. No pressure — just pressure washing.</p>
          <Link
            to="/book"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            Book Now <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
