import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useMediaQuery } from 'react-responsive'
import lightLogo from '@/assets/logo/logo-light.png'
import darkLogo from '@/assets/logo/logo-dark.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Loader, LogIn } from 'lucide-react'
import { IoEarthOutline } from "react-icons/io5";
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaFacebookF, FaInstagram, FaTwitter, } from "react-icons/fa";
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'react-router-dom'



type Inputs = {
    email: string
    password: string
}


const SOCIAL_LINK = [
    {
        linkName: "Website",
        href: 'https://www.sidharthhousing.in/',
        icon: <IoEarthOutline />
    },
    {
        linkName: "Facebook",
        href: 'https://www.facebook.com/sidharthousing',
        icon: <FaFacebookF />
    },
    {
        linkName: "Instagram",
        href: 'https://www.instagram.com/sidharthhousinginsta/',
        icon: <FaInstagram />
    },
    {
        linkName: "Twitter",
        href: 'https://twitter.com/sidharthsfhl',
        icon: <FaTwitter />
    },

]

const LoginForm = ({ openForgotModal }: { openForgotModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loadingForm] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // Manual validation for email and password
    const validateEmail = (value: string) => {
        if (!value) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        return true
    }

    const validatePassword = (value: string) => {
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters'
        return true
    }

    const { myTheme } = useTheme()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    return (
        <Card className={`${isDesktopOrLaptop ? "w-[500px]    h-full rounded-none !rounded-tl-3xl !rounded-bl-3xl flex  justify-center items-center  flex-col" : "w-full h-full rounded-none flex items-center justify-center flex-col"} shadow-none border-none`}>
            <CardContent className={`${isDesktopOrLaptop ? "w-[500px] px-9" : "w-full sm:w-[75%] md:w-[50%] mx-auto px-0"}`}>
                <Card className='border-none shadow-none  '>
                    <CardHeader>
                        <div className="mb-2 mt-4">
                            <img
                                src={myTheme === 'light' ? darkLogo : lightLogo}
                                className="w-[160px]"
                                alt="Logo"
                            />
                        </div>
                        <CardTitle className='text-xl'>Welcome back!</CardTitle>
                        <CardDescription >Please enter your details to sign in</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register('email', { required: "Email is required.", validate: validateEmail })}
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    autoComplete="off"
                                    disabled={loadingForm} // Disable input while submitting
                                    className='shadow-none'
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input {...register("password", { required: "Password is required.", validate: validatePassword })}
                                    type={showPassword ? 'text' : 'password'}
                                    disabled={loadingForm} id="password" placeholder="Password" className='shadow-none' />
                                {errors.password && (
                                    <p className="text-red-500 text-xs">{errors.password.message}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="showpassword"
                                    checked={showPassword}
                                    onCheckedChange={(checked: boolean) => setShowPassword(checked)}
                                    disabled={loadingForm} // Disable checkbox while submitting
                                />
                                <Label htmlFor="showpassword">Show Password</Label>
                            </div>

                            <div className='w-full'>
                                <Button type='submit' className='w-full' disabled={loadingForm}>
                                    {
                                        loadingForm ? <>
                                            <Loader className='animate-spin' /> Loading....
                                        </> : <>
                                            Sigin <LogIn />
                                        </>
                                    }
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-3'>

                        <div>
                            <Button onClick={() => openForgotModal(true)} variant={'link'} disabled={loadingForm}>
                                Forgot Password?
                            </Button>
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <p className='text-sm text-muted-foreground'>Don't have an account?</p>
                            <Link to={"/register"} >
                                <Button variant={'link'} className='px-1' disabled={loadingForm}>
                                    Register Now
                                </Button>
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </CardContent>
            <CardFooter className='flex flex-col p-0'>
                <div className="w-full h-auto   flex items-center justify-center gap-2 flex-wrap">
                    {
                        SOCIAL_LINK.map(socialbutton => (
                            <Tooltip key={socialbutton.linkName}>
                                <TooltipTrigger>
                                    <a href={socialbutton.href} target="_blank" className="p-2 rounded-lg flex items-center border   justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100  hover:text-black dark:hover:text-black dark:border-gray-500 dark:text-gray-400">
                                        {socialbutton.icon}
                                    </a>
                                    <TooltipContent>
                                        <p>{socialbutton.linkName}</p>
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Tooltip>
                        ))
                    }
                </div>
                <p className='text-[10px] md:text-xs text-muted-foreground text-center mt-4'>
                    © 1999- 2024 – All Rights Reserved – Sidharth Housing.
                </p>
            </CardFooter>
        </Card>
    )
}

export default LoginForm