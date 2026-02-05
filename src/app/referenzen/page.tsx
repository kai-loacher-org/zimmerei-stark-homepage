import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { projekte } from "@/data/content";
import { ArrowUpRight, MapPin, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Unsere realisierten Projekte - KomplettHausbau, ModulBau, ObjektBau und mehr. Zimmerei Stark.",
};

const categories = ["Alle", "KomplettHausbau", "ModulBau", "ObjektBau", "Sanierung", "Spezial"];

const projectImages = [
  "/images/projekte/projekt-holzhaus.jpg",
  "/images/projekte/projekt-modern.jpg",
  "/images/projekte/projekt-bau.jpg",
  "/images/projekte/projekt-interior.jpg",
];

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        title="Referenzen"
        subtitle="Über 500 realisierte Projekte – ein Auszug unserer Arbeit."
        badge="Unsere Projekte"
        image="/images/projekte/projekt-modern.jpg"
      />

      {/* Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "Alle" 
                    ? "bg-primary text-white" 
                    : "bg-light text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projekte.map((projekt, index) => (
              <Link
                key={projekt.id}
                href={projekt.href}
                className="group card overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={projectImages[index % projectImages.length]}
                    alt={projekt.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {projekt.category}
                  </span>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                      <ArrowUpRight size={24} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {projekt.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {projekt.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <MapPin size={14} />
                    {projekt.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Projects Hint */}
          <div className="text-center mt-16 p-8 bg-light rounded-2xl">
            <p className="text-gray-600 mb-4">
              Dies ist nur ein kleiner Auszug unserer über 500 realisierten Projekte.
            </p>
            <Button href="/kontakt" variant="secondary">
              Mehr Projekte auf Anfrage
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Bildergalerie
              </h2>
              <p className="text-white/80 mb-8">
                Entdecken Sie unsere Arbeit in Bildern – von der Baustelle bis zum fertigen Projekt. 
                Hunderte Fotos dokumentieren unsere Handwerkskunst.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/referenzen/bilder" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-600">
                  Zur Bildergalerie
                </Button>
                <Button href="/referenzen/videos" variant="outline">
                  Videos ansehen
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {projectImages.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden aspect-square">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
