"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { userFormValidation } from "@/lib/validation"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomForm, { FieldType } from "@/components/shared/CustomForm"
import { SelectItem } from "@/components/ui/select"



export default function CreateUserForm() {

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
        
        
      }

  return (
    <div className="flex justify-end mb-10">
      <Dialog >
        <DialogTrigger className="bg-primary px-6 py-2 rounded-xl">Tambah User</DialogTrigger>
        <DialogContent className="bg-zinc-950">
            <DialogHeader>
            <DialogTitle className="mb-8">Tambah User Baru</DialogTitle>
            <DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CustomForm 
                            control={form.control}
                            type={FieldType.INPUT}
                            name="firstName"
                            label="Nama Lengkap"
                            placeholder="Nama Lengkap.."
                        />
                        <CustomForm 
                            control={form.control}
                            type={FieldType.INPUT}
                            name="email"
                            label="Email"
                            placeholder="Email.."
                        />
                        <CustomForm 
                            control={form.control}
                            type={FieldType.INPUT}
                            name="username"
                            label="NIP"
                            placeholder="NIP..."
                        />
                        <CustomForm 
                            control={form.control}
                            type={FieldType.SELECT}
                            name="role"
                            label="Status"
                            placeholder="Pilih status"
                        >
                            <SelectItem value="light" className="bg-zinc-900 border-none text-white">Light</SelectItem>
                        </CustomForm>
                        <CustomForm 
                            control={form.control}
                            type={FieldType.PASSWORD}
                            name="password"
                            label="Password"
                            placeholder="password..."
                        />
                        <Button type="submit" className="bg-primary w-full">Kirim</Button>
                    </form>
                </Form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>

    </div>
  )
}
