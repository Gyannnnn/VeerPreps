"use client";


import React from "react";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/auth";
import { FcGoogle } from "react-icons/fc";

export default function LoginWithGoogle() {
  return (
    <Button onClick={() => login("google")} variant="outline" className="w-full">
      <FcGoogle/>
      Login with Google
    </Button>
  );
}
