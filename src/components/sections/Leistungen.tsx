import Link from "next/link";
import { leistungen } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Leistungen() {
  return (
    <section className="py-24 bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-accent mb-4">Unsere Expertise</span>
          <h2 className="section-title mb-4">
            Vielfalt als Markenzeichen
          </h2>
          <p className="section-subtitle mx-auto">
            Vom Einfamilienhaus bis zum Gewerbeobjekt – wir bieten Ihnen das volle 
            Spektrum des modernen Holzbaus mit über 100 Jahren Erfahrung.
          </p>
        </div>

        {/* Leistungen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leistungen.map((leistung) => (
            <Link
              key={leistung.id}
              href={leistung.href}
              className="group card overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image with Icon Overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/leistungen/leistungen-hero.jpg"
                  alt={leistung.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {leistung.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {leistung.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {leistung.shortDesc}
                </p>

                {/* Features */}
                {leistung.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leistung.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-light text-secondary-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-secondary font-medium group-hover:text-primary transition-colors">
                  Mehr erfahren
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button href="/leistungen" variant="outline-dark" size="lg">
            Alle Leistungen ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
