"use client"
import { useEffect, useState } from "react"
import { fetchPortfolio } from "@/firebase/client"
import AppLayout from "@/components/AppLayout/page"
import { NavigationGeneral } from "@/components/Navigation/page"
import { Footer } from "@/components/Footer/page"
import Portfolio from "@/components/Portfolio/page"

export default function PortfolioPages() {
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetchPortfolio().then(setPortfolio)
  }, [])
  return (
    <AppLayout>
      <NavigationGeneral english/>
      <Portfolio portfolio={portfolio} english />
      <Footer />
    </AppLayout>
  )
}
