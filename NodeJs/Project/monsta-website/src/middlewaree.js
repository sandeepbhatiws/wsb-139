// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Example: redirect if user is not logged in
  const isLoggedIn = request.localStorage.getItem('token');

  console.log('login', url)

  // alert();

//   if (!isLoggedIn && url.pathname.startsWith('/my-dashboard')) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }


//   if (!isLoggedIn && url.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

  // Continue request
  return NextResponse.next();
}
