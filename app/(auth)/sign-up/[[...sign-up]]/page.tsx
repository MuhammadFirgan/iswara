'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
 return (
    <SignUp.Root>
      <SignUp.Step name="start">
      <h1>Create an account</h1>

      <Clerk.Field name="username">
        <Clerk.Label>NIP</Clerk.Label>
        <Clerk.Input className="text-black" />
        <Clerk.FieldError />
      </Clerk.Field>

      <Clerk.Field name="emailAddress">
        <Clerk.Label>Email</Clerk.Label>
        <Clerk.Input className="text-black" />
      <Clerk.FieldError />
      </Clerk.Field>

      <Clerk.Field name="password">
        <Clerk.Label>Password</Clerk.Label>
        <Clerk.Input className="text-black" />
        <Clerk.FieldError />
      </Clerk.Field>

      <SignUp.Action submit>Sign up</SignUp.Action>
      </SignUp.Step>
    </SignUp.Root>
 )
}