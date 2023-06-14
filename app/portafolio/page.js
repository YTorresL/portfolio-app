"use client"
import Portfolio from "@/components/Portfolio/page"
import { useEffect, useState } from "react"
import { fetchPortfolio } from "@/firebase/client"
import AppLayout from "@/components/AppLayout/page"
import { NavigationGeneral } from "@/components/Navigation/page"
import { Footer } from "@/components/Footer/page"

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetchPortfolio().then(setPortfolio)
  }, [])
  return (
    <AppLayout>
      <NavigationGeneral spanish />
      <Portfolio portfolio={portfolio} spanish />
      <Footer />
    </AppLayout>
  )
}
