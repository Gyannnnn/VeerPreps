"use client";

import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import Profile from "./Profile";
import DrawerDemo from "./Drawer";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { 
  FileText, 
  BookOpen, 
  User, 
  MessageCircle, 
  AlertTriangle,
  Home,
  Info
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/pyqs", label: "PYQs", icon: FileText },
    { href: "/notes", label: "Notes", icon: BookOpen },    
    { href: "/profile", label: "Profile", icon: User },
    { href: "/admin", label: "Contact", icon: MessageCircle },
    { href: "/about", label: "About", icon: Info },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 dark:border-zinc-800/50 shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center justify-between px-4 md:px-8 lg:px-16 fixed top-0 z-50">
      
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <DrawerDemo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 flex-1  mx-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
          </div> */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            VeerPreps
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group
                  ${active 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100'
                  }
                `}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${active ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                <span>{item.label}</span>
                
                {/* Active indicator */}
                {active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        
        {/* Report Issue Button */}
        <a
          href="https://forms.gle/FKpY6r34xN4Gu6X86"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300 group"
        >
          <AlertTriangle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          <span>Report Issue</span>
        </a>

        {/* Theme Toggler */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <ThemeToggler />
          </div>
        </div>

        {/* Profile */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Profile />
          </div>
        </div>
      </div>

      {/* Mobile Logo (centered) */}
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div> */}
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            VeerPreps
          </span>
        </Link>
      </div>
    </nav>
  );
}
