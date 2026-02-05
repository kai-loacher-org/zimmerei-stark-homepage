import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { companyStats, firmengruppe } from "@/data/content";
import { Check, Award, Leaf, Users, Building, Target, Heart, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Seit 1920 verbinden wir traditionelles Handwerk mit modernster Technik. Lernen Sie die Zimmerei Stark kennen.",
};

const timeline = [
  { year: "1920", title: "Gründung", desc: "Gründung der Zimmerei durch Johann Stark" },
  { year: "1950", title: "2. Generation", desc: "Übernahme durch Josef Stark" },
  { year: "1980", title: "3. Generation", desc: "Ausbau zum Holzbau-Unternehmen" },
  { year: "2000", title: "4. Generation", desc: "Gründung weiterer Tochterfirmen" },
  { year: "2020", title: "100 Jahre", desc: "Jubiläum und 5. Generation" },
];

const values = [
  { icon: <Target size={24} />, title: "Qualität", desc: "Höchste Ansprüche an Materialien und Verarbeitung" },
  { icon: <Heart size={24} />, title: "Leidenschaft", desc: "Handwerk mit Herzblut und Hingabe" },
  { icon: <Users size={24} />, title: "Teamgeist", desc: "Gemeinsam stark – 230 Mitarbeiter" },
  { icon: <Leaf size={24} />, title: "Nachhaltigkeit", desc: "Verantwortung für Mensch und Umwelt" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              Über uns
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tradition trifft
              <br />
              <span className="text-accent">Innovation</span>
            </h1>
            <p className="text-xl text-white/80">
              Seit über 100 Jahren verbinden wir traditionelles Handwerk mit 
              modernster Technik. Als Familienunternehmen in der fünften Generation 
              stehen wir für Qualität, Zuverlässigkeit und Nachhaltigkeit.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Unsere Geschichte</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Was 1920 als kleine Dorfzimmerei begann, ist heute ein modernes 
                  Unternehmen mit über 230 Mitarbeitern. Über fünf Generationen hinweg 
                  haben wir uns stetig weiterentwickelt – ohne dabei unsere Wurzeln 
                  zu vergessen.
                </p>
                <p>
                  Heute bauen wir nicht nur Häuser, sondern schaffen Lebensräume. 
                  Von der ersten Skizze bis zur Schlüsselübergabe begleiten wir unsere 
                  Kunden durch jeden Schritt des Bauprozesses.
                </p>
                <p>
                  Nachhaltigkeit ist für uns kein Trend, sondern Überzeugung. Wir 
                  arbeiten mit regionalen Materialien, setzen auf erneuerbare 
                  Ressourcen und investieren in die Ausbildung junger Menschen.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img 
                src="/images/about/ueber-uns.jpg" 
                alt="Zimmerei Stark Geschichte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Meilensteine</h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm inline-block">
                      <div className="text-accent font-bold text-2xl">{item.year}</div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 hidden md:block"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Unsere Werte</h2>
            <p className="section-subtitle mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firmengruppe */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Die Firmengruppe STARK
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Unter unserem Dach vereinen wir spezialisierte Unternehmen 
              für jeden Aspekt des Bauens und Wohnens.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {firmengruppe.map((firma, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/20 transition-colors">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={20} className="text-gray-900" />
                </div>
                <div className="font-medium text-sm">{firma.name}</div>
                <div className="text-xs text-white/60 mt-1">{firma.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Besuchen Sie unsere Ausstellung oder vereinbaren Sie einen Beratungstermin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/kontakt" variant="secondary" size="lg">
              Kontakt aufnehmen
            </Button>
            <Button href="/ueber-uns/ausstellungen" variant="outline-dark" size="lg">
              Ausstellungen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
