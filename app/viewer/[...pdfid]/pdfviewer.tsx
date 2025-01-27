"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Link from "next/link";
import { savepdf } from "@/actions/savepdf";

import { Download } from "lucide-react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { AiTwotoneSave } from "react-icons/ai";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineLoading } from "react-icons/ai";



pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MAX_WIDTH = 1150;
const MIN_WIDTH = 400;

interface PdfRendererProps {
  links: string;
  name: string;
  id: number;
  notes: boolean;
  email: string;
}

export default function PdfRenderer({
  links,
  name,
  id,
  notes,
  email,
}: PdfRendererProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(1000);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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

  const adjustWidth = (increment: boolean) => {
    const newWidth = increment ? width + 50 : width - 50;

    if (newWidth > MAX_WIDTH || newWidth < MIN_WIDTH) {
      toast({
        variant: "destructive",
        title: "Width Limit Reached",
        description: `You cannot ${
          increment ? "increase" : "decrease"
        } the width further.`,
      });
      return;
    }

    setWidth(newWidth);
  };

  const handleSavePdf = async () => {
    setIsLoading(true);
    try {
      const response = await savepdf(id, email, notes, name);
      
      // Check if the response is an instance of Error (using `as Error` to satisfy TypeScript)

      toast({
        title: "PDF Saved",
        description: "Your PDF has been saved successfully!",
      });
      console.log("Saved PDF:", response);
      setIsLoading(false);
    } catch (error) {
      const err = error as Error;
      toast({
        variant: "destructive",
        title: "Save Failed",
        description:
          err.message ||
          "An error occurred while saving the PDF. Please try again.",
      });
      console.error(error);
      
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-white dark:bg-zinc-950 w-full relative">
        <Link
          className="py-2 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center w-10 z-10 text-white fixed top-20 sm:right-10 right-2"
          href={links}
          target="_blank"
          aria-label="Download PDF"
        >
          <Download />
        </Link>

        <button
          className="text-3xl px-2 py-2 bg-blue-500 rounded-full fixed top-32 sm:right-10 right-2 text-white"
          onClick={handleSavePdf}
          aria-label="Save PDF"
        >
          {isLoading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <AiTwotoneSave />
          )}
        </button>

        <Document
          className="flex flex-col items-center justify-center gap-2"
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

        <div className="fixed bottom-4 right-4 flex gap-4 text-blue-500 dark:text-white text-6xl max-sm:hidden">
          <FaCirclePlus
            onClick={() => adjustWidth(true)}
            className="hover:cursor-pointer hover:text-blue-400 dark:hover:text-gray-300"
            aria-label="Increase Width"
          />
          <FaCircleMinus
            onClick={() => adjustWidth(false)}
            className="hover:cursor-pointer hover:text-blue-400 dark:hover:text-gray-300"
            aria-label="Decrease Width"
          />
        </div>
      </div>
    </div>
  );
}
