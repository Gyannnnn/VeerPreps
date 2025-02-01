import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative w-12 aspect-square grid place-items-center">
      <div className="absolute w-full aspect-square animate-spin border-4 border-transparent border-r-[#2a4d9e] rounded-full"></div>
      <div className="absolute w-[calc(100%-4px)] aspect-square animate-[spin_2s_linear_infinite] border-4 border-transparent border-r-[#2a4d9e] rounded-full"></div>
      <div className="absolute w-[calc(100%-16px)] aspect-square animate-[spin_3s_linear_infinite] border-4 border-transparent border-r-[#2a4d9e] rounded-full"></div>
    </div>
    </div>
  );
}
