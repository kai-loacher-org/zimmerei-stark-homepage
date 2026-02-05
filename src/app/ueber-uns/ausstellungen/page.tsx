import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/content";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Ausstellungen",
  description: "Besuchen Sie unsere Ausstellungen in Auhausen und Birkach. Zimmerei Stark.",
};

const ausstellungen = [
  {
    name: "Ausstellung Auhausen",
    address: contactInfo.hauptsitz,
    description: "Unsere Hauptausstellung mit über 500m² Ausstellungsfläche. Hier finden Sie komplette Musterküchen, Bäder, Wohnbeispiele und können sich von unserer Handwerkskunst überzeugen.",
    highlights: ["Musterküchen", "Badausstellung", "Wohnbeispiele", "Materialauswahl", "Beratungsräume"],
    hours: "Mo-Fr: 08:00-17:00, Sa: nach Vereinbarung",
    image: "/images/about/ueber-uns.jpg",
  },
  {
    name: "Ausstellung Birkach",
    address: contactInfo.niederlassung,
    description: "Unsere zweite Ausstellung mit Fokus auf Hausbau und ModulBau. Besichtigen Sie unser Musterhaus und erleben Sie Wohnqualität hautnah.",
    highlights: ["Musterhaus", "ModulBau-Beispiele", "Energieberatung", "Bemusterung"],
    hours: "Mo-Fr: 08:00-17:00, Sa: nach Vereinbarung",
    image: "/images/hero/holzhaus-1.jpg",
  },
];

export default function AusstellungenPage() {
  return (
    <>
      <PageHero
        title="Ausstellungen"
        subtitle="Erleben Sie unsere Arbeit hautnah – an zwei Standorten in der Region."
        badge="Besuchen Sie uns"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {ausstellungen.map((ausstellung, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={ausstellung.image} 
                    alt={ausstellung.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                    {ausstellung.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {ausstellung.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ausstellung.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-light text-secondary-700 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="bg-light rounded-xl p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">{ausstellung.address.street}</div>
                        <div className="text-gray-600">{ausstellung.address.zip} {ausstellung.address.city}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-primary" />
                      <span className="text-gray-600">{ausstellung.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <a href={`tel:${ausstellung.address.phone}`} className="text-gray-600 hover:text-primary">
                        {ausstellung.address.phone?.replace("+49 ", "0")}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button href="/kontakt" variant="secondary">
                      Termin vereinbaren
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Vereinbaren Sie einen Besichtigungstermin
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Wir nehmen uns Zeit für Sie. Lernen Sie uns und unsere Arbeit persönlich kennen.
          </p>
          <Button href="/kontakt" variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
            Termin anfragen
          </Button>
        </div>
      </section>
    </>
  );
}
