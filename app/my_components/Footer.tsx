import { Card } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { 
  Github, 
  Mail, 
  Heart, 
  BookOpen, 
  FileText, 
  Users, 
  GraduationCap,
  ExternalLink,
  MessageCircle,
  Instagram
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-t border-blue-200/50 dark:border-blue-800/30">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {/* Logo */}
              <Link href="/" className="group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    VeerPreps
                  </h2>
                </div>
              </Link>
              
              {/* Tagline */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Empowering VSSUT students with comprehensive study resources, 
                previous year questions, and lecture notes for academic excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a 
                  href="mailto:veerpreps@gmail.com" 
                  className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Gyannnnn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/veerpreps?igsh=ZzIzeTFjNmgwaTRz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors duration-300"
                  aria-label="Report Issue"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link 
                href="/pyqs" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Previous Year Questions
              </Link>
              <Link 
                href="/notes" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Lecture Notes
              </Link>
              <Link 
                href="/profile" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Your Profile
              </Link>
              <Link 
                href="/admin" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                <GraduationCap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Resources
            </h3>
            <div className="flex flex-col space-y-3">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                <p className="font-medium mb-2">Study Materials:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Previous Year Question Papers</li>
                  <li>• Mid-Semester Papers</li>
                  <li>• End-Semester Papers</li>
                  <li>• Supplementary Papers</li>
                  <li>• Comprehensive Notes</li>
                </ul>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                <p className="font-medium mb-2">Branches:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Computer Science</li>
                  <li>• Mechanical</li>
                  <li>• Electrical</li>
                  <li>• Civil</li>
                  <li>• And more...</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Support & Legal
            </h3>
            <div className="flex flex-col space-y-3">
              <Link 
                href="/about" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                href="/privacypolicy" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <a 
                href="https://forms.gle/FKpY6r34xN4Gu6X86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Report Issue
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-200/50 dark:border-blue-800/30 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} IIT KIRBA (VeerPreps). All Rights Reserved.</span>
            </div>
            
            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Designed for VSSUT students with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
