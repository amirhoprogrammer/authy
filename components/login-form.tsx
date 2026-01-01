"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const credentialsAction = async (formData: FormData) => {
    const result: any = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: true,
      callbackUrl: "/",
    });
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <form action={credentialsAction}>
      <div className="space-y-4">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          required
          className="w-full p-2 rounded-md border border-gray-200 outline-none transition-all bg-gray-50"
          placeholder="username"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          required
          className="w-full p-2 rounded-md border border-gray-200 outline-none transition-all bg-gray-50"
          placeholder="pasword"
        />
        <Button
          type="submit"
          value="Sign In"
          className="w-full text-gray-900"
          style={{ backgroundColor: "#ff8c79" }}
        >
          Sign in
        </Button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
}
