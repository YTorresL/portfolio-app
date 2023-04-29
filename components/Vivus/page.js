import React, { useRef } from "react"
import Vivus from "vivus"
import { useInView } from "react-intersection-observer"

const VivusJs = () => {
  const { ref, inView } = useInView()
  const svgRef = useRef(null)

  const animate = () => {
    // eslint-disable-next-line no-new
    new Vivus(svgRef.current, {
      duration: 900,
      type: "oneByOne",
      delay: 400,
      start: "autostart",
    })
  }

  return (
    <div ref={ref} className="absolute md:block -bottom-1 right-[7%] hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Capa 4"
        viewBox="0 0 478.62 468.27"
        ref={svgRef}
        className="xl:h-72 xl:w-72 md:w-40"
      >
        <circle
          cx={173.32}
          cy={172.4}
          r={25.83}
          style={{
            fill: "#d19030",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={148.99}
          cy={143.46}
          r={3.84}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={137.23}
          cy={208.05}
          r={4.15}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={231.83}
          cy={197.23}
          r={4.41}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={193.53}
          cy={98.58}
          r={4.3}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={204.01}
          cy={265.92}
          r={10.61}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={52.99}
          cy={154.09}
          r={8.05}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={104.43}
          cy={41.34}
          r={6.35}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <circle
          cx={341.98}
          cy={205.97}
          r={5.62}
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M275 358.94a37.95 37.95 0 1 1-5.9 4.79"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M262.55 430a51.43 51.43 0 1 0-5.6-5.61"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M356.81 411.41a63.77 63.77 0 1 0-3.4 8.13"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M320.84 318.62a76.73 76.73 0 1 1-8.2-2.27"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M337.2 480.19a98.3 98.3 0 1 0-20.12 6.6"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M177.36 364.39a121.78 121.78 0 1 1-2.8 26q0-5.12.42-10.12"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M233.58 257a148.15 148.15 0 1 1-11.23 5.86"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
        <path
          d="M467.05 418.89a172.45 172.45 0 1 0-2.12 11"
          style={{
            fill: "none",
            stroke: "#d19030",
            strokeMiterlimit: 10,
          }}
          transform="translate(-123.38 -218.29)"
        />
      </svg>
      {inView && animate()}
    </div>
  )
}

export default VivusJs
