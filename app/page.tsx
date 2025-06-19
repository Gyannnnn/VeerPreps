import { auth } from "@/auth";
import React from "react";
import Branches from "./my_components/Branches";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BookOpen, 
  FileText, 
  Play, 
  Users, 
  GraduationCap, 
  Search,
  Download,
  Clock,
  Shield,
  Zap
} from "lucide-react";

export default async function page() {
  const session = await auth();

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-32 md:pt-16 pb-10 px-4">
        
        {/* Hero Content */}
        <div className="sm:w-[90vw] w-screen flex flex-col items-center justify-center text-center space-y-8">
          
          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="sm:text-5xl text-3xl font-bold text-black dark:text-white leading-tight">
              Your Complete Study Resource Hub for{" "}
              <span className="text-blue-600 dark:text-blue-400">VSSUT Burla</span>
            </h1>
            <p className="sm:text-xl text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto max-sm:px-2">
              Access previous year question papers, handwritten notes, and curated YouTube playlists. 
              Everything you need to excel in your academics, all in one place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center max-sm:px-1">
            <Link href="#branches">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Branches
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-12 max-sm:px-4">
            <Card className="p-6 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <FileText className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-black dark:text-white">1000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Question Papers</p>
              </div>
            </Card>
            <Card className="p-6 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <BookOpen className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-black dark:text-white">500+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lecture Notes</p>
              </div>
            </Card>
            <Card className="p-6 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <Play className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-black dark:text-white">200+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Video Playlists</p>
              </div>
            </Card>
            <Card className="p-6 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-8 w-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-black dark:text-white">5000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-16 px-4 bg-white/30 dark:bg-zinc-900/30 items-center justify-center ">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="sm:text-4xl text-3xl font-bold text-black dark:text-white mb-4">
              Why Choose VeerPreps?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for successful exam preparation, designed specifically for VSSUT students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Easy Navigation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Find exactly what you need with our organized branch-wise and subject-wise structure.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Free Downloads
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access all study materials completely free. No hidden costs or subscriptions required.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Always Updated
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Regular updates with new question papers, notes, and video content from recent semesters.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Quality Assured
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All materials are verified and curated to ensure accuracy and relevance for VSSUT curriculum.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Fast Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Quick downloads and instant access to all resources without any waiting time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Student-Centric
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built by students, for students. We understand your needs and challenges.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="w-full py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="sm:text-4xl text-3xl font-bold text-black dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive study resources to help you excel in your academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-xl transition-all duration-300">
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Previous Year Questions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Access mid-semester, end-semester, back, and supplementary question papers from previous years.
              </p>
              <Link href="/pyqs">
                <Button variant="outline" className="w-full">
                  Browse PYQs
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:shadow-xl transition-all duration-300">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Lecture Notes
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Download handwritten and typed notes covering all subjects and topics in your curriculum.
              </p>
              <Link href="/notes">
                <Button variant="outline" className="w-full">
                  View Notes
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 hover:shadow-xl transition-all duration-300">
              <Play className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Video Playlists
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Curated YouTube playlists with the best educational content for each subject.
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div id="branches" className="w-full py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="sm:text-4xl text-3xl font-bold text-black dark:text-white mb-2 max-sm:pt-10">
              Choose Your Branch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
              Select your branch to access subject-specific study materials and resources
            </p>
          </div>
          
          <div className="w-full flex items-start justify-center">          
          <Branches session={session} />                    
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "IIT KIRBA | VeerPreps - VSSUT Burla Study Resources",
  description: "Access VSSUT Burla's previous year question papers, handwritten notes, and curated YouTube playlists. The complete study resource hub for Veer Surendra Sai University of Technology students. Free downloads, organized by branches and subjects.",
  keywords: [
    "VSSUT Burla study resources",
    "VSSUT previous year questions",
    "VSSUT lecture notes",
    "VSSUT question papers",
    "VSSUT Burla PYQs",
    "VSSUT notes download",
    "VSSUT exam preparation",
    "VSSUT study materials",
    "VeerPreps",
    "IIT KIRBA",
    "VSSUT Burla students",
    "VSSUT academic resources",
    "VSSUT mid semester papers",
    "VSSUT end semester papers",
    "VSSUT supplementary papers",
    "VSSUT back papers",
    "VSSUT handwritten notes",
    "VSSUT video playlists",
    "VSSUT curriculum",
    "VSSUT branches",
    "VSSUT CSE",
    "VSSUT IT",
    "VSSUT ETC",
    "VSSUT EE",
    "VSSUT Chemical",
    "VSSUT Civil",
    "VSSUT Mechanical",
    "Gyanaranjan Patra VSSUT"
  ],
  openGraph: {
    title: "IIT KIRBA | VeerPreps - Complete Study Resources for VSSUT Burla",
    description: "Your one-stop destination for VSSUT Burla study materials. Access previous year question papers, lecture notes, and video playlists. Free downloads for all VSSUT students.",
    url: "https://www.iitkirba.xyz",
    images: [
      {
        url: "https://www.iitkirba.xyz/og/og_image.png",
        width: 1200,
        height: 630,
        alt: "VeerPreps - VSSUT Study Resources",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeerPreps - Complete Study Resources for VSSUT Burla",
    description: "Access VSSUT Burla's previous year question papers, notes, and video playlists. Free study materials for all branches.",
    images: ["https://www.iitkirba.xyz/og/og_image.png"],
    creator: "Veerpreps"
  },
};