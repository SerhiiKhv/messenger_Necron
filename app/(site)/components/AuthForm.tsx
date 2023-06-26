'use client'

import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/app/components/inputs/input";
import {Button} from "@/app/components/Button";

type Variant = "REGISTER" | "LOGIN"

export const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLogin, setIsLogin] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else
            setVariant("LOGIN")
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLogin(true)

        if (variant === "REGISTER") {
            //axios Register
        }

        if (variant === "LOGIN") {
            //NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLogin(true)

        //NextAuth Social Sign In
    }

    return (
        <div
            className="
              mt-8
              sm:mx-auto
              sm:max-w-md
           "
        >
            <div
                className="
                   bg-white
                   px-4
                   py-8
                   shadow
                   sm:rounded-lg
                   sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={onSubmit}
                >
                    {variant === "REGISTER" && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}/>
                    )}

                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        register={register}
                        errors={errors}/>

                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}/>

                    <div>
                        <Button/>
                    </div>

                </form>
            </div>
        </div>
    )
}