import Container from "./ui/container";

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Best Rate Guarantee",
    description:
      "Book directly with us and enjoy the lowest rates available, guaranteed. If you find a lower price, we’ll match it.",
  },
  {
    title: "24/7 Concierge Service",
    description:
      "Our dedicated concierge team is available around the clock to arrange theatre tickets, restaurant reservations, and bespoke experiences.",
  },
  {
    title: "Prime Location",
    description:
      "Situated in the heart of Mayfair, steps away from Hyde Park, Bond Street, and London’s finest cultural landmarks.",
  },
  {
    title: "Personalised Experience",
    description:
      "From pillow preferences to dietary requirements, we remember every detail to tailor your stay perfectly.",
  },
  {
    title: "Complimentary Upgrades",
    description:
      "Loyalty members enjoy complimentary room upgrades, late checkout, and exclusive access to our private lounge.",
  },
  {
    title: "Wellness & Wellbeing",
    description:
      "Enjoy complimentary access to our spa facilities, morning yoga sessions, and a curated wellness minibar in every room.",
  },
];

export default function BenefitsSection() {
  return (
   <section className="bg-[#FDFDFD] py-16 px-6 text-center">
    <Container>
        {/* Header */}
        <div className="text-center mb-12">
            <p className="text-xs md:text-sm tracking-[2px] font-bold text-[#C9960C] uppercase mb-4">
                Benifits
            </p>
          <h2
                className="text-center text-2xl md:text-3xl font-bold text-primary-12 mb-3 
  after:content-[''] after:block after:w-14 after:h-[2px] 
  after:bg-[#C9960C] after:mt-1 after:mx-auto"
                style={{ fontFamily: 'var(--font-cormorant)' }}
            >
                What makes us different
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-[#8F6B09]/10 bg-[#FFF8EC] p-6"
            >
              <h3 className="text-2xl font-bold text-[#8F6B09] mb-3"  style={{ fontFamily: 'var(--font-cormorant)' }}>
                {item.title}
              </h3>
              <p className="text-sm text-[#8F6B09] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
    </Container>
    </section>
  );
}