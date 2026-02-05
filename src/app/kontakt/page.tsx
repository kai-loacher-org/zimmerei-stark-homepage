import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/content";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nehmen Sie Kontakt mit der Zimmerei Stark auf. Wir beraten Sie gerne zu Ihrem Bauvorhaben.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Anfrage. Sprechen Sie uns an – 
            wir beraten Sie gerne persönlich und unverbindlich.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-semibold mb-6">
                Schreiben Sie uns
              </h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="beratung">Allgemeine Beratung</option>
                    <option value="hausbau">KomplettHausbau</option>
                    <option value="modulbau">ModulBau</option>
                    <option value="objektbau">ObjektBau</option>
                    <option value="schreinerei">Küche & Einrichtung</option>
                    <option value="sanierung">Sanierung & Umbau</option>
                    <option value="karriere">Karriere / Bewerbung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="privacy"
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Ich habe die <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a> gelesen 
                    und bin mit der Verarbeitung meiner Daten einverstanden. *
                  </label>
                </div>

                <Button type="submit" variant="secondary" size="lg">
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-semibold mb-6">
                So erreichen Sie uns
              </h2>

              {/* Hauptsitz */}
              <div className="bg-light rounded-2xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  {contactInfo.hauptsitz.name}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      {contactInfo.hauptsitz.street}<br />
                      {contactInfo.hauptsitz.zip} {contactInfo.hauptsitz.city}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-secondary" />
                    <a href={`tel:${contactInfo.hauptsitz.phone}`} className="hover:text-primary transition-colors">
                      {contactInfo.hauptsitz.phone.replace("+49 ", "0")}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-secondary" />
                    <a href={`mailto:${contactInfo.hauptsitz.email}`} className="hover:text-primary transition-colors">
                      {contactInfo.hauptsitz.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Niederlassung */}
              <div className="bg-light rounded-2xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  {contactInfo.niederlassung.name}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      {contactInfo.niederlassung.street}<br />
                      {contactInfo.niederlassung.zip} {contactInfo.niederlassung.city}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-secondary" />
                    <a href={`tel:${contactInfo.niederlassung.phone}`} className="hover:text-primary transition-colors">
                      {contactInfo.niederlassung.phone?.replace("+49 ", "0")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="bg-primary text-white rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-accent" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Mo – Do:</span>
                    <span>07:00 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Freitag:</span>
                    <span>07:00 – 14:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sa – So:</span>
                    <span>geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🗺️</div>
          <p>Google Maps Einbettung</p>
        </div>
      </section>
    </>
  );
}
