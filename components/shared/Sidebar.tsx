'use client'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { usePathname, useRouter } from 'next/navigation'
import { BiHome, BiSolidMegaphone, BiSolidUser } from 'react-icons/bi'
import { Button } from '../ui/button'

export default function Sidebar() {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
    
      <aside className="sticky left-0 top-0 bottom-0 min-h-screen p-6 w-[250px] bg-neutral-950 border-r-2 border-zinc-800">
        <div className="flex-col flex-between gap-5 hidden lg:flex">
          
          <div className="flex flex-col py-10 gap-10">
            <Link href="/" className="flex items-center gap-3">
            <BiHome className='w-6 h-6' />
            <p className="text-lg">Beranda</p>
            </Link>
            <Link href="/create" className="flex items-center gap-3">
            <BiSolidMegaphone className='w-6 h-6' />
            <p className="text-lg">Buat Audio</p>
            </Link>
            <Link href="/management" className="flex items-center gap-3">
              <BiSolidUser className='w-6 h-6' />
              <p className="text-lg">Role Management</p>
            </Link>
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
      </aside>
      
    </>
  )
}
