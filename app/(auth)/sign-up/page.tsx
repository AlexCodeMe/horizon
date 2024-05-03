import AuthForm from '@/components/auth-form'
import React from 'react'

function SignUp() {
  return (
    <section className='flex justify-center items-center size-full max-sm:px-6'>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp
