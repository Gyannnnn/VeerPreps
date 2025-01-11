"use client";
import React from "react";
import Pdfviewer from "../Pdfviewer";
import Link from "next/link";

export default function Viewer() {
  return (
    <div className="min-h-screen w-screen mt-16 flex items-center justify-center overflow-hidden flex-col relative">
      <Link
        className="px-8 py-3 rounded-md bg-blue-500 fixed top-20 right-6 z-10 text-sm text-white"
        href="https://gyannnnn.github.io/iitkirba.io/db/pyq/branch/it/2y/oop/oop_end_2024.pdf"
      >
        Download
      </Link>

      <Pdfviewer />
    </div>
  );
}
