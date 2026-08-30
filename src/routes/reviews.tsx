import { Link, createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Flamingo Fresh Pressure Washing" },
      { name: "description", content: "See what customers say about Flamingo Fresh pressure washing — 5-star rated local service." },
      { property: "og:title", content: "Reviews — Flamingo Fresh Pressure Washing" },
      { property: "og:description", content: "Real reviews from happy Flamingo Fresh customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

// Replace these with your real customer reviews.
const REVIEWS = [
  { name: "Sarah M.", text: "My driveway looks brand new! The crew was on time, professional and the results blew me away.", service: "Driveway Cleaning" },
  { name: "James T.", text: "They soft-washed our siding and got rid of years of green algae. House looks freshly painted.", service: "House Siding" },
  { name: "Priya K.", text: "Fast quote, fair price, amazing job on our back deck. Already booked them again for spring.", service: "Deck Cleaning" },
  { name: "Marcus L.", text: "Best pressure washing company I've used. Attention to detail is unmatched.", service: "Patio & Fence" },
  { name: "Elena R.", text: "Our storefront sidewalks were embarrassing before. Now customers compliment how clean it looks!", service: "Commercial" },
  { name: "Tom W.", text: "Friendly, insured, and the pool deck hasn't looked this good since we moved in.", service: "Pool Deck" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-flamingo">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Customer <span className="text-gradient-brand">Reviews</span></h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Real feedback from real neighbors. Your property could be our next 5-star story.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Quote className="size-6 text-aqua" />
            <blockquote className="mt-3 flex-1 text-sm text-muted-foreground">"{r.text}"</blockquote>
            <figcaption className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.service}</p>
              </div>
              <Stars />
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
        >
          Become Our Next Happy Customer
        </Link>
      </div>
    </div>
  );
}
