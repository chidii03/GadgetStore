'use client';

import { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {

    if (!email.trim()) {
      setMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setIsLoading(true);
      setMessage('');

      // Fake delay for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setMessage('Subscribed successfully! 🎉');

      setEmail('');
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer
      className="py-16 md:pt-24 pt-16"
      style={{
        backgroundColor: '#0f172a',
        color: '#cbd5e1',
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Gadget Store
          </h3>

          <p className="mb-4">
            Your one-stop shop for the latest gadgets and electronics. We bring
            you top quality tech at unbeatable prices.
          </p>

          <div className="flex space-x-10 justify-center mt-6">
            <a
              href="https://web.facebook.com/profile.php?id=61588136693676"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl hover:text-[#8b5cf6] transition-colors duration-300" />
            </a>

            <a
              href="https://twitter.com/chidi_03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl hover:text-[#8b5cf6] transition-colors duration-300" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl hover:text-[#8b5cf6] transition-colors duration-300" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl hover:text-[#8b5cf6] transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3">
            {['Home', 'Shop', 'About Us'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-[#8b5cf6] transition-colors duration-300"
                  style={{ color: '#cbd5e1' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>

          <p className="mb-4">
            Subscribe to our newsletter for the latest updates, deals, and
            offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-l-md bg-white text-black focus:outline-none w-full"
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="text-white px-5 py-3 rounded-r-md hover:bg-blue-800 transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#3b82f6' }}
              >
                {isLoading ? 'Loading...' : 'Subscribe'}
              </button>
            </div>

            {message && (
              <p
                className={`text-sm font-medium ${
                  message.includes('successfully')
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="mb-4">
            Have questions? Reach out to us at:
          </p>

          <p>Email: vertexvaulttechcompany@gmail.com</p>
          <p>WhatsApp: +234 08079379510</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="py-4 mt-10 text-center"
        style={{ backgroundColor: '#0f172a' }}
      >
        <p
          className="text-sm"
          style={{ color: '#cbd5e1' }}
        >
          &copy; 2026 Vertex Vault Tech Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}