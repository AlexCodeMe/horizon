'use client'

import { authFormSchema } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { z } from 'zod'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import CustomInput from './custom-input'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'

function AuthForm({ type }: { type: string }) {
    const router = useRouter()

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        console.log(data)

        try {
            if (type === 'sign-up') {
                const newUser = await signUp(data)

                setUser(newUser)
            }

            if (type === 'sign-in') {
                // const response = await signIn({
                //     email: data.email,
                //     password: data.password
                // })

                // if (response) router.push('/')
            }
        } catch (error) {
            console.log('[AUTH_FORM-ONSUBMIT', error)
        } finally {
            setIsLoading(false)
        }
    }

    // const onSubmit = async (data: z.infer<typeof formSchema>) => {
    //     setIsLoading(true)
    //     console.log(data)
    //     try {
    //         if (type === 'sign-up') {
    //             const userData = {
    //                 firstName: data.firstName!,
    //                 lastName: data.lastName!,
    //                 address1: data.address1!,
    //                 city: data.city!,
    //                 state: data.state!,
    //                 postalCode: data.postalCode!,
    //                 dateOfBirth: data.dateOfBirth!,
    //                 ssn: data.ssn!,
    //                 email: data.email,
    //                 password: data.password
    //             }
    //             const newUser = await signUp(userData)
    //             setUser(newUser)
    //         }

    //         if (type === 'sign-in') {
    //             const response = await signIn({
    //                 email: data.email,
    //                 password: data.password,
    //             })

    //             if (response) router.push('/')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    return (
        <div className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href='/' className='cursor-pointer flex items-center gap-1'>
                    <Image src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon logo' />
                    <h1 className='text-[26px] leading-[32px] font-ibm-plex-serif font-bold text-black-1'>
                        Horizon
                    </h1>
                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-[24px] leading-[30px] lg:text-[36px] lg:leading-[44px] font-semibold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign in'
                                : 'Sign up'
                        }
                        <p className='text-[16px] leading-[24px] font-normal text-gray-600'>
                            {user
                                ? 'Please link your account to get started'
                                : 'Please enter your details'
                            }
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>
                    PlaidLink
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-8'>
                            {type === 'sign-up' && (
                                <>
                                    <div className='flex gap-4'>
                                        <CustomInput control={form.control}
                                            name='firstName'
                                            label='First Name'
                                            placeholder='Enter your first name' />
                                        <CustomInput control={form.control}
                                            name='lastName'
                                            label='Last Name'
                                            placeholder='Enter your first name' />
                                    </div>
                                    <CustomInput control={form.control}
                                        name='address1'
                                        label='Address'
                                        placeholder='Enter your specific address' />
                                    <CustomInput control={form.control}
                                        name='city'
                                        label='City'
                                        placeholder='Enter your city' />
                                    <div className='flex gap-4'>
                                        <CustomInput control={form.control}
                                            name='state'
                                            label='State'
                                            placeholder='Example: NY' />
                                        <CustomInput control={form.control}
                                            name='postalCode'
                                            label='Postal Code'
                                            placeholder='Example: 11101' />
                                    </div>
                                    <div className='flex gap-4'>
                                        <CustomInput control={form.control}
                                            name='dateOfBirth'
                                            label='Date of Birth'
                                            placeholder='YYYY-MM-DD' />
                                        <CustomInput control={form.control}
                                            name='ssn'
                                            label='SSN'
                                            placeholder='Example: 1234' />
                                    </div>
                                </>
                            )}

                            <CustomInput control={form.control}
                                name='email'
                                label='Email'
                                placeholder='Enter your email' />
                            <CustomInput control={form.control}
                                name='password'
                                label='Password'
                                placeholder='Enter your password' />

                            <div className='flex flex-col gap-4'>
                                <Button type='submit'
                                    disabled={isLoading}
                                    className='text-[16px] leading-[24px] rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form'>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className='animate-spin' />
                                            &nbsp;
                                            Loading...
                                        </>
                                    ) : type === 'sign-in'
                                        ? 'Sign In'
                                        : 'Sign Up'
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className='flex justify-center gap-1'>
                        <p className='text-[14px] leading-[20px] font-normal text-gray-600'>
                            {type === 'sign-in'
                                ? "Don't have an account?"
                                : 'Already have an account?'
                            }
                        </p>
                        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                            className='text-[14px] leading-[20px] cursor-pointer font-medium text-bankGradient'>
                            {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </footer>
                </>
            )}
        </div>
    )
}

export default AuthForm
