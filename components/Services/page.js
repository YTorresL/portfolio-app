"use client"
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
import Link from "next/link"

const services = [
  {
    title: "Desarrollo Web",
    englishTitle: "Web Development",
    description:
      "Desarrollo web personalizado y adaptable a las necesidades de cada cliente. Utilizo lenguajes de programación y/o CMS populares como WordPress, para crear sitios web que no solo se vean atractivos, sino que también sean funcionales y fáciles de usar. Desde sitios web sencillos hasta complejos proyectos de comercio electrónico, trabajo en colaboración con mis clientes para lograr su visión y crear soluciones únicas. Con mi experiencia y habilidades en el desarrollo web, puedo ayudarte a crear una presencia en línea efectiva y exitosa para tu negocio o marca personal.",
    englishDescription:
      "Custom and adaptable web development to the needs of each client. I use popular programming languages ​​and / or CMS such as WordPress, to create websites that are not only attractive, but also functional and easy to use. From simple websites to complex e-commerce projects, I work in collaboration with my clients to achieve their vision and create unique solutions. With my experience and skills in web development, I can help you create an effective and successful online presence for your business or personal brand.",
    include: [
      "Diseño personalizado.",
      "Responsive design.",
      "Alojamiento y registro del dominio.",
      "Configuración de correo electrónico.",
      "Capacitación y soporte.",
    ],
    englishInclude: [
      "Custom design.",
      "Responsive design.",
      "Hosting and domain registration.",
      "Email configuration.",
      "Training and support.",
    ],
  },
  {
    title: "Mantenimiento",
    englishTitle: "Maintenance",
    description:
      "Servicio de mantenimiento web para asegurar que tu sitio web esté actualizado, seguro y en óptimas condiciones de funcionamiento. Mi objetivo es ofrecerte un servicio integral que te permita centrarte en lo que realmente importa: hacer crecer tu negocio en línea. Puedo ayudarte a asegurar que tu sitio web siempre esté en su mejor estado y listo para atraer a tus visitantes y clientes.",
    englishDescription:
      "Web maintenance service to ensure that your website is up to date, secure and in optimal working condition. My goal is to offer you a comprehensive service that allows you to focus on what really matters: growing your business online. I can help you ensure that your website is always in its best condition and ready to attract your visitors and customers.",
    include: [
      "Seguridad y protección.",
      "Rendimiento y velocidad.",
      "Actualización de contenido.",
    ],
    englishInclude: [
      "Security and protection.",
      "Performance and speed.",
      "Content update.",
    ],
  },
]

const step = [
  {
    id: 0,
    title: "Primer contacto",
    englishTitle: "First contact",
    description:
      "El primer contacto puede ser por correo o por medio de las redes sociales, en este punto se debe de tener claro el objetivo del proyecto y de que se trata.",
    englishDescription:
      "The first contact can be by email or through social networks, at this point the objective of the project and what it is about must be clear.",
    display: "block",
  },
  {
    id: 1,
    title: "Segundo contacto",
    englishTitle: "Second contact",
    description:
      "Se estara contactando, ya sea por correo u otro medio de su preferencia, para poder tener una reunión y poder tener una idea mas clara de lo que se quiere.",
    englishDescription:
      "You will be contacted, either by email or another means of your preference, to be able to have a meeting and be able to have a clearer idea of ​​what you want.",
    display: "block",
  },
  {
    id: 2,
    title: "Propuesta",
    englishTitle: "Proposal",
    description:
      "Se le enviara una propuesta de los servicios que se incluira, plazos de entegra y presupuesto con todo incluido.",
    englishDescription:
      "A proposal of the services that will be included, delivery times and budget with everything included will be sent.",
    display: "block",
  },
  {
    id: 3,
    title: "Aceptación o rechazo",
    englishTitle: "Acceptance or rejection",
    description:
      "Aqui el cliente decidira si acepta o no el presupuesto, o si quiere algun cambio en la propuesta. Si es aceptado se procedera a elegir el metodo de pago.",
    englishDescription:
      "Here the client will decide whether or not to accept the budget, or if he wants any changes in the proposal. If accepted, the payment method will be chosen.",
    display: "block",
  },
  {
    id: 4,
    title: "Diseño web",
    englishTitle: "Web design",
    description:
      "Se procedera a diseñar el proyecto, se le enviara la maquetación del proyecto, paletas de colores, tipografias, etc. Si el cliente tiene algun diseño de referencia puede enviarlo para incluirlo en el diseño.",
    englishDescription:
      "The project will be designed, the project layout, color palettes, typography, etc. will be sent. If the client has any reference design, you can send it to include it in the design.",
    display: "block",
  },
  {
    id: 5,
    title: "Desarrollo web",
    englishTitle: "Web development",
    description:
      "Una vez que el diseño sea aceptado, se procedera a desarrollar el proyecto, se le enviara un link de prueba para que pueda ver el avance del proyecto.",
    englishDescription:
      "Once the design is accepted, the project will be developed, a test link will be sent so that you can see the progress of the project.",
    display: "block",
  },
  {
    id: 6,
    title: "Pruebas",
    englishTitle: "Testing",
    description:
      " Despues de terminar el proyecto, se haran las pruebas en los diferentes navegadores y dispositivos, para asegurar que el proyecto funcione correctamente.",
    englishDescription:
      "After finishing the project, the tests will be carried out in the different browsers and devices, to ensure that the project works correctly.",
    display: "block",
  },
  {
    id: 7,
    title: "Lanzamiento",
    englishTitle: "Launch",
    description:
      "Ya con las pruebas correspondientes se lanzara el proyecto al dominio del cliente.",
    englishDescription:
      "With the corresponding tests, the project will be launched to the client's domain.",
    display: "hidden",
  },
]

