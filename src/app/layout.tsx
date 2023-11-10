import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from "nextjs-toploader";
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import CartProvider from '@/context/CartContext';
import Footer from '@/components/Footer';
import { cn } from '@/helpers/classnames';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeCraft Books',
  description: 'Created by Luis Castrillo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-full relative">
      <body className={cn(inter.className, "mb-16")}>
        <NextTopLoader />
        <main className="container mx-auto max-w-4xl mt-4 space-y-4 mb-4 md:pr-4">
          <CartProvider>
            <Header/>
            <PageTransition>
              {children}
            </PageTransition>
          </CartProvider>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
