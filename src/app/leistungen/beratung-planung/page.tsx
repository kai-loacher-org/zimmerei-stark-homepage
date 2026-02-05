import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "Beratung & Planung",
  description: "Professionelle Beratung und Planung für Ihr Bauprojekt. Zimmerei Stark.",
};

export default function BeratungPlanungPage() {
  return (
    <>
      <PageHero
        title="Beratung & Planung"
        subtitle="Von der ersten Idee bis zum fertigen Plan – wir begleiten Sie durch jede Phase."
        badge="Der erste Schritt"
      />
      <LeistungDetail
        title="Beratung & Planung"
        description="Jedes erfolgreiche Bauprojekt beginnt mit einer guten Planung. Unsere erfahrenen Architekten und Planer nehmen sich Zeit für Ihre Wünsche und entwickeln gemeinsam mit Ihnen das optimale Konzept. Von der ersten Skizze über die Baugenehmigung bis zur detaillierten Ausführungsplanung – bei uns sind Sie in guten Händen."
        features={[
          "Individuelle Beratungsgespräche",
          "Architektonische Entwürfe",
          "3D-Visualisierungen",
          "Statische Berechnungen",
          "Energieberatung und KfW-Beratung",
          "Unterstützung bei Baugenehmigungen",
          "Kostenplanung und Budgetierung",
        ]}
        benefits={[
          { title: "Erfahrung", desc: "Über 100 Jahre Erfahrung fließen in jede Planung ein." },
          { title: "Alles aus einer Hand", desc: "Planung und Ausführung perfekt abgestimmt." },
          { title: "3D-Visualisierung", desc: "Sehen Sie Ihr Projekt, bevor es gebaut wird." },
          { title: "Fördermittelberatung", desc: "Wir kennen alle aktuellen Förderprogramme." },
          { title: "Festpreisgarantie", desc: "Transparente Kosten von Anfang an." },
          { title: "Persönlich", desc: "Ein Ansprechpartner für Ihr gesamtes Projekt." },
        ]}
        image="/images/leistungen/leistungen-hero.jpg"
        relatedLinks={[
          { label: "KomplettHausbau", href: "/leistungen/kompletthausbau" },
          { label: "ModulBau", href: "/leistungen/modulbau" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />
    </>
  );
}
