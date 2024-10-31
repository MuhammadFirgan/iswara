'use server'
import { UserProps } from '@/types';
import User from '../database/model/user.model';
import { dbConnect } from '../database';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { checkRole } from '../roles';

export default async function createUser(user : UserProps) {

    try {
        await dbConnect()
        if (!checkRole('admin')) {
            redirect('/')
        }
        // const admin = await User.find({ user.role === 'admin' })
        // if (!admin) {
        //     redirect('/')
        // }
        const newUser = await User.create({...user, role: user.role})
        revalidatePath('/management')
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
  
}
