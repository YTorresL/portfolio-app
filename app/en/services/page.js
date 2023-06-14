"use client"
import AppLayout from "@/components/AppLayout/page"
import { Footer } from "@/components/Footer/page"
import NavigationGeneral from "@/components/NavigationGeneral/page"
import Services from "@/components/Services/page"

export default function ServicesPage() {
  return (
    <AppLayout>
      <NavigationGeneral english />
      <Services english />
      <Footer />
    </AppLayout>
  )
}
