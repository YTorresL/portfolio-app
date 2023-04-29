import './globals.css'
import 'normalize.css/normalize.css'


export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black">{children}</body>
    </html>
  )
}
