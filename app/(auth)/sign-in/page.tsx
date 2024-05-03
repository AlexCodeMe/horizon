import AuthForm from '@/components/auth-form'
import React from 'react'

function SignIn() {
  return (
    <section className='flex justify-center items-center size-full max-sm:px-6'>
      <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn
