import Button from "@/components/ui/Button";
import { companyStats, firmengruppe } from "@/data/content";
import { Check, Award, Leaf, Users, Building } from "lucide-react";

const values = [
  { icon: <Users size={24} />, label: "Familienunternehmen" },
  { icon: <Leaf size={24} />, label: "Nachhaltiger Holzbau" },
  { icon: <Building size={24} />, label: "Regionale Materialien" },
  { icon: <Award size={24} />, label: "Eigene Ausbildung" },
];

export default function UeberUns() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-xl">
              <div className="text-center text-white/80 p-8">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-lg">Firmengebäude / Team</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white rounded-2xl p-6 shadow-xl hidden md:block max-w-xs">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-white/80">
                Jahre Tradition und Innovation vereint in einem Familienunternehmen.
              </div>
            </div>

            {/* Accent Shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <span className="badge-primary mb-4">Über uns</span>
            <h2 className="section-title mb-6">
              Tradition trifft Innovation
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg">
                Seit 1920 verbinden wir als Familienunternehmen in der fünften Generation 
                traditionelles Handwerk mit modernster Technik. Mit über 230 Mitarbeitern 
                sind wir einer der größten Holzbau-Spezialisten in der Region.
              </p>
              <p>
                Nachhaltigkeit, Qualität und regionale Wertschöpfung sind die Grundpfeiler 
                unserer Arbeit. Wir investieren kontinuierlich in die Weiterentwicklung 
                unseres Betriebes und die Ausbildung junger Fachkräfte.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-light"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <span className="font-medium text-gray-900">{value.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button href="/ueber-uns" variant="secondary" size="lg">
              Mehr über uns erfahren
            </Button>
          </div>
        </div>

        {/* Firmengruppe */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Die Firmengruppe STARK
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unter dem Dach der Firmengruppe vereinen wir spezialisierte Unternehmen 
              für jeden Aspekt des Bauens und Wohnens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {firmengruppe.map((firma, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl hover:bg-light transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Check size={20} className="text-primary" />
                </div>
                <div className="font-medium text-gray-900 text-sm">{firma.name}</div>
                <div className="text-xs text-gray-500 mt-1">{firma.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
