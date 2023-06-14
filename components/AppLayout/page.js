export default function AppLayout({ children, className }) {
  return (
    <div
      className={`w-[88%] mx-auto border-x border-[#3a3a32] relative ${
        className || ""
      }`}
    >
      <section>{children}</section>
    </div>
  )
}