const questions = [
  {
    title: "¿Cuánto tiempo tarda en hacerse un sitio web?",
    englishTitle: "How long does it take to make a website?",
    description:
      "Depende de la complejida del proyecto, pero en general, un sitio web estándar puede estar listo en 2 semanas o menos.",
    englishDescription:
      "It depends on the complexity of the project, but in general, a standard website can be ready in 2 weeks or less.",
  },
  {
    title: "¿Cuánto cuesta un sitio web?",
    englishTitle: "How much does a website cost?",
    description:
      "Trabajo por horas, como dije anteriormente depende de la complejidad del proyecto por lo que el costo va a variar. Puedes contactarme para obtener una cotización.",
    englishDescription:
      "I work by the hour, as I said before it depends on the complexity of the project so the cost will vary. You can contact me for a quote.",
  },
  {
    title: "¿Qué plataformas y herramientas de desarrollo web utiliza?",
    englishTitle: "What web development platforms and tools do you use?",
    description:
      "Utilizo principalmente Next.js como framework, pero también trabajo con HTML, CSS, JavaScript, WordPress, Python, etc.",
    englishDescription:
      "I mainly use Next.js as a framework, but I also work with HTML, CSS, JavaScript, WordPress, Python, etc.",
  },
  {
    title: "¿Puede ayudar con el alojamiento y registro del dominio?",
    englishTitle: "Can you help with hosting and domain registration?",
    description:
      "Sí, puedo ayudar con el registro del dominio y el alojamiento. También puedo ayudar con la configuración de correo electrónico.",
    englishDescription:
      "Yes, I can help with domain registration and hosting. I can also help with email setup.",
  },
  {
    title: "¿Puedo pagar con tarjeta de crédito?",
    englishTitle: "Can I pay with a credit card?",
    description:
      "Sí, puedes pagar con tarjeta de crédito a través de PayPal u otra plataforma de pago en línea igualmente segura.",
    englishDescription:
      "Yes, you can pay with a credit card through PayPal or another equally secure online payment platform.",
  },
  {
    title:
      "¿Cómo funciona el proceso de revisión y aprobación de la página web?",
    englishTitle: "How does the website review and approval process work?",
    description:
      "Una vez que el sitio web esté listo, te enviaré un enlace para que puedas revisar el sitio web y hacer cualquier cambio que desees. Una vez que esté satisfecho con el sitio web, puedes aprobarlo y publicarlo en línea.",
    englishDescription:
      "Once the website is ready, I will send you a link so you can review the website and make any changes you want. Once you are satisfied with the website, you can approve it and publish it online.",
  },
  {
    title:
      "¿Ofrecen servicios de mantenimiento y actualización de la página web?",
    englishTitle: "Do you offer website maintenance and update services?",
    description:
      "Sí, ofrezco servicios de mantenimiento y actualización de páginas web. Puedes incluirlo en el servicio para tu sitio desarrollado por mi o externo.",
    englishDescription:
      "Yes, I offer website maintenance and update services. You can include it in the service for your site developed by me or external.",
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
    englishTitle: "Custom design",
    icon: <Ruler className="h-10" fill="#F59E0B" />,
  },
  {
    title: "Alojamiento y registro de dominio",
    englishTitle: "Hosting and domain registration",
    icon: <Hosting className="h-10" fill="#F59E0B" />,
  },
  {
    title: "Pago seguro por PayPal",
    englishTitle: "Secure payment by PayPal",
    icon: <Safe className="h-10" fill="#F59E0B" />,
  },
]

