import Image from "next/image"
import Paragraph from "../Paragraph/page"
import ImportantParagraph from "../ImportantParagraph/page"

const fullName = "Yalith Torres"

const profileImage = "/yalith.jpg"

const description =
  "Soy desarrolladora web y programadora en Python con habilidades en diseño web e ilustración. Me especializo en el uso de Next.js para proyectos y actualmente estudio ingeniería computacional."

const englishDescription =
  "I'm a web developer and Python programmer with skills in web design and illustration. I specialize in the use of Next.js for projects and I am currently studying computational engineering."

const relevantInformation = [
  {
    title: "Nombre",
    englishTitle: "Name",
    answer: "Yalith Torres",
  },
  {
    title: "País",
    englishTitle: "Country",
    answer: "Venezuela",
  },
  {
    title: "Github",
    answer: "@YTorresL",
  },
  {
    title: "Freelance",
    answer: "Disponible",
    englishAnswer: "Available",
  },
]

const jobsInformation = [
  {
    company: "Emprex",
    position: "Desarrolladora web",
    englishPosition: "Web developer",
    start: "2023",
    end: "Presente",
    englishEnd: "Present",
    responsibility: "Desarrollo de páginas web.",
    englishResponsibility: "Development of web pages.",
    tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.Js"],
  },
  {
    company: "Pulso creativo",
    position: "Desarrolladora web",
    englishPosition: "Web developer",
    start: "2022",
    end: "2023",
    responsibility: "Desarrollo de páginas web.",
    englishResponsibility: "Development of web pages.",
    tools: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    company: "Inversiones Crealotodo SAS",
    position: "Diseñadora gráfica",
    englishPosition: "Graphic designer",
    start: "2021",
    end: "Presente",
    englishEnd: "Present",
    responsibility: "Vectorización y creación de diseños.",
    englishResponsibility: "Vectorization and creation of designs.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
]

const language = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "PHP",
  },
  {
    name: "MySQL",
  },
  {
    name: "Divi",
  },
  {
    name: "Python",
  },
  {
    name: "Next.Js",
  },
]

export default function PersonalSection({ english, spanish }) {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3">
      <div className="hidden md:block">
        <div className="border-r border-[rgb(58,58,50)]">
          <div className="h-[20.8rem] p-3">
            <ul>
              <li className="text-[0.6rem] font-bold uppercase tracking-[0.32rem] text-amber-500 list-disc pb-3 pl-1 ml-4">
                {fullName}
              </li>
            </ul>
            <div>
              <div className="overflow-hidden w-[13rem] xl:w-[15rem] rounded-full mx-auto">
                <Image
                  src={profileImage}
                  alt={
                    spanish
                      ? description
                      : english
                      ? englishDescription
                      : description
                  }
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
          <table className="w-full text-sm text-left">
            <tbody>
              {relevantInformation.map((item, index) => (
                <tr className="border-[#3a3a32] border-b border-t" key={index}>
                  <th className="pl-2 text-white xl:px-6 xl:py-5">
                    {(english && item.englishTitle) || item.title}
                  </th>
                  <td className="py-2 text-white xl:px-6 xl:py-5">
                    {(english && item.englishAnswer) || item.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="xl:col-span-3 md:col-span-2">
        <div className="p-3 leading-6 xl:p-10">
          <div className="flex items-center md:hidden">
            <div className="mb-4">
              <div className="w-20 overflow-hidden rounded-full">
                <Image
                  src={profileImage}
                  alt={
                    spanish
                      ? description
                      : english
                      ? englishDescription
                      : description
                  }
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <span className="text-base font-bold uppercase tracking-[0.32rem] text-amber-500 ml-5">
              {fullName}
            </span>
          </div>
          <Paragraph bottom>
            {spanish && description}
            {english && englishDescription}
          </Paragraph>
          <ImportantParagraph flex center background>
            {language.map((item, index) => (
              <span key={index} className="mx-2">
                {item.name}
              </span>
            ))}
          </ImportantParagraph>
          {jobsInformation.map((item, index) => (
            <details className="mb-3" key={index} open={index === 0}>
              <summary className="font-bold text-white">
                <span>{item.company}</span>
              </summary>
              <ul className="text-white">
                <li>
                  {spanish && item.position} {english && item.englishPosition} |{" "}
                  {item.start} – {(english && item.englishEnd) || item.end}
                </li>
                <li>
                  {spanish && "Responsable de: "}
                  {english && "Responsible for: "}
                  {spanish && item.responsibility}
                  {english && item.englishResponsibility}
                </li>
              </ul>
              <ImportantParagraph flex background>
                {item.tools.map((tools) => (
                  <p className="ml-4" key={tools}>
                    {tools}
                  </p>
                ))}
              </ImportantParagraph>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
