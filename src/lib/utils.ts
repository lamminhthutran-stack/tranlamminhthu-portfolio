import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveAsset(path?: string) {
  if (!path) return path;
  if (path.startsWith("http")) return path;
  const base = import.meta.env.BASE_URL || "/";
  // If base is '/', just return the path directly to avoid double slashes
  if (base === "/") return path.startsWith("/") ? path : `/${path}`;

  // Clean up slashes
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${cleanBase}${cleanPath}`;
}
