import Link from "next/link";
import { footerNavigation, socialLinks } from "@/data/navigation";
import { contactInfo } from "@/data/content";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "instagram":
      return <Instagram size={20} />;
    case "facebook":
      return <Facebook size={20} />;
    case "youtube":
      return <Youtube size={20} />;
    case "pinterest":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold text-white">
                STARK<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Zimmerei • Schreinerei • Holzbau
              <br />
              <span className="text-accent">Gut im Handwerk seit 1920.</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-gray-900 transition-all"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-accent font-semibold mb-6">Leistungen</h4>
            <ul className="space-y-3">
              {footerNavigation.leistungen.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-accent font-semibold mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              {footerNavigation.unternehmen.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span>
                  {contactInfo.hauptsitz.street}
                  <br />
                  {contactInfo.hauptsitz.zip} {contactInfo.hauptsitz.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.hauptsitz.phone}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone size={20} className="text-accent" />
                  {contactInfo.hauptsitz.phone.replace("+49 ", "0")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.hauptsitz.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={20} className="text-accent" />
                  {contactInfo.hauptsitz.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zimmerei Stark GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            {footerNavigation.rechtliches.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
