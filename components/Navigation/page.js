import Link from "next/link"
import { Email, Linkedin, GitHub } from "../Icons/Icons"

export const links = [
  {
    label: "Inicio",
    route: "/",
    englishLabel: "Home",
    englishRoute: "/en",
  },
  {
    label: "Portafolio",
    route: "/portafolio",
    englishLabel: "Portfolio",
    englishRoute: "/en/portfolio",
  },
  {
    label: "Servicios",
    route: "/servicios",
    englishLabel: "Services",
    englishRoute: "/en/services",
  },
]

export const socialMedia = [
  {
    label: "GitHub",
    route: "https://github.com/YTorresL",
    icon: <GitHub fill="#fff" className="w-7" />,
  },
  {
    label: "Linkedin",
    route: "https://www.linkedin.com/in/yalith-torres",
    icon: <Linkedin fill="#fff" className="w-7" />,
  },
  {
    label: "Email",
    route: "mailto:yalithtorres@gmail.com",
    icon: <Email fill="#fff" className="w-7" />,
  },
]

export default function Navigation({ spanish, english }) {
  return (
    <ul className="justify-center sm:flex">
      {links.map((item, index) => (
        <li className="mx-4" key={index}>
          <Link
            className="sm:text-[0.6rem] lg:text-[0.7rem] text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 decoration-amber-500 underline sm:no-underline underline-offset-[6px]"
            href={
              spanish ? item.route : english ? item.englishRoute : item.route
            }
          >
            {spanish && item.label}
            {english && item.englishLabel}
          </Link>
        </li>
      ))}
    </ul>
  )
}
