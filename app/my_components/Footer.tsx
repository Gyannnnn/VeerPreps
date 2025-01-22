import { Card } from "@/components/ui/card";
import React from "react";

export default function Footer() {
  return (
    <Card className="w-full min-h-20 bg-secondary dark:bg-zinc-950 rounded-xl drop-shadow-xl flex flex-col items-center gap-4 py-2">
      <div>
        <h1 className="text-center sm:text-3xl text-2xl font-bold">IIT KIRBA</h1>
        <p className="text-sm text-center text-gray-400">
        © 2025 iitkirba. All Rights Reserved.
      </p>
      </div>
      
    </Card>
  );
}
