import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "NaturWagen",
  description: "Handgefertigte Schäferwagen und Waldkindergartenwagen. Zimmerei Stark.",
};

export default function NaturwagenPage() {
  return (
    <>
      <PageHero
        title="NaturWagen"
        subtitle="Handgefertigte Schäferwagen und Waldkindergartenwagen – echte Unikate."
        badge="Handwerk mit Herz"
        image="/images/leistungen/holzbau.jpg"
      />
      <LeistungDetail
        title="NaturWagen"
        description="Unsere handgefertigten NaturWagen sind echte Unikate. Ob als romantischer Schäferwagen, als Waldkindergartenwagen oder als mobile Unterkunft – jeder Wagen wird individuell nach Ihren Wünschen gefertigt. Traditionelle Handwerkskunst trifft auf moderne Ausstattung."
        features={[
          "Klassische Schäferwagen",
          "Waldkindergartenwagen (TÜV-geprüft)",
          "Bauwagen und mobile Unterkünfte",
          "Individuelle Sonderanfertigungen",
          "Komplette Innenausstattung",
          "Isolierung für ganzjährige Nutzung",
          "Traditionelle Holzbauweise",
        ]}
        benefits={[
          { title: "Handgefertigt", desc: "Jeder Wagen ist ein Unikat aus unserer Werkstatt." },
          { title: "Individuell", desc: "Ausstattung und Design nach Ihren Wünschen." },
          { title: "Qualität", desc: "Hochwertige Materialien für lange Lebensdauer." },
          { title: "TÜV-geprüft", desc: "Unsere Kindergartenwagen erfüllen alle Sicherheitsstandards." },
          { title: "Ganzjährig nutzbar", desc: "Optionale Isolierung für jede Jahreszeit." },
          { title: "Lieferung", desc: "Wir liefern Ihren Wagen bis vor die Tür." },
        ]}
        image="/images/leistungen/holzbau.jpg"
        relatedLinks={[
          { label: "Schäferwagen", href: "/leistungen/naturwagen" },
          { label: "Waldkindergartenwagen", href: "/leistungen/naturwagen" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />
    </>
  );
}
