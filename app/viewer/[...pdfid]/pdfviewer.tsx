"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Link from "next/link";
import { savepdf } from "@/actions/savepdf";
import { isSaved } from "@/actions/issavedpdf"; // Import your isSaved function
import { unsavePdf } from "@/actions/unsavepdf";

import { IoMdDownload } from "react-icons/io";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FiSave, FiCheck } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { ToastAction } from "@radix-ui/react-toast";
import { FaCircleDown } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaPaperclip } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";





pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MAX_WIDTH = 1151;
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
  const [saved, setSaved] = useState(false); // Track if PDF is saved

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSavedStatus = async () => {
      try {
        const savedStatus = await isSaved(id, email);
        setSaved(savedStatus);
      } catch (error) {
        console.error("Error checking saved status:", error);
      }
    };

    if (email) {
      fetchSavedStatus();
    }
  }, [id, email]);

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

  const signinfirst = () => {
    toast({
      variant: "destructive",
      title: "Sign in to download or save PDF",
      description: "You have to sign first to download and save your PDF.",
      action: (
        <ToastAction altText="Goto schedule to undo">
          <Link href="/sign-in">Signin</Link>
        </ToastAction>
      ),
    });
  };

  const handleToggleSavePdf = async () => {
    setIsLoading(true);
    try {
      if (saved) {
        await unsavePdf(id, email); // Call the unsavePdf function
        toast({
          title: "PDF Unsaved",
          description: "The PDF has been removed from your saved list.",
        });
      } else {
        await savepdf(id, email, notes, name); // Call the savePdf function
        toast({
          title: "PDF Saved",
          description: "Your PDF has been saved successfully!",
        });
      }
      setSaved(!saved); // Toggle the saved state
    } catch (error) {
      const err = error as Error;
      toast({
        variant: "destructive",
        title: saved ? "Unsave Failed" : "Save Failed",
        description:
          err.message ||
          "An error occurred while saving or unsaving the PDF. Please try again.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Page link copied to clipboard!",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Copy Failed",
        description: "Could not copy the link. Try again.",
      });
      console.error(err);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hey! Check out this document: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, "blank");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-white dark:bg-zinc-950 w-full relative">
        <div className="fixed top-20 max-sm:top-[9vh]    h-52 w-20  sm:right-6 right-4 max-sm:right-1 flex flex-col items-center justify-center   z-10 text-white sm:text-4xl text-3xl  gap-2 rounded-lg">
          <button
            className=" "
            onClick={() => {
              if (!email) {
                signinfirst();
              } else {
                window.open(links, "_blank");
              }
            }}
            aria-label="Download PDF"
          >
            <FaCircleDown className="dark:text-white text-blue-500" />
          </button>

          <button
            className=""
            onClick={email ? handleToggleSavePdf : signinfirst}
            aria-label={saved ? "Unsave PDF" : "Save PDF"}
          >
            {isLoading ? (
              <AiOutlineLoading className="animate-spin dark:text-white text-blue-500" />
            ) : saved ? (
              <FiCheck className="text-blue-500 dark:text-white" />
            ) : (
              <FiSave className="text-blue-500 dark:text-white" />
            )}
          </button>
          <button
            className=""
            onClick={handleWhatsAppShare}
            aria-label="Share on WhatsApp"
          >
            <SiWhatsapp className="text-green-500"/>
          </button>

          <button
            className=""
            onClick={handleCopyToClipboard}
            aria-label="Copy Link"
          >
            <TiClipboard className="dark:text-white text-blue-500"/>
          </button>
        </div>

        <Document
          className="flex flex-col items-center justify-center gap-2"
          renderMode="canvas"
          file={links}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mb-4"
            >
              <Page
                width={isSmallScreen ? 400 : width}
                pageNumber={index + 1}
              />
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Page {index + 1} of {numPages}
              </div>
            </div>
          ))}
        </Document>

        <div className="fixed bottom-4 right-6 flex gap-4 text-blue-500 dark:text-white text-6xl max-lg:hidden ">
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
