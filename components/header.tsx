import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavLink from "./nav-link";
export default async function Header() {
  const session = await auth();
  //   if (session) {
  //     redirect("/");
  //   }
  return (
    <div className="bg-white p-4 border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="flex item-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
          {/* <Link href="/">Home</Link> */}
          <NavLink href="/" name="home" />
          {/* {session ? <></> : <NavLink href="/login" name="login" />} */}
          <NavLink href="/login" name="login" />
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              session ? "bg-green-700" : "bg-red-700"
            )}
          ></div>
          <span>{session ? "Authenticated" : "Not Authenticated"}</span>
        </div>
      </div>
    </div>
  );
}
