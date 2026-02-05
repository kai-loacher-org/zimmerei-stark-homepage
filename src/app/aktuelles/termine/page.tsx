import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Termine",
  description: "Veranstaltungen und Termine der Zimmerei Stark.",
};

const termine = [
  {
    title: "Infoabend: Förderungen 2026",
    date: "2026-02-15",
    time: "18:00 - 20:00 Uhr",
    location: "Ausstellung Birkach",
    description: "Erfahren Sie alles über aktuelle Förderprogramme für Hausbau und Sanierung. Unsere Experten beraten Sie.",
    category: "Vortrag",
    spots: "Noch Plätze frei",
  },
  {
    title: "Hausbau-Seminar",
    date: "2026-03-08",
    time: "14:00 - 17:00 Uhr",
    location: "Ausstellung Auhausen",
    description: "Alles, was Sie für Ihr Bauvorhaben wissen müssen – von der Planung bis zur Finanzierung.",
    category: "Seminar",
    spots: "Noch Plätze frei",
  },
  {
    title: "Architekten-Forum 2026",
    date: "2026-03-22",
    time: "17:00 - 19:00 Uhr",
    location: "Online (Zoom)",
    description: "Fachvortrag für Architekten und Planer zum Thema nachhaltiger Holzbau.",
    category: "Fachvortrag",
    spots: "Noch Plätze frei",
  },
  {
    title: "Musterhaus-Besichtigung",
    date: "2026-04-05",
    time: "10:00 - 16:00 Uhr",
    location: "Ausstellung Birkach",
    description: "Besichtigen Sie unser Musterhaus und erleben Sie Holzbauqualität hautnah.",
    category: "Besichtigung",
    spots: "Ohne Anmeldung",
  },
  {
    title: "Küchen-Aktionstag",
    date: "2026-04-19",
    time: "10:00 - 17:00 Uhr",
    location: "Ausstellung Auhausen",
    description: "Sonderangebote und Live-Kochvorführungen in unserer Küchenausstellung.",
    category: "Aktionstag",
    spots: "Ohne Anmeldung",
  },
  {
    title: "Tag der offenen Tür 2026",
    date: "2026-09-13",
    time: "10:00 - 17:00 Uhr",
    location: "Beide Standorte",
    description: "Unser großer Tag der offenen Tür mit Führungen, Vorträgen und Mitmachaktionen für die ganze Familie.",
    category: "Event",
    spots: "Ohne Anmeldung",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("de-DE", { day: "2-digit" }),
    month: date.toLocaleDateString("de-DE", { month: "short" }).toUpperCase(),
    full: date.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }),
  };
};

export default function TerminePage() {
  return (
    <>
      <PageHero
        title="Termine"
        subtitle="Veranstaltungen, Seminare und Besichtigungen – wir freuen uns auf Sie."
        badge="Events"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {termine.map((termin, index) => {
              const date = formatDate(termin.date);
              return (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Date Box */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary text-white rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">{date.day}</span>
                        <span className="text-xs">{date.month}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {termin.category}
                        </span>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                          {termin.spots}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{termin.title}</h2>
                      <p className="text-gray-600 mb-4">{termin.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {date.full}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {termin.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {termin.location}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 self-center">
                      <Button href="/kontakt" variant="secondary" size="sm">
                        Anmelden
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Newsletter */}
          <div className="max-w-2xl mx-auto mt-16 bg-primary text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Kein Event verpassen
            </h3>
            <p className="text-white/80 mb-6">
              Melden Sie sich für unseren Newsletter an und erhalten Sie Einladungen zu allen Veranstaltungen.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-600">
                Anmelden
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
