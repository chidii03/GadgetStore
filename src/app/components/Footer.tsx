import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 md:pt-24 pt-16" style={{ backgroundColor: "#0f172a", color: "#cbd5e1" }}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Gadget Store</h3>
          <p className="mb-4">
            Your one-stop shop for the latest gadgets and electronics. We bring you top quality tech at unbeatable prices.
          </p>
          <div className="flex space-x-10 justify-center mt-6">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-xl hover:text-[#8b5cf6]" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-[#8b5cf6]" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#8b5cf6]" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-[#8b5cf6]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            {["Home", "Shop", "About Us"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#8b5cf6]" style={{ color: "#cbd5e1" }}>
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
            Subscribe to our newsletter for the latest updates, deals, and offers.
          </p>
          <form action="#" method="POST" className="flex sm:flex-row justify-end items-center mr-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="text-white p-2 rounded-r-md sm:mt-0 hover:bg-blue-800 transition duration-300 ease-in-out"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="mb-4">
            Have questions? Reach out to us at:
          </p>
          <p>Email:Chidiokwu795@gmail.com</p>
          <p>Phone: 08079379510</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 mt-10 text-center" style={{ backgroundColor: "#0f172a" }}>
        <p className="text-sm" style={{ color: "#cbd5e1" }}>
          &copy; 2026 Vertex vault tech Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
