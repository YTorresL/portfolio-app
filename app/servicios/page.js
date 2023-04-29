"use client"
import AppLayout from "@/components/AppLayout/page"
import { Footer } from "@/components/Footer/page"
import {
  CSS,
  HTML,
  Hosting,
  JavaScript,
  MySQL,
  Next,
  PHP,
  Python,
  Ruler,
  Safe,
  Tick,
  WordPress,
} from "@/components/Icons/Icons"
import { NavigationGeneral } from "@/components/Navigation/page"

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Desarrollo web personalizado y adaptable a las necesidades de cada cliente. Utilizo lenguajes de programación y/o CMS populares como WordPress, para crear sitios web que no solo se vean atractivos, sino que también sean funcionales y fáciles de usar. Desde sitios web sencillos hasta complejos proyectos de comercio electrónico, trabajo en colaboración con mis clientes para lograr su visión y crear soluciones únicas. Con mi experiencia y habilidades en el desarrollo web, puedo ayudarte a crear una presencia en línea efectiva y exitosa para tu negocio o marca personal.",
    include: [
      "Diseño personalizado.",
      "Responsive design.",
      "Alojamiento y registro del dominio.",
      "Configuración de correo electrónico.",
      "Capacitación y soporte.",
    ],
  },
  {
    title: "Mantenimiento",
    description:
      "Servicio de mantenimiento web para asegurar que tu sitio web esté actualizado, seguro y en óptimas condiciones de funcionamiento. Mi objetivo es ofrecerte un servicio integral que te permita centrarte en lo que realmente importa: hacer crecer tu negocio en línea. Puedo ayudarte a asegurar que tu sitio web siempre esté en su mejor estado y listo para atraer a tus visitantes y clientes.",
    include: [
      "Seguridad y protección.",
      "Rendimiento y velocidad.",
      "Actualización de contenido.",
    ],
  },
]

const step = [
  {
    id: 0,
    title: "Primer contacto",
    description: "El primer contacto puede ser por correo o por medio de las redes sociales, en este punto se debe de tener claro el objetivo del proyecto y de que se trata.",
    display: "block",
  },
  {
    id: 1,
    title: "Segundo contacto",
    description: "Se estara contactando, ya sea por correo u otro medio de su preferencia, para poder tener una reunión y poder tener una idea mas clara de lo que se quiere.",
    display: "block",
  },
  {
    id: 2,
    title: "Propuesta",
    description: "Se le enviara una propuesta de los servicios que se incluira, plazos de entegra y presupuesto con todo incluido.",
    display: "block",
  },
  {
    id: 3,
    title: "Aceptación o rechazo",
    description: "Aqui el cliente decidira si acepta o no el presupuesto, o si quiere algun cambio en la propuesta. Si es aceptado se procedera a elegir el metodo de pago.",
    display: "block",
  },
  {
    id: 4,
    title: "Diseño web",
    description: "Se procedera a diseñar el proyecto, se le enviara la maquetación del proyecto, paletas de colores, tipografias, etc. Si el cliente tiene algun diseño de referencia puede enviarlo para incluirlo en el diseño.",
    display: "block",
  },
  {
    id: 5,
    title: "Desarrollo web",
    description: "Una vez que el diseño sea aceptado, se procedera a desarrollar el proyecto, se le enviara un link de prueba para que pueda ver el avance del proyecto.",
    display: "block",
  },
  {
    id: 6,
    title: "Pruebas",
    description: " Despues de terminar el proyecto, se haran las pruebas en los diferentes navegadores y dispositivos, para asegurar que el proyecto funcione correctamente.",
    display: "block",
  },
  {
    id: 7,
    title: "Lanzamiento",
    description: "Ya con las pruebas correspondientes se lanzara el proyecto al dominio del cliente.",
    display: "hidden",
  }
]

const questions = [
  {
    title: "¿Cuánto tiempo tarda en hacerse un sitio web?",
    description:
      "Depende de la complejida del proyecto, pero en general, un sitio web estándar puede estar listo en 2 semanas o menos.",
  },
  {
    title: "¿Cuánto cuesta un sitio web?",
    description:
      "Trabajo por horas, como dije anteriormente depende de la complejidad del proyecto por lo que el costo va a variar. Puedes contactarme para obtener una cotización.",
  },
  {
    title: "¿Qué plataformas y herramientas de desarrollo web utiliza?",
    description:
      "Utilizo principalmente Next.js como framework, pero también trabajo con HTML, CSS, JavaScript, WordPress, Python etc.",
  },
  {
    title: "¿Puede ayudar con el alojamiento y registro del dominio?",
    description:
      "Sí, puedo ayudar con el registro del dominio y el alojamiento. También puedo ayudar con la configuración de correo electrónico.",
  },
  {
    title: "¿Puedo pagar con tarjeta de crédito?",
    description:
      "Sí, puedes pagar con tarjeta de crédito a través de PayPal u otra plataforma de pago en línea igualmente segura.",
  },
  {
    title:
      "¿Cómo funciona el proceso de revisión y aprobación de la página web?",
    description:
      "Una vez que el sitio web esté listo, te enviaré un enlace para que puedas revisar el sitio web y hacer cualquier cambio que desees. Una vez que esté satisfecho con el sitio web, puedes aprobarlo y publicarlo en línea.",
  },
  {
    title:
      "¿Ofrecen servicios de mantenimiento y actualización de la página web?",
    description:
      "Sí, ofrezco servicios de mantenimiento y actualización de páginas web. Puedes incluirlo en el servicio para tu sitio desarrollado por mi o externo.",
  },
]

const tech = [
  {
    title: "Python",
    icon: <Python className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "Next.js",
    icon: <Next className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "WordPress",
    icon: <WordPress className="w-6 h-6 mr-2" fill="#F59E0B" />,
  },
  {
    title: "HTML",
    icon: <HTML className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "CSS",
    icon: <CSS className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "JavaScript",
    icon: <JavaScript className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "PHP",
    icon: <PHP className="w-5 mr-2" fill="#F59E0B" />,
  },
  {
    title: "MySQL",
    icon: <MySQL className="w-10 mr-2" fill="#F59E0B" />,
  },
]

const main = [
  {
    title: "Diseño a medida",
    icon: <Ruler className="h-10" fill="#F59E0B" />,
  },
  {
    title: "Alojamiento y registro de dominio",
    icon: <Hosting className="h-10" fill="#F59E0B" />,
  },
  {
    title: "Pago seguro por PayPal",
    icon: <Safe className="h-10" fill="#F59E0B" />,
  }
]

export default function Services() {
  return (
    <AppLayout>
      <NavigationGeneral />
      <div className="my-20">
        <div className="relative px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto text-center lg:max-w-xl">
            <h1 className="font-way lg:text-[3rem] word-12 uppercase tracking-[0.45rem] text-amber-500 mb-0 md:text-2xl font-bold text-lg leading-6 lg:leading-tight">
                Lleva tu proyecto al siguiente nivel
            </h1>
            <p className="mt-2 lg:mt-5 lg:text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-white text-xs">
              Construyendo tu presencia en línea
            </p>
            <a
              href="/portafolio"
              title=""
              className="inline-flex items-center text-xs lg:text-[0.8rem] font-bold uppercase tracking-[0.32rem] bg-amber-500 text-white lg:mt-6 py-3 px-10 mt-3"
              role="button"
            >
              Portfolio
            </a>
            <div className="grid grid-cols-1 px-6 mt-20 text-left md:w-[90%] md:mx-auto gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              {main.map(({ title, icon }) => (
                <div className="flex items-center" key={title}>
                  <div>{icon}</div>
                  <div><p className="ml-3 text-white">{title}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="container mx-auto">
          <p className="text-center text-[2rem] font-semibold uppercase tracking-[0.32rem] text-white mt-10">
            Services
          </p>
          {services.map(({ title, description, include }) => (
            <div className="mt-10" key={title}>
              <div className="relative px-1 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto overflow-hidden md:max-w-xl lg:max-w-none lg:flex">
                  <div className="flex-1 px-4 py-8 border border-amber-500 lg:p-12">
                    <h3 className="font-way lg:text-[1.5rem] font-bold uppercase tracking-[0.45rem] text-amber-500 text-sm">
                      {title}
                    </h3>
                    <p className="mt-6 leading-6 text-white">{description}</p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 font-way text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-amber-500">
                          ¿Que incluye?
                        </h4>
                        <div className="flex-1 border-t border-amber-500"></div>
                      </div>
                      <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                        {include.map((include) => (
                          <li
                            className="flex items-start lg:col-span-1"
                            key={include}
                          >
                            <div className="flex-shrink-0">
                              <Tick className="w-5 text-amber-500" />
                            </div>
                            <p className="ml-3 text-white">{include}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-28">
        <div className="flex flex-wrap justify-center my-10 gap-y-4">
          {tech.map(({ title, icon }) => (
            <span
              className="flex items-center font-way md:text-[0.9rem] font-bold uppercase tracking-[0.32rem] text-white py-2 px-5 border border-amber-500 mx-2 text-xs"
              key={title}
            >
              {icon}
              {title}
            </span>
          ))}
        </div>
      </div>
      <div className="my-28">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[2rem] font-semibold uppercase tracking-[0.32rem] text-white">
              Proceso
            </h2>
            <p className="max-w-lg mx-auto mt-4 leading-6 text-white">
              Aqui esta de una manera detallada el proceso que se sigue para
              lograr el objetivo del proyecto.
            </p>
          </div>

          <ul className="max-w-md mx-auto mt-16 space-y-12">
            {step.map(({id, title, description, display }) => (
            <li className="relative flex items-start" key={id}>
              <div
                className={`lg:-ml-0.5 absolute lg:mt-0.5 lg:top-14 lg;left-8 w-px border-l-4 border-amber-500 h-full ${display} top-[3rem] left-6`}
              >
              </div>
              <div className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow lg:w-16 lg:h-16">
                <p className="font-way text-[1.5rem] font-bold uppercase tracking-[0.32rem] text-amber-500">
                  {id}
                </p>
              </div>
              <div className="ml-3 lg:ml-6">
                <h3 className="font-way lg:text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-amber-500 text-sm">
                  {title}
                </h3>
                <p className="mt-2 leading-6 text-white lg:mt-4">
                  {description}
                </p>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-28">
        <div className="max-w-5xl px-2 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="lg:text-[2rem] font-semibold uppercase tracking-[0.32rem] text-white text-xl">
              Preguntas y respuestas
            </h2>
            <p className="max-w-xl mx-auto mt-4 leading-6 text-white">
              Preguntas comunes que hacen mis clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            {questions.map(({ title, description }) => (
              <div className="flex items-start" key={title}>
                <div className="items-center justify-center flex-shrink-0 hidden w-8 h-8 bg-white rounded-full md:flex">
                  <span className="text-lg font-semibold text-amber-500">
                    ?
                  </span>
                </div>
                <div className="md:ml-4">
                  <p className="font-way lg:text-[0.9rem] font-semibold uppercase tracking-[0.2rem] text-amber-500 text-sm">
                    {title}
                  </p>
                  <p className="mt-4 leading-6 text-white">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </AppLayout>
  )
}
