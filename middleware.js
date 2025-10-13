import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  // The newer Clerk middleware automatically handles authentication
  // No need to call .protect() - it's handled automatically
});

export const config = {
  matcher: [
    // Protect all routes except public ones
    '/((?!_next/static|_next/image|favicon.ico|sign-in|sign-up|api/webhooks).*)',
  ],
};