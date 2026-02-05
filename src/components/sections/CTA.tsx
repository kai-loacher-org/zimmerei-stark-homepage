import Button from "@/components/ui/Button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/content";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary-600 to-accent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Wir beraten Sie gerne – unverbindlich und persönlich. 
            Gemeinsam finden wir die beste Lösung für Ihr Bauvorhaben.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              href="/kontakt" 
              variant="primary" 
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90"
              icon={<ArrowRight size={20} />}
            >
              Kontakt aufnehmen
            </Button>
            <Button
              href={`tel:${contactInfo.hauptsitz.phone}`}
              variant="outline"
              size="lg"
              icon={<Phone size={20} />}
              iconPosition="left"
            >
              Jetzt anrufen
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a
              href={`tel:${contactInfo.hauptsitz.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={18} />
              {contactInfo.hauptsitz.phone.replace("+49 ", "0")}
            </a>
            <span className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></span>
            <a
              href={`mailto:${contactInfo.hauptsitz.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={18} />
              {contactInfo.hauptsitz.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
