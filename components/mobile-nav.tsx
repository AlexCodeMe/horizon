'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

function MobileNav({ user }: MobileNavProps) {
    const pathname = usePathname()

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
            <Image src='/icons/hamburger.svg'
                alt='menu'
                height={30}
                width={30}
                className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
            <Link href='/' className='cursor-pointer flex items-center gap-1 px-2'>
                <Image src='/icons/logo.svg'
                    alt='logo'
                    width={34}
                    height={34} />
                <h1 className='text-[26px] leading-[32px] font-ibm-plex-serif font-bold text-black-1'>
                    Horizon
                </h1>
            </Link>
            <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                            return (
                                <SheetClose key={item.route} asChild>
                                    <Link href={item.route}
                                        key={item.label}
                                        className={cn(
                                            'flex gap-3 items-center p-4 rounded-lg w-full max-w-60',
                                            isActive && 'bg-bank-gradient'
                                        )}>
                                        <Image src={item.imgURL}
                                            alt={item.label}
                                            width={20}
                                            height={20}
                                            className={cn(isActive && 'brightness-[3] invert-0')} />
                                        <p className={cn(
                                            'text-[16px] leading-[24px] font-semibold text-black-2',
                                            isActive && 'text-white'
                                        )}>
                                            {item.label}
                                        </p>
                                    </Link>
                                </SheetClose>
                            )
                        })}
                        USER
                    </nav>
                </SheetClose>
                Footer
            </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
