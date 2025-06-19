import Link from "next/link";
import { FileText, CheckCircle, AlertTriangle, Shield, Users, Calendar, Mail, ExternalLink, BookOpen, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Please read these terms carefully before using VeerPreps.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {currentDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>VeerPreps Team</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Acceptance of Terms */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing and using <strong className="text-green-600 dark:text-green-400">VeerPreps</strong>, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                  If you do not agree with any part of these terms, please do not use our platform.
                </p>
              </div>
            </div>
          </Card>

          {/* Use of Content */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  2. Use of Content
                </h2>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Permitted Uses:</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Personal and academic study purposes</li>
                      <li>• Individual learning and preparation</li>
                      <li>• Educational research and reference</li>
                      <li>• Non-commercial academic activities</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ Prohibited Uses:</h4>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      <li>• Commercial distribution or resale</li>
                      <li>• Unauthorized modification or alteration</li>
                      <li>• Mass distribution without permission</li>
                      <li>• Plagiarism or academic dishonesty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* User Responsibilities */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  3. User Responsibilities
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Academic Integrity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Users must maintain academic integrity and use materials responsibly. 
                      Study materials are meant to supplement learning, not replace it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Platform Usage
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Do not misuse the platform or engage in activities that violate laws or university policies</li>
                      <li>Respect copyright laws and intellectual property rights</li>
                      <li>Do not upload or share copyrighted content without permission</li>
                      <li>Maintain appropriate behavior in all interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  4. Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  While we strive to provide accurate and useful study materials, we do not guarantee their 
                  completeness, correctness, or suitability for any specific purpose.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Important Disclaimer:</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    <strong>VeerPreps is not responsible for academic outcomes</strong> or any issues arising 
                    from the use of our content. Users should verify information independently and consult 
                    with their instructors when necessary.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Account Management */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  5. Account Management
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Account Creation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials 
                      and for all activities that occur under your account.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Account Termination
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      We reserve the right to suspend or terminate accounts that violate our terms, 
                      engage in misuse of the platform, or demonstrate inappropriate behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  6. Intellectual Property
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  All content on VeerPreps, including but not limited to study materials, notes, 
                  and platform design, is protected by intellectual property laws.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                    <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-2">Our Rights:</h4>
                    <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                      <li>• Platform design and functionality</li>
                      <li>• Original content and materials</li>
                      <li>• Branding and trademarks</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">User Rights:</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Personal use of study materials</li>
                      <li>• Fair use for academic purposes</li>
                      <li>• Access to platform features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Changes to Terms */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  7. Changes to Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  These Terms of Service may be updated periodically to reflect changes in our services, 
                  legal requirements, or platform policies. Continued use of the platform after changes 
                  are posted constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Us */}
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  8. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service or need clarification on any point, 
                  please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:veerpreps@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                  <Link 
                    href="/admin"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    Contact Form
                  </Link>
                  <Link 
                    href="/privacypolicy"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thank you for using VeerPreps. We're committed to providing a safe and valuable learning environment.
          </p>
        </div>
      </div>
    </div>
  );
} 