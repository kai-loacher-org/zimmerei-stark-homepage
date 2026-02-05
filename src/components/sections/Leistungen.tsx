import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Leistungen() {
  return (
    <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge-accent mb-4">Leistungen</span>
          <h2 className="section-title mb-6">
            Vielfalt als Markenzeichen
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Unsere Unternehmensgruppe bietet nicht nur Zimmerei- und 
            Schreinerei-Dienstleistungen, sondern auch zahlreiche Gewerke 
            wie Maurer, Maler, Spengler und vieles mehr. Zudem sind wir 
            mit Stark Immo auf Wohnungsbau spezialisiert.
          </p>
          <Button href="/leistungen" variant="primary" size="lg">
            Unsere Leistungen
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
