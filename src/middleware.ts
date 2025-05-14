import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Define MIME types for different file extensions
  const mimeTypes: { [key: string]: string } = {
    '.json': 'application/json',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
  }

  // Handle manifest.json specifically
  if (pathname === '/manifest.json') {
    return new NextResponse(null, {
      headers: {
        'content-type': 'application/manifest+json',
        'cache-control': 'public, max-age=3600',
        'access-control-allow-origin': '*',
      },
    })
  }

  // Handle other static files
  const ext = pathname.substring(pathname.lastIndexOf('.'))
  if (mimeTypes[ext]) {
    return new NextResponse(null, {
      headers: {
        'content-type': mimeTypes[ext],
        'cache-control': 'public, max-age=3600',
        'access-control-allow-origin': '*',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/manifest.json',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 