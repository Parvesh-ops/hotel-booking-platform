const backendDomain =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://api.hotel.hamroyouthit.com/";

export const BACKEND_URL = backendDomain;
console.log("BACKEND_URL =", process.env.NEXT_PUBLIC_SERVER_URL);

export const FRONTEND_URLS = [
  "http://localhost:3000",
];

export const BASE_URL = "https://api.hotel.hamroyouthit.com/"

// export const BASE_URL =
//   process.env.NEXT_PUBLIC_FRONTEND_URL ||
//   (process.env.NODE_ENV === "production"
//     ? "https://api.hotel.hamroyouthit.com/"
//     : "http://localhost:3000");

export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_FRONTEND_URL || BASE_URL;
}