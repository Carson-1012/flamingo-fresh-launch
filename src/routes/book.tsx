import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Now — Flamingo Fresh Pressure Washing" },
      { name: "description", content: "Book your Flamingo Fresh pressure washing service. Free quotes, flexible scheduling." },
      { property: "og:title", content: "Book Now — Flamingo Fresh Pressure Washing" },
      { property: "og:description", content: "Book your pressure washing service — free quotes, flexible scheduling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-flamingo focus:ring-2 focus:ring-flamingo/30";

// TODO(owner): fill in your real contact details here — used in the sidebar links
// below AND to build the quote-request email when someone submits the form.
const BUSINESS_PHONE = "(555) 123-4567"; // e.g. "(813) 213-0478"
const BUSINESS_EMAIL = "hello@flamingofresh.com"; // where quote requests get emailed
const SERVICE_AREA = "Serving Wesley Chapel, Florida, and surrounding areas";

function buildMailto(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();

  const subject = `Quote request: ${get("service")} — ${get("name")}`;
  const body = [
    `Name: ${get("name")}`,
    `Phone: ${get("phone")}`,
    `Email: ${get("email")}`,
    `Address/Area: ${get("address")}`,
    `Service: ${get("service")}`,
    `Details: ${get("details") || "—"}`,
  ].join("\n");

  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <CheckCircle2 className="size-14 text-flamingo" />
        <h1 className="text-3xl font-bold tracking-tight">Almost there!</h1>
        <p className="text-muted-foreground">
          Your email app should have opened with your quote request ready to send. Just hit send and we'll get back to
          you shortly. If nothing opened, call or text {BUSINESS_PHONE} instead.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight">Book <span className="text-gradient-brand">Now</span></h1>
          <p className="mt-3 text-muted-foreground">
            Tell us what needs cleaning and we'll get back to you with a free, no-obligation quote — usually same day.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-aqua-soft text-aqua-foreground"><Phone className="size-4" /></span>
              <a href={`tel:${BUSINESS_PHONE.replace(/[^\d+]/g, "")}`} className="hover:text-flamingo">{BUSINESS_PHONE}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-aqua-soft text-aqua-foreground"><Mail className="size-4" /></span>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-flamingo">{BUSINESS_EMAIL}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-aqua-soft text-aqua-foreground"><MapPin className="size-4" /></span>
              {SERVICE_AREA}
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-flamingo-soft text-flamingo"><CalendarCheck className="size-4" /></span>
              Flexible scheduling, 7 days a week
            </li>
          </ul>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-soft md:col-span-3 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const mailto = buildMailto(e.currentTarget);
            window.location.href = mailto;
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Name</span>
              <input name="name" required placeholder="Your name" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Phone</span>
              <input name="phone" required type="tel" placeholder="(555) 555-5555" className={inputClass} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input name="email" required type="email" placeholder="you@email.com" className={inputClass} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Address / Area</span>
              <input name="address" required placeholder="Where should we clean?" className={inputClass} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Service Needed</span>
              <select name="service" required className={inputClass} defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Driveway / Walkway</option>
                <option>House Washing (Soft Wash)</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Details (optional)</span>
              <textarea name="details" rows={4} placeholder="Tell us about the job — size, stains, timing..." className={inputClass} />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Request My Free Quote
          </button>
        </form>
      </div>
    </div>
  );
}
