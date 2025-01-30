import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware triggered');
  console.log('Country:', request.geo?.country);

  const country = request.geo?.country || 'UNKNOWN';

  if (country !== 'ZA') {
    console.log('Blocking access for country:', country);
    return NextResponse.redirect(new URL('/404', request.url));
  }

  console.log('Access granted for South Africa');
  return NextResponse.next();
}

export const config = {
  matcher: '*', // Apply to all pages
};