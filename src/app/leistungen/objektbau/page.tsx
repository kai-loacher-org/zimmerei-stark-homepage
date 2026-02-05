import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LeistungDetail from "@/components/sections/LeistungDetail";

export const metadata: Metadata = {
  title: "ObjektBau",
  description: "Gewerbegebäude, landwirtschaftliche Bauten und öffentliche Einrichtungen in Holzbauweise. Zimmerei Stark.",
};

export default function ObjektbauPage() {
  return (
    <>
      <PageHero
        title="ObjektBau"
        subtitle="Große Projekte erfordern erfahrene Partner – Gewerbe, Landwirtschaft, öffentliche Bauten."
        badge="Gewerblicher Holzbau"
        image="/images/projekte/projekt-modern.jpg"
      />
      <LeistungDetail
        title="ObjektBau"
        description="Große Projekte erfordern erfahrene Partner. Wir realisieren Bürogebäude, Hallen, landwirtschaftliche Gebäude und öffentliche Einrichtungen termingerecht und in höchster Qualität. Mit über 100 Jahren Erfahrung und 230 Mitarbeitern sind wir Ihr verlässlicher Partner für anspruchsvolle Objektbauten."
        features={[
          "Bürogebäude und Verwaltungsbauten",
          "Produktionshallen und Lagerhallen",
          "Landwirtschaftliche Gebäude und Ställe",
          "Schulen, Kindergärten und Turnhallen",
          "Hotels und Gastronomie",
          "Objektsanierung und Erweiterung",
          "Schlüsselfertig oder als Einzelgewerk",
        ]}
        benefits={[
          { title: "Erfahrung", desc: "Hunderte realisierte Objektbauten in über 100 Jahren." },
          { title: "Kapazität", desc: "230 Mitarbeiter für Projekte jeder Größenordnung." },
          { title: "Termintreue", desc: "Professionelles Projektmanagement für pünktliche Fertigstellung." },
          { title: "Qualität", desc: "Höchste Standards in Material und Ausführung." },
          { title: "Nachhaltigkeit", desc: "Holzbau mit positivem Einfluss auf Klima und Umwelt." },
          { title: "Full Service", desc: "Von der Planung bis zur Übergabe – alles aus einer Hand." },
        ]}
        image="/images/projekte/projekt-modern.jpg"
        relatedLinks={[
          { label: "Gewerbebauten", href: "/leistungen/objektbau/gewerbe" },
          { label: "Landwirtschaft", href: "/leistungen/objektbau/landwirtschaft" },
          { label: "Objektsanierung", href: "/leistungen/objektbau/sanierung" },
          { label: "Referenzen", href: "/referenzen/projekte" },
        ]}
      />
    </>
  );
}
