import Image from "next/image"

export default function AnimeJs() {
  return (
    <div className="xl:w-60 xl:h-60 md:w-48 md:h-48">
      <Image
        src="/planet.png"
        alt="Meteoro"
        className="h-full w-full object-contain"
        width={500}
        height={500}
      />
    </div>
  )
}
