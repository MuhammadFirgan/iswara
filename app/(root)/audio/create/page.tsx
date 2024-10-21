"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomForm, { FieldType } from "@/components/shared/CustomForm"
import { customFormValidation } from "@/lib/validation"
import { SelectItem } from "@/components/ui/select"



// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })


export default function CreateForm() {

    const form = useForm<z.infer<typeof customFormValidation>>({
        resolver: zodResolver(customFormValidation),
        defaultValues: {
            ...customFormValidation,
            title: '',
            description: '',
            voiceType: '',
            prompt: ''
        },
    })
    
    function onSubmit(values: z.infer<typeof customFormValidation>) {
        
        console.log(values)
      }

  return (
    <section className="w-full lg:max-w-xl px-10  py-10">
      <h1 className="text-4xl mb-8">Buat Audio</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomForm 
              control={form.control}
              type={FieldType.INPUT}
              name="title"
              label="Judul Audio"
              placeholder="Judul Audio..."
          />
          <CustomForm 
              control={form.control}
              type={FieldType.TEXTAREA}
              name="description"
              label="Deskripsi"
              placeholder="Deskripsi Audio..."
          />
          <CustomForm 
              control={form.control}
              type={FieldType.SELECT}
              name="voiceType"
              label="Tipe Suara"
              placeholder="Pilih tipe suara"
          >
            <SelectItem value="light" className="bg-zinc-900 border-none text-white">Light</SelectItem>
          </CustomForm>
          <CustomForm 
              control={form.control}
              type={FieldType.TEXTAREA}
              name="prompt"
              label="Text Audio"
              placeholder="Tulis text audio..."
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  )
}
