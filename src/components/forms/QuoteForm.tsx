"use client";

import { useRef, useState } from "react";
import { ImagePlus, X, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Quote form — the conversion engine (master brief s.18).
 *
 * v1 delivery: WhatsApp deep-link with the full form content.
 * Photos: picked client-side, listed in the message, and attached
 * manually in WhatsApp (wa.me links can't carry files).
 * Supabase-backed delivery comes later (brief s.33-34: don't over-engineer v1).
 *
 * Security (brief s.41): honeypot, required-field + format validation,
 * 5MB/photo + 5-photo limit, client-side submit cooldown.
 */

const SERVICES = [
  "Interior Remodeling",
  "Kitchen",
  "Bathroom",
  "Painting",
  "Cabinet Refinishing",
  "Exterior",
  "Garage",
  "Outdoor",
  "Repairs",
  "Maintenance",
  "Smart Home",
  "Other",
] as const;

const MAX_PHOTOS = 5;
const MAX_PHOTO_MB = 5;
const COOLDOWN_MS = 30_000;

const inputCls =
  "w-full rounded-[2px] border border-hairline bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-copper focus:outline-none";
const labelCls = "mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-ink";

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    description: "",
    contact: "WhatsApp",
    company: "", // honeypot — humans never fill this
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const addPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const nextErrors: Record<string, string> = {};
    const valid: File[] = [];
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        nextErrors.photos = "Only image files can be uploaded.";
        continue;
      }
      if (file.size > MAX_PHOTO_MB * 1024 * 1024) {
        nextErrors.photos = `Each photo must be under ${MAX_PHOTO_MB}MB.`;
        continue;
      }
      valid.push(file);
    }
    const merged = [...photos, ...valid].slice(0, MAX_PHOTOS);
    setPhotos(merged);
    setErrors((prev) => ({ ...prev, ...nextErrors, photos: nextErrors.photos ?? "" }));
    if (e.target) e.target.value = "";
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s()-]{7,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please choose a service.";
    if (!form.description.trim() || form.description.trim().length < 10)
      next.description = "Please describe your project (a few words is fine).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown) return;
    // honeypot filled = bot
    if (form.company.trim()) {
      setSent(true); // silently pretend success
      return;
    }
    if (!validate()) return;

    const lines = [
      `*New quote request — ${site.name} website*`,
      "",
      `*Name:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      form.email.trim() ? `*Email:* ${form.email.trim()}` : "",
      `*Service:* ${form.service}`,
      form.location.trim() ? `*Property location:* ${form.location.trim()}` : "",
      `*Preferred contact:* ${form.contact}`,
      "",
      "*Project description:*",
      form.description.trim(),
      photos.length
        ? `\n_Photos selected: ${photos.length} — I will attach them here._`
        : "",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    setCooldown(true);
    setTimeout(() => setCooldown(false), COOLDOWN_MS);
  };

  if (sent) {
    return (
      <div className="rounded-[2px] border border-hairline bg-offwhite p-8 text-center lg:p-12">
        <p className="kicker mb-4 text-sage">Quote request received</p>
        <h2 className="font-display text-[26px] font-extrabold tracking-tight">
          Thanks. Your project details have been received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          Home of Talent will get back to you shortly.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] bg-copper px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-copper-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Open WhatsApp
          </a>
          {photos.length > 0 && (
            <p className="text-[13px] text-muted">
              If WhatsApp opened without your message, paste it there and attach
              your {photos.length} photo{photos.length > 1 ? "s" : ""}.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2px] border border-hairline bg-offwhite p-6 lg:p-10">
      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={set("company")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={cn(inputCls, errors.name && "border-red-400")}
            value={form.name}
            onChange={set("name")}
          />
          {errors.name && <FieldError msg={errors.name} />}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 082 123 4567"
            className={cn(inputCls, errors.phone && "border-red-400")}
            value={form.phone}
            onChange={set("phone")}
          />
          {errors.phone && <FieldError msg={errors.phone} />}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={cn(inputCls, errors.email && "border-red-400")}
            value={form.email}
            onChange={set("email")}
          />
          {errors.email && <FieldError msg={errors.email} />}
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>
            Service Type *
          </label>
          <select
            id="service"
            className={cn(inputCls, !form.service && "text-muted/70", errors.service && "border-red-400")}
            value={form.service}
            onChange={set("service")}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <FieldError msg={errors.service} />}
        </div>
        <div>
          <label htmlFor="location" className={labelCls}>
            Property Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Suburb / area"
            className={inputCls}
            value={form.location}
            onChange={set("location")}
          />
        </div>
        <div>
          <label htmlFor="contact" className={labelCls}>
            Preferred Contact Method
          </label>
          <select
            id="contact"
            className={inputCls}
            value={form.contact}
            onChange={set("contact")}
          >
            <option>WhatsApp</option>
            <option>Phone call</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="description" className={labelCls}>
          Project Description *
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Tell us what needs doing — the room, the problem, roughly what you have in mind."
          className={cn(inputCls, "resize-y", errors.description && "border-red-400")}
          value={form.description}
          onChange={set("description")}
        />
        {errors.description && <FieldError msg={errors.description} />}
      </div>

      {/* Photo upload */}
      <div className="mt-6">
        <span className={labelCls}>Photos (optional)</span>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={photos.length >= MAX_PHOTOS}
          className="flex w-full items-center justify-center gap-2 rounded-[2px] border border-dashed border-hairline bg-white px-4 py-4 text-[14px] font-medium text-muted transition-colors hover:border-copper hover:text-copper disabled:opacity-50"
        >
          <ImagePlus className="h-4 w-4" aria-hidden />
          {photos.length >= MAX_PHOTOS
            ? `Maximum ${MAX_PHOTOS} photos`
            : `Add photos (up to ${MAX_PHOTOS}, ${MAX_PHOTO_MB}MB each)`}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={addPhotos}
        />
        {errors.photos && <FieldError msg={errors.photos} />}
        {photos.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {photos.map((photo, i) => (
              <li
                key={`${photo.name}-${i}`}
                className="flex items-center gap-2 rounded-[2px] border border-hairline bg-white px-3 py-1.5 text-[13px] text-muted"
              >
                <span className="max-w-[180px] truncate">{photo.name}</span>
                <button
                  type="button"
                  aria-label={`Remove ${photo.name}`}
                  onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))}
                  className="text-muted transition-colors hover:text-copper"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-[12px] text-muted">
          Photos are attached when the WhatsApp chat opens — they can&apos;t travel
          in the message link itself.
        </p>
      </div>

      <button
        type="submit"
        disabled={cooldown}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-copper px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-copper-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Submit Quote Request
      </button>
      <p className="mt-4 text-[12px] text-muted">
        Your request opens in WhatsApp, ready to send to {site.name}. No spam, no
        pressure — your details stay between you and us.
      </p>
    </form>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p role="alert" className="mt-2 text-[13px] font-medium text-red-600">
      {msg}
    </p>
  );
}
