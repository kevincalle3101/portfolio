import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kevin Calle | Portfolio',
  description: 'Kevin is a apassionate full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-white`}>
        <div></div>
        <div></div>
        {children}
      </body>
    </html>
  )
}
