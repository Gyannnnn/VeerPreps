import Image from "next/image";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default function Pdf({
  pyqname,
  links,
  notes,
  pyqid,
}: {
  pyqname: string;
  links: string;
  notes: boolean;
  pyqid: number;
}) {
  return (
    <Link
      className="flex flex-col items-center justify-center text-center group"      
      href={notes ? `/viewer/notes/${pyqid}` : `/viewer/${pyqid}`}
    >
      <div className="relative mb-3">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Image
          priority={true}
          src={notes ? `/images/file.png` : `/images/pdf.png`}
            width={40}
            height={40}
            alt={notes ? "Notes icon" : "PDF icon"}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Download className="h-3 w-3 text-white" />
        </div>
      </div>
      
      <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight line-clamp-2">
        {pyqname}
      </h3>
      
      <div className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FileText className="h-3 w-3" />
        <span>{notes ? "Notes" : "PDF"}</span>
      </div>
    </Link>
  );
}
