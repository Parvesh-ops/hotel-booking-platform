import Container from "@/src/components/ui/container"

const values = [
    {
        title: "Passion",
        description:
            "Every detail is perfected with passion, from the thread count of our linens to the arrangement of fresh flowers in every room.",
    },
    {
        title: "Integrity",
        description:
            "We honor the art of classic hospitality with unwavering integrity, earning the trust of generations of guests.",
    },
    {
        title: "Excellence",
        description:
            "Our pursuit of excellence is relentless — we don't settle until every guest's experience surpasses their expectations.",
    },
];

const CoreValues = () => {
    return (
        <div>
            {/* Core Values Section */}
            <section className="bg-[#FDF8EE] py-16 md:py-24">
                <Container>
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <p className="text-sm font-bold text-[#C9960C] uppercase mb-2">
                            What We Believe
                        </p>
                        <h3
                            className="relative text-2xl md:text-3xl font-bold text-primary-12 mb-3 after:content-[''] after:block after:w-14 after:h-[2px] after:bg-[#C9960C]  after:mt-2 after:mx-auto"
                            style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                            Our Core Values
                        </h3>
                    </div>

                    {/* Values Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="border border-[#C9960C]/30 bg-white rounded-sm px-8 py-10 text-center"
                            >
                                <h4
                                    className="text-xl font-bold text-[#8F6B09] mb-4"
                                    style={{ fontFamily: 'var(--font-cormorant)' }}
                                >
                                    {value.title}
                                </h4>
                                <p className="text-[#AB800A] text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default CoreValues