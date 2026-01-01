import { SignIn } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignIn />
      <Button variant="ghost">click me</Button>
    </div>
  );
}
