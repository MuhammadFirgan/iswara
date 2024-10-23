import { Control } from "react-hook-form"

export interface UserProps {
  firstName: string
  email: string
  username: string
  role: string
  password: string
}

export interface CardProps {
    image: string
    title: string
    profile: string
    name: string
}

export {}

// Create a type for the roles
export type Roles = 'admin' | 'moderator'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}