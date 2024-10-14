import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { BiHome, BiMenu, BiSolidMegaphone, BiSolidUser } from "react-icons/bi"
import { Button } from "../ui/button"
  

export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
        <BiMenu className="w-8 h-8"/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-zinc-900">
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
        </SheetContent>
    </Sheet>
    
  )
}
