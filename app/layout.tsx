import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ates Personal Site',
    template: '%s | Ates Personal Site'
  },
  description: 'Come and read my awesome articles!'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {' '}
        <main className='flex min-h-screen  flex-col items-center bg-neutral-800 text-white lg:p-24  pt-10'>
          <div className='relative w-full flex flex-col lg:space-y-6 space-y-3 justify-start font-arimo lg:px-64 px-6'>
            <div className='flex flex-col w-full justify-start items-start lg:space-y-4 '>
              <h2 className='font-arimo font-bold lg:text-3xl text-2xl'>
                Ates Personal Website
              </h2>
              <div className='flex flex-row space-x-4 text-lg text-blue-300 underline border-b-2 w-full pb-2'>
                <Link href={'/'}>/home</Link>
                <Link href={'/read'}>/read</Link>
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
