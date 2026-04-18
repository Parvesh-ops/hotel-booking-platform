import { z } from "zod";

export const MenuSchema = z.object({
    name: z.string(),
    price: z.string(),
});

export type Menu = z.infer<typeof MenuSchema>;

export const MenuCategorySchema = z.object({
    label: z.string(),
    items: z.array(MenuSchema),
});

export type MenuCategory = z.infer<typeof MenuCategorySchema>;


export const menuData: MenuCategory[] = [
    {
        label: "Breakfast",
        items: [
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
        ],
    },
    {
        label: "Lunch",
        items: [
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
        ],
    },
    {
        label: "Dinner",
        items: [
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
        ],
    },
    {
        label: "Desserts",
        items: [
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
            { name: "Lobster Bisque", price: "Rs. 2000+" },
        ],
    },
];