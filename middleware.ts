import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const protectedRoutes = [
    "/dashbord",
    "dashbord/settings",
    "dashbord/profile",
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!isProtectedRoute && !session) {
    const redirectUrl = new URL("/login", request.url);
    return NextResponse.redirect(redirectUrl);
  }
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashbord/:path*", "/api/dashbord/:path*"],
};
// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const session = await auth();
//   const { pathname } = request.nextUrl;

//   // ۱. تعریف مسیرهای محافظت شده
//   const isProtectedRoute = pathname.startsWith("/dashbord");

//   // ۲. اگر کاربر لاگین نکرده و می‌خواهد وارد داشبورد شود
//   if (isProtectedRoute && !session) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   // ۳. (اختیاری) اگر کاربر لاگین کرده و می‌خواهد دوباره به صفحه لاگین برود
//   if (pathname === "/login" && session) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// // تنظیم ماتچر برای بهبود پرفورمنس
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
