"use client";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
export default function AuthPanel({ session }: { session: Session | null }) {
  const pathname = usePathname();
  return (
    <div className="bg-white p-3 border-t border-gray-200">
      <div className="text-sm space-y-1" style={{ color: "#2d1155" }}>
        <p>Current Path : {pathname} /</p>
        <p>Auth Status: {session ? "Logged IN" : "Logged Out"}</p>
      </div>
    </div>
  );
}
