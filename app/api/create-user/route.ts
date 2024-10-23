import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body: WebhookEvent = await req.json()
    console.log(body)
    const { id } = body.data

    // const { firstName, email, username, role, password } = body.data

    // const user = {
    //     clerkId: id,
    //     fullName: firstName,
    //     email: email,

    // }

}