import { z } from "zod";

export const FacilitySchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageOnRight: z.boolean(),
});

export type Facility = z.infer<typeof FacilitySchema>;


export const facilities: Facility[] = [
    {
        title: "Spa & Wellness",
        description:
            "Our award-winning spa offers a sanctuary of calm with a 20m heated pool, vitality pool, sauna, steam room, and experience showers. Choose from over 50 treatments using products from La Prairie and Aromatherapy Associates.",
        image: "/about-banner.png",
        imageOnRight: false,
    },
    {
        title: "Fitness Center",
        description:
            "Our award-winning spa offers a sanctuary of calm with a 20m heated pool, vitality pool, sauna, steam room, and experience showers. Choose from over 50 treatments using products from La Prairie and Aromatherapy Associates.",
        image: "/about-banner.png",
        imageOnRight: true,
    },
    {
        title: "Grand Ballroom",
        description:
            "Our award-winning spa offers a sanctuary of calm with a 20m heated pool, vitality pool, sauna, steam room, and experience showers. Choose from over 50 treatments using products from La Prairie and Aromatherapy Associates.",
        image: "/about-banner.png",
        imageOnRight: false,
    },
    {
        title: "Fine Dining",
        description:
            "Our award-winning spa offers a sanctuary of calm with a 20m heated pool, vitality pool, sauna, steam room, and experience showers. Choose from over 50 treatments using products from La Prairie and Aromatherapy Associates.",
        image: "/about-banner.png",
        imageOnRight: true,
    },
];