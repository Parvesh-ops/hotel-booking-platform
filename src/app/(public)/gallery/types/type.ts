import { z } from "zod";

export const gallerySchema = z.object({
    src: z.string(),
    alt: z.string(),
    category: z.enum(["ROOMS", "RESTAURANT & BAR", "FACILITIES"]),
})

export type GalleryImage = z.infer<typeof gallerySchema>;

export type GalleryCategory = "ALL" | "ROOMS" | "RESTAURANT & BAR" | "FACILITIES";

export const categories: GalleryCategory[] = ["ALL", "ROOMS", "RESTAURANT & BAR", "FACILITIES"];

export const galleryImages: GalleryImage[] = [
    { src: "/about-banner.png", alt: "Room view 1", category: "ROOMS" },
    { src: "/about-banner.png", alt: "Room view 2", category: "ROOMS" },
    { src: "/about-banner.png", alt: "Room view 3", category: "ROOMS" },
    { src: "/about-banner.png", alt: "Room view 4", category: "ROOMS" },
    { src: "/about-banner.png", alt: "Restaurant view 1", category: "RESTAURANT & BAR" },
    { src: "/about-banner.png", alt: "Restaurant view 2", category: "RESTAURANT & BAR" },
    { src: "/about-banner.png", alt: "Facilities view 1", category: "FACILITIES" },
    { src: "/about-banner.png", alt: "Facilities view 2", category: "FACILITIES" },
    { src: "/about-banner.png", alt: "Facilities view 3", category: "FACILITIES" },
];