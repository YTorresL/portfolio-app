import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Typed from "typed.js"

const TypedText = ({ text, id }) => {
  const [html, setHtml] = useState("")
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo dispara una vez cuando se muestra en la pantalla
    rootMargin: "-50px 0px", // Para que el observador detecte la entrada en 50px antes de la sección
  })

  useEffect(() => {
    if (inView) {
      const options = {
        strings: [text],
        typeSpeed: 150,
        cursorChar: "",
        onComplete: () => {
          setHtml(typedEl.innerHTML)
        },
      }
      const typed = new Typed(`#${id}`, options)
      const typedEl = document.getElementById(id)

      return () => {
        typed.destroy()
      }
    }
  }, [inView, text, id])

  return (
    <span ref={ref} id={id} dangerouslySetInnerHTML={{ __html: html }}></span>
  )
}

export default TypedText
