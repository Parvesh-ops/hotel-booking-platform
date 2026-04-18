import { z } from "zod";

export const StatsSchema = z.object({
  number: z.string(),
  label: z.string(),
  suffix: z.string(),
});

export type Stats = z.infer<typeof StatsSchema>;

    export const stats: Stats[] = [
        { number: "20", label: "Team Members", suffix: "+" },
        { number: "2026", label: "Years of Establishment", suffix: "" },
        { number: "400", label: "Happy Guests", suffix: "+" },
        { number: "50", label: "Awards & Recognition", suffix: "+" },
    ];