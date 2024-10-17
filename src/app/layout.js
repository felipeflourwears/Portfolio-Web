import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Web Flourwears',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
