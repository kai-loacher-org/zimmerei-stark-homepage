import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { MapPin, Briefcase, Clock, Euro, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stellenangebote",
  description: "Aktuelle Stellenangebote bei Zimmerei Stark - Zimmerer, Schreiner, Bauleiter und mehr.",
};

const jobs = [
  {
    id: "zimmerer",
    title: "Zimmerer/in (m/w/d)",
    location: "Auhausen",
    type: "Vollzeit",
    description: "Für unsere Baustellen und die Werkstattfertigung suchen wir erfahrene Zimmerer mit Gesellenbrief.",
    requirements: ["Abgeschlossene Ausbildung als Zimmerer", "Führerschein Klasse B", "Teamfähigkeit und Zuverlässigkeit"],
  },
  {
    id: "schreiner",
    title: "Schreiner/in (m/w/d)",
    location: "Auhausen",
    type: "Vollzeit",
    description: "Für unsere Schreinerei suchen wir kreative Schreiner für Möbelbau und Innenausbau.",
    requirements: ["Abgeschlossene Ausbildung als Schreiner", "Erfahrung im Möbelbau", "CNC-Kenntnisse von Vorteil"],
  },
  {
    id: "bauleiter",
    title: "Bauleiter/in (m/w/d)",
    location: "Auhausen / Außendienst",
    type: "Vollzeit",
    description: "Zur Verstärkung unseres Teams suchen wir einen erfahrenen Bauleiter für unsere Holzbauprojekte.",
    requirements: ["Studium Bauingenieurwesen oder Meisterprüfung", "Berufserfahrung im Holzbau", "Führerschein Klasse B"],
  },
  {
    id: "technischer-zeichner",
    title: "Technischer Zeichner/in (m/w/d)",
    location: "Auhausen",
    type: "Vollzeit",
    description: "Für unsere Planungsabteilung suchen wir einen technischen Zeichner mit CAD-Erfahrung.",
    requirements: ["Abgeschlossene Ausbildung", "Sicherer Umgang mit CAD-Software", "Räumliches Vorstellungsvermögen"],
  },
  {
    id: "kaufmann",
    title: "Kaufmann/-frau für Büromanagement (m/w/d)",
    location: "Auhausen",
    type: "Vollzeit / Teilzeit",
    description: "Zur Unterstützung unserer Verwaltung suchen wir eine/n Kaufmann/-frau für Büromanagement.",
    requirements: ["Abgeschlossene kaufmännische Ausbildung", "MS-Office-Kenntnisse", "Freundliches Auftreten"],
  },
];

export default function JobsPage() {
  return (
    <>
      <PageHero
        title="Stellenangebote"
        subtitle="Finden Sie Ihren Traumjob bei STARK – wir suchen Verstärkung in vielen Bereichen."
        badge="Jetzt bewerben"
        image="/images/team/karriere.jpg"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button href="/karriere/bewerbung" variant="secondary" size="sm">
                      Jetzt bewerben
                    </Button>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2">Anforderungen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Initiativbewerbung */}
            <div className="mt-12 bg-primary text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Kein passender Job dabei?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Wir freuen uns auch über Initiativbewerbungen! Zeigen Sie uns, was Sie können – 
                vielleicht haben wir genau den richtigen Platz für Sie.
              </p>
              <Button href="/karriere/bewerbung" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-600">
                Initiativbewerbung senden
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
