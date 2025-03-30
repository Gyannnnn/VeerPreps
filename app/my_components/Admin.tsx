import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Admincard({}) {
  return (
    <div className="flex flex-wrap sm:gap-4  gap-2  sm:px-6 justify-center  sm:justify-center ">
      <Card className="w-60 h-80 flex flex-col items-center hover:cursor-pointer border border-blue-500  justify-center gap-6 relative">
        <Badge className="absolute top-1 right-1" variant="destructive">
          Developer
        </Badge>
        <Image
          className="rounded-full"
          src="/images/me.jpeg"
          width={100}
          height={100}
          alt="me"
          priority={true}
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-xl">Gyanaranjan Patra</h1>
            <h1 className="text-sm">Information Technology</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className="flex gap-2 items-center "
                      href="https://me.iitkirba.xyz/"
                    >
                      <CiGlobe />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Portfolio</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                    target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.instagram.com/gyanpatra.dev?igsh=eTNyb3p4Nm1yd293"
                    >
                      <FaInstagram />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.linkedin.com/in/higyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    >
                      <FaLinkedin />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Card>
      <Card className="w-60 h-80  flex flex-col items-center  justify-center gap-6 relative border border-blue-500 hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/shiba.jpg"
          width={100}
          height={200}
          alt="shiba"
          priority={true}
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-xl">Shibananda Bhatora</h1>
            <h1 className="text-sm">Information Technology </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="mailto:hackerqu38@gmail.com"
                    >
                      <BiLogoGmail />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="https://t.me/Shiba5572"
                    >
                      <FaTelegramPlane />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
            </TooltipProvider>
          </div>
        </div>
      </Card>
      
      <Card className="w-60 h-80  flex flex-col items-center border border-blue-500  justify-center gap-6 relative hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/nimtish.jpeg"
          width={100}
          height={200}
          priority={true}
          alt="nimtish"
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-xl text-center">Nitishkumar Subudhi</h1>
            <h1 className="text-sm">Electrical Engineering </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      target="_blank"
                      href="mailto:kumarn43753@gmail.com"
                    >
                      <BiLogoGmail />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                    target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.instagram.com/nitish_n23?igsh=MXBmOTR0bW54Mzhocg==&utm_source=ig_contact_invite"
                    >
                      <FaInstagram />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      target="_blank"
                      href="https://t.me/Nitish_kumar_23_10"
                    >
                      <FaTelegramPlane />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
            </TooltipProvider>
          </div>
        </div>
      </Card>
      <Card className="w-60 h-80  flex flex-col items-center border border-blue-500  justify-center gap-6 relative hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/ujjwal.jpg"
          width={100}
          height={200}
          alt="ujjwal"
          priority={true}
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-xl">Ujjwal Barik</h1>
            <h1 className="text-sm">Information Technology (2027)</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="mailto:ujjwalbarik3@gmail.com"
                    >
                      <BiLogoGmail />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                    target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.instagram.com/ujjwal_barik_2005?igsh=cXF1YnRzd2w2OXFk"
                    >
                      <FaInstagram />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="https://t.me/Ujjwalbarik"
                    >
                      <FaTelegramPlane />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
            </TooltipProvider>
          </div>
        </div>
      </Card>
      <Card className="w-60 h-80  flex flex-col items-center hover:cursor-pointer border border-blue-500  justify-center gap-6 relative">
        <Badge className="absolute top-1 right-1 bg-blue-500" >
          Designer
        </Badge>
        <Image
          className="rounded-full"
          src="/images/suman.jpeg"
          width={100}
          height={200}
          alt="me"
          priority={true}
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-xl text-center">Suman Sekhar Mohanty</h1>
            <h1 className="text-sm">Information Technology </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className="flex gap-2 items-center "
                      href="mailto:sekharsuman3545@gmail.com"
                    >
                      <BiLogoGmail />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                    target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.instagram.com/_sekhar_suman__?igsh=cmFlaGlrcW9qYzNl"
                    >
                      <FaInstagram />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className="flex gap-2 items-center "
                      href="https://www.linkedin.com/in/suman-sekhar-mohanty-a16b54291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    >
                      <FaLinkedin />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Card>
    </div>
  );
}
