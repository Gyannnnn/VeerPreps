import LoginForm from "@/app/my_components/login-form";
import React from "react";

export default function page() {
  return (
    <div className="bg-secondary dark:bg-zinc-950 w-screen h-screen flex justify-center items-center">
      <div className="w-[90vw] h-screen  mt-10 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
