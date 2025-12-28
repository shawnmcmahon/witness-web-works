import Link from "next/link";
import { Linkedin, Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold font-[var(--font-cormorant)]">
                Witness
              </span>
              <span className="text-xl text-[var(--color-accent)] font-light ml-2">
                Web Works
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Denver Web Design & E-Commerce. We help businesses reach more
              clients by building beautiful, engaging websites.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Explore Plans
              </Link>
              <Link
                href="/meet-the-team"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Get In Touch
            </h3>
            <a
              href="mailto:shawn@witnesswebworks.com"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
            >
              <Mail size={18} />
              shawn@witnesswebworks.com
            </a>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Witness Web Works. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

