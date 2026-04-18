import Image, { StaticImageData } from "next/image"

type PageBannerProps = {
  name: string
  image: string | StaticImageData
  title: string
}

export default function PageBanner({ name, image, title }: PageBannerProps) {
  return (
    <section className="relative h-34 md:h-90">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Background image */}
      <Image
        src={image}
        alt={name}
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 bg-black/20 flex justify-center items-center z-20">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-neutral-1 text-3xl font-heading" style={{ fontFamily: 'var(--font-cormorant)' }}>
            {title}
          </h1>
          <hr className="w-16 h-0.5 mb-7  bg-[#C9960C] border-0" />
        </div>

      </div>
    </section>
  )
}