export default function Paragraph({ children, top, bottom, my }) {
  return (
    <p
      className={`${top ? "mt-4" : ""} ${
        bottom ? "mb-4" : ""
      } leading-6 text-white ${my ? "my-4" : ""}`}
    >
      {children}
    </p>
  )
}
