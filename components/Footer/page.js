export function Footer({ className }) {
  return (
    <footer
      className={`${className} flex items-center justify-center border-[#3a3a32] border-t`}
    >
      <p className="md:text-[0.7rem] font-bold uppercase tracking-[0.32rem] text-amber-500 py-6 text-[0.6rem]">
        YTorres
      </p>
    </footer>
  )
}
