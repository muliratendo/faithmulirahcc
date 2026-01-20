import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  // Format Ugandan phone numbers
  return phone.replace(/(\+\d{3})(\s?)(\d{2})(\s?)(\d{7})/, "$1 $3 $5");
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-UG", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
