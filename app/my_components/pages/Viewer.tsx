"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Link from "next/link";



import { Download } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';


import { useToast } from "@/hooks/use-toast"

import { ToastAction } from "@/components/ui/toast"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MyApp() {
  const [numPages, setNumPages] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [width,Setwidth] = useState(1000)
  const { toast } = useToast()

 try {
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
 
  function increasewidth(){
    Setwidth(width+150)
    console.log(width)
  }
  function decreasewidth(){
    if(width === 400){
      toast({
        variant: "destructive",
        title: "Uh oh! You reached minimum width.",
        description: "You can not decrease the width of the pdf further",
        action: <ToastAction altText="Try again">Increase</ToastAction>,
      })
      return;
    }
    Setwidth(width-50)
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="mt-16 bg-white dark:bg-zinc-950 w-full relative ">
        <Link className=" py-2 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center  w-10 z-10 text-white fixed top-20 sm:right-10 right-2" href="/dld_end_2024.pdf"><Download/> </Link>
        <Document
          className="flex flex-col items-center justify-center gap-2 "
          renderMode="canvas"
          file="/dld_end_2024.pdf"
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
        <div className="max-sm:hidden "><CirclePlus onClick={increasewidth} className=" hover:cursor-pointer"  /><CircleMinus onClick={decreasewidth} className="text-4xl hover:cursor-pointer"  /></div>
      </div>
    </div>
  );
 } catch (error) {
  const err  =error as Error;
  console.log(err.message);
  return <div>Something went wrong</div>;
  
 }
}
