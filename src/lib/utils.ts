import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Global easing for cinematic feel
export const easeCinematic: [number, number, number, number] = [0.22, 1, 0.36, 1];
