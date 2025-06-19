import Link from "next/link";
import { Shield, Eye, Lock, Cookie, Mail, Calendar, Users, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
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
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Your privacy is important to us. Learn how we protect and handle your information.
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
          
          {/* Introduction */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  1. Introduction
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Welcome to <strong className="text-blue-600 dark:text-blue-400">VeerPreps</strong>. 
                  We respect your privacy and are committed to protecting any personal information you share with us. 
                  This policy outlines how we collect, use, and safeguard your data while providing you with the best 
                  possible study resources for your academic journey.
        </p>
              </div>
            </div>
          </Card>

          {/* Information We Collect */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      When you register, contact us, or subscribe to updates, we may collect:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Name and email address</li>
                      <li>University and academic details</li>
                      <li>Profile preferences and settings</li>
                      <li>Communication history with our support team</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">
                      Usage Data
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      We track how you use our site to improve our services:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Pages visited and time spent</li>
                      <li>Download patterns and preferences</li>
                      <li>Search queries and interactions</li>
                      <li>Device and browser information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Provide and improve study materials and services
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Communicate updates and respond to inquiries
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Enhance site functionality and user experience
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ensure platform security and prevent abuse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Protection */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  4. Data Protection
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We do not sell or share your data with third parties. Your information is stored securely, 
                  and we take comprehensive measures to prevent unauthorized access.
        </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Security Measures:</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Encrypted data transmission (HTTPS)</li>
                    <li>• Secure server infrastructure</li>
                    <li>• Regular security audits</li>
                    <li>• Limited access to personal data</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  5. Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We use cookies to improve your browsing experience and provide personalized content. 
                  You can disable them in your browser settings, but some features may not work properly.
        </p>
              </div>
            </div>
          </Card>

          {/* Changes to Policy */}
          <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  6. Changes to This Policy
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  Any changes will be posted here, and your continued use of the site implies acceptance of the updated policy.
        </p>
              </div>
            </div>
          </Card>

          {/* Contact Us */}
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  7. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  For any privacy-related concerns or questions about this policy, please don't hesitate to reach out to us.
        </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:veerpreps@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thank you for trusting VeerPreps with your academic journey. We're committed to protecting your privacy.
        </p>
        </div>
      </div>
    </div>
  );
}
