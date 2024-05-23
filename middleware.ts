import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
 
const intlMiddleware = createMiddleware({
  locales: ['nl', 'en', 'de'],
  defaultLocale: 'nl'
});
 
// // Protect a route
// const isProtectedRoute = createRouteMatcher(['/:locale/dashboard(.*)']);
 
export default clerkMiddleware((auth, req) => {
  // if (isProtectedRoute(req)) auth().protect();
 
  return intlMiddleware(req);
});

 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|nl)/:path*']
};