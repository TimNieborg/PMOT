import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function priceFormatter(price: string) {
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(parseFloat(price));
}