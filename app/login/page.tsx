"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Button from "../(main)/App chunks/components/Button";
import { Label } from "@/components/ui/label";
import BgLayer from "../components/BgLayer";
const validEmail = "admin";
const validPassword = "Imeet2026";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === validEmail && password === validPassword) {
      console.log(email);
      document.cookie = `admin-auth=true; path=/; max-age=${7 * 24 * 60 * 60}`;
      router.push("/dashboard");
    } else {
      console.log("error");
      setError("Invalid user or password.");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-100 px-4">
      <BgLayer />
      <img
        alt={""}
        src={"/login.jpg"}
        className="opacity-[.7] w-full absolute h-full object-cover inset-0 "
      />
      <form
        onSubmit={handleLogin}
        className="w-full border border-slate-100 max-w-md relative z-20 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-lg "
      >
        <h1 className="text-3xl text-Bizgrowth consultancy-black font-semibold mb-10 text-start">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}

        <div>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-100 mt-2"
          />
        </div>
        <div className="mt-5">
          <Label>Password</Label>
          <Input
            type="password"
            className="bg-slate-100 mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          className="w-full flex justify-center mt-10 bg-Bizgrowth consultancy-teal/50 hover:bg-Bizgrowth consultancy-tealDark hover:text-Bizgrowth consultancy-white"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
