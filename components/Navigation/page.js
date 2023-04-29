import { useState } from "react"
import Link from "next/link"
import { Logo } from "../Icons/Logo"
import { Email, Linkedin, GitHub, Menu, Close } from "../Icons/Icons"

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Portafolio",
    route: "/portafolio",
  },
  {
    label: "Servicios",
    route: "/servicios",
  },
]

const socialMedia = [
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

export default function NavigationHome() {
  return (
    <>
      <header className="border-[#3a3a32] border-b">
        <nav className="flex items-center justify-between lg:h-[4%] p-2 lg:p-4 h-[3%]">
          <Link href="/">
            <Logo
              className="w-10 md:w-12"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="16"
            />
          </Link>
          <ul className="flex">
            {socialMedia.map(({ route, icon }) => (
              <li className="mx-1 lg:mx-4" key={route}>
                <Link href={route} target="_blank">
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export function NavigationGeneral() {
  const [menuHidden, setMenuHidden] = useState(true)
  const [transformXFull, setTransformXFull] = useState(false)

  const handleMenu = () => {
    setMenuHidden(!menuHidden)
    setTransformXFull(!transformXFull)
  }

  return (
    <>
      <header className="border-[#3a3a32] border-b">
        <nav className="flex items-center justify-between h-[4%] lg:p-4 p-2">
          <Link href="/">
            <Logo
              className="w-10 md:w-12"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="16"
            />
          </Link>
          <ul className="md:flex justify-center ml-[8%] hidden">
            {links.map(({ label, route }) => (
              <li className="md:mx-2 lg:mx-4" key={route}>
                <Link
                  className="text-[0.7rem] font-bold uppercase tracking-[0.32rem] text-amber-500"
                  href={route}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden md:flex">
            {socialMedia.map(({ route, icon }) => (
              <li className="md:mx-2 lg:mx-4" key={route}>
                <Link href={route}>{icon}</Link>
              </li>
            ))}
          </ul>
          <button type="button" className="md:hidden" onClick={handleMenu}>
            <Menu className="w-7 h-7" fill="#fff" />
          </button>
        </nav>
      </header>
      <div className={`${menuHidden ? 'hidden' : ''}`}>
        <div className={`fixed top-0 left-0 z-50 w-full h-full transition duration-500 transform bg-black/90 ${transformXFull ? 'xtranslate-x-full' : ''}`}>
          <div className="flex justify-end w-full px-[1.9rem] py-4">
            <button type="button" onClick={handleMenu}><Close className="w-5 h-5" fill="#fff"/></button>
          </div>
          <ul className="flex flex-col items-center justify-center">
            {links.map(({ label, route }) => (
              <li className="w-11/12 py-3 mx-4 text-center border-b border-amber-500" key={route}>
                <Link
                  className="text-sm font-bold uppercase tracking-[0.32rem] text-amber-500"
                  href={route}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="absolute md:flex bottom-4 right-6">
            {socialMedia.map(({ route, icon }) => (
              <li className="my-4" key={route}>
                <Link href={route}>{icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export function NavigationSection({ section }) {
  return (
    <div className="border-[#3a3a32] border-b">
      <div className="flex items-center justify-start lg:h-[4%] lg:p-4 p-2 h-[3%]">
        <Link href="/">
          <Logo
            className="w-10 md:w-12"
            fill="#f59e0b"
            stroke="#f59e0b"
            strokeMiterlimit="10"
            strokeWidth="16"
          />
        </Link>
        <h1 className="sm:ml-16 font-way sm:text-2xl lg:text-[2.5rem] word-12 uppercase tracking-[0.45rem] text-white my-0 text-[0.9rem] ml-4">
          {section}
        </h1>
      </div>
    </div>
  )
}

export function NavigationLink() {
  return (
    <ul className="justify-center sm:flex">
      {links.map(({ label, route }) => (
        <li className="mx-4" key={route}>
          <Link
            className="sm:text-[0.6rem] lg:text-[0.7rem] text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 decoration-amber-500 underline sm:no-underline underline-offset-[6px]"
            href={route}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
