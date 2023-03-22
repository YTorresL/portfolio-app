import './globals.css'

export const metadata = {
  title: 'Yalith Torres',
  description: 'Portfolio web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
