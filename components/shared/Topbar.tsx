import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex  z-20 gap-5">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button asChild className="rounded-full bg-primary">
          <Link href="/sign-up">Masuk</Link>
        </Button>
      </SignedOut>
    </div>
  )
}
