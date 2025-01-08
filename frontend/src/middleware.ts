// src/middleware.ts

import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  let response = NextResponse.next();

  if (host === 'travelinstyle.lu') {
    const url = req.nextUrl.clone();
    url.pathname = '/travel';
    response = NextResponse.redirect(url);
    response.headers.set('X-Middleware', 'Redirected to /travel');
  } else {
    response.headers.set('X-Middleware', 'Default path');
  }

  return response;
}
