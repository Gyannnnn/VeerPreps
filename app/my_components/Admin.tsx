import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
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
    <div className="flex flex-wrap sm:gap-10 gap-4   justify-center">
      <Card className="w-72 h-96 flex flex-col items-center hover:cursor-pointer  justify-center gap-6 relative">
        <Badge className="absolute top-1 right-1" variant="destructive">
          Super Admin
        </Badge>
        <Image
          className="rounded-full"
          src="/images/me.jpg"
          width={150}
          height={200}
          alt="shiba"
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-3xl">Gyanaranjan Patra</h1>
            <h1 className="text-sm">Information Technology (2027)</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className="flex gap-2 items-center "
                      href="https://portrfolio.vercel.app/"
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
                      className="flex gap-2 items-center "
                      href="https://github.com/Gyannnnn"
                    >
                      <FaGithub />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Github</p>
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
      <Card className="w-72 h-96 flex flex-col items-center  justify-center gap-6 relative hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/shiba.jpg"
          width={150}
          height={200}
          alt="shiba"
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-3xl">Shibananda Bhatora</h1>
            <h1 className="text-sm">Information Technology (2027)</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="mailto:shibanandabhatora@gmail.com"
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
                      href="mailto:shibanandabhatora@gmail.com"
                    >
                      <FaTelegramPlane />
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
                      href="mailto:shibanandabhatora@gmail.com"
                    >
                      <FaDiscord />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Card>
      
      <Card className="w-72  h-96 flex flex-col items-center  justify-center gap-6 relative hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/nimtish.jpeg"
          width={150}
          height={200}
          alt="shiba"
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-3xl text-center">Nitishkumar Subudhi</h1>
            <h1 className="text-sm">Electrical Engineering (2027)</h1>
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
      <Card className="w-72 h-96 flex flex-col items-center  justify-center gap-6 relative hover:cursor-pointer">
        <Badge className="absolute top-1 right-1">Admin</Badge>
        <Image
          className="rounded-full"
          src="/images/ujjwal.jpg"
          width={150}
          height={200}
          alt="shiba"
        />
        <div className="pt-2 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="sm:text-2xl text-3xl">Ujjwal Barik</h1>
            <h1 className="text-sm">Information Technology (2027)</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-2xl">
            <TooltipProvider>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary   ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex gap-2 items-center "
                      href="mailto:shibanandabhatora@gmail.com"
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
                      href="mailto:shibanandabhatora@gmail.com"
                    >
                      <FaTelegramPlane />
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
                      href="mailto:shibanandabhatora@gmail.com"
                    >
                      <FaDiscord />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Mail</p>
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
