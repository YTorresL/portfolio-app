import { useState, useEffect, useRef } from "react"
import { fetchPortfolio } from "@/firebase/client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioSection({ english, spanish }) {
  const sliderRef = useRef(null)
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetchPortfolio().then(setPortfolio)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: false,
    vertical: true,
  }
  const handleButtonClick = (index) => {
    sliderRef.current.slickGoTo(index)
  }
  return (
    <div className="grid grid-cols-1 gap-1 m-1 pt-[5.5%] md:gap-3 md:grid-cols-3 xl:gap-12 xl:mx-14 md:m-3 lg:m-5">
      <div className="col-span-2">
        <div className="border border-[#3a3a32] sm:px-2 px-1 xl:h-[25.5rem] md:h-[17.5rem] sm:h-[20.5rem] lg:h-[20.5rem] overflow-hidden h-[10.5rem] 2xl:h-[30.5rem]">
          <Slider {...settings} ref={sliderRef}>
            {portfolio.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="xl:h-[25.3rem] sm:h-[20.3rem]  py-2 h-[10.3rem] md:h-[17.3rem] lg:h-[20.3rem] 2xl:h-[30.3rem]"
              >
                <ul className="absolute p-1 m-1 bg-black sm:py-2 md:pl-8 sm:pl-3 sm:pr-5 sm:my-2 xl:ml-2">
                  <li className="xl:text-[0.7rem] text-[0.6rem] font-bold uppercase tracking-[0.32rem] flex text-amber-500 md:list-disc pl-1">
                    {Date}
                    <span className="hidden sm:block">
                      {item.Date} - {spanish && item.Type}
                      {english && item.englishType}
                    </span>
                  </li>
                </ul>
                <Link
                  href={`${english ? "../../en/portfolio/" : ""}${
                    spanish ? "../../portafolio/" : ""
                  }${item.id}`}
                  as={`${english ? "../../en/portfolio/" : ""}${
                    spanish ? "../../portafolio/" : ""
                  }${item.id}`}
                >
                  <Image
                    src={item.ImagePortfolio}
                    alt={`${
                      spanish
                        ? item.Description
                        : english
                        ? item.englishDescription
                        : item.Description
                    }`}
                    width={650}
                    height={650}
                    className="block object-cover object-top w-full h-full"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            {portfolio.slice(0, 6).map((item, index) => (
              <button
                key={index}
                className=" border-b border-[#3a3a32] my-3 md:text-[0.6rem] pb-2 xl:text-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.32rem] text-amber-500 hover:text-white w-[100%]"
                onClick={() => handleButtonClick(index)}
              >
                {item.Name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
