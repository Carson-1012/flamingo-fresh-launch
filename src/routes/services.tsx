import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Camera, Car, CheckCircle2, Home } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Flamingo Fresh Pressure Washing" },
      { name: "description", content: "Driveway and house siding pressure washing services from Flamingo Fresh." },
      { property: "og:title", content: "Services — Flamingo Fresh Pressure Washing" },
      { property: "og:description", content: "Driveways and house washing, done right." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { Icon: Car, title: "Driveways & Walkways", text: "Blast away oil stains, tire marks and built-up grime for curb appeal that pops." },
  { Icon: Home, title: "House Washing (Soft Wash)", text: "Gentle low-pressure soft washing removes mold, algae and dirt without damaging your siding." },
];

// TODO(owner): adjust these to whatever you actually want to charge.
const PRICING = [
  {
    title: "Driveway / Walkway",
    price: "$125",
    includes: ["Most single driveways", "Oil stains & tire marks treated", "Surface cleaner finish"],
  },
  {
    title: "House Washing",
    price: "$275",
    includes: ["Single-story homes", "Soft wash siding treatment", "Mold & algae removal"],
  },
];

const FAQS = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "No — as long as we can access an outdoor water spigot and the area being cleaned, you don't need to be there. Just let us know how to get in if there's a gate.",
  },
  {
    q: "Do you bring your own water?",
    a: "We use your home's outdoor water spigot. If that's not available, let us know when you book and we'll figure out a plan.",
  },
  {
    q: "How long does a typical job take?",
    a: "Most driveways and single-story house washes take about 1–3 hours, depending on size and how dirty the surface is.",
  },
  {
    q: "Is pressure washing safe for my siding and paint?",
    a: "For house exteriors we use soft washing — low pressure with the right cleaning solution — specifically because high pressure can damage siding and paint. Driveways get more pressure since concrete can handle it.",
  },
  {
    q: "How do I get a price?",
    a: "Fill out the Book Now form or reach out directly — we'll follow up with a free, no-obligation quote based on the size and condition of the area.",
  },
];

const DETAILS = [
  {
    title: "Driveways & Walkways",
    points: [
      "Removes oil stains, tire marks, and built-up grime",
      "Surface cleaner attachment for even, streak-free results",
      "Safe on concrete, pavers, and most sealed surfaces",
    ],
    text: "Your driveway is the first thing anyone sees pulling up — we bring it back to looking new with the right pressure and technique for the surface, not just blasting it and hoping for the best.",
  },
  {
    title: "House Washing (Soft Wash)",
    points: [
      "Low-pressure soft wash — safe for siding, stucco, and paint",
      "Breaks down mold, algae, and dirt before rinsing",
      "No damage to windows, plants, or fixtures",
    ],
    text: "Green streaks and grime build up on siding over time and only get worse. Soft washing lifts it away gently, without the risk high-pressure blasting poses to paint and siding.",
  },
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

      <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
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

      <p className="mx-auto mt-8 max-w-md text-center text-sm text-muted-foreground">
        Just getting started with these two — more services (decks, fences, commercial) coming as we grow.
      </p>

      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Pricing</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Straightforward starting prices — the exact quote depends on size and condition, and you'll always know the
          firm price before we start. No surprises.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {PRICING.map(({ title, price, includes }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2">
                <span className="font-display text-3xl font-bold text-gradient-brand">{price}</span>
                <span className="ml-1.5 text-sm text-muted-foreground">starting at</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 flex-none text-flamingo" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-flamingo px-5 py-2.5 text-sm font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 space-y-20">
        {DETAILS.map(({ title, points, text }, i) => (
          <div key={title} className="grid items-center gap-8 md:grid-cols-2">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 text-muted-foreground">{text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 flex-none rounded-full bg-flamingo" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-flamingo px-5 py-2.5 text-sm font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card text-center">
                <Camera className="size-8 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Before &amp; after photo coming soon</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-2xl">
        <h2 className="text-center text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-20 text-center">
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
