import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { firmengruppe } from "@/data/content";
import { Building2, Users, Hammer, Home, Briefcase, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Firmengruppe STARK",
  description: "Die Firmengruppe STARK - sechs spezialisierte Unternehmen unter einem Dach.",
};

const firmenDetails = [
  {
    name: "Zimmerei Stark GmbH",
    description: "Das Herzstück der Gruppe – Holzbau und KomplettHausbau in höchster Qualität.",
    icon: <Hammer size={32} />,
    services: ["KomplettHausbau", "ModulBau", "Zimmererarbeiten", "Dachstühle"],
  },
  {
    name: "Schreinerei Stark GmbH",
    description: "Maßgefertigte Möbel, Küchen und Innenausbau aus eigener Werkstatt.",
    icon: <Home size={32} />,
    services: ["Küchen", "Möbel", "Innenausbau", "Fenster & Türen"],
  },
  {
    name: "Stark Immo GmbH",
    description: "Entwicklung und Vermarktung von Wohnimmobilien in der Region.",
    icon: <Building2 size={32} />,
    services: ["Projektentwicklung", "Wohnungsbau", "Vermarktung"],
  },
  {
    name: "HRV Hausverwaltung GmbH",
    description: "Professionelle Verwaltung von Wohn- und Gewerbeimmobilien.",
    icon: <Briefcase size={32} />,
    services: ["WEG-Verwaltung", "Mietverwaltung", "Facility Management"],
  },
  {
    name: "BS Holzmodulbau GmbH",
    description: "Spezialist für modulares Bauen – schnell, flexibel, nachhaltig.",
    icon: <Wrench size={32} />,
    services: ["Modulbau", "Vorfertigung", "Serielle Produktion"],
  },
  {
    name: "ARGE BBS",
    description: "Arbeitsgemeinschaft für Großprojekte und besondere Bauvorhaben.",
    icon: <Users size={32} />,
    services: ["Großprojekte", "Kooperationen", "Spezialbauten"],
  },
];

export default function FirmengruppePage() {
  return (
    <>
      <PageHero
        title="Firmengruppe STARK"
        subtitle="Sechs spezialisierte Unternehmen – eine Familie, eine Vision."
        badge="Unsere Struktur"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600">
              Unter dem Dach der Firmengruppe STARK vereinen wir sechs spezialisierte Unternehmen. 
              Jedes mit eigener Expertise, aber alle verbunden durch gemeinsame Werte: 
              Qualität, Nachhaltigkeit und Kundenzufriedenheit.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firmenDetails.map((firma, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {firma.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{firma.name}</h3>
                <p className="text-gray-600 mb-4">{firma.description}</p>
                <div className="flex flex-wrap gap-2">
                  {firma.services.map((service, idx) => (
                    <span key={idx} className="text-xs bg-light text-secondary-700 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergien */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Synergien nutzen
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Die enge Zusammenarbeit unserer Unternehmen ermöglicht es uns, Projekte ganzheitlich 
              zu betreuen – von der Planung über den Bau bis zur Verwaltung. Ein Ansprechpartner, 
              alle Leistungen.
            </p>
            <Button href="/kontakt" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-600">
              Projekt anfragen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
