import { redirect } from "next/navigation";

/**
 * /contact simply routes to the quote page — one conversion path,
 * not five (master brief s.38).
 */
export default function ContactPage() {
  redirect("/quote");
}
