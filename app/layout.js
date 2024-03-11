import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Baby Love Doula',
  description: 'Lolita Garnier Doula',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
