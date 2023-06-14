"use client"
import AppLayout from "@/components/AppLayout/page"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination } from "swiper"
import NavigationHome, { NavigationSection } from "@/components/Navigation/page"
import { Footer } from "@/components/Footer/page"
import Three from "@/components/Three/page"
import "./swiper.css"
import VivusJs from "@/components/Vivus/page"
import PrincipalSection from "@/components/PrincipalSection/page"
import PersonalSection from "@/components/PersonalSection/page"
import PortfolioSection from "@/components/PortfolioSection/page"
import ServicesSection from "@/components/ServicesSection/page"
import ContactSection from "@/components/ContactSection/page"

export default function Home() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationHome />
          <Three />
          <PrincipalSection spanish />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden bg-black">
        <AppLayout className="h-full">
          <NavigationSection>Sobre Mi</NavigationSection>
          <PersonalSection spanish />
          <VivusJs />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Portafolio</NavigationSection>
          <PortfolioSection spanish />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Servicios</NavigationSection>
          <ServicesSection spanish />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Contacto</NavigationSection>
          <ContactSection spanish />
          <Footer className="w-full mx-auto absolute bottom-0 right-0 left-0" />
        </AppLayout>
      </SwiperSlide>
    </Swiper>
  )
}
