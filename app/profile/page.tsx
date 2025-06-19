import { getSavedPdfs } from "@/actions/getsavedpdfs";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Pdf from "../my_components/pdf";
import { 
  User, 
  Mail, 
  Calendar, 
  Bookmark, 
  Download, 
  Settings, 
  LogOut,
  Plus,
  FileText,
  BookOpen,
  Heart,
  TrendingUp
} from "lucide-react";
import getFallBack from "@/utils/fallback";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-xl">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
              <User className="h-10 w-10 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign in to View Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Access your saved PDFs and manage your account
              </p>
            </div>
            <Link href="/sign-in">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  try {
    const savedpdfs = await getSavedPdfs(user.email as string);
    const defaultavatar = "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739933978/kirba/mdkowbqyq0zvlnxbtz9x.png";

    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* User Profile Section */}
          <div className="mb-8">
            <Card className="p-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-blue-100 dark:border-blue-900">
                    <AvatarImage 
                      src={user.image || defaultavatar} 
                      alt={user.name || "User"} 
                    />
                    <AvatarFallback className="text-2xl font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      {user.name ? user.name[0] : getFallBack(user.email as string)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {user.name || "VSSUT BURLA Student"}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Bookmark className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{savedpdfs.length}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Saved PDFs</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <FileText className="h-6 w-6 text-green-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {savedpdfs.filter(pdf => !pdf.notes).length}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">PYQs</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {savedpdfs.filter(pdf => pdf.notes).length}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Notes</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {savedpdfs.length > 0 ? "Active" : "New"}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Status</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                {/* <div className="flex flex-col gap-2">
                  <Link href="/sign-in">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 text-red-600 hover:text-red-700">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </Link>
                </div> */}
              </div>
            </Card>
          </div>

          {/* Saved PDFs Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Your Saved PDFs
                </h2>
                <Badge variant="secondary" className="px-3 py-1">
                  {savedpdfs.length} items
                </Badge>
              </div>
            </div>

            {savedpdfs.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {savedpdfs.map((savedpdf) => (
                  <Card 
                    key={savedpdf.id}
                    className="group p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <Pdf
                        pyqname={savedpdf.pdfname}
                        notes={savedpdf.notes}
                        pyqid={savedpdf.pdfid}
                        links=""
                      />
                      <Badge 
                        variant={savedpdf.notes ? "secondary" : "default"}
                        className="absolute top-0 right-0 text-xs"
                      >
                        {savedpdf.notes ? "Notes" : "PYQ"}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="w-full p-12 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Bookmark className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    No Saved PDFs Yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Start building your personal collection by saving PDFs that you find useful. 
                    They'll appear here for quick access.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Browse PDFs
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-xl">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Something Went Wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Unable to load your saved PDFs. Please try again later.
            </p>
            <Link href="/profile">
              <Button variant="outline">
                Try Again
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}
