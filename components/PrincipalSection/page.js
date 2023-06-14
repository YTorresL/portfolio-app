import Link from "next/link"
import { Usa } from "../Icons/Icons"
import NavigationLinks from "../Navigation/page"

const fullName = "Yalith Torres"

export default function PrincipalSection({ english, spanish }) {
  return (
    <>
      <div className="absolute left-0 right-0 text-center top-[45%]">
        <h1 className="font-way xl:text-[3.75rem] word-12 uppercase tracking-[0.45rem] text-white xl:mb-4 text-base mb-0 sm:text-4xl">
          {fullName}
        </h1>
        <p className="xl:text-[0.9rem] sm:font-semibold uppercase tracking-[0.32rem] text-amber-500 sm:decoration-amber-500 sm:underline sm:underline-offset-[8px] xl:underline-offset-[12px] mb-[10.5px] xl:mb-4 w-[85%] text-[0.65rem] sm:mb-1 md:w-[70%] mx-auto font-bold leading-4 sm:text-xs">
          {spanish && "Desarrollo web y programación en python"}
          {english && "Web development and python programming"}
        </p>
        {english && <NavigationLinks english />}
        {spanish && <NavigationLinks spanish />}
      </div>
      <div className="absolute bottom-[1%] right-[1%]">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 hidden sm:block">
          {spanish && "Tematica espacial"}
          {english && "Space theme"}
        </p>
      </div>
      <div className="absolute bottom-[1%] left-[1%]">
        {spanish && (
          <Link
            href={"/en"}
            className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 flex items-center"
          >
            <Usa width={36} /> <span className="ml-2">Ingles</span>
          </Link>
        )}
        {english && (
          <Link
            href={"/"}
            className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 flex items-center"
          >
            <Usa width={36} /> <span className="ml-2">Spanish</span>
          </Link>
        )}
      </div>
    </>
  )
}
