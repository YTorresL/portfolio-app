import Image from "next/image"
import Link from "next/link"

export default function Portfolio({ portfolio, spanish, english }) {
  return (
    <div className="mx-[2%] p-[4%]">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <Link
            href={`${english ? "../../en/portfolio/" : ""}${spanish ? "../../portafolio/" : ""}${item.id}`}
            as={`${english ? "../../en/portfolio/" : ""}${spanish ? "../../portafolio/" : ""}${item.id}`}
            key={index}
            className="overflow-hidden rounded-lg"
          >
            <div className="w-full h-full">
              <Image
                alt={`${
                  spanish
                    ? item.Description
                    : english
                    ? item.englishDescription
                    : item.Description
                }`}
                className="block object-cover object-center w-full h-full transition-all hover:opacity-90"
                src={item.ImagePortfolio}
                width={500}
                height={500}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
