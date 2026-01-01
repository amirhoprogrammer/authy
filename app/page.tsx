import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto w-full max-w-7xl ">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4 max-h-60">
            <h1 className="text-xl font-bold" style={{ color: "#2d1155" }}>
              Welcome to pathy
            </h1>
            <p style={{ color: "#2d1155" }}>
              This is a public page accessible to everyone
            </p>
          </div>
          <AuthPanel session={session} />
        </div>
      </div>
    </div>
  );
}
