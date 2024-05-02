import Image from 'next/image'
import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
        {children}
        <div className='lex h-screen w-full sticky top-0 items-center justify-end bg-sky-1 max-lg:hidden'>
            <div>
                <Image src='/icons/auth-image.svg'
                    alt='auth image'
                    width={500}
                    height={500}
                    className='rounded-l-xl object-contain' />
            </div>
        </div>
    </main>
  )
}

export default AuthLayout
