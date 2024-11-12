"use client";
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Provider({ children }) {
  const pathname = usePathname();
  
  // Check if the current path exists in your app's valid routes
  const validRoutes = ['/', '/about', '/contact', '/portfolio', '/blog']; 
  const shouldShowNavFooter = validRoutes.includes(pathname);
  
  return (
    <>
      {shouldShowNavFooter && <Navbar />}
      {children}
      {shouldShowNavFooter && <Footer />}
    </>
  );
}