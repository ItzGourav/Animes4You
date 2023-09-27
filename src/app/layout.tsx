import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './Providers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
    title: 'Animes4you',
    description: 'Watch anime online',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    <div className='max-w-[1440px] mx-auto px-2'>
                        <Navbar />
                        {children}
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}

