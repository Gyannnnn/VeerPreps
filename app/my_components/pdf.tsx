import Image from "next/image";
import Link from "next/link";

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
      className="flex"
      target="_blank"
      href={notes ? `/viewer/notes/${pyqid}` : `/viewer/${pyqid}`}
    >
      <div className="flex flex-col py-2  w-36 bg-transparent border-none gap-1 items-center justify-center rounded-xl ">
        <Image
          priority={true}
          src={notes ? `/images/file.png` : `/images/pdf.png`}
          width={80}
          height={80}
          alt="icon"
        />
       
        <h1 className="text-center  text-sm">{pyqname}</h1>
      </div>
    </Link>
  );
}
