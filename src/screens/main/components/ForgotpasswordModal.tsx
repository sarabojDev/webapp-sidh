import React, { useState, useEffect } from "react"
import { ArrowRight, Loader } from "lucide-react"
import { Button } from "../../../components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { useForm, SubmitHandler } from "react-hook-form"
// import { toast } from "sonner"
// import { forgotPassword } from "../../../services/authService"

type ForgotPassModalType = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormInput {
    email: string
}

const ForgotPasswordModal = ({ open, setOpen }: ForgotPassModalType) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    // React Hook Form for managing form data and validation
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IFormInput>()

    // Email validation logic
    const validateEmail = (value: string) => {
        if (!value) return "Email is required"
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email address"
        return true
    }

    // Handle form submission
    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        console.log(data)
        setIsSubmitting(true) // Set submitting state to true when form starts submitting

        // try {
        //     // Call the forgotPassword service function
        //     // const response = await forgotPassword(data.email)

        //     // Success toast
        //     toast.success(response.message || "Password reset email sent successfully!")

        //     // Close the modal after submission
        //     setOpen(false)
        //     reset() // Optionally reset the form fields

        // } catch (error:unknown) {
        //     if (error instanceof Error) {
        //         // If it's an instance of Error (including AxiosError)
        //         toast.error(error.message || "Failed to send reset password request. Please try again.");
        //       } else {
        //         // If it's an unexpected error type
        //         toast.error("An unknown error occurred.");
        //       }
        // } finally {
        //     setIsSubmitting(false) // Reset submitting state after operation
        // }
    }

    // Reset the form whenever the modal is closed
    useEffect(() => {
        if (!open) {
            reset() // Reset form when dialog is closed
        }
    }, [open, reset])

    return (
        <Dialog open={open} onOpenChange={(value: boolean) => setOpen(value)}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Forgot Password</DialogTitle>
                    <DialogDescription>
                        Please provide your registered email address, and we will send you a password reset email.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                            {...register("email", { validate: validateEmail })}
                            aria-invalid={errors.email ? "true" : "false"}
                            disabled={isSubmitting} // Disable input while submitting
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    <DialogFooter>
                        <Button
                            type="submit"
                            variant="default"
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            {isSubmitting ? (
                                <Loader className="animate-spin" />
                            ) : (
                                <ArrowRight />
                            )}
                            {isSubmitting ? "Sending..." : "Submit"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ForgotPasswordModal
