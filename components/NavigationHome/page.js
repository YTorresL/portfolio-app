import { Logo } from "../Icons/Logo"
import Link from "next/link"
import { socialMedia } from "../Navigation/page"

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
