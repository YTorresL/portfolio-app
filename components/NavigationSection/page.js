import { Logo } from "../Icons/Logo"

export default function NavigationSection({ children }) {
  return (
    <div className="border-[#3a3a32] border-b">
      <div className="flex items-center justify-start lg:h-[4%] lg:p-4 p-2 h-[3%]">
        <Logo
          className="w-10 md:w-12"
          fill="#f59e0b"
          stroke="#f59e0b"
          strokeMiterlimit="10"
          strokeWidth="16"
        />
        <h1 className="sm:ml-16 font-way sm:text-2xl lg:text-[2.5rem] word-12 uppercase tracking-[0.45rem] text-white my-0 text-[0.9rem] ml-4">
          {children}
        </h1>
      </div>
    </div>
  )
}
