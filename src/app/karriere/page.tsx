import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { companyStats } from "@/data/content";
import { Users, GraduationCap, Heart, TrendingUp, MapPin, Clock, Euro, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Karriere",
  description: "Karriere bei Zimmerei Stark - Stellenangebote, Ausbildung und Bewerbung. Werden Sie Teil unseres Teams.",
};

const benefits = [
  { icon: <Users size={24} />, title: "Familiäres Arbeitsklima", desc: "Flache Hierarchien und ein starkes Miteinander" },
  { icon: <Euro size={24} />, title: "Faire Vergütung", desc: "Leistungsgerechte Bezahlung und Zusatzleistungen" },
  { icon: <GraduationCap size={24} />, title: "Weiterbildung", desc: "Individuelle Entwicklungsmöglichkeiten" },
  { icon: <Heart size={24} />, title: "Sinnvolle Arbeit", desc: "Nachhaltige Projekte, die Bestand haben" },
  { icon: <Clock size={24} />, title: "Work-Life-Balance", desc: "Flexible Arbeitszeiten und moderne Arbeitszeitmodelle" },
  { icon: <TrendingUp size={24} />, title: "Sichere Perspektive", desc: "100+ Jahre Unternehmensgeschichte" },
];

const jobs = [
  { title: "Zimmerer/in (m/w/d)", location: "Auhausen", type: "Vollzeit" },
  { title: "Schreiner/in (m/w/d)", location: "Auhausen", type: "Vollzeit" },
  { title: "Bauleiter/in (m/w/d)", location: "Auhausen", type: "Vollzeit" },
  { title: "Technischer Zeichner/in (m/w/d)", location: "Auhausen", type: "Vollzeit" },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        title="Karriere bei STARK"
        subtitle="Werden Sie Teil unseres Teams – 230 Mitarbeiter, 30 Auszubildende, unzählige Möglichkeiten."
        badge="STARKe Karriere"
        image="/images/team/karriere.jpg"
      />

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">{companyStats[1].value}</div>
              <div className="text-gray-500">Mitarbeiter</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">{companyStats[2].value}</div>
              <div className="text-gray-500">Auszubildende</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">6</div>
              <div className="text-gray-500">Unternehmen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">2</div>
              <div className="text-gray-500">Standorte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Das bieten wir Ihnen</h2>
            <p className="section-subtitle mx-auto">
              Bei uns sind Sie nicht nur Mitarbeiter – Sie sind Teil der STARK-Familie.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Aktuelle Stellenangebote</h2>
            <p className="section-subtitle mx-auto">
              Finden Sie Ihren Traumjob bei uns.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <Link
                key={index}
                href="/karriere/jobs"
                className="block p-6 bg-light rounded-xl hover:bg-primary hover:text-white transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-white/70 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm" className="group-hover:bg-white group-hover:text-primary">
                    Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/karriere/jobs" variant="outline-dark" size="lg">
              Alle Stellenangebote
            </Button>
          </div>
        </div>
      </section>

      {/* Ausbildung */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-white/10 text-accent mb-4">Nachwuchs gesucht</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ausbildung bei STARK
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Mit 30 Auszubildenden gehören wir zu den größten Ausbildungsbetrieben der Region. 
                Starte deine Karriere bei uns – mit einer fundierten Ausbildung in einem zukunftssicheren Beruf.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-gray-900 text-sm">✓</div>
                  <span>Zimmerer/in</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-gray-900 text-sm">✓</div>
                  <span>Schreiner/in</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-gray-900 text-sm">✓</div>
                  <span>Technische/r Zeichner/in</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-gray-900 text-sm">✓</div>
                  <span>Kaufmann/-frau für Büromanagement</span>
                </li>
              </ul>
              <Button href="/karriere/ausbildung" variant="primary" size="lg">
                Mehr zur Ausbildung
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" 
                alt="Ausbildung bei Zimmerei Stark"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Bewerben Sie sich jetzt – schnell und unkompliziert über unser Online-Formular.
          </p>
          <Button href="/karriere/bewerbung" variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
            Jetzt bewerben
          </Button>
        </div>
      </section>
    </>
  );
}
