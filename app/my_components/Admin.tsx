import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { CiGlobe } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Code, 
  Palette, 
  Shield, 
  Heart,
  Mail,
  MessageCircle,
  ExternalLink
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Admincard({}) {
  const teamMembers = [
    {
      id: 1,
      name: "Gyanaranjan Patra",
      role: "Founder & Developer",
      department: "Information Technology",
      image: "/images/me.jpeg",
      badge: "Developer",
      badgeColor: "destructive",
      socials: [
        { icon: CiGlobe, href: "https://gyanpatra.dev.iitkirba.xyz/", label: "Portfolio" },
        { icon: FaInstagram, href: "https://www.instagram.com/gyanpatra.dev?igsh=eTNyb3p4Nm1yd293", label: "Instagram" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/higyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" }
      ]
    },
    {
      id: 2,
      name: "Shibananda Bhatora",
      role: "Admin & Public Relation",
      department: "Information Technology",
      image: "/images/shiba.jpg",
      badge: "Admin",
      badgeColor: "default",
      socials: [
        { icon: BiLogoGmail, href: "mailto:hackerqu38@gmail.com", label: "Email" },
        { icon: FaTelegramPlane, href: "https://t.me/Shiba5572", label: "Telegram" }
      ]
    },
    {
      id: 3,
      name: "Nitishkumar Subudhi",
      role: "Admin & Content Manager",
      department: "Electrical Engineering",
      image: "/images/nimtish.jpeg",
      badge: "Admin",
      badgeColor: "default",
      socials: [
        { icon: BiLogoGmail, href: "mailto:kumarn43753@gmail.com", label: "Email" },
        { icon: FaInstagram, href: "https://www.instagram.com/nitish_n23?igsh=MXBmOTR0bW54Mzhocg==&utm_source=ig_contact_invite", label: "Instagram" },
        { icon: FaTelegramPlane, href: "https://t.me/Nitish_kumar_23_10", label: "Telegram" }
      ]
    },
    {
      id: 4,
      name: "Purav Patnaik",
      role: "Admin & Content Curator",
      department: "Electrical Engineering (2027)",
      image: "https://res.cloudinary.com/dlm8mel1x/image/upload/v1745393060/kirba/logos/httk5rd681z9cyqydixt.jpg",
      badge: "Admin",
      badgeColor: "default",
      socials: [
        { icon: BiLogoGmail, href: "mailto:puravpattnaik27@gmail.com", label: "Email" },
        { icon: FaInstagram, href: "https://www.instagram.com/puravpattnaik?igsh=a3BtbGF3d2JqdDI1", label: "Instagram" }
      ]
    },
    {
      id: 5,
      name: "Suman Sekhar Mohanty",
      role: "UI/UX Designer",
      department: "Information Technology",
      image: "/images/suman.jpeg",
      badge: "Designer",
      badgeColor: "secondary",
      socials: [
        { icon: BiLogoGmail, href: "mailto:sekharsuman3545@gmail.com", label: "Email" },
        { icon: FaInstagram, href: "https://www.instagram.com/_sekhar_suman__?igsh=cmFlaGlrcW9qYzNl", label: "Instagram" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/suman-sekhar-mohanty-a16b54291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Breadcrumb Navigation */}
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Team</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Meet Our Team
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The passionate minds behind VeerPreps, dedicated to making quality education accessible to every VSSUT student.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
            </Card>
            <Card className="p-6 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Admins</p>
            </Card>
            <Card className="p-6 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
              <Palette className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Designer</p>
            </Card>
            <Card className="p-6 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.id} 
                className="group relative overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    variant={member.badgeColor as any}
                    className="px-3 py-1 text-xs font-medium shadow-lg"
                  >
                    {member.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          priority={member.id <= 2}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-3 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.department}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <TooltipProvider>
                      {member.socials.map((social, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <Link
                              href={social.href}
                              target="_blank"
                              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group-hover:scale-110"
                            >
                              <social.icon className="h-5 w-5" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{social.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16 px-4 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions, suggestions, or want to contribute? We'd love to hear from you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              asChild
            >
              <Link href="mailto:veerpreps@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              asChild
            >
              <Link href="https://forms.gle/FKpY6r34xN4Gu6X86" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Report Issue
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Made with ❤️ by VSSUT students, for VSSUT students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
