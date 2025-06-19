"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  BookOpen, 
  Users, 
  Target, 
  Heart, 
  GraduationCap, 
  FileText, 
  Play, 
  Globe,
  Award,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Twitter
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

export default function Page() {
  const { scrollYProgress } = useScroll();

    return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
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
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center gap-3 mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white text-center">
                About VeerPreps
              </h1>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
              Empowering VSSUT Burla students with comprehensive study materials, 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> one platform at a time</span>
            </p>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Made for students, by a student
            </Badge>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To provide VSSUT Burla students with easy access to comprehensive study materials, 
                  including previous year question papers, lecture notes, and curated YouTube playlists. 
                  We aim to simplify exam preparation and make academic success more achievable.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To become the go-to platform for VSSUT students, fostering a collaborative learning 
                  environment where every student has access to quality study materials and can excel 
                  in their academic journey.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="w-full py-16 px-4 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive study materials designed to help you succeed in your academic journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Previous Year Questions",
                description: "Access a vast collection of PYQs from all branches and semesters",
                color: "blue"
              },
              {
                icon: BookOpen,
                title: "Lecture Notes",
                description: "Comprehensive handwritten and typed notes from experienced students",
                color: "green"
              },
              {
                icon: Play,
                title: "YouTube Playlists",
                description: "Curated video content to supplement your learning experience",
                color: "red"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`p-4 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The story behind VeerPreps and the vision that drives us forward
            </p>
          </motion.div>

          <Card className="p-8 md:p-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Gyanaranjan Patra
                  </h3>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    <strong className="text-gray-900 dark:text-white">VeerPreps</strong> (formerly IIT Kirba) was founded by 
                    <strong className="text-gray-900 dark:text-white"> Gyanaranjan Patra</strong>, an Information Technology 
                    undergraduate from VSSUT Burla (Batch 2027).
                  </p>
                  <p>
                    Like many students, Gyanaranjan faced challenges in his first year, struggling to find the right study 
                    materials at the right time. The scattered nature of resources made exam preparation stressful, and he 
                    realized the need for a centralized hub where students could access all essential materials in one place.
                  </p>
                  <p>
                    This led to the creation of <strong className="text-gray-900 dark:text-white">VeerPreps</strong>—a 
                    one-stop solution designed to simplify the learning process and help students excel in their academics.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="px-3 py-1">
                    <Users className="h-4 w-4 mr-2" />
                    Information Technology
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <Award className="h-4 w-4 mr-2" />
                    Batch 2027
                  </Badge>
                </div>
                
                {/* Social Media Links */}
                <div className="flex items-center gap-3 pt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mr-2">
                    Connect with me:
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="https://github.com/Gyannnnn" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/higyan" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600"
                      asChild
                    >
                      <a href="https://instagram.com/gyanpatra.dev" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 hover:bg-black dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                      asChild
                    >
                      <a href="https://x.com/hi_gyaan?t=VvsoDPd7iE5nrurTKmMTkQ&s=08" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dlm8mel1x/image/upload/v1750238773/me21_qfuy2u.jpg"
                    alt="Gyanaranjan Patra - Founder of VeerPreps"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full py-16 px-4 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Student-First",
                description: "Everything we do is designed with students in mind"
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "Making quality education accessible to everyone"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a supportive learning community"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Striving for academic excellence together"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Help us grow and make education more accessible for every VSSUT student
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                asChild
              >
                <a href="https://forms.gle/EYBP1xcCxYqsdeVK6" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Contribute PYQs
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-3"
                asChild
              >
                <a href="https://forms.gle/Ro31WGz1TKpp3ybX9" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Share Notes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              <strong>Made for students, by a student. Let's learn and grow together!</strong>
            </p>
          </motion.div>
        </div>
        </div>
      </div>
    );
  }
  