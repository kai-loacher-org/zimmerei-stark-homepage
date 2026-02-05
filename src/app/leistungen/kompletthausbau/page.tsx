import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "KomplettHausbau",
  description: "Schlüsselfertige Einfamilien- und Mehrfamilienhäuser in höchster Holzbauqualität. Zimmerei Stark - Ihr Partner für den Hausbau.",
};

export default function KompletthausbauPage() {
  return (
    <>
      <PageHero
        title="KomplettHausbau"
        subtitle="Schlüsselfertige Häuser in bester Holzbaukunst – von der ersten Idee bis zur Übergabe."
        badge="Unsere Kernkompetenz"
        image="/images/hero/holzhaus-1.jpg"
      />
      <LeistungDetail
        title="KomplettHausbau"
        description="Wir bauen Ihr Traumhaus von der Planung bis zur Schlüsselübergabe – komplett aus einer Hand. Als eines der führenden Holzbau-Unternehmen in der Region verbinden wir traditionelles Handwerk mit modernster Technik. Ob Einfamilienhaus, Doppelhaus oder Mehrfamilienhaus – wir setzen Ihre Wohnträume in höchster Qualität um."
        features={[
          "Individuelle Planung nach Ihren Wünschen",
          "Schlüsselfertige Ausführung aus einer Hand",
          "Höchste Holzbauqualität mit geprüften Details",
          "Energieeffiziente Bauweise (KfW-Standard)",
          "Festpreisgarantie und Bauzeitgarantie",
          "Eigene Architekten und Statiker",
          "Bemusterung in unseren Ausstellungen",
        ]}
        benefits={[
          { title: "Alles aus einer Hand", desc: "Von der Planung über die Ausführung bis zur Übergabe – ein Ansprechpartner für alles." },
          { title: "Festpreisgarantie", desc: "Keine bösen Überraschungen – der vereinbarte Preis gilt." },
          { title: "Bauzeitgarantie", desc: "Wir halten unsere Termine. Pünktlich in Ihr neues Zuhause." },
          { title: "Nachhaltiger Holzbau", desc: "Ökologisch bauen mit nachwachsenden Rohstoffen und regionalen Materialien." },
          { title: "Energieeffizienz", desc: "Modernste Technik für niedrige Energiekosten und hohen Wohnkomfort." },
          { title: "100+ Jahre Erfahrung", desc: "Vertrauen Sie auf Expertise aus fünf Generationen Holzbau." },
        ]}
        image="/images/hero/holzhaus-1.jpg"
        relatedLinks={[
          { label: "Einfamilienhäuser", href: "/leistungen/kompletthausbau/einfamilienhaeuser" },
          { label: "Mehrfamilienhäuser", href: "/leistungen/kompletthausbau/mehrfamilienhaeuser" },
          { label: "Typenhäuser", href: "/leistungen/kompletthausbau/typenhaeuser" },
          { label: "ModulBau", href: "/leistungen/modulbau" },
        ]}
      />
    </>
  );
}
