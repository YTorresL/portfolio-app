import { useState } from "react"
import { sendContactFrorm } from "@/components/Contact/page"
import AnimeJs from "@/components/Anime/page"
import Paragraph from "../Paragraph/page"

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const initState = { values: initValues }

export default function ContactSection({ english, spanish }) {
  const [state, setState] = useState(initState)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const { values } = state

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const onSubmit = async (event) => {
    event.preventDefault()

    const errors = {}

    if (!values.name) {
      errors.name = spanish
        ? "El nombre es requerido."
        : english
        ? "The name is required."
        : ""
    } else if (values.name.trim() === "") {
      errors.name = spanish
        ? "No se permiten espacios vacíos en el nombre."
        : english
        ? "Empty spaces are not allowed in the name."
        : ""
    }
    if (!values.email) {
      errors.email = spanish
        ? "El correo electrónico es requerido."
        : english
        ? "The email is required."
        : ""
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = spanish
        ? "El correo electrónico no tiene un formato válido."
        : english
        ? "The email does not have a valid format."
        : ""
    }
    if (!values.subject) {
      errors.subject = spanish
        ? "El asunto es requerido."
        : english
        ? "The subject is required."
        : ""
    } else if (values.subject.trim() === "") {
      errors.subject = spanish
        ? "No se permiten espacios vacíos en el asunto."
        : english
        ? "Empty spaces are not allowed in the subject."
        : ""
    }
    if (!values.message) {
      errors.message = spanish
        ? "El mensaje es requerido."
        : english
        ? "The message is required."
        : ""
    } else if (values.message.trim() === "") {
      errors.message = spanish
        ? "No se permiten espacios vacíos en el mensaje."
        : english
        ? "Empty spaces are not allowed in the message."
        : ""
    }
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      setSuccess(true)
      sendContactFrorm(values)
      setState(initState)
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-[4.5%] md:mx-3 xl:w-10/12 xl:mx-auto">
      <div className="w-full">
        <form
          method="post"
          className="px-4 pt-4 text-white xl:px-10 xl:pt-8 xl:pb-10"
        >
          <div className="flex flex-wrap xl:mb-6">
            <input
              type="text"
              className={`appearance-none bg-transparent ${
                errors.name && "border-red-500"
              } w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]`}
              placeholder={spanish ? "Nombre *" : english ? "Name *" : ""}
              value={values.name}
              onChange={handleChange}
              name="name"
              required
            />
            <input
              type="email"
              className={`appearance-none bg-transparent ${
                errors.email && "border-red-500"
              } w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]`}
              placeholder={
                spanish ? "Correo electrónico *" : english ? "Email *" : ""
              }
              onChange={handleChange}
              value={values.email}
              name="email"
              required
            />
            <input
              type="text"
              className={`appearance-none ${
                errors.subject && "border-red-500"
              } bg-transparent w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]`}
              placeholder={spanish ? "Asunto *" : english ? "Subject *" : ""}
              onChange={handleChange}
              value={values.subject}
              name="subject"
              required
            />
            <textarea
              className={`appearance-none bg-transparent ${
                errors.message && "border-red-500"
              } w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]`}
              placeholder={spanish ? "Mensaje *" : english ? "Message *" : ""}
              onChange={handleChange}
              value={values.message}
              name="message"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
              className="xl:text-[0.8rem] text-xs font-bold uppercase tracking-[0.32rem] bg-amber-500 text-white mt-6 py-3 w-full disabled:bg-neutral-400"
            >
              {spanish && "Enviar"}
              {english && "Send"}
            </button>
            {success && (
              <span className="my-2 text-green-500">
                {spanish && "Mensaje enviado correctamente."}
                {english && "Message sent successfully."}
              </span>
            )}
            {Object.keys(errors).length > 0 && (
              <span className="my-2 text-red-500">
                {spanish && "Por favor, rellene todos los campos."}
                {english && "Please, fill in all fields."}
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="w-full mt-[2%] xl:mt-2 leading-6 text-white">
          <div className="justify-center hidden w-full mb-2 md:flex">
            <AnimeJs />
          </div>
          <div className="mx-3">
            <Paragraph my>
              {spanish &&
                "Si desea contactarme, puede hacerlo a través de mi correo o desde las redes sociales. Si tiene alguna duda o consulta, no dude en contactarme. Estaré encantada de ayudarle."}
              {english &&
                "If you want to contact me, you can do it through my email or from social networks. If you have any questions or queries, do not hesitate to contact me. I will be happy to help you."}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}
