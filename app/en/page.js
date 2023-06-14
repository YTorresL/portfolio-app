"use client"
import AppLayout from "@/components/AppLayout/page"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination } from "swiper"
import NavigationHome from "@/components/NavigationHome/page"
import NavigationSection from "@/components/NavigationSection/page"
import { Footer } from "@/components/Footer/page"
import Three from "@/components/Three/page"
import "../swiper.css"
import VivusJs from "@/components/Vivus/page"
import PrincipalSection from "@/components/PrincipalSection/page"
import PersonalSection from "@/components/PersonalSection/page"
import PortfolioSection from "@/components/PortfolioSection/page"
import ServicesSection from "@/components/ServicesSection/page"
import ContactSection from "@/components/ContactSection/page"

export default function HomeEn() {
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
          <PrincipalSection english />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden bg-black">
        <AppLayout className="h-full">
          <NavigationSection>About me</NavigationSection>
          <PersonalSection english />
          <VivusJs />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Portfolio</NavigationSection>
          <PortfolioSection english />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Services</NavigationSection>
          <ServicesSection english />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection>Contact</NavigationSection>
          <ContactSection english />
          <Footer className="w-full mx-auto absolute bottom-0 right-0 left-0" />
        </AppLayout>
      </SwiperSlide>
    </Swiper>
  )
}
