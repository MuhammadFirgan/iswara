import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher(['/create', '/management'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = auth()
    if (!userId) {
      const customSignInUrl = new URL('/sign-up', req.url)
      return NextResponse.redirect(customSignInUrl)
    }
  }
})

// export default clerkMiddleware(( auth, req ) => {
//   if (isProtectedRoute(req)) auth().protect()
// });
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};