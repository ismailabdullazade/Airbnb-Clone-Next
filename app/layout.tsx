import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'

const font = Nunito({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal/>
        <RegisterModal/>
        <Navbar/>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        </body>
    </html>
  )
}
