export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-3xl w-full bg-gray-100 p-6 md:p-10 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Effective Date:</strong> February 12, 2025
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Company:</strong> Cybr Physical Solutions, Potchefstroom, South Africa
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mt-2">
          By accessing or using the Buddy Booking Assistant, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, you must not use our service.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">2. Description of Service</h2>
        <p className="text-gray-700 mt-2">
          The Buddy Booking Assistant allows users to book conference room facilities through a simple interface. The service involves:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Collecting booking details (name, email, cell phone number, date, and time).</li>
          <li>Facilitating payment via a third-party payment provider.</li>
          <li>Sending booking confirmations via WhatsApp.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">3. Confirmation</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Your booking is confirmed only upon receiving payment.</li>
          <li>If payment is not made 15 minutes before your scheduled time, the booking will be automatically canceled.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">4. Refund Policy</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>No refunds are available.</li>
          <li>In the event of cancellation, a credit will be applied to your next booking.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">5. General Rules</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Kindly keep noise at a reasonable level and respect the venue&rsquo;s environment.</li>
          <li>Please do not leave any trash or disrupt the setup of the room.</li>
          <li>You are welcome to use any provided equipment, but please ensure it remains in good condition.</li>
          <li>Guests will be held accountable for any damages or disorder left behind.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">6. Payment</h2>
        <p className="text-gray-700 mt-2">
          All payments are handled by a third-party payment provider. By using the payment link, you agree to their terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">7. Limitation of Liability</h2>
        <p className="text-gray-700 mt-2">
          Cybr Physical Solutions is not liable for any direct, indirect, incidental, or consequential damages arising from:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Delays or disruptions in booking confirmations.</li>
          <li>Issues related to payments or refunds processed by third-party providers.</li>
          <li>Disruptions in the availability of the venue or equipment.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">8. Privacy</h2>
        <p className="text-gray-700 mt-2">
          Your use of the service is governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">9. Termination of Service</h2>
        <p className="text-gray-700 mt-2">
          We reserve the right to terminate or suspend access to the service at any time, with or without notice, for violations of these terms or for any other reason deemed necessary.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">10. Changes to Terms</h2>
        <p className="text-gray-700 mt-2">
          We may update these Terms of Service from time to time. The &quot;Effective Date&quot; at the top of this page indicates when the terms were last revised. Continued use of the service constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-6">11. Contact Information</h2>
        <p className="text-gray-700 mt-2">
          If you have questions or concerns regarding these Terms of Service, please contact us at:
        </p>
        <p className="text-gray-700"><strong>Email:</strong> info@cybr-physical.com</p>
        <p className="text-gray-700"><strong>Address:</strong> Potchefstroom, South Africa</p>
        <p className="text-gray-700"><strong>Site:</strong> <a href="https://www.mybuddy.co.za" className="text-blue-600 hover:underline">https://www.mybuddy.co.za</a></p>

        <footer className="mt-6 border-t pt-4 text-center text-gray-600 text-sm">
          <p>By using the Buddy Booking Assistant, you agree to these Terms of Service.</p>
        </footer>
      </div>
    </div>
  );
}