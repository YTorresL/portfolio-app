import ImportantParagraph from "components/ImportantParagraph/page"

export function Footer({ className }) {
  return (
    <footer
      className={`${
        className || ""
      } flex items-center justify-center border-[#3a3a32] border-t`}
    >
      <div className="py-3">
        <ImportantParagraph>YTorres</ImportantParagraph>
      </div>
    </footer>
  )
}
