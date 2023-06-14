"use client"
import AppLayout from "@/components/AppLayout/page"
import { Footer } from "@/components/Footer/page"
import { NavigationGeneral } from "@/components/Navigation/page"
import PortfolioId from "@/components/PortfolioId/page"
import { useState, useEffect } from "react"

export default function PortfolioIdPages({ params }) {
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
    <AppLayout>
      <NavigationGeneral english />
      <PortfolioId portfolio={portfolio} english />
      <Footer />
    </AppLayout>
  )
}
