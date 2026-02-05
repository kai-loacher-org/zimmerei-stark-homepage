import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "Sanierung & Umbau",
  description: "Altbausanierung, Denkmalschutz und energetische Modernisierung. Zimmerei Stark.",
};

export default function SanierungPage() {
  return (
    <>
      <PageHero
        title="Sanierung & Umbau"
        subtitle="Wir hauchen alten Gebäuden neues Leben ein – mit Respekt vor der Geschichte."
        badge="Tradition bewahren"
      />
      <LeistungDetail
        title="Sanierung & Umbau"
        description="Alte Gebäude haben Charakter – und verdienen eine behutsame Modernisierung. Ob Altbausanierung, denkmalgeschützte Objekte oder energetische Ertüchtigung: Wir verbinden traditionelles Handwerk mit modernem Know-how und schaffen Wohnraum, der Geschichte und Zukunft vereint."
        features={[
          "Altbausanierung und Modernisierung",
          "Denkmalschutz-gerechte Sanierung",
          "Energetische Sanierung",
          "Dachsanierung und Dachausbau",
          "Fassadensanierung",
          "An- und Umbauten",
          "Barrierefreier Umbau",
        ]}
        benefits={[
          { title: "Erfahrung", desc: "Hunderte sanierte Objekte in über 100 Jahren." },
          { title: "Denkmalschutz", desc: "Expertise im Umgang mit historischer Bausubstanz." },
          { title: "Energieeffizienz", desc: "Modernste Dämmtechnik für alte Gebäude." },
          { title: "Wertsteigerung", desc: "Sanierung erhöht den Wert Ihrer Immobilie." },
          { title: "Fördermittel", desc: "Wir kennen alle Förderprogramme für Sanierung." },
          { title: "Handwerkskunst", desc: "Traditionelle Techniken, perfekt ausgeführt." },
        ]}
        image="/images/projekte/projekt-holzhaus.jpg"
        relatedLinks={[
          { label: "ObjektBau", href: "/leistungen/objektbau" },
          { label: "Referenzen", href: "/referenzen/projekte" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />
    </>
  );
}
