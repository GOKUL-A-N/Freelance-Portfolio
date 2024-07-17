import { Roboto } from 'next/font/google'
import './globals.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link"
import Navbar from './{utils}/Navbar';
import { Analytics } from "@vercel/analytics/react"
// import logo from '../public/images/logo.png';

const roboto = Roboto({ 
  weight: '400',subsets: ['latin'] })

export const metadata = {
  title: 'Gokul NatarajMoorthy',
  description: 'Freelance Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={roboto.className}>
        <div className='fixed bottom-3 z-30 text-white flex  flex-col gap-4 pl-3  '>
            <Link href='https://www.linkedin.com/in/gokulnatarajmoorthy' target='_blank' className='hover:text-black'><FaLinkedin size={30} /></Link>
            <a href='https://github.com/GOKUL-A-N' target='_blank' className='hover:text-black'><FaGithub size={30} /></a>
            <div className='hover:text-black'><FaInstagramSquare size={30} /></div>
        </div>
        <div>
          <div>{children}</div>
        </div>
        <div className='fixed items-right text-right top-3 z-40 text-white flex  flex-col gap-4 right-3  '>
          <Navbar />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
