"use client";

import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import React from "react";

export default function LoginWithGithub() {
  return (
    <Button onClick={() => login("github")} variant="outline" className="w-full">
      <Github />
      Login with GitHub
    </Button>
  );
}
