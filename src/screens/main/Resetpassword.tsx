// import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import darkLogo from '@/assets/logo/logo-dark.png'
// import { resetPassword } from "@/services/authService" // Import your resetPassword service
// import { toast } from 'sonner' // Import the toast function for notifications
import { useParams } from "react-router-dom"

interface IFormInput {
    password: string
    confirmPassword: string
}

interface IParams extends Record<string, string | undefined> {
    token: string; // token should be a string
}

export default function Resetpassword() {
    const { token } = useParams<IParams>()

    const [isSubmitting, setIsSubmitting] = useState(false)

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormInput>()

    // Watch the password field to compare it with confirmPassword
    const password = watch("password")

    // Password validation logic
    const validatePassword = (value: string) => {
        if (!value) return "Password is required"
        if (value.length < 6) return "Password must be at least 6 characters"
        return true
    }

    // Confirm Password validation
    const validateConfirmPassword = (value: string) => {
        if (!value) return "Confirm Password is required"
        if (value !== password) return "Passwords do not match"
        return true
    }

    // Handle form submission
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
        setIsSubmitting(true) // Start the submission process

        // try {
        //     // Call the resetPassword function

        //     // const response = await resetPassword(token, data.password)
        //     console.log(response)
        //     // Show a success toast message using sonner
        //     toast.success("Password has been reset successfully.")
        //     setIsSubmitting(false)
        // } catch (error) {
        //     setIsSubmitting(false)

        //     // Handle different types of errors
        //     if (error instanceof Error) {
        //         // Show an error toast with the error message
        //         toast.error(error.message || "Failed to reset password.")
        //     } else {
        //         // Show a generic error message
        //         toast.error("An unexpected error occurred.")
        //     }
        // }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-[350px] shadow-none">
                {/* Logo Section */}
                <div className="flex justify-center mt-6">
                    <img
                        src={darkLogo} // Replace with your logo path or URL
                        alt="Logo"
                        className="w-[140px] h-auto"
                    />
                </div>

                {/* Card Content */}
                <CardHeader>
                    <CardTitle>Reset Password</CardTitle>
                    <CardDescription>Enter your new password below.</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-7">
                            {/* Password Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">New Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter new password"
                                    {...register("password", { validate: validatePassword })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    {...register("confirmPassword", { validate: validateConfirmPassword })}
                                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>
                    </form>
                </CardContent>

                {/* Card Footer with Buttons */}
                <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
                        {isSubmitting ? "Submitting..." : "Reset Password"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
