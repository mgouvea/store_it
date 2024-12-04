import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FileJson } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};