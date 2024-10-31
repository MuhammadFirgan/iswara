import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { NextApiRequest } from 'next'
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import createUser from '@/lib/action/user.action'
import { UserProps } from '@/types'


export async function POST(req: Request) {
    
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if(!WEBHOOK_SECRET) {
        throw new Error('please add WEBHOOK SECRET')
    }

    const headerPayload = headers()
    const svix_id = headerPayload.get('svix_id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        })
    }

    const payload = await req.json()
    const body = JSON.stringify(payload)
    
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
          'svix-id': svix_id,
          'svix-timestamp': svix_timestamp,
          'svix-signature': svix_signature,
        }) as WebhookEvent
      } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
          status: 400,
        })
      }

    const eventType = evt.type

    if (eventType === "user.created") {
        const { id, first_name, email_addresses, username, image_url } = evt.data

    
        const addUser = {
            clerkId: id,
            firstName: first_name!,
            email: email_addresses[0].email_address,
            username: username!,
            role: payload.role,
            photo: image_url
        }

        console.log(addUser)

        const newUser = await createUser(addUser)

        if(newUser) {
            await clerkClient.users.updateUserMetadata(id, {
                publicMetadata: {
                    role: newUser.role
                }
            })
        }

        return NextResponse.json({ message: 'OK', user: newUser })
    }





}