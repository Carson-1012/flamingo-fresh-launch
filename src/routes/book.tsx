import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, DollarSign, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";

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
const BUSINESS_PHONE = "(813) 510-6189";
const BUSINESS_EMAIL = "flamingofreshpressurewashing@gmail.com"; // where quote requests get emailed
const SERVICE_AREA = "Serving Wesley Chapel, Florida, and surrounding areas";
const CASHTAG = "$cgdavis1012";
const CASH_APP_URL = `https://cash.app/${CASHTAG}`;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeqeayp";

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
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <CheckCircle2 className="size-14 text-flamingo" />
        <h1 className="text-3xl font-bold tracking-tight">Request sent!</h1>
        <p className="text-muted-foreground">
          Your quote request came through — we'll get back to you shortly. If you don't hear from us soon, call or
          text {BUSINESS_PHONE}.
        </p>
        <p className="text-sm text-muted-foreground">
          Once we've finished the job, we'll let you know the total — pay with Cash App, Zelle, cash, or check.
          No payment needed now.
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
            <li className="flex items-start gap-3">
              <span className="flex size-9 flex-none items-center justify-center rounded-full bg-flamingo-soft text-flamingo"><DollarSign className="size-4" /></span>
              <span>
                Payment due once your job is complete — Cash App (
                <a href={CASH_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-flamingo">{CASHTAG}</a>
                ), Zelle, cash, or check
              </span>
            </li>
          </ul>

          {/* TODO(owner): update the map query below too if you change SERVICE_AREA. */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Flamingo Fresh service area map"
              src="https://maps.google.com/maps?q=Wesley%20Chapel%2C%20FL&z=10&output=embed"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          ref={formRef}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft md:col-span-3 md:p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            setSubmitting(true);
            setFailed(false);
            try {
              const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
              });
              if (res.ok) {
                setSubmitted(true);
              } else {
                setFailed(true);
              }
            } catch {
              setFailed(true);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {failed && (
            <p className="mb-4 rounded-xl bg-destructive/10 p-3 text-sm text-destructive">
              Something went wrong sending that — please call or text {BUSINESS_PHONE} instead, or{" "}
              <a href={formRef.current ? buildMailto(formRef.current) : `mailto:${BUSINESS_EMAIL}`} className="underline">
                email us directly
              </a>
              .
            </p>
          )}
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
                <option>Driveway / Walkway — Regular size ($125)</option>
                <option>Driveway / Walkway — Large ($150)</option>
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
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-flamingo px-6 py-3 font-semibold text-flamingo-foreground shadow-soft transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {submitting ? "Sending…" : "Request My Free Quote"}
          </button>
        </form>
      </div>
    </div>
  );
}
