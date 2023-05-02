"use client"
import AppLayout from "@/components/AppLayout/page"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination } from "swiper"
import Techologies, { Crealotodo } from "@/components/Icons/page"
import NavigationHome, {
  NavigationLink,
  NavigationSection,
} from "@/components/Navigation/page"
import yalith from "@/public/yalith.jpg"
import Image from "next/image"
import React, { useRef, useEffect, useState } from "react"
import Slider from "react-slick"
import { fetchPortfolio } from "@/firebase/client"
import Link from "next/link"
import TypedText from "@/components/Typed/page"
import { Footer } from "@/components/Footer/page"
import Three from "@/components/Three/page"
import { sendContactFrorm } from "@/components/Contact/page"
import { Arrow, Usa } from "@/components/Icons/Icons"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./swiper.css"
import VivusJs from "@/components/Vivus/page"
import AnimeJs from "@/components/Anime/page"

const services = [
  {
    id: "typed-1",
    text: "Sitio web",
    title: "Desarrollo de sitios web",
    description:
      "Ofrezco servicios de desarrollo web personalizados y adaptables a las necesidades de cada cliente.",
  },
  {
    id: "typed-2",
    text: "Mantenimiento",
    title: "Mantenimiento de sitios web",
    description:
      "Mantenimiento web para asegurar que tu sitio web esté actualizado, seguro y en óptimas condiciones de funcionamiento.",
  },
]

const info = [
  {
    th: "Nombre",
    td: "Yalith Torres",
  },
  {
    th: "País",
    td: "Venezuela",
  },
  {
    th: "Github",
    td: "@YTorresL",
  },
  {
    th: "Freelance",
    td: "Disponible",
  },
]

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const initState = { values: initValues }

