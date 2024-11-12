import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="../public/js/jquery-3.3.1.min.js"></Script>
      <Script src="../public/js/bootstrap.bundle.min.js"></Script>
      <Script src="../public/js/Main.js"></Script>
      <Script src="../public/js/owl.carousel.min.js"></Script>
    </html>
  )
}
