import { Metadata } from "next";
import Link from "next/link";
import { leistungen } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Unser umfangreiches Leistungsspektrum: KomplettHausbau, ModulBau, ObjektBau, Küche & Einrichtung und mehr.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            Unsere Expertise
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Leistungen
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Vom Einfamilienhaus bis zum Gewerbeobjekt – wir bieten Ihnen das volle 
            Spektrum des modernen Holzbaus.
          </p>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {leistungen.map((leistung) => (
              <Link
                key={leistung.id}
                href={leistung.href}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl">
                  {leistung.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {leistung.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {leistung.description}
                  </p>

                  {/* Features */}
                  {leistung.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leistung.features.map((feature, index) => (
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
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Mehr erfahren
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Weitere Leistungen</h2>
            <p className="section-subtitle mx-auto">
              Neben unseren Kernkompetenzen bieten wir zahlreiche ergänzende Dienstleistungen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Sägewerk",
              "Lohnabbund",
              "Zimmererarbeiten",
              "Dachstuhl",
              "Innenausbau",
              "Dachausbau",
              "Maurerarbeiten",
              "Malerarbeiten",
              "Putzarbeiten",
              "Treppenbau",
              "Böden",
              "Innentüren",
              "Fenster",
              "Haustüren",
              "Sonnenschutz",
              "Außenanlagen",
              "Carports",
              "Garagen",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Welches Projekt planen Sie?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Erzählen Sie uns von Ihrem Vorhaben – wir beraten Sie gerne unverbindlich.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Beratung anfragen
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
