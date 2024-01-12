import Footer from './components/footer'
import Header from './components/header'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ikirenga Art and Culture Promotion',
  description: 'Art,Culture,Film Making,Ikirenga Film Festival',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&family=Open+Sans:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </header>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
