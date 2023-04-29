"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchPortfolio } from "@/firebase/client"
import AppLayout from "@/components/AppLayout/page"
import { NavigationGeneral } from "@/components/Navigation/page"
import { Footer } from "@/components/Footer/page"

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetchPortfolio().then(setPortfolio)
  }, [])
  return (
    <AppLayout>
      <NavigationGeneral />
      <div className="px-[2%] m-[4%]">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map(({ id, ImagePortfolio, Description }) => (
            <Link
              href={`../../portafolio/${id}`}
              as={`../../portafolio/${id}`}
              key={id}
              className="overflow-hidden rounded-lg"
            >
              <div className="w-full h-full">
                <Image
                  alt={`${Description}`}
                  className="block object-cover object-center w-full h-full transition-all hover:opacity-90"
                  src={ImagePortfolio}
                  width={500}
                  height={500}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </AppLayout>
  )
}
