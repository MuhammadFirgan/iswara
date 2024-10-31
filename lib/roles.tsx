'use server'
import { Role } from '@/types'
import { auth } from '@clerk/nextjs/server'

export const checkRole = (role: Role) => {
  const { sessionClaims } = auth()
  return sessionClaims?.metadata.role === role
}