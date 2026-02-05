import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelle Nachrichten und Neuigkeiten der Zimmerei Stark.",
};

const news = [
  {
    id: "1",
    title: "Förderung der Baukultur 2025",
    excerpt: "Die Zimmerei Stark wurde für ihr Engagement in nachhaltiger Baukultur ausgezeichnet. Die Jury lobte insbesondere unsere innovativen Holzbaulösungen.",
    date: "2026-01-28",
    image: "/images/hero/slider-1.jpg",
    category: "Auszeichnung",
  },
  {
    id: "2",
    title: "Baustoffmetal Awards 2025 in Berlin",
    excerpt: "Unser Projekt wurde bei den Baustoffmetal Awards in Berlin prämiert. Wir sind stolz auf diese Anerkennung.",
    date: "2025-12-15",
    image: "/images/projekte/projekt-modern.jpg",
    category: "Award",
  },
  {
    id: "3",
    title: "Tag der offenen Tür 2025 – Ein voller Erfolg",
    excerpt: "Über 1.000 Besucher kamen zu unserem Tag der offenen Tür nach Auhausen. Vielen Dank für Ihr Interesse!",
    date: "2025-09-14",
    image: "/images/about/ueber-uns.jpg",
    category: "Event",
  },
  {
    id: "4",
    title: "15 neue Auszubildende starten ihre Karriere",
    excerpt: "Wir begrüßen 15 neue Auszubildende in unserer STARK-Familie. Willkommen im Team!",
    date: "2025-09-01",
    image: "/images/team/karriere.jpg",
    category: "Unternehmen",
  },
  {
    id: "5",
    title: "Neues Großprojekt: Kindergarten Ansbach",
    excerpt: "Wir freuen uns über den Auftrag für den Neubau eines Kindergartens in Ansbach in nachhaltiger Holzbauweise.",
    date: "2025-08-15",
    image: "/images/projekte/projekt-holzhaus.jpg",
    category: "Projekte",
  },
  {
    id: "6",
    title: "Erweiterung der Produktionshalle abgeschlossen",
    excerpt: "Unsere Produktionshalle wurde um 2.000m² erweitert. Damit können wir noch effizienter und schneller fertigen.",
    date: "2025-07-20",
    image: "/images/leistungen/holzbau.jpg",
    category: "Unternehmen",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Aktuelle Nachrichten und Neuigkeiten aus der Welt von STARK."
        badge="Aktuelles"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/aktuelles/news/${item.id}`}
                className="group card overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                    Weiterlesen
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
