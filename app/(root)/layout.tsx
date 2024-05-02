import Image from 'next/image'
import React from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen w-full font-inter'>
        Sidebar
        <div className='flex flex-col size-full'>
            <div className='flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden'>
                <Image src='/icons/logo.svg'
                    alt='logo'
                    width={30}
                    height={30} />
                <div>
                    MobileNav
                </div>
            </div>
            {children}
        </div>
    </main>
  )
}

export default RootLayout
