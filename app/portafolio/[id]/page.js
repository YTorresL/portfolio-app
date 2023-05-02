"use client"
import AppLayout from "@/components/AppLayout/page"
import { Footer } from "@/components/Footer/page"
import { NavigationGeneral } from "@/components/Navigation/page"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PortfolioId({ params }) {
  const { id } = params
  const [portfolio, setPortfolio] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPortfolio = async () => {
      const res = await fetch(`/api/portfolio/${id}`)
      const data = await res.json()
      setPortfolio(data)
      setLoading(false)
    }
    fetchPortfolio()
  }, [])

  if (loading) {
    return (
      <div className="xl:text-[0.9rem] uppercase tracking-[0.32rem] text-amber-500 w-full h-screen text-[0.65rem] font-bold sm:text-xs flex flex-col items-center justify-center">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <AppLayout className="h-full">
      <NavigationGeneral />
      <div className="overflow-hidden text-gray-700 mb-[3%]" key={portfolio.id}>
        <div className="px-2 mx-auto lg:px-5">
          <p className="lg:ml-8 font-way lg:text-[3rem] word-12 uppercase tracking-[0.45rem] text-amber-500 text-2xl lg:mb-0 xl:mb-[2%] lg:mt-5">
            {portfolio?.Date}
          </p>
          <div className="flex flex-wrap mx-auto lg:w-[95%]">
            <Image
              alt={`${portfolio.Description}`}
              className="object-contain object-center w-full lg:w-[55%]"
              src={portfolio.ImagePortfolio}
              width={500}
              height={500}
            />
            <div className="w-full mt-4 lg:w-[45%] lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="lg:text-[0.8rem] font-semibold uppercase tracking-[0.32rem] text-amber-500 lg:mb-2 lg:mt-12 text-xs">
                {portfolio.Type}
              </h2>
              <h1 className="font-bold mb-2 font-way text-[1.2rem] uppercase tracking-[0.32rem] text-white">
                {portfolio.Name}
              </h1>
              <p className="mb-2 leading-6 text-white lg:mb-5">
                {portfolio.Description}
              </p>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.32rem] text-amber-500 bg-neutral-900/50 p-1 text-center mb-1">
                {portfolio.Technologies}
              </p>
            </div>
            <button className="mt-[2%] w-full py-2 text-[0.8rem] font-bold uppercase tracking-[0.32rem] bg-amber-500 text-white">
              <Link href={`${portfolio.Link}`} target="_blank" rel="noreferrer">
                <span>View Project</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </AppLayout>
  )
}
