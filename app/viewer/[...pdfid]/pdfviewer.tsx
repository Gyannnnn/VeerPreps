"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Link from "next/link";

import { Download } from "lucide-react";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

import { useToast } from "@/hooks/use-toast";

import { ToastAction } from "@/components/ui/toast";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import React from "react";

export default function PdfRenderer({ links }: { links: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(1000);
  const { toast } = useToast();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const increaseWidth = () => {
    if (width === 1150) {
      toast({
        variant: "destructive",
        title: "You reached the maximum width !",
        description: "You cannot increase the width of the PDF more.",
        action: <ToastAction altText="Try again">Decrease</ToastAction>,
      });
      return;
    }
    setWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseWidth = () => {
    if (width <= 400) {
      toast({
        variant: "destructive",
        title: "You reached the minimum width !",
        description: "You cannot decrease the width of the PDF more.",
        action: <ToastAction altText="Try again">Increase</ToastAction>,
      });
      return;
    }
    setWidth((prevWidth) => prevWidth - 50);
  };
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-white dark:bg-zinc-950 w-full relative ">
        <Link
          className=" py-2 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center  w-10 z-10 text-white fixed top-20 sm:right-10 right-2"
          href={links}
          target="_blank"
        >
          <Download />{" "}
        </Link>
        <Document
          className="flex flex-col items-center justify-center gap-2 "
          renderMode="canvas"
          file={links}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index}
              width={isSmallScreen ? 400 : width}
              pageNumber={index + 1}
            />
          ))}
        </Document>
        <div className="min-w-2 min-h-2  flex gap-4 rounded-xl text-blue-500 fixed bottom-4 right-4   text-6xl  max-sm:hidden ">
          <FaCirclePlus
            onClick={increaseWidth}
            className=" hover:cursor-pointer hover:text-blue-400"
          />
          <FaCircleMinus
            onClick={decreaseWidth}
            className=" hover:cursor-pointer hover:text-blue-400"
          />
        </div>
      </div>
    </div>
  );
}
