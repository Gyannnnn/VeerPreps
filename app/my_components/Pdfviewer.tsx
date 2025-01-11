"use client"

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState, useEffect } from 'react';

type PdfViewerProps = {
  fileUrl: string;
};

export default function Pdfviewer() {
  const [scale, setScale] = useState(1.0); // Default zoom level

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
        const newScale = scale + (event.deltaY > 0 ? -0.1 : 0.1);
        setScale(Math.max(0.5, Math.min(newScale, 3))); // Limit zoom between 0.5 and 3
      }
    };

    const viewerContainer = document.querySelector('.pdf-viewer-container');
    if (viewerContainer) {
      viewerContainer.addEventListener('wheel', handleWheel as EventListener);
    }

    return () => {
      if (viewerContainer) {
        viewerContainer.removeEventListener('wheel', handleWheel as EventListener);
      }
    };
  }, [scale]);

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden bg-white">
      <Worker workerUrl={`/pdf.worker.js`}>
        <div className="w-full max-sm:w-[99vw] h-full">
          <Viewer
            fileUrl="https://gyannnnn.github.io/iitkirba.io/db/pyq/branch/it/2y/oop/oop_end_2024.pdf"
            defaultScale={scale} 
          />
        </div>
      </Worker>
    </div>
  );
}
