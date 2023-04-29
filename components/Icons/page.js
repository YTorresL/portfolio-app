import {
  Photoshop,
  Illustrator,
} from "@/components/Icons/Icons"


const lenguage = [
  {
    label: "HTML",
  },
  {
    label: "CSS",
  },
  {
    label: "JavaScript",
  },
  {
    label: "PHP",
  },
  {
    label: "MySQL",
  },
  {
    label: "Divi",
  },
  {
    label: "Python",
  },
  {
    label: "Next.Js",
  },
]

const crealotodo = [
  {
    label: "Photoshop",
    icon: <Photoshop fill="#fff" width="28"/>,
  },
  {
    label: "Illustrator",
    icon: <Illustrator fill="#fff" width="28"/>,
  },
]

export default function Techologies() {
  return (
    <ul className="flex flex-wrap justify-center py-1">
      {lenguage.map(({ label}) => (
        <li className="mr-2 text-[0.7rem] font-bold uppercase tracking-[0.32rem] text-amber-500 px-1 sm:leading-5" key={label}>
         {label}
        </li>
      ))}
    </ul>
  )
}

export function Crealotodo() {
  return (
    <ul className="flex my-4 md:mb-8">
      {crealotodo.map(({ label, icon }) => (
        <li className="mr-2" key={label}>
          {icon}
        </li>
      ))}
    </ul>
  )
}
