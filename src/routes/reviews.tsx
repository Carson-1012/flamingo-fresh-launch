import { Link, createFileRoute } from "@tanstack/react-router";
import { Camera, MessageSquareHeart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Flamingo Fresh Pressure Washing" },
      { name: "description", content: "Flamingo Fresh is a new local pressure washing business — be one of our first five-star reviews." },
      { property: "og:title", content: "Reviews — Flamingo Fresh Pressure Washing" },
      { property: "og:description", content: "A new local pressure washing business, ready to earn its first reviews." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

// TODO(owner): once you have a Google Business Profile, drop its review link
// here and swap this whole page for real quotes/star ratings as they come in.
const GOOGLE_REVIEW_URL = "";

const PROMISES = [
  { Icon: Sparkles, title: "Brand new, all in", text: "You'll be one of our very first customers — which means our full attention on getting your job exactly right." },
  { Icon: Camera, title: "Before & after, always", text: "Every job gets before/after photos, so you can see exactly what changed." },
  { Icon: MessageSquareHeart, title: "We'll ask for your honest take", text: "Good or bad, your feedback shapes how we run every job after yours." },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Customer <span className="text-gradient-brand">Reviews</span></h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Flamingo Fresh is brand new — no reviews yet, just an honest heads up about that and a promise on how we work.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROMISES.map(({ Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="flex size-11 items-center justify-center rounded-xl bg-flamingo-soft text-flamingo">
              <Icon className="size-5" />
            </span>
            <h2 className="mt-4 text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-3 text-center">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-105"
        >
          Become Our First Five-Star Review
        </Link>
        {GOOGLE_REVIEW_URL && (
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-flamingo">
            Leave us a Google review →
          </a>
        )}
      </div>
    </div>
  );
}
