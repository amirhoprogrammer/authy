"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashbordLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      // className={cn(
      //   pathname === href && "bg-green-500 text-black rounded-md px-2 py-1"
      // )}
      className={cn(
        isActive ? "bg-pink-300 text-black rounded-md px-2 py-1" : ""
      )}
    >
      {name}
    </Link>
  );
}
