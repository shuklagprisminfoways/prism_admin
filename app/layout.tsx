import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Footer from '@/components/Footer'
import '../public/css/bootstrap.min.css'
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/owl.carousel.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prism Infoways',
  description: 'This is genrated by prism infoways.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <Script src="/js/jquery-3.3.1.min.js"></Script>
        <Script src="/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/Main.js"></Script>
        <Script src="/js/owl.carousel.min.js"></Script>
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
