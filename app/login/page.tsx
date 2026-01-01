import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";
import { LoginForm } from "@/components/login-form";
import { redirect } from "next/navigation";
// import { signIn } from "@/auth";
// import Image from "next/image";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto w-full max-w-7xl">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4">
            <h1 className="text-xl font-bold" style={{ color: "#2d1155" }}>
              Login
            </h1>
            <p style={{ color: "#2d1155" }}>
              please login to access to your account
            </p>
            <LoginForm />
          </div>
        </div>
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
