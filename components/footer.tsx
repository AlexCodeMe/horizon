'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({ user, type = 'desktop' }: FooterProps) {
    const router = useRouter()

    const handleLogOut = async () => {}

  return (
    <footer className='footer'>
      
    </footer>
  )
}

export default Footer
