import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "ModulBau",
  description: "Modulare Bauweise für schnelle, flexible und nachhaltige Gebäude. Zimmerei Stark - Ihr Partner für ModulBau.",
};

export default function ModulbauPage() {
  return (
    <>
      <PageHero
        title="ModulBau"
        subtitle="Schnell, flexibel, nachhaltig – modulare Bauweise für höchste Ansprüche."
        badge="Innovation im Holzbau"
        image="/images/leistungen/holzbau.jpg"
      />
      <LeistungDetail
        title="ModulBau"
        description="Modulares Bauen vereint Geschwindigkeit mit Qualität. Die Fertigung erfolgt wetterunabhängig in unserer modernen Produktionshalle, die Montage vor Ort dauert oft nur wenige Tage. So entstehen Gebäude in Rekordzeit – ohne Kompromisse bei der Qualität. Ideal für Wohngebäude, Gewerbebauten und kommunale Einrichtungen."
        features={[
          "Wetterunabhängige Vorfertigung in der Halle",
          "Montage vor Ort in wenigen Tagen",
          "Flexible Erweiterungsmöglichkeiten",
          "Höchste Qualität durch kontrollierte Fertigung",
          "Kosteneffizienz durch serielle Produktion",
          "Nachhaltiger Holzbau mit geringem CO2-Fußabdruck",
          "Ideal für Schulen, Kitas, Büros und Wohngebäude",
        ]}
        benefits={[
          { title: "Schnelle Bauzeit", desc: "Vom Auftrag bis zur Schlüsselübergabe in Rekordzeit." },
          { title: "Wetterunabhängig", desc: "Vorfertigung in der Halle – keine Verzögerungen durch Wetter." },
          { title: "Flexibel erweiterbar", desc: "Module können später ergänzt oder umgebaut werden." },
          { title: "Kosteneffizient", desc: "Serielle Fertigung spart Zeit und Geld." },
          { title: "Höchste Präzision", desc: "Millimetergenaue Fertigung unter kontrollierten Bedingungen." },
          { title: "Nachhaltig", desc: "Holz als nachwachsender Rohstoff mit positiver CO2-Bilanz." },
        ]}
        image="/images/leistungen/holzbau.jpg"
        relatedLinks={[
          { label: "ModulBau Gewerbe", href: "/leistungen/modulbau/gewerbe" },
          { label: "Kommune & Soziales", href: "/leistungen/modulbau/kommune" },
          { label: "Ferienhäuser", href: "/leistungen/modulbau/ferienhaeuser" },
          { label: "KomplettHausbau", href: "/leistungen/kompletthausbau" },
        ]}
      />
    </>
  );
}
