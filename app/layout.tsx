
// 'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import NavLinks from './nav-links'
 
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import { useLocation } from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel BT| Welcome',
  description: 'welcome to the mosty extraordinary hotel in bosten Massachusetts',
  keywords: 'hotel,boston hotel,new england hotel ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // const pathname = usePathname()

  // const location = useLocation();
  // const pathname = window.location.pathname;
  // console.log('location=',location);




  return (
    <html lang="en">



      {/* <body className={inter.className}> */}
      <body className="">


        <header>

          <nav id="navbar">
            <div className="container">
              <h1 className="logo"><a href="/">HBT</a></h1>
              <NavLinks />
            </div>
          </nav>        

        </header>


        {children}

          


        {/* <Script src="https://kit.fontawesome.com/e1a47a722f.js" strategy="lazyOnload" /> */}
        {/* <Script src="https://kit.fontawesome.com/e1a47a722f.js" strategy="beforeInteractive" /> */}
        <Script src="https://kit.fontawesome.com/e1a47a722f.js" />
      </body>
    </html>
  )
}
