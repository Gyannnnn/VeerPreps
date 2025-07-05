"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Link from "next/link";
import { savepdf } from "@/actions/savepdf";
import { isSaved } from "@/actions/issavedpdf"; // Import your isSaved function
import { unsavePdf } from "@/actions/unsavepdf";

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { ToastAction } from "@radix-ui/react-toast";
import { MdDownloadForOffline } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";

import { SiWhatsapp } from "react-icons/si";
import { FaArrowDown, FaPaperclip, FaArrowUp } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";
import { FileText, Eye, Share2, Menu, X, Sun, Moon } from "lucide-react";

import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MAX_WIDTH = 1300;
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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false); // Track if PDF is saved
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpInput, setJumpInput] = useState("");
  const { theme, setTheme } = useTheme
    ? useTheme()
    : { theme: "light", setTheme: () => {} };
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const pdfContainerRef = useRef<HTMLDivElement | null>(null);
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const [scale, setScale] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number | null>(null);

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

  const adjustScale = (increment: boolean) => {
    setScale((prev) => {
      let next = prev + (increment ? 0.1 : -0.1);
      next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next));
      return Math.round(next * 100) / 100;
    });
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
    const text = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}`, "blank");
  };

  const handleDownload = () => {
    if (!email) {
      signinfirst();
    } else {
      window.open(links, "_blank");
    }
  };

  const { scrollYProgress } = useScroll();

  // Scroll to a specific page
  const handleJumpToPage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const pageNum = parseInt(jumpInput);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
      setTimeout(() => {
        pageRefs.current[pageNum - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
    setJumpInput("");
  };

  // Scroll to top/end
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScrollEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 1100,
      behavior: "smooth",
    });
  };

  // Ctrl+Scroll for desktop
  useEffect(() => {
    const container = pdfContainerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        setScale((prev) => {
          let next = prev + (e.deltaY < 0 ? 0.1 : -0.1);
          next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next));
          return Math.round(next * 100) / 100;
        });
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Pinch-to-zoom for mobile
  useEffect(() => {
    const container = pdfContainerRef.current;
    if (!container) return;
    let lastDist: number | null = null;
    function getDist(touches: TouchList) {
      if (touches.length < 2) return 0;
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 2) {
        lastDist = getDist(e.touches);
      }
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 2 && lastDist) {
        const newDist = getDist(e.touches);
        const diff = newDist - lastDist;
        if (Math.abs(diff) > 5) {
          setScale((prev) => {
            let next = prev + (diff > 0 ? 0.04 : -0.04);
            next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next));
            return Math.round(next * 100) / 100;
          });
          lastDist = newDist;
        }
      }
    }
    function onTouchEnd() {
      lastDist = null;
    }
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Responsive: set page width for mobile
  useEffect(() => {
    if (isSmallScreen) {
      // 16px padding on each side
      setPageWidth(
        window.innerWidth - 32 > 0 ? window.innerWidth - 32 : window.innerWidth
      );
      setScale(1); // Reset scale for mobile
    } else {
      setPageWidth(null);
      setScale(1); // Reset scale for desktop
    }
  }, [isSmallScreen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Header: fixed on large screens, static on small screens */}
      <div className="w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 lg:fixed lg:top-0 lg:left-0 lg:right-0">
        <div className="max-w-7xl mx-auto px-2 py-4 max-sm:mt-16 ">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 min-w-0 pl-0 sm:pl-1">
              <div className="flex items-center gap-3 ml-[-4px] sm:ml-0">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h1 className="font-semibold text-gray-900 dark:text-white text-lg truncate max-w-xs">
                    {name}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {notes ? "Lecture Notes" : "Previous Year Questions"}
                  </p>
                </div>
              </div>
            </div>
            {/* Action Buttons & Theme Toggler */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Jump to Page */}
              <form
                onSubmit={handleJumpToPage}
                className="flex items-center gap-1"
              >
                <input
                  type="number"
                  min={1}
                  max={numPages}
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  placeholder="Page number"
                  className="w-24 sm:w-36 px-2 py-1 rounded-lg border border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-zinc-900/80 text-base focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="submit"
                        className="px-3 py-1 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                        disabled={!jumpInput}
                      >
                        Go
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>Go to page</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </form>
              {/* Scroll to Top/End with tooltips */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleScrollTop}
                      className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 flex items-center justify-center"
                      type="button"
                    >
                      <FaArrowUp />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Scroll to Top</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleScrollEnd}
                      className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 flex items-center justify-center"
                      type="button"
                    >
                      <FaArrowDown />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Scroll to End</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* Download, Save, Share, Copy Link - only on large screens */}
              <div className="hidden sm:flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleDownload}
                        className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600"
                        type="button"
                      >
                        <MdDownloadForOffline className="h-5 w-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>Download PDF</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={email ? handleToggleSavePdf : signinfirst}
                        className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600"
                        type="button"
                      >
                        {isLoading ? (
                          <AiOutlineLoading className="h-5 w-5 animate-spin" />
                        ) : saved ? (
                          <FiCheck className="h-5 w-5 text-green-600" />
                        ) : (
                          <MdOutlineDataSaverOn className="h-5 w-5" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {saved ? "Unsave PDF" : "Save PDF"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleWhatsAppShare}
                        className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-green-600"
                        type="button"
                      >
                        <SiWhatsapp className="h-5 w-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>Share on WhatsApp</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleCopyToClipboard}
                        className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600"
                        type="button"
                      >
                        <TiClipboard className="h-5 w-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>Copy Link</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {/* Theme Toggler - always visible */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-yellow-500"
                      type="button"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Toggle Theme</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* Mobile Menu Button (unchanged) */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
                title="Open menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-4 bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-gray-200 dark:border-zinc-700 p-2 min-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              {/* Download Button */}
              <button
                onClick={() => {
                  handleDownload();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <MdDownloadForOffline className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Download PDF
                </span>
              </button>

              {/* Save Button */}
              <button
                onClick={() => {
                  if (email) {
                    handleToggleSavePdf();
                  } else {
                    signinfirst();
                  }
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                {isLoading ? (
                  <AiOutlineLoading className="h-5 w-5 text-blue-600 animate-spin" />
                ) : saved ? (
                  <FiCheck className="h-5 w-5 text-green-600" />
                ) : (
                  <MdOutlineDataSaverOn className="h-5 w-5 text-blue-600" />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {saved ? "Unsave PDF" : "Save PDF"}
                </span>
              </button>

              {/* Share Button */}
              <button
                onClick={() => {
                  handleWhatsAppShare();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <SiWhatsapp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Share on WhatsApp
                </span>
              </button>

              {/* Copy Link Button */}
              <button
                onClick={() => {
                  handleCopyToClipboard();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <TiClipboard className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Copy Link
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Content */}
      <div
        id="pdf-main-content"
        className="pt-8 lg:pt-24 pb-8"
        ref={pdfContainerRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Document
            className="flex flex-col items-center justify-center"
            renderMode="canvas"
            file={links}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Loading PDF...
                </p>
              </div>
            }
          >
            {/* Multi-page scroll for all devices */}
            {Array.from({ length: numPages }, (_, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center mb-1"
                ref={(el) => {
                  pageRefs.current[index] = el || null;
                }}
              >
                <div className="overflow-hidden bg-black">
                  <Page
                    pageNumber={index + 1}
                    {...(isSmallScreen && pageWidth
                      ? { width: pageWidth }
                      : { scale })}
                  />
                </div>
                <div className="mt-1 sm:text-xs text-[12px] text-blue-500  dark:text-blue-500 text-center">
                  Page {index + 1} of {numPages}
                </div>
              </div>
            ))}
          </Document>
        </div>
      </div>

      {/* Zoom Controls: floating on mobile, fixed on desktop */}
      {!isSmallScreen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 max-lg:hidden">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-zinc-800 shadow-lg rounded-full border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-200"
                  onClick={() => adjustScale(true)}
                  aria-label="Zoom In"
                >
                  <FaCirclePlus className="h-6 w-6 text-blue-600" />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>Zoom In</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-zinc-800 shadow-lg rounded-full border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-200"
                  onClick={() => adjustScale(false)}
                  aria-label="Zoom Out"
                >
                  <FaCircleMinus className="h-6 w-6 text-blue-600" />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>Zoom Out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
}
