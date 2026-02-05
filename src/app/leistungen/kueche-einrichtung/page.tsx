import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "Küche & Einrichtung",
  description: "Individuelle Küchen und Einrichtungen aus unserer eigenen Schreinerei. Zimmerei Stark.",
};

export default function KuecheEinrichtungPage() {
  return (
    <>
      <PageHero
        title="Küche & Einrichtung"
        subtitle="Maßgefertigte Küchen und Möbel aus unserer eigenen Schreinerei."
        badge="Schreinerei Stark"
        image="/images/projekte/projekt-interior.jpg"
      />
      <LeistungDetail
        title="Küche & Einrichtung"
        description="Unsere Schreinerei fertigt maßgeschneiderte Küchen, Möbel und Einbauten. Von der Planung bis zur Montage – alles aus einer Hand, alles nach Ihren Wünschen. Ob moderne Designerküche, klassisches Ambiente oder individuelle Sonderlösungen – wir setzen Ihre Vorstellungen in höchster Qualität um."
        features={[
          "Individuelle Küchenplanung und -fertigung",
          "Maßgefertigte Einbaumöbel",
          "Badmöbel und Wellness-Einrichtung",
          "Büro- und Arbeitszimmer",
          "Wohn- und Schlafzimmermöbel",
          "Garderoben und Eingangsbereich",
          "3D-Planung und Visualisierung",
        ]}
        benefits={[
          { title: "Maßarbeit", desc: "Jedes Möbelstück wird individuell nach Ihren Wünschen gefertigt." },
          { title: "Eigene Schreinerei", desc: "Fertigung in unserer modernen Schreinerei vor Ort." },
          { title: "Premium-Qualität", desc: "Hochwertige Materialien und erstklassige Verarbeitung." },
          { title: "Full Service", desc: "Planung, Fertigung, Lieferung und Montage aus einer Hand." },
          { title: "3D-Planung", desc: "Sehen Sie Ihr Projekt vorab in realistischer 3D-Visualisierung." },
          { title: "Ausstellung", desc: "Besichtigen Sie realisierte Küchen in unseren Ausstellungsräumen." },
        ]}
        image="/images/projekte/projekt-interior.jpg"
        relatedLinks={[
          { label: "Küchen", href: "/leistungen/kueche-einrichtung/kueche" },
          { label: "Badmöbel", href: "/leistungen/kueche-einrichtung/bad" },
          { label: "Wohnmöbel", href: "/leistungen/kueche-einrichtung/wohnen" },
          { label: "Büro", href: "/leistungen/kueche-einrichtung/arbeiten" },
        ]}
      />
    </>
  );
}
