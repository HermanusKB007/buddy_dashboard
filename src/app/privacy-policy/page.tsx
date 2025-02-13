export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-3xl w-full bg-gray-100 p-6 md:p-10 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Privacy Policy for CYBR Physical Solutions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Effective Date:</strong> February 13, 2025
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>App:</strong> Buddy Booking Assistant
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Company Address:</strong> Potchefstroom, South Africa
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">1. Introduction</h2>
        <p className="text-gray-700 mt-2">
          At Cybr Physical Solutions, we are committed to protecting your privacy in accordance with the Protection of Personal Information Act (POPIA) of South Africa. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our Buddy Booking Assistant app.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Your name</strong></li>
          <li><strong>Your email address</strong></li>
          <li><strong>Your cell phone number</strong></li>
          <li>Booking details, such as <strong>date</strong> and <strong>time</strong> of your reservation</li>
        </ul>
        <p className="mt-2 text-gray-700"><strong>We do not collect or store any financial or credit card information.</strong></p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">3. Use of Your Information</h2>
        <p className="mt-2 text-gray-700">The personal information you provide is used solely for:</p>
        <ol className="list-decimal list-inside text-gray-700 mt-2">
          <li><strong>Facilitating bookings</strong> using the Buddy Booking Assistant app.</li>
          <li>Sharing your <strong>name</strong> and <strong>cell phone number</strong> with a third-party payment provider to generate a secure payment link.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">4. Third-Party Payment Provider</h2>
        <p className="mt-2 text-gray-700">
          We partner with a third-party payment provider to handle all transactions. Your financial details are processed securely through this provider. We do not have access to or store your financial or credit card details. The payment provider receives only your <strong>name</strong> and <strong>cell phone number</strong> for payment link generation.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">5. Data Retention</h2>
        <p className="mt-2 text-gray-700">Your personal information is retained only as long as necessary to:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Manage your booking.</li>
          <li>Comply with legal or regulatory requirements.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">6. Data Security</h2>
        <p className="mt-2 text-gray-700">
          We implement appropriate technical and organizational measures to ensure the security of your personal information. However, no system is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">7. Your Rights</h2>
        <p className="mt-2 text-gray-700">You have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request the deletion of your data, subject to legal or contractual obligations.</li>
        </ul>
        <p className="mt-2 text-gray-700">To exercise these rights, please contact us using the details provided in Section 9.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">8. Data Deletion Instructions</h2>
        <p className="mt-2 text-gray-700">
          If you wish to request the deletion of your data associated with our Buddy Booking Assistant app, please follow these steps:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
          <p className="font-semibold">Send an email to:</p>
          <p className="text-blue-600 font-medium">support@cybr-physical.com</p>
          <p className="mt-2 font-semibold">Subject:</p>
          <p className="text-gray-700">Delete user data</p>
          <p className="mt-2 font-semibold">Include in your message:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your WhatsApp ID</li>
          </ul>
        </div>
        <p className="mt-4 text-gray-600">
          Once we receive your request, we will process the deletion promptly in compliance with applicable privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">9. Updates to This Privacy Policy</h2>
        <p className="mt-2 text-gray-700">
          We may update this Privacy Policy from time to time. The &rsquo;Effective Date&rsquo; at the top of this page indicates when it was last revised. Changes are effective immediately upon posting.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">10. Contact Us</h2>
        <p className="mt-2 text-gray-700">
          If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
        </p>
        <p className="text-gray-700"><strong>Email:</strong> info@cybr-physical.com</p>
        <p className="text-gray-700"><strong>Address:</strong> Potchefstroom, South Africa</p>
        <p className="text-gray-700"><strong>Site:</strong> <a href="https://www.mybuddy.co.za" className="text-blue-600 hover:underline">https://www.mybuddy.co.za</a></p>

        <footer className="mt-6 border-t pt-4 text-center text-gray-600 text-sm">
          <p>By using Buddy Booking Assistant, you consent to the terms outlined in this Privacy Policy.</p>
        </footer>
      </div>
    </div>
  );
}