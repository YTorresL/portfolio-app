import { useState } from "react"
import { Logo } from "../Icons/Logo"
import { Menu, Close } from "../Icons/Icons"
import Link from "next/link"
import { links, socialMedia } from "../Navigation/page"

export default function NavigationGeneral({ spanish, english }) {
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
            {links.map((item, index) => (
              <li className="md:mx-2 lg:mx-4" key={index}>
                <Link
                  className="text-[0.7rem] font-bold uppercase tracking-[0.32rem] text-amber-500"
                  href={
                    spanish
                      ? item.route
                      : english
                      ? item.englishRoute
                      : item.route
                  }
                >
                  {spanish && item.label}
                  {english && item.englishLabel}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden md:flex">
            {socialMedia.map(({ route, icon }) => (
              <li className="md:mx-2 lg:mx-4" key={route}>
                <Link href={route} target="_blank">
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="md:hidden" onClick={handleMenu}>
            <Menu className="w-7 h-7" fill="#fff" />
          </button>
        </nav>
      </header>
      <div className={`${menuHidden ? "hidden" : ""}`}>
        <div
          className={`fixed top-0 left-0 z-50 w-full h-full transition duration-500 transform bg-black/90 ${
            transformXFull ? "xtranslate-x-full" : ""
          }`}
        >
          <div className="flex justify-end w-full px-[1.9rem] py-4">
            <button type="button" onClick={handleMenu}>
              <Close className="w-5 h-5" fill="#fff" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center">
            {links.map((item, index) => (
              <li
                className="w-11/12 py-3 mx-4 text-center border-b border-amber-500"
                key={index}
              >
                <Link
                  className="text-sm font-bold uppercase tracking-[0.32rem] text-amber-500"
                  href={
                    spanish
                      ? item.route
                      : english
                      ? item.englishRoute
                      : item.route
                  }
                >
                  {spanish && item.label}
                  {english && item.englishLabel}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="absolute md:flex bottom-4 right-6">
            {socialMedia.map(({ route, icon }) => (
              <li className="my-4" key={route}>
                <Link href={route} target="_blank">
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
