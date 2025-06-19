import axios from "axios";
import Pdf from "../pdf";
import Image from "next/image";
import Link from "next/link";
import NothingFound from "../NothingFound";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaYoutube } from "react-icons/fa";
import { Metadata } from "next";
import { 
  FileText, 
  BookOpen, 
  Play, 
  Upload, 
  Download,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import { motion, useScroll } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Subject {
  subject_id: number;
  yearId: number;
  subjectname: string;
  branchname: string;
  iscommon: boolean;
  branchid: number;
}

interface Contents {
  links: string;
  subjectId: number;
  pyqtype: string;
  pyq_id: number;
  pyqname: string;
  subject: Subject;
}

interface Notes {
  notes_id: number;
  subjectId: number;
  link: string;
  notesname: string;
}

interface VideoLinks {
  subjectId: number;
  link: string;
  videoname: string;
}

interface PageProps {
  ids: string[];
}

export async function generateMetadata(props: Contents): Promise<Metadata> {
  const subjectName = props.subject.subjectname;
  const branchName = props.subject.branchname === "common" ? "First Year" : props.subject.branchname;

  const title = `Download Previous Year Questions for ${subjectName} - ${branchName} | VeerPreps`;
  const description = `Get free access to previous year question papers for ${subjectName} (${branchName}) including mid-sem, end-sem, back, and supplementary exams.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.veerpreps.com",
      type: "website",
      siteName: "VeerPreps",
      images: [
        {
          url: "https://www.veerpreps.com/og/og_image.png",
          width: 1200,
          height: 630,
          alt: "VeerPreps - VSSUT Question Papers & Notes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.veerpreps.com/og/og_image.png"],
    },
  };
}

export default async function Contents({ ids }: PageProps) {
  const subjectid = ids.length > 4 ? ids[4] : null;
  if (!subjectid) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Card className="p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Invalid Subject ID</h1>
            <p className="text-gray-600 dark:text-gray-400">The requested subject could not be found.</p>
          </Card>
        </div>
      </div>
    );
  }

  try {
    const [notesResponse, pyqResponse, videolinksResponse] = await Promise.all([
      axios
        .get<{ notes: Notes[] }>(
          `https://api-zeta.vercel.app/api/notes/${subjectid}`
        )
        .catch(() => ({ data: { notes: [] } })),
      axios
        .get<{ pyq: Contents[] }>(
          `https://api-zeta.vercel.app/api/pyq/${subjectid}`
        )
        .catch(() => ({ data: { pyq: [] } })),
      axios
        .get<{ videolinks: VideoLinks[] }>(
          `https://api-zeta.vercel.app/api/videos/${subjectid}`
        )
        .catch(() => ({ data: { videolinks: [] } })),
    ]);

    const notes: Notes[] = notesResponse?.data?.notes || [];
    const pyqs: Contents[] = pyqResponse?.data?.pyq || [];
    const videolinks: VideoLinks[] = videolinksResponse?.data?.videolinks || [];

    if (notes.length === 0 && pyqs.length === 0 && videolinks.length === 0) {
      return <NothingFound />;
    }

    generateMetadata(pyqs[0]);

    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Breadcrumb Navigation */}
          <div className="w-full mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/year/${ids[0]}`}>Year {ids[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/year/${ids[0]}/subjects/${ids[2]}`}>
                    Subjects
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pyqs[0]?.subject?.subjectname || "Subject"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Subject Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {pyqs[0]?.subject?.subjectname || "Subject"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {pyqs[0]?.subject?.branchname === "common" ? "First Year Common" : pyqs[0]?.subject?.branchname}
            </p>
          </div>

          {/* Content Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
              <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{pyqs.length}</h3>
              <p className="text-gray-600 dark:text-gray-400">Previous Year Questions</p>
            </Card>
            <Card className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{notes.length}</h3>
              <p className="text-gray-600 dark:text-gray-400">Lecture Notes</p>
            </Card>
            <Card className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
              <Play className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{videolinks.length}</h3>
              <p className="text-gray-600 dark:text-gray-400">Video Playlists</p>
            </Card>
          </div>

          {/* PYQs Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Previous Year Questions
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">Access exam papers from previous years</p>
                </div>
              </div>
              <Link target="_blank" href="https://forms.gle/EYBP1xcCxYqsdeVK6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload PYQs
                </Button>
              </Link>
            </div>
            
            {pyqs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {pyqs.map((pyq) => (
                  <Card key={pyq.pyq_id} className="p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Pdf
                      notes={false}
                      pyqid={pyq.pyq_id}
                      pyqname={pyq.pyqname}
                      links={pyq.links}
                    />
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No PYQs Available</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Be the first to contribute PYQs for this subject!</p>
                <Link target="_blank" href="https://forms.gle/EYBP1xcCxYqsdeVK6">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload PYQs
                  </Button>
                </Link>
              </Card>
            )}
          </div>

          {/* Notes Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Lecture Notes
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">Comprehensive study materials and notes</p>
                </div>
              </div>
              <Link target="_blank" href="https://forms.gle/Ro31WGz1TKpp3ybX9">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Notes
                </Button>
              </Link>
            </div>
            
            {notes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {notes.map((note) => (
                  <Card key={note.notes_id} className="p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Pdf
                      notes={true}
                      pyqid={note.notes_id}
                      pyqname={note.notesname}
                      links={note.link}
                    />
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/loader/alert.gif"
                    height={60}
                    width={100}
                    alt="alert"
                    className="mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Notes Found!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Help others by sharing your notes</p>
                  <Link target="_blank" href="https://forms.gle/Ro31WGz1TKpp3ybX9">
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
                      <Upload className="mr-2 h-4 w-4" />
                      Send Your Notes
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>

          {/* YouTube Videos Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                  <FaYoutube className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    YouTube Videos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">Curated video playlists for better understanding</p>
                </div>
              </div>
            </div>
            
            {videolinks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videolinks.map((videolink) => (
                  <Card key={videolink.subjectId} className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <Link href={videolink.link} target="_blank" className="block">
                      <div className="relative mb-4">
                        <Image
                          src="/images/youtube.png"
                          alt="youtube"
                          width={80}
                          height={80}
                          className="mx-auto group-hover:scale-110 transition-transform duration-300"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                        {videolink.videoname}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <ExternalLink className="h-4 w-4" />
                        <span>Watch on YouTube</span>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <FaYoutube className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon!</h3>
                <p className="text-gray-600 dark:text-gray-400">Video playlists will be available for this subject soon.</p>
              </Card>
            )}
          </div>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Help Us Grow!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Contribute your study materials to help fellow VSSUT students. Your contributions make a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link target="_blank" href="https://forms.gle/EYBP1xcCxYqsdeVK6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload PYQs
                </Button>
              </Link>
              <Link target="_blank" href="https://forms.gle/Ro31WGz1TKpp3ybX9">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Upload Notes
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading data:", error);
    return <NothingFound />;
  }
}
