export default function ImportantParagraph({
  children,
  center,
  flex,
  background,
}) {
  return (
    <div className={`my-3 ${background ? "bg-neutral-900/50" : ""}`}>
      <div
        className={`text-[0.7rem] font-bold uppercase tracking-[0.32rem] text-amber-500 py-1 leading-5 ${
          flex ? "flex flex-wrap" : ""
        } ${center ? "justify-center" : ""}`}
      >
        {children}
      </div>
    </div>
  )
}
