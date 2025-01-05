// import NextAuth from 'next-auth';

// import { authConfig } from '@/app/(auth)/auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/", "/:id", "/api/:path*", "/login", "/register"],
// }

export default function middleware(req) {
  // No middleware logic needed for now
  return
}

export const config = {
  matcher: [],
}
