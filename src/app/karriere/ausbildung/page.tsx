import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { GraduationCap, Users, Award, TrendingUp, Clock, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "Ausbildung",
  description: "Ausbildung bei Zimmerei Stark - starte deine Karriere im Handwerk. 30 Azubis, viele Möglichkeiten.",
};

const ausbildungsberufe = [
  {
    title: "Zimmerer/in",
    duration: "3 Jahre",
    description: "Der klassische Holzbauberuf – von Dachstühlen bis zu kompletten Häusern.",
    highlights: ["Traditionelles Handwerk", "Modernste Technik", "Vielseitige Projekte"],
  },
  {
    title: "Schreiner/in",
    duration: "3 Jahre",
    description: "Vom Möbelstück bis zur Einbauküche – Präzision und Kreativität vereint.",
    highlights: ["Möbelbau", "CNC-Technik", "Individuelle Fertigung"],
  },
  {
    title: "Technische/r Zeichner/in",
    duration: "3 Jahre",
    description: "Pläne und 3D-Modelle für unsere Bauprojekte erstellen.",
    highlights: ["CAD-Software", "3D-Planung", "Teamarbeit mit Architekten"],
  },
  {
    title: "Kaufmann/-frau für Büromanagement",
    duration: "3 Jahre",
    description: "Organisation, Kundenbetreuung und Verwaltung.",
    highlights: ["Kundenkontakt", "Projektorganisation", "Teamarbeit"],
  },
];

const benefits = [
  { icon: <Euro size={24} />, title: "Faire Vergütung", desc: "Übertarifliche Ausbildungsvergütung" },
  { icon: <GraduationCap size={24} />, title: "Förderung", desc: "Zusatzkurse und Weiterbildungen" },
  { icon: <Users size={24} />, title: "30 Azubis", desc: "Starke Gemeinschaft unter Gleichaltrigen" },
  { icon: <TrendingUp size={24} />, title: "Übernahme", desc: "Hohe Übernahmequote nach der Ausbildung" },
  { icon: <Award size={24} />, title: "Auszeichnungen", desc: "Regelmäßig beste Azubis der Region" },
  { icon: <Clock size={24} />, title: "Work-Life", desc: "Geregelte Arbeitszeiten" },
];

export default function AusbildungPage() {
  return (
    <>
      <PageHero
        title="Ausbildung bei STARK"
        subtitle="Starte deine Karriere im Handwerk – mit 30 anderen Azubis und über 100 Jahren Erfahrung im Rücken."
        badge="Deine Zukunft"
        image="/images/team/karriere.jpg"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600">
              Mit 30 Auszubildenden sind wir einer der größten Ausbildungsbetriebe der Region. 
              Bei uns lernst du nicht nur einen Beruf – du wirst Teil einer Familie, die seit 
              über 100 Jahren für Qualität und Handwerkskunst steht.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-light rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ausbildungsberufe */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Unsere Ausbildungsberufe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ausbildungsberufe.map((beruf, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{beruf.title}</h3>
                  <span className="bg-accent/20 text-secondary-700 text-sm px-3 py-1 rounded-full">
                    {beruf.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{beruf.description}</p>
                <div className="flex flex-wrap gap-2">
                  {beruf.highlights.map((highlight, idx) => (
                    <span key={idx} className="text-xs bg-light text-gray-700 px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">So läuft's ab</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "1", title: "Bewerbung", desc: "Schick uns deine Unterlagen – online oder per Post." },
                { step: "2", title: "Kennenlernen", desc: "Wir laden dich zu einem persönlichen Gespräch ein." },
                { step: "3", title: "Schnuppertag", desc: "Erlebe einen Tag bei uns und lerne dein Team kennen." },
                { step: "4", title: "Ausbildungsstart", desc: "Willkommen im Team! Deine Ausbildung beginnt." },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Bereit für deine Zukunft?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Bewirb dich jetzt für eine Ausbildung bei STARK. Wir freuen uns auf dich!
          </p>
          <Button href="/karriere/bewerbung" variant="primary" size="lg" className="bg-accent text-gray-900 hover:bg-accent-600">
            Jetzt bewerben
          </Button>
        </div>
      </section>
    </>
  );
}
