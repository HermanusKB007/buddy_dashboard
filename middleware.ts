import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware triggered');

  // Get country from request headers (Vercel provides this)
  const country = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';

  console.log('Country:', country);

  if (country !== 'ZA') {
    console.log('Blocking access for country:', country);
    return NextResponse.redirect(new URL('/404', request.url));
  }

  console.log('Access granted for South Africa');
  return NextResponse.next();
}

export const config = {
  matcher: '*', // Apply to all routes
};