export default function Services({ spanish, english }) {
  return (
    <>
      <div className="my-20">
        <div className="relative px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto text-center lg:max-w-xl">
            <h1 className="font-way lg:text-[3rem] word-12 uppercase tracking-[0.45rem] text-amber-500 mb-0 md:text-2xl font-bold text-lg leading-6 lg:leading-tight">
              {spanish && "Lleva tu proyecto al siguiente nivel"}
              {english && "Take your project to the next level"}
            </h1>
            <p className="mt-2 lg:mt-5 lg:text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-white text-xs">
              {spanish && "Construyendo tu presencia en línea"}
              {english && "Building your online presence"}
            </p>
            <Link
              href={
                spanish
                  ? "/portafolio"
                  : english
                  ? "/en/portfolio"
                  : "/portafolio"
              }
              className="inline-flex items-center text-xs lg:text-[0.8rem] font-bold uppercase tracking-[0.32rem] bg-amber-500 text-white lg:mt-6 py-3 px-10 mt-3"
            >
              Portfolio
            </Link>
            <div className="grid grid-cols-1 px-6 mt-20 text-left md:w-[90%] md:mx-auto gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              {main.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <div>{item.icon}</div>
                  <div>
                    <p className="ml-3 text-white">
                      {spanish && item.title}
                      {english && item.englishTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container md:w-[80%] mx-auto">
          <p className="text-center text-[2rem] font-semibold uppercase tracking-[0.32rem] text-white mt-10">
            Services
          </p>
          {services.map((item, index) => (
            <div className="mt-10" key={index}>
              <div className="relative px-1 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto overflow-hidden md:max-w-xl lg:max-w-none lg:flex">
                  <div className="flex-1 px-4 py-8 border border-amber-500 lg:p-12">
                    <h3 className="font-way lg:text-[1.5rem] font-bold uppercase tracking-[0.45rem] text-amber-500 text-sm">
                      {spanish && item.title}
                      {english && item.englishTitle}
                    </h3>
                    <p className="mt-6 leading-6 text-white">
                      {spanish && item.description}
                      {english && item.englishDescription}
                    </p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 font-way text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-amber-500">
                          {spanish && "¿Que incluye?"}
                          {english && "What's included?"}
                        </h4>
                        <div className="flex-1 border-t border-amber-500"></div>
                      </div>
                      <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                        {spanish &&
                          item.include.map((item, index) => (
                            <li
                              className="flex items-start lg:col-span-1"
                              key={index}
                            >
                              <div className="flex-shrink-0">
                                <Tick className="w-5 text-amber-500" />
                              </div>
                              <p className="ml-3 text-white">{item}</p>
                            </li>
                          ))}
                        {english &&
                          item.englishInclude.map((item, index) => (
                            <li
                              className="flex items-start lg:col-span-1"
                              key={index}
                            >
                              <div className="flex-shrink-0">
                                <Tick className="w-5 text-amber-500" />
                              </div>
                              <p className="ml-3 text-white">{item}</p>
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
          {tech.map((item, index) => (
            <span
              className="flex items-center font-way md:text-[0.9rem] font-bold uppercase tracking-[0.32rem] text-white py-2 px-5 border border-amber-500 mx-2 text-xs"
              key={index}
            >
              {item.icon}
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="my-28">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[2rem] font-semibold uppercase tracking-[0.32rem] text-white">
              {spanish && "Proceso"}
            </h2>
            <p className="max-w-lg mx-auto mt-4 leading-6 text-white">
              {spanish &&
                "Aqui esta de una manera detallada el proceso que se sigue para lograr el objetivo del proyecto."}
            </p>
          </div>

          <ul className="max-w-md mx-auto mt-16 space-y-12">
            {step.map((item, index) => (
              <li className="relative flex items-start" key={index}>
                <div
                  className={`lg:-ml-0.5 absolute lg:mt-0.5 lg:top-14 lg;left-8 w-px border-l-4 border-amber-500 h-full ${item.display} top-[3rem] left-6`}
                ></div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow lg:w-16 lg:h-16">
                  <p className="font-way text-[1.5rem] font-bold uppercase tracking-[0.32rem] text-amber-500">
                    {item.id}
                  </p>
                </div>
                <div className="ml-3 lg:ml-6">
                  <h3 className="font-way lg:text-[0.9rem] font-semibold uppercase tracking-[0.32rem] text-amber-500 text-sm">
                    {spanish && item.title}
                    {english && item.englishTitle}
                  </h3>
                  <p className="mt-2 leading-6 text-white lg:mt-4">
                    {spanish && item.description}
                    {english && item.englishDescription}
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
              {spanish && "Preguntas y respuestas"}
            </h2>
            <p className="max-w-xl mx-auto mt-4 leading-6 text-white">
              {spanish && "Preguntas comunes que hacen mis clientes."}
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            {questions.map((item, index) => (
              <div className="flex items-start" key={index}>
                <div className="items-center justify-center flex-shrink-0 hidden w-8 h-8 bg-white rounded-full md:flex">
                  <span className="text-lg font-semibold text-amber-500">
                    ?
                  </span>
                </div>
                <div className="md:ml-4">
                  <p className="font-way lg:text-[0.9rem] font-semibold uppercase tracking-[0.2rem] text-amber-500 text-sm">
                    {spanish && item.title}
                    {english && item.englishTitle}
                  </p>
                  <p className="mt-4 leading-6 text-white">
                    {spanish && item.description}
                    {english && item.englishDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
