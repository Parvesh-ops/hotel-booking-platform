import { z } from "zod";

export const RoomSchema = z.object({
    id: z.number(),
    name: z.string(),
    guests: z.number(),
    type: z.string(),
    price: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    facilities: z.array(z.string()).optional(),
});

export type Room = z.infer<typeof RoomSchema>;


export const rooms: Room[] = [
    {
        id: 1,
        name: "Deluxe Ocean View",
        guests: 2,
        type: "Deluxe Room",
        price: "1,200",
        image: "/about-banner.png",
        images: ["/about-banner.png", "/about-banner.png", "/about-banner.png"],
        category: "DELUXE ROOM",
        description: "Experience unparalleled comfort in our Deluxe Ocean View room, featuring breathtaking views of the coastline and modern amenities designed for your relaxation.",
        facilities: ["Infinity Pool", "Central Cooling", "Private Gym", "24/7 Security", "Underground Parking", "Wine Cellar"]
    },
    {
        id: 2,
        name: "Standard Comfort Room",
        guests: 2,
        type: "Standard Room",
        price: "800",
        image: "/about-banner.png",
        images: ["/about-banner.png", "/about-banner.png"],
        category: "STANDARD ROOM",
        description: "Our Standard Comfort Room offers a cozy and functional space, perfect for travelers seeking a peaceful retreat with all the essential amenities.",
        facilities: ["Central Cooling", "24/7 Security", "Underground Parking", "High-speed Wi-Fi"]
    },
    {
        id: 3,
        name: "Royal Suite luxury",
        guests: 4,
        type: "Royal Suites",
        price: "2,500",
        image: "/about-banner.png",
        images: ["/about-banner.png", "/about-banner.png", "/about-banner.png"],
        category: "ROYAL SUITES",
        description: "Indulge in the height of luxury in our Royal Suite. Spanning multiple rooms with premium finishes, this suite is designed for those who demand the very best.",
        facilities: ["Infinity Pool", "Private Butler Service", "Private Gym", "24/7 Security", "Wine Cellar", "Gourmet Kitchen"]
    },
    {
        id: 4,
        name: "Executive Deluxe Room",
        guests: 2,
        type: "Deluxe Room",
        price: "1,500",
        image: "/about-banner.png",
        category: "DELUXE ROOM",
        description: "The Executive Deluxe Room is tailored for business and leisure alike, offering a sophisticated environment with enhanced privacy and workspace.",
        facilities: ["Central Cooling", "Private Gym", "24/7 Security", "Executive Lounge Access"]
    },
    {
        id: 5,
        name: "Presidential Royal Suite",
        guests: 6,
        type: "Royal Suites",
        price: "5,000",
        image: "/about-banner.png",
        category: "ROYAL SUITES",
        description: "Our most exclusive accommodation, the Presidential Royal Suite, offers unmatched space and elegance, with panoramic views and bespoke services.",
        facilities: ["Infinity Pool", "Private Cinema", "Private Gym", "24/7 Security", "Helipad Access", "Wine Cellar"]
    },
    {
        id: 6,
        name: "Classic Standard Room",
        guests: 2,
        type: "Standard Room",
        price: "750",
        image: "/about-banner.png",
        category: "STANDARD ROOM",
        description: "A timeless choice for any guest, the Classic Standard Room provides a comfortable stay with a focus on simplicity and quality service.",
        facilities: ["Central Cooling", "24/7 Security", "Underground Parking", "Complimentary Breakfast"]
    },
];