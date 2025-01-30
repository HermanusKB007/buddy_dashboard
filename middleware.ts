import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define the extended type for the geo property
interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
    city?: string;
    region?: string;
  };
}

export async function middleware(request: GeoRequest) {
  // Get country from Vercel's built-in geo-detection
  const country = request.geo?.country ?? 'Unknown'

  // Allow development environment
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  // Block if not from South Africa
  if (country !== 'ZA') {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'This service is currently only available in South Africa.',
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  return NextResponse.next()
}

// Apply to all routes
export const config = {
  matcher: '/:path*',
}