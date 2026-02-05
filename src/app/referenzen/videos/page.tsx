import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video-Einblicke in die Arbeit der Zimmerei Stark.",
};

const videos = [
  {
    title: "Imagefilm Zimmerei Stark",
    description: "Lernen Sie uns und unsere Arbeit kennen.",
    thumbnail: "/images/about/ueber-uns.jpg",
    duration: "3:42",
  },
  {
    title: "KomplettHausbau – Vom Plan zum Haus",
    description: "Begleiten Sie uns durch den gesamten Bauprozess.",
    thumbnail: "/images/hero/holzhaus-1.jpg",
    duration: "8:15",
  },
  {
    title: "ModulBau – Schnell und präzise",
    description: "So funktioniert modulares Bauen bei STARK.",
    thumbnail: "/images/leistungen/holzbau.jpg",
    duration: "5:28",
  },
  {
    title: "Ausbildung bei STARK",
    description: "Unsere Azubis erzählen von ihrer Ausbildung.",
    thumbnail: "/images/team/karriere.jpg",
    duration: "4:12",
  },
  {
    title: "100 Jahre STARK – Jubiläumsfilm",
    description: "Ein Rückblick auf 100 Jahre Firmengeschichte.",
    thumbnail: "/images/hero/slider-1.jpg",
    duration: "12:30",
  },
  {
    title: "Projekt AELF Ansbach",
    description: "Dokumentation unseres Großprojekts.",
    thumbnail: "/images/projekte/projekt-modern.jpg",
    duration: "6:45",
  },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        subtitle="Bewegte Bilder unserer Arbeit – Imagefilme, Projektdokumentationen und mehr."
        badge="Film ab"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration */}
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            ))}
          </div>

          {/* YouTube Link */}
          <div className="text-center mt-16 p-8 bg-light rounded-2xl">
            <p className="text-gray-600 mb-4">
              Alle unsere Videos finden Sie auch auf unserem YouTube-Kanal.
            </p>
            <a
              href="https://www.youtube.com/channel/UCf2tOvgo_5ISvYFHJSXpqmw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Play size={20} fill="currentColor" />
              YouTube-Kanal besuchen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
