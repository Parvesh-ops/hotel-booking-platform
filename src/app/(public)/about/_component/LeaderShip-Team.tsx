import Container from "@/src/components/ui/container"
import Image from "next/image"


const team = [
    { name: "Sir Richard Ashford", role: "Chairman & Owner", image: "/team-1.png" },
    { name: "Sir Richard Ashford", role: "Chairman & Owner", image: "/team-2.png" },
    { name: "Sir Richard Ashford", role: "Chairman & Owner", image: "/team-3.png" },
];

const LeaderShipTeam = () => {
    return (
        <div>
            {/* Leadership Team Section */}
            <section className="bg-white py-16 md:py-24">
                <Container>
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <p className="text-sm font-bold text-[#C9960C] uppercase mb-2">
                            Our People
                        </p>
                        <h3
                            className="relative text-2xl md:text-3xl font-bold text-primary-12 mb-3 after:content-[''] after:block after:w-14 after:h-[2px] after:bg-[#C9960C]  after:mt-2 after:mx-auto"
                            style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                            Leadership Team
                        </h3>
                    </div>

                    {/* Team Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="border border-[#C9960C]/30 bg-white rounded-sm overflow-hidden"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h4
                                        className="text-xl font-bold text-[#8F6B09] mb-2"
                                        style={{ fontFamily: 'var(--font-cormorant)' }}
                                    >
                                        {member.name}
                                    </h4>
                                    <p className="text-[#AB800A] text-sm uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default LeaderShipTeam