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
import { SelectItem } from "@/components/ui/select"




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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomForm 
              control={form.control}
              type={FieldType.INPUT}
              name="Username"
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
      </Form>
    </div>
  )
}
