export { default } from "next-auth/middleware"

export const config = { matcher: 
    ["/dashboard/:path*",
    "/clases/:path*",
    "/asistencias/:path*"
] }