export default function Home() {
  const sliderRef = useRef(null)
  const [portfolio, setPortfolio] = useState([])
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
      errors.name = "El nombre es requerido."
    } else if (values.name.trim() === "") {
      errors.name = "No se permiten espacios vacíos en el nombre."
    }
    if (!values.email) {
      errors.email = "El correo electrónico es requerido."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El correo electrónico no tiene un formato válido."
    }
    if (!values.subject) {
      errors.subject = "El asunto es requerido."
    } else if (values.subject.trim() === "") {
      errors.subject = "No se permiten espacios vacíos en el asunto."
    }
    if (!values.message) {
      errors.message = "El mensaje es requerido."
    } else if (values.message.trim() === "") {
      errors.message = "No se permiten espacios vacíos en el asunto."
    }
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      setSuccess(true)
      sendContactFrorm(values)
      setState(initState)
    }
  }

  useEffect(() => {
    fetchPortfolio().then(setPortfolio)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: false,
    vertical: true,
  }

  const handleButtonClick = (index) => {
    sliderRef.current.slickGoTo(index)
  }
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationHome />
          <Three />
          <div className="absolute left-0 right-0 text-center top-[45%]">
            <h1 className="font-way xl:text-[3.75rem] word-12 uppercase tracking-[0.45rem] text-white xl:mb-4 text-base mb-0 sm:text-4xl">
              Yalith Torres
            </h1>
            <p className="xl:text-[0.9rem] sm:font-semibold uppercase tracking-[0.32rem] text-amber-500 sm:decoration-amber-500 sm:underline sm:underline-offset-[8px] xl:underline-offset-[12px] mb-[10.5px] xl:mb-4 w-[85%] text-[0.65rem] sm:mb-1 md:w-[70%] mx-auto font-bold leading-4 sm:text-xs">
              Desarrollo web y programación en python
            </p>
            <NavigationLink />
          </div>
          <div className="absolute bottom-[1%] right-[7%]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 hidden sm:block">
              Tematica espacial
            </p>
          </div>
          <div className="absolute bottom-[1%] left-[7%] hidden">
            <Link
              href={"/en"}
              className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 flex items-center"
            >
              <Usa width={36} /> <span className="ml-2">Ingles</span>
            </Link>
          </div>
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden bg-black">
        <AppLayout className="h-full">
          <NavigationSection section="Sobre Mi" />
          <div className="flex flex-col sm:flex-row">
            <div className="sm:h-[50%] hidden sm:block">
              <div className="border-r border-[rgb(58,58,50)]">
                <div className="h-[20.8rem] p-3">
                  <ul>
                    <li className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 list-disc pb-3 pl-1 ml-4">
                      Yalith Torres
                    </li>
                  </ul>
                  <div className="overflow-hidden w-[13rem] xl:w-[15rem] rounded-full mx-auto">
                    <Image
                      src={yalith}
                      alt={"Yalith Torres"}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <table className="w-full text-sm text-left">
                  <tbody>
                    {info.map(({ th, td }) => (
                      <tr
                        className="border-[#3a3a32] border-b border-t"
                        key={th}
                      >
                        <th className="pl-2 text-white xl:px-6 xl:py-5 whitespace-nowrap dark:text-white">
                          {th}
                        </th>
                        <td className="py-2 text-white xl:px-6 xl:py-5">
                          {td}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="h-[50%] w-[100%]">
              <div className="p-3 leading-6 xl:p-10">
                <p className="mb-4 text-white">
                  Soy desarrolladora web y programadora en Python con
                  habilidades en diseño web e ilustración. Me especializo en el
                  uso de Next.js para proyectos y actualmente estudio ingeniería
                  computacional.
                </p>
                <div className="hidden mb-3 bg-neutral-900/50 md:block">
                  <Techologies />
                </div>
                <details className="mb-3" open>
                  <summary className="font-bold text-white">
                    <span>Pulso creativo</span>
                  </summary>
                  <ul className="text-white">
                    <li>Desarrolladora web | 2022 – 2023</li>
                    <li>Responsable de: Diseño y desarrollo de páginas web.</li>
                  </ul>
                  <Crealotodo />
                </details>
                <details className="mb-3">
                  <summary className="font-bold text-white">
                    <span>Inversiones Crealotodo SAS</span>
                  </summary>
                  <ul className="text-white">
                    <li className="font-bold">Inversiones Crealotodo SAS</li>
                    <li>Diseñadora gráfica | 2021 – Presente</li>
                    <li>
                      Responsable de: Vectorización y creación de diseños.
                    </li>
                  </ul>
                  <Crealotodo />
                </details>
              </div>
            </div>
          </div>
          <VivusJs />
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection section="Portafolio" />
          <div className="grid grid-cols-1 gap-1 m-1 pt-[5.5%] md:gap-3 md:grid-cols-3 xl:gap-12 xl:mx-14 md:m-3 lg:m-5">
            <div className="col-span-2">
              <div className="border border-[#3a3a32] sm:px-2 px-1 xl:h-[25.5rem] md:h-[17.5rem] sm:h-[20.5rem] lg:h-[20.5rem] overflow-hidden h-[10.5rem] 2xl:h-[30.5rem]">
                <Slider {...settings} ref={sliderRef}>
                  {portfolio
                    .slice(0, 6)
                    .map(({ id, ImagePortfolio, Type, Date, Description }) => (
                      <div
                        key={id}
                        className="xl:h-[25.3rem] sm:h-[20.3rem]  py-2 h-[10.3rem] md:h-[17.3rem] lg:h-[20.3rem] 2xl:h-[30.3rem]"
                      >
                        <ul className="absolute p-1 m-1 bg-black sm:py-2 md:pl-8 sm:pl-3 sm:pr-5 sm:my-2 xl:ml-2">
                          <li className="xl:text-[0.7rem] text-[0.6rem] font-bold uppercase tracking-[0.32rem] flex text-amber-500 md:list-disc pl-1">
                            {Date}
                            <span className="hidden sm:block"> - {Type}</span>
                          </li>
                        </ul>
                        <Link
                          href={`../../portafolio/${id}`}
                          as={`../../portafolio/${id}`}
                        >
                          <Image
                            src={ImagePortfolio}
                            alt={`${Description}`}
                            width={650}
                            height={650}
                            className="block object-cover object-top w-full h-full"
                          />
                        </Link>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  {portfolio.slice(0, 6).map(({ Name }, index) => (
                    <button
                      key={Name}
                      className=" border-b border-[#3a3a32] my-3 md:text-[0.6rem] pb-2 xl:text-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.32rem] text-amber-500 hover:text-white w-[100%]"
                      onClick={() => handleButtonClick(index)}
                    >
                      {Name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection section="Servicios" />
          <div className="grid grid-cols-1 md:grid-cols-2 pt-[6.5%] mx-1 sm:mx-6 lg:mx-32 xl:max-w-2xl xl:mx-auto">
            {services.map(({ title, description, text, id }) => (
              <div className="xl:max-w-[22rem] m-2" key={title}>
                <div className="relative flex border-[#3a3a32] border xl:p-6 p-2 h-60 sm:p-7 md:h-[16.5rem] overflow-hidden xl:h-[25rem] border-t-amber-500 border-t-4 pt-4">
                  <div className="relative xl:pt-[5rem] xl:pb-14 pb-8">
                    <div className="xl:text-[0.8rem] font-bold uppercase tracking-[0.32rem] text-amber-500 xl:mb-2 text-xs mb-1">
                      <TypedText id={id} text={text} />
                    </div>
                    <h3 className="font-bold xl:mb-2 mb-1 font-way xl:text-[1.2rem] uppercase tracking-[0.32rem] text-white leading-5 xl:leading-8 text-md">
                      {title}
                    </h3>
                    <p className="leading-6 text-white">{description}</p>
                  </div>
                  <div className="absolute right-5 bottom-3">
                    <Link
                      className="inline-flex items-center justify-center transition duration-150 rounded-full w-11 h-11 bg-amber-500 text-pink-50 hover:text-white"
                      href={"/servicios"}
                    >
                      <Arrow width={28} fill="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AppLayout>
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <AppLayout className="h-full">
          <NavigationSection section="Contacto" />
          <div className="grid grid-cols-1 md:grid-cols-2 py-[4.7%] md:mx-3 xl:w-10/12 xl:mx-auto">
            <div className="w-full">
              <form
                method="post"
                className="px-4 pt-4 text-white xl:px-10 xl:pt-8 xl:pb-10"
              >
                <div className="flex flex-wrap xl:mb-6">
                  <input
                    type="text"
                    className="appearance-none bg-transparent w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]"
                    placeholder="Nombre *"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    required
                  />
                  {errors.name && (
                    <span className="my-1 text-red-500">{errors.name}</span>
                  )}
                  <input
                    type="email"
                    className="appearance-none bg-transparent w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]"
                    placeholder="Correo electrónico *"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    required
                  />
                  {errors.email && (
                    <span className="my-1 text-red-500">{errors.email}</span>
                  )}
                  <input
                    type="text"
                    className="appearance-none bg-transparent w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]"
                    placeholder="Asunto *"
                    onChange={handleChange}
                    value={values.subject}
                    name="subject"
                    required
                  />
                  {errors.subject && (
                    <span className="my-1 text-red-500">{errors.subject}</span>
                  )}
                  <textarea
                    className="appearance-none bg-transparent w-full text-white py-3 px-2 leading-tight focus:outline-none border-b border-[#3a3a32]"
                    placeholder="Mensaje *"
                    onChange={handleChange}
                    value={values.message}
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                  {errors.message && (
                    <span className="my-1 text-red-500">{errors.message}</span>
                  )}
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
                    Enviar
                  </button>
                  {success && (
                    <span className="my-2 text-green-500">
                      El mensaje ha sido enviado.
                    </span>
                  )}
                  {Object.keys(errors).length > 0 && (
                    <span className="my-2 text-red-500">
                      Ha habido un error al enviar el mensaje.
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
                <p className="px-4 py-6 sm:py-4 md:pt-3">
                  Si desea contactarme, puede hacerlo a través de mi correo o
                  desde las redes sociales. Si tiene alguna duda o consulta, no
                  dude en contactarme. Estaré encantado de ayudarle.
                </p>
              </div>
            </div>
          </div>
          <Footer className="w-[88%] mx-auto absolute bottom-0 right-0 left-0" />
        </AppLayout>
      </SwiperSlide>
    </Swiper>
  )
}
