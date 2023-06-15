import Image from "next/image"
import Link from "next/link"

export default function PortfolioId({ portfolio, spanish, english }) {
  return (
    <div className="overflow-hidden text-gray-700 mb-[3%]">
      <div className="px-2 mx-auto lg:px-5">
        <p className="lg:ml-8 font-way lg:text-[3rem] lg:py-0 py-[4%] word-12 uppercase tracking-[0.45rem] text-amber-500 text-2xl lg:mb-0 lg:mt-5">
          {portfolio.Date}
        </p>
        <div className="flex flex-wrap mx-auto lg:w-[95%] xl:pt-4">
          <Image
            alt={`${
              spanish
                ? portfolio.Description
                : english
                ? portfolio.englishDescription
                : portfolio.Description
            }`}
            className="object-contain object-center w-full lg:w-[55%]"
            src={portfolio.ImagePortfolio}
            width={1000}
            height={1000}
          />
          <div className="w-full mt-[6%] lg:w-[45%] lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="lg:text-[0.8rem] mb-[1%] font-semibold uppercase tracking-[0.32rem] text-amber-500 lg:mb-2 lg:mt-12 text-xs">
              {spanish && portfolio.Type}
              {english && portfolio.englishType}
            </h2>
            <h1 className="font-bold mb-[2%] font-way text-[1.2rem] uppercase tracking-[0.32rem] text-white">
              {portfolio.Name}
            </h1>
            <p className="mb-[3%] leading-6 text-white lg:mb-5">
              {spanish && portfolio.Description}
              {english && portfolio.englishDescription}
            </p>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.32rem] text-amber-500 bg-neutral-900/50 p-[2%] text-center lg:mb-[2%] mb-[3%]">
              {portfolio.Technologies}
            </p>
          </div>
          {portfolio.Link.length > 5 ? (
            <button className="mt-[2%] w-full py-2 text-[0.8rem] font-bold uppercase tracking-[0.32rem] bg-amber-500 text-white lg:mb-0 mb-[53%]">
              <Link href={`${portfolio.Link}`} target="_blank" rel="noreferrer">
                <span>
                  {english && "View Project"}
                  {spanish && "Ver proyecto"}
                </span>
              </Link>
            </button>
          ) : (
            <span className="text-white mt-[2%] lg:mt-8 py-2 text-center w-full md:text-xs text-[0.6rem] font-semibold uppercase tracking-[0.32rem] bg-neutral-900/50 lg:mb-0 mb-[53%]">
              {spanish && "Este proyecto ya no esta disponible"}
              {english && "This project is no longer available"}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
