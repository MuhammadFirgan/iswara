'use server'
import { UserProps } from '@/types';
import User from './../model/user.model';
import { dbConnect } from '..';

export default async function createUser(user: UserProps) {
    try {
        await dbConnect()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
  
}
