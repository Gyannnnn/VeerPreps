"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MyApp() {
  const [numPages, setNumPages] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Example breakpoint for small screens
    };

    // Set initial state based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-secondary w-full p-4">
        <Document
          className="flex flex-col items-center justify-center gap-2"
          renderMode="canvas"
          file="/dld_end_2024.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index}
              width={isSmallScreen ? 300 : 1000} // Adjust page width based on screen size
              pageNumber={index + 1}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
