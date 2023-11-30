import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

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
    <html lang="en" className='dark'>
      <body className={`${inter.className} bg-[#121212] text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
