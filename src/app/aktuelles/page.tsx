import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "News, Termine und Veranstaltungen der Zimmerei Stark.",
};

const news = [
  {
    id: "1",
    title: "Förderung der Baukultur 2025",
    excerpt: "Die Zimmerei Stark wurde für ihr Engagement in nachhaltiger Baukultur ausgezeichnet.",
    date: "2026-01-28",
    image: "/images/hero/slider-1.jpg",
    category: "Auszeichnung",
  },
  {
    id: "2",
    title: "Baustoffmetal Awards 2025 in Berlin",
    excerpt: "Unser Projekt wurde bei den Baustoffmetal Awards in Berlin prämiert.",
    date: "2025-12-15",
    image: "/images/projekte/projekt-modern.jpg",
    category: "Award",
  },
  {
    id: "3",
    title: "Tag der offenen Tür 2025",
    excerpt: "Großer Andrang beim Tag der offenen Tür – über 1.000 Besucher in Auhausen.",
    date: "2025-09-14",
    image: "/images/about/ueber-uns.jpg",
    category: "Event",
  },
  {
    id: "4",
    title: "Neue Auszubildende starten",
    excerpt: "15 neue Auszubildende beginnen ihre Karriere bei STARK.",
    date: "2025-09-01",
    image: "/images/team/karriere.jpg",
    category: "Unternehmen",
  },
];

const events = [
  {
    title: "Infoabend: Förderungen 2026",
    date: "2026-02-15",
    time: "18:00 Uhr",
    location: "Ausstellung Birkach",
  },
  {
    title: "Hausbau-Seminar",
    date: "2026-03-08",
    time: "14:00 Uhr",
    location: "Ausstellung Auhausen",
  },
  {
    title: "Architekten-Forum",
    date: "2026-03-22",
    time: "17:00 Uhr",
    location: "Online",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
};

export default function AktuellesPage() {
  return (
    <>
      <PageHero
        title="Aktuelles"
        subtitle="News, Veranstaltungen und Termine – bleiben Sie auf dem Laufenden."
        badge="News & Events"
      />

      <div className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* News Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-semibold mb-8">Neuigkeiten</h2>
              <div className="space-y-8">
                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={`/aktuelles/news/${item.id}`}
                    className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-xl hover:bg-light transition-colors"
                  >
                    {/* Image */}
                    <div className="sm:w-48 flex-shrink-0 rounded-xl overflow-hidden aspect-video sm:aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3">
                        Weiterlesen
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/aktuelles/news" variant="outline-dark">
                  Alle News ansehen
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Events */}
              <div className="bg-primary text-white rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <Calendar size={20} className="text-accent" />
                  Kommende Termine
                </h3>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="font-medium mb-1">{event.title}</div>
                      <div className="text-sm text-white/70 space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button href="/aktuelles/termine" variant="primary" size="sm" className="w-full mt-6 bg-accent text-gray-900 hover:bg-accent-600">
                  Alle Termine
                </Button>
              </div>

              {/* Newsletter */}
              <div className="bg-light rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Erhalten Sie regelmäßig News und Einladungen zu unseren Veranstaltungen.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Button type="submit" variant="secondary" size="sm" className="w-full">
                    Anmelden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
