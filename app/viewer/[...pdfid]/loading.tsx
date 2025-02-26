import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.45s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate]"></div>
      </div>
    </div>
  );
}
