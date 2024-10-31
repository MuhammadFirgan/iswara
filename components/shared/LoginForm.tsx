"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomForm, { FieldType } from "@/components/shared/CustomForm"
import { userFormValidation } from "@/lib/validation"


import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function CreateForm() {

    const form = useForm<z.infer<typeof userFormValidation>>({
        resolver: zodResolver(userFormValidation),
        defaultValues: {
            ...userFormValidation,
            firstName: '',
            email: '',
            username: ''
        },
    })
    
    function onSubmit(values: z.infer<typeof userFormValidation>) {
        
        console.log(values)
      }

  return (
    <div className="w-full lg:max-w-sm px-10 py-10 bg-zinc-950 rounded-xl">
      <h1 className="text-4xl text-center">Iswara</h1>
      <span className="text-zinc-500 text-center block mb-8">selamat datang, silahkan login</span>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomForm 
              control={form.control}
              type={FieldType.INPUT}
              name="username"
              label="NIP"
              placeholder="Masukkan NIP..."
          />
          <CustomForm 
              control={form.control}
              type={FieldType.PASSWORD}
              name="password"
              label="Password"
              placeholder="Masukkan password..."
          />
          
          <Button type="submit" className="w-full bg-primary rounded-lg">Login</Button>
        </form>
      </Form> */}
      <SignIn.Root>
        <SignIn.Step
        name="start"
        
        >
        <Clerk.GlobalError className="block text-sm text-red-400" />
        <div className="space-y-4">
        <Clerk.Field name="identifier" className="space-y-2">
        <Clerk.Label className="text-sm  text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">NIP</Clerk.Label>
        <Clerk.Input
        type="text"
        required
        className="shad-input bg-zinc-900 border-none flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
        />
        <Clerk.FieldError className="block text-sm text-red-400" />
        </Clerk.Field>
        <Clerk.Field name="password" className="space-y-2">
        <Clerk.Label className="text-sm font-medium text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</Clerk.Label>
        <Clerk.Input
        type="password"
        required
        className="shad-input bg-zinc-900 border-none flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"/>
        <Clerk.FieldError className="block text-sm text-red-400" />
        </Clerk.Field>
        </div>
        <SignIn.Action
        submit
        className="w-full bg-primary rounded-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
        >
        Sign In
        </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
