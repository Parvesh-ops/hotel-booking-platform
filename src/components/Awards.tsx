import { Award } from "lucide-react";
import Container from "./ui/container";

interface AwardsProps {
    title: string;
    description: string;
}

const awards: AwardsProps[] = [
    {
        title: "Best Luxury Hotel",
        description: "World Travel Awards",
    },
    {
        title: "Two Michelin Stars",
        description: "Michelin Guide",
    },
    {
        title: "Five Star Rating",
        description: "Forbes Travel Guide",
    },
    {
        title: "Hotel of the Year",
        description: "Condè Nast Traveler",
    },
];

export default function AwardsSection() {
    return (
        <section className="bg-[#FAF5E7] py-16 px-6 text-center">
            <Container>
            <p className="text-xs md:text-sm tracking-[2px] font-bold text-[#C9960C] uppercase mb-4">
                Awards
            </p>
            <h2
                className="text-center text-2xl md:text-3xl font-bold text-primary-12 mb-3 
  after:content-[''] after:block after:w-14 after:h-[2px] 
  after:bg-[#C9960C] after:mt-1 after:mx-auto"
                style={{ fontFamily: 'var(--font-cormorant)' }}
            >
                Awards & Recognition
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
                {awards.map((award) => (
                    <div
                        key={award.title}
                        className="flex flex-col items-center justify-center border mt-3 p-8 lg:p-12 gap-none"
                    >
                        <Award className="w-12 h-12 text-[#8F6B09] mb-6" strokeWidth={1} />
                        <h3 className="text-lg md:text-lg font-bold text-[#8F6B09] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {award.title}
                        </h3>
                        <p className="text-lg md:text-[12px] font-semibold text-[#8F6B09] ">
                            {award.description}
                        </p>
                    </div>
                ))}
            </div>
            </Container>
        </section>
    );
}