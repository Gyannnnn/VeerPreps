import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-screen mt-16 flex flex-col items-center">
      <div className="w-[90vw] min-h-screen flex flex-col gap-4 mb-8 pt-10">
        {/* Privacy Policy Section */}
        <h1 className="text-3xl font-bold">📜 Privacy Policy</h1>

        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to <strong>VeerPreps</strong>. We respect your privacy and are
          committed to protecting any personal information you share with us.
          This policy outlines how we collect, use, and safeguard your data.
        </p>

        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> When you register, contact us,
          or subscribe to updates, we may collect your name, email, and
          university details.
        </p>
        <p>
          <strong>Usage Data:</strong> We track how you use our site, including
          pages visited and actions taken, to improve our services.
        </p>

        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <p>
          - To provide and improve study materials and services.
          <br />- To communicate updates, respond to inquiries, and offer
          support.
          <br />- To enhance site functionality and security.
        </p>

        <h2 className="text-xl font-semibold">4. Data Protection</h2>
        <p>
          We do not sell or share your data with third parties. Your information
          is stored securely, and we take measures to prevent unauthorized
          access.
        </p>

        <h2 className="text-xl font-semibold">5. Cookies</h2>
        <p>
          We use cookies to improve your browsing experience. You can disable
          them in your browser settings, but some features may not work
          properly.
        </p>

        <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. Any changes will be posted here,
          and your continued use of the site implies acceptance.
        </p>

        <h2 className="text-xl font-semibold">7. Contact Us</h2>
        <p>
          For any privacy-related concerns, email us at{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="mailto:veerpreps@gmail.com"
          >
            veerpreps@gmail.com
          </Link>
          .
        </p>

        <hr className="border-t-2 border-gray-300 my-6" />

        {/* Terms of Service Section */}
        <h1 className="text-3xl font-bold">📑 Terms of Service</h1>

        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing <strong>VeerPreps</strong>, you agree to abide by these
          Terms of Service. If you do not agree, please do not use our website.
        </p>

        <h2 className="text-xl font-semibold">2. Use of Content</h2>
        <p>
          All study materials and notes are for <strong>personal and academic
          use only</strong>. Unauthorized distribution, modification, or resale
          of content is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
        <p>
          - Do not misuse the platform or engage in activities that violate laws
          or university policies.
          <br />- Respect copyright laws and do not upload or share copyrighted
          content without permission.
        </p>

        <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
        <p>
          We strive to provide accurate and useful study materials, but we do
          not guarantee their completeness or correctness.{" "}
          <strong>VeerPreps is not responsible for academic outcomes</strong> or
          any issues arising from the use of our content.
        </p>

        <h2 className="text-xl font-semibold">5. Account Termination</h2>
        <p>
          We reserve the right to suspend or delete accounts that violate our
          terms or engage in misuse of the platform.
        </p>

        <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
        <p>
          These Terms of Service may be updated periodically. Continued use of
          the platform signifies acceptance of the changes.
        </p>

        <h2 className="text-xl font-semibold">7. Contact Us</h2>
        <p>
          For any questions regarding these terms, reach out at{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="mailto:veerpreps@gmail.com"
          >
            veerpreps@gmail.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
