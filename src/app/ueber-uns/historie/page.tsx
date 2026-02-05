import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Historie",
  description: "Über 100 Jahre Zimmerei Stark - unsere Geschichte von 1920 bis heute.",
};

const timeline = [
  {
    year: "1920",
    title: "Die Gründung",
    desc: "Johann Stark gründet eine kleine Zimmerei in Auhausen. Mit Handwerkskunst und Leidenschaft legt er den Grundstein für ein Familienunternehmen.",
    highlight: true,
  },
  {
    year: "1950",
    title: "2. Generation",
    desc: "Josef Stark übernimmt den Betrieb und erweitert ihn um eine Schreinerei. Der Fokus liegt auf Qualität und Kundenzufriedenheit.",
  },
  {
    year: "1975",
    title: "Modernisierung",
    desc: "Investition in moderne Maschinen und Erweiterung der Produktionshallen. Das Unternehmen wächst stetig.",
  },
  {
    year: "1985",
    title: "3. Generation",
    desc: "Die dritte Generation übernimmt und entwickelt das Unternehmen zum Full-Service-Anbieter im Holzbau.",
  },
  {
    year: "1995",
    title: "Expansion",
    desc: "Gründung weiterer Tochterfirmen und Eröffnung des Standorts Birkach. Die Mitarbeiterzahl wächst auf über 100.",
  },
  {
    year: "2005",
    title: "4. Generation",
    desc: "Martin Stark führt das Unternehmen in die Zukunft. Fokus auf nachhaltiges Bauen und moderne Holzbautechnik.",
  },
  {
    year: "2015",
    title: "ModulBau-Pionier",
    desc: "Start des ModulBau-Geschäftsbereichs. Vorfertigung in der Halle für schnellere Bauzeiten und höchste Qualität.",
  },
  {
    year: "2020",
    title: "100 Jahre STARK",
    desc: "Jubiläum: 100 Jahre Zimmerei Stark. 230 Mitarbeiter, 6 Unternehmen, tausende realisierte Projekte.",
    highlight: true,
  },
  {
    year: "Heute",
    title: "5. Generation",
    desc: "Die fünfte Generation steht bereit. Mit Tradition und Innovation in die Zukunft – für die nächsten 100 Jahre.",
    highlight: true,
  },
];

export default function HistoriePage() {
  return (
    <>
      <PageHero
        title="Unsere Historie"
        subtitle="Über 100 Jahre Handwerkskunst – von der kleinen Dorfzimmerei zum modernen Holzbau-Unternehmen."
        badge="Seit 1920"
        image="/images/about/ueber-uns.jpg"
      />

      {/* Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="flex gap-8">
                    {/* Year Bubble */}
                    <div className="flex-shrink-0 hidden md:block">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm ${
                        item.highlight 
                          ? "bg-accent text-gray-900" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-grow p-6 rounded-2xl ${
                      item.highlight ? "bg-primary text-white" : "bg-light"
                    }`}>
                      <div className="md:hidden text-accent font-bold mb-2">{item.year}</div>
                      <h3 className={`text-xl font-semibold mb-2 ${item.highlight ? "text-accent" : ""}`}>
                        {item.title}
                      </h3>
                      <p className={item.highlight ? "text-white/80" : "text-gray-600"}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl text-gray-900 mb-6">
              „Was 1920 als kleine Zimmerei begann, ist heute ein modernes Unternehmen mit 
              über 230 Mitarbeitern. Doch eines ist geblieben: unsere Leidenschaft für 
              erstklassiges Handwerk."
            </blockquote>
            <p className="text-gray-500">— Martin Stark, Geschäftsführer</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title mb-4">Schreiben Sie Geschichte mit uns</h2>
          <p className="section-subtitle mx-auto mb-8">
            Werden Sie Teil unserer Geschichte – als Kunde oder als Mitarbeiter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/kontakt" variant="secondary" size="lg">
              Projekt anfragen
            </Button>
            <Button href="/karriere" variant="outline-dark" size="lg">
              Karriere bei STARK
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
