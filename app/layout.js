import "./globals.css"
import "normalize.css/normalize.css"
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8Y4E9P2E08"
      ></Script>
      <Script strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8Y4E9P2E08');
        `}
      </Script>
      <body className="bg-black">{children}</body>
    </html>
  )
}
