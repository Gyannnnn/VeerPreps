"use client";


import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MyApp() {
  const [numPages, setNumPages] = useState<number>(0);

  // Function to handle when PDF is loaded
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };


  return (

    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-secondary w-full p-4">
        <Document
          className="flex flex-col items-center justify-center gap-2" // Use flex-column to stack pages vertically
          renderMode="canvas"
          file="/dld_end_2024.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index}
              width={1000}
              pageNumber={index + 1} // Page numbers are 1-indexed
            />
          ))}
        </Document>
      </div>

    </div>
  );
}
