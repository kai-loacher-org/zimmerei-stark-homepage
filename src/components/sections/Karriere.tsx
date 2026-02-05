import Button from "@/components/ui/Button";
import { companyStats } from "@/data/content";
import { Users, GraduationCap, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Users size={24} />,
    title: "Familiäres Arbeitsklima",
    desc: "Flache Hierarchien und ein starkes Miteinander",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Ausbildung & Entwicklung",
    desc: "30 Auszubildende und individuelle Weiterbildung",
  },
  {
    icon: <Heart size={24} />,
    title: "Sinnvolle Arbeit",
    desc: "Nachhaltige Projekte, die Bestand haben",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Sichere Perspektive",
    desc: "100+ Jahre Unternehmensgeschichte",
  },
];

export default function Karriere() {
  return (
    <section className="py-24 bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="badge-primary mb-4">Karriere</span>
            <h2 className="section-title mb-6">
              STARKe Karriere.
              <br />
              <span className="text-secondary">STARKes Team.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Unser Team von {companyStats[1].value} Mitarbeitenden, darunter {companyStats[2].value} Auszubildende, 
              zeichnet sich durch hohe Fachkompetenz und Einsatzbereitschaft aus. 
              Werden Sie Teil unserer STARKen Gemeinschaft.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/karriere/jobs" variant="secondary" size="lg">
                Stellenangebote
              </Button>
              <Button href="/karriere/ausbildung" variant="outline-dark" size="lg">
                Ausbildung
              </Button>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
              <div className="text-center text-white/80 p-8">
                <div className="text-6xl mb-4">👷‍♂️</div>
                <p className="text-lg">Team bei der Arbeit</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-xs text-gray-500">Auszubildende</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-accent text-gray-900 rounded-xl p-4 shadow-lg hidden md:block">
              <div className="text-sm font-semibold">Jetzt bewerben!</div>
              <div className="text-xs opacity-70">Online in 5 Minuten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
