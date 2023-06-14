import TypedText from "@/components/Typed/page"
import Link from "next/link"
import { Arrow } from "@/components/Icons/Icons"
import Paragraph from "../Paragraph/page"

const services = [
  {
    id: "typed-1",
    text: "Sitio web",
    englishText: "Website",
    title: "Desarrollo de sitios web",
    englishTitle: "Website development",
    description:
      "Ofrezco servicios de desarrollo web personalizados y adaptables a las necesidades de cada cliente.",
    englishDescription:
      "I offer customized and adaptable web development services to the needs of each client.",
  },
  {
    id: "typed-2",
    text: "Mantenimiento",
    englishText: "Maintenance",
    title: "Mantenimiento de sitios web",
    englishTitle: "Website maintenance",
    description:
      "Mantenimiento web para asegurar que tu sitio web esté actualizado, seguro y en óptimas condiciones de funcionamiento.",
    englishDescription:
      "Web maintenance to ensure that your website is up to date, secure and in optimal working condition.",
  },
]

export default function ServicesSection({ english, spanish }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-[6.5%] mx-1 sm:mx-6 lg:mx-32 xl:max-w-2xl xl:mx-auto">
      {services.map((item, index) => (
        <div className="xl:max-w-[22rem] m-2" key={index}>
          <div className="relative flex border-[#3a3a32] border xl:p-6 p-2 h-60 sm:p-7 md:h-[16.5rem] overflow-hidden xl:h-[25rem] border-t-amber-500 border-t-4 pt-4">
            <div className="relative xl:pt-[5rem] xl:pb-14 pb-8">
              <div className="xl:text-[0.8rem] font-bold uppercase tracking-[0.32rem] text-amber-500 xl:mb-2 text-xs mb-1">
                <TypedText
                  id={item.id}
                  text={spanish ? item.text : english ? item.englishText : ""}
                />
              </div>
              <h3 className="font-bold xl:mb-2 mb-1 font-way xl:text-[1.2rem] uppercase tracking-[0.12rem] text-white leading-5 xl:leading-7 text-md">
                {spanish && item.title}
                {english && item.englishTitle}
              </h3>
              <Paragraph>
                {spanish && item.description}
                {english && item.englishDescription}
              </Paragraph>
            </div>
            <div className="absolute right-5 bottom-3">
              {spanish && (
                <Link
                  className="inline-flex items-center justify-center transition duration-150 rounded-full w-11 h-11 bg-amber-500 text-pink-50 hover:text-white"
                  href={"/servicios"}
                >
                  <Arrow width={28} fill="#fff" />
                </Link>
              )}
              {english && (
                <Link
                  className="inline-flex items-center justify-center transition duration-150 rounded-full w-11 h-11 bg-amber-500 text-pink-50 hover:text-white"
                  href={"/en/services"}
                >
                  <Arrow width={28} fill="#fff" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
