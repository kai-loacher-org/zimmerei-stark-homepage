import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bildergalerie",
  description: "Bildergalerie der Zimmerei Stark - Impressionen unserer Projekte.",
};

const categories = [
  { name: "KomplettHausbau", count: 48 },
  { name: "ModulBau", count: 24 },
  { name: "ObjektBau", count: 36 },
  { name: "Küche & Einrichtung", count: 64 },
  { name: "Mobile Wagen", count: 12 },
  { name: "Außenanlagen", count: 18 },
  { name: "Wellness", count: 8 },
  { name: "Weitere", count: 32 },
];

const images = [
  "/images/hero/holzhaus-1.jpg",
  "/images/hero/holzhaus-2.jpg",
  "/images/projekte/projekt-holzhaus.jpg",
  "/images/projekte/projekt-modern.jpg",
  "/images/projekte/projekt-bau.jpg",
  "/images/projekte/projekt-interior.jpg",
  "/images/leistungen/leistungen-hero.jpg",
  "/images/leistungen/holzbau.jpg",
  "/images/about/ueber-uns.jpg",
  "/images/team/karriere.jpg",
  "/images/hero/slider-1.jpg",
  "/images/leistungen/zimmerei-arbeit.jpg",
];

export default function BilderPage() {
  return (
    <>
      <PageHero
        title="Bildergalerie"
        subtitle="Entdecken Sie unsere Arbeit in Bildern – hunderte Fotos dokumentieren unsere Handwerkskunst."
        badge="Impressionen"
      />

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-primary text-white">
              Alle
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-light text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                {cat.name} <span className="text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Galerie Bild ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Placeholder for more images */}
            {[...Array(8)].map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="aspect-square rounded-xl bg-light flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">Bild {images.length + index + 1}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Zeigt 20 von über 200 Bildern
            </p>
            <Button variant="outline-dark">
              Mehr laden
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
