export default function AppLayout ({ children }) {
  return (
    <div className="w-[88%] mx-auto border-x border-[#3a3a32] h-full">
      <section>{children}</section>
    </div>
  )
}
