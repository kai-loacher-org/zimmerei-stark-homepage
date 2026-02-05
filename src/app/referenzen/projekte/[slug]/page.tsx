import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { projekte } from "@/data/content";
import { MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

// Generate static params for all projects
export function generateStaticParams() {
  return projekte.map((projekt) => ({
    slug: projekt.id,
  }));
}

// Generate metadata
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const projekt = projekte.find((p) => p.id === params.slug);
  if (!projekt) return { title: "Projekt nicht gefunden" };
  
  return {
    title: projekt.title,
    description: projekt.description,
  };
}

// Fallback-Bild falls kein Projektbild vorhanden
const FALLBACK_IMAGE = "https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg";

export default function ProjektDetailPage({ params }: { params: { slug: string } }) {
  const projekt = projekte.find((p) => p.id === params.slug);
  
  if (!projekt) {
    notFound();
  }

  const currentIndex = projekte.findIndex((p) => p.id === params.slug);
  const prevProjekt = currentIndex > 0 ? projekte[currentIndex - 1] : null;
  const nextProjekt = currentIndex < projekte.length - 1 ? projekte[currentIndex + 1] : null;
  
  // Projektbild oder Fallback
  const projectImage = projekt.imageUrl || FALLBACK_IMAGE;

  return (
    <>
      <PageHero
        title={projekt.title}
        subtitle={projekt.description}
        badge={projekt.category}
        image={projectImage}
      />

      {/* Project Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={projectImage}
                  alt={projekt.title}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <h2>Projektbeschreibung</h2>
                <p>
                  {projekt.description} Dieses Projekt wurde von unserem erfahrenen Team 
                  in höchster Qualität und mit viel Liebe zum Detail realisiert. 
                  Als Familienunternehmen mit über 100 Jahren Erfahrung legen wir 
                  besonderen Wert auf nachhaltige Materialien und erstklassige Verarbeitung.
                </p>
                <p>
                  Die Zusammenarbeit mit dem Bauherrn war von Anfang an von gegenseitigem 
                  Vertrauen geprägt. Von der ersten Planung bis zur Schlüsselübergabe 
                  stand unser Team als zuverlässiger Partner zur Seite.
                </p>
                <h3>Besonderheiten</h3>
                <ul>
                  <li>Nachhaltige Holzbauweise</li>
                  <li>Individuelle Planung nach Kundenwunsch</li>
                  <li>Energieeffiziente Ausführung</li>
                  <li>Termingerechte Fertigstellung</li>
                </ul>
              </div>

              {/* Info: Mehr Bilder auf der Original-Seite */}
              <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-amber-800">
                  Weitere Bilder zu diesem Projekt finden Sie auf{' '}
                  <a 
                    href={`https://stark-inspiration.de/referenzen/projekte/${projekt.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium hover:text-amber-900"
                  >
                    stark-inspiration.de
                  </a>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-light rounded-2xl p-6 sticky top-28">
                <h3 className="font-semibold text-lg mb-6">Projektdaten</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500">Standort</div>
                      <div className="font-medium">{projekt.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500">Kategorie</div>
                      <div className="font-medium">{projekt.category}</div>
                    </div>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Bauweise</span>
                    <span className="font-medium">Holzbau</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="font-medium text-green-600">Fertiggestellt</span>
                  </div>
                </div>

                <hr className="my-6" />

                <Button href="/kontakt" variant="secondary" className="w-full">
                  Ähnliches Projekt anfragen
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t">
            {prevProjekt ? (
              <Link href={prevProjekt.href} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <ArrowLeft size={20} />
                <span>{prevProjekt.title}</span>
              </Link>
            ) : (
              <div />
            )}
            
            <Link href="/referenzen/projekte" className="text-primary font-medium">
              Alle Projekte
            </Link>
            
            {nextProjekt ? (
              <Link href={nextProjekt.href} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <span>{nextProjekt.title}</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
