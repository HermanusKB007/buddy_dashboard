import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
    city?: string;
    region?: string;
  };
}

export async function middleware(request: GeoRequest) {
  // Debug logs
  console.log('Middleware triggered');
  console.log('Country:', request.geo?.country);
  console.log('Environment:', process.env.NODE_ENV);

  // Get country from Vercel's built-in geo-detection
  const country = request.geo?.country ?? 'Unknown'

  // Block if not from South Africa (remove development check to test)
  if (country !== 'ZA') {
    console.log('Blocking access for country:', country);
    return new NextResponse(
      null,
      {
        status: 403,
        statusText: 'Access Denied: This service is currently only available in South Africa.',
      }
    )
  }

  console.log('Access granted for South Africa');
  return NextResponse.next()
}

// Make sure we're matching all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}