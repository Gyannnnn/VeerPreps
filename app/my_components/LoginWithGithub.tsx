"use client";

import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import React from "react";

export default function LoginWithGithub() {
  return (
    <Button onClick={() => login("github")} variant="outline" className="w-full">
      <FaGithub />
      Login with GitHub
    </Button>
  );
}
