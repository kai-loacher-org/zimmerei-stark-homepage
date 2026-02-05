export interface Leistung {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
}

export const leistungen: Leistung[] = [
  {
    id: "kompletthausbau",
    title: "KomplettHausbau",
    shortDesc: "Schlüsselfertige Einfamilien- und Mehrfamilienhäuser in höchster Qualität.",
    description: "Wir bauen Ihr Traumhaus von der Planung bis zur Schlüsselübergabe – komplett aus einer Hand. Ob Einfamilienhaus, Doppelhaus oder Mehrfamilienhaus, wir setzen Ihre Wohnträume in bester Holzbauqualität um.",
    icon: "🏡",
    href: "/leistungen/kompletthausbau",
    features: ["Einfamilienhäuser", "Mehrfamilienhäuser", "Typenhäuser", "Aktionshaus FormStark"],
  },
  {
    id: "modulbau",
    title: "ModulBau",
    shortDesc: "Schnell, flexibel, nachhaltig – modulare Bauweise für jeden Bedarf.",
    description: "Modulares Bauen vereint Geschwindigkeit mit Qualität. Die Fertigung erfolgt wetterunabhängig in unserer Produktionshalle, die Montage vor Ort dauert oft nur wenige Tage.",
    icon: "🏗️",
    href: "/leistungen/modulbau",
    features: ["Schnelle Bauzeit", "Flexible Erweiterung", "Gewerbe & Kommune", "Ferienhäuser"],
  },
  {
    id: "objektbau",
    title: "ObjektBau",
    shortDesc: "Gewerbe, Landwirtschaft, öffentliche Gebäude – professionell realisiert.",
    description: "Große Projekte erfordern erfahrene Partner. Wir realisieren Bürogebäude, Hallen, landwirtschaftliche Gebäude und öffentliche Einrichtungen termingerecht und in höchster Qualität.",
    icon: "🏢",
    href: "/leistungen/objektbau",
    features: ["Bürogebäude", "Landwirtschaft", "Öffentliche Bauten", "Objektsanierung"],
  },
  {
    id: "kueche-einrichtung",
    title: "Küche & Einrichtung",
    shortDesc: "Individuelle Inneneinrichtung aus unserer eigenen Schreinerei.",
    description: "Unsere Schreinerei fertigt maßgeschneiderte Küchen, Möbel und Einbauten. Von der Planung bis zur Montage – alles aus einer Hand, alles nach Ihren Wünschen.",
    icon: "🪑",
    href: "/leistungen/kueche-einrichtung",
    features: ["Küchen", "Einbaumöbel", "Badmöbel", "Büroeinrichtung"],
  },
  {
    id: "sanierung",
    title: "Sanierung & Umbau",
    shortDesc: "Altbausanierung, Denkmalschutz und moderne Erweiterungen.",
    description: "Wir hauchen alten Gebäuden neues Leben ein. Ob energetische Sanierung, Dachausbau oder Denkmalschutz – wir verbinden Tradition mit modernem Wohnkomfort.",
    icon: "🛠️",
    href: "/leistungen/sanierung",
    features: ["Altbausanierung", "Denkmalschutz", "Dachausbau", "Energetische Sanierung"],
  },
  {
    id: "naturwagen",
    title: "NaturWagen",
    shortDesc: "Schäferwagen und Waldkindergartenwagen – handgefertigt.",
    description: "Unsere handgefertigten NaturWagen sind echte Unikate. Ob als Schäferwagen, Waldkindergartenwagen oder mobile Unterkunft – jeder Wagen wird individuell gefertigt.",
    icon: "🚐",
    href: "/leistungen/naturwagen",
    features: ["Schäferwagen", "Waldkindergartenwagen", "Mobile Unterkünfte"],
  },
];

export interface Projekt {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year?: string;
  imageUrl?: string;
  href: string;
}

export const projekte: Projekt[] = [
  {
    id: "aelf-ansbach",
    title: "AELF Ansbach",
    description: "Amt für Ernährung, Landwirtschaft und Forsten",
    category: "ObjektBau",
    location: "Ansbach",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/139083/1/3275758712831/LAYIMG/stark_aelf-ansbach_header.jpg",
    href: "/referenzen/projekte/aelf-ansbach",
  },
  {
    id: "energiehalle-triesdorf",
    title: "Energiehalle Triesdorf",
    description: "Moderne Energiehalle für die Landwirtschaftlichen Lehranstalten",
    category: "ObjektBau",
    location: "Triesdorf",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/139304/1/3275683121759/LAYIMG/stark_energiehalle-triesdorf_header.jpg",
    href: "/referenzen/projekte/energiehalle-triesdorf",
  },
  {
    id: "hotel-krone",
    title: "Hotel Krone Oettingen",
    description: "Sanierung und Erweiterung des historischen Hotels",
    category: "Sanierung",
    location: "Oettingen",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/139104/1/3276884377117/LAYIMG/stark_hotel-krone-oettingen_header.jpg",
    href: "/referenzen/projekte/hotel-krone",
  },
  {
    id: "kindergarten-auhausen",
    title: "Kindergarten Auhausen",
    description: "Neubau eines modernen Kindergartens in Holzbauweise",
    category: "ObjektBau",
    location: "Auhausen",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/159024/1/3342816269216/LAYIMG/stark_kindergarten-auhausen_header.jpg",
    href: "/referenzen/projekte/kindergarten-auhausen",
  },
  {
    id: "lebensraum-petersaurach",
    title: "LebensRaum Petersaurach",
    description: "Mehrfamilienhaus-Projekt mit nachhaltigem Wohnkonzept",
    category: "KomplettHausbau",
    location: "Petersaurach",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/137831/1/3272587350071/LAYIMG/stark_lebensraum-petersaurach_header.jpg",
    href: "/referenzen/projekte/lebensraum-petersaurach",
  },
  {
    id: "raumteiler-erlangen",
    title: "RaumTeiler Erlangen",
    description: "Innovatives Wohnprojekt mit flexiblen Grundrissen",
    category: "ModulBau",
    location: "Erlangen",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/139062/1/3330727868174/LAYIMG/stark_raumteiler-erlangen_header.jpg",
    href: "/referenzen/projekte/raumteiler-erlangen",
  },
  {
    id: "kaeferholzhalle-auhausen",
    title: "Käferholzhalle Auhausen",
    description: "Nachhaltige Verwertung von Käferholz in moderner Halle",
    category: "ObjektBau",
    location: "Auhausen",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/139537/1/3276187724437/LAYIMG/stark_kaeferholzhalle-auhausen_header.jpg",
    href: "/referenzen/projekte/kaeferholzhalle-auhausen",
  },
  {
    id: "the-fireplace",
    title: "The Fireplace: Francis Kéré / next125",
    description: "Ausstellungsprojekt mit Star-Architekt Francis Kéré",
    category: "Spezial",
    location: "International",
    imageUrl: "https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg",
    href: "/referenzen/projekte/the-fireplace",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const companyStats: Stat[] = [
  { value: "100+", label: "Jahre Erfahrung" },
  { value: "230", label: "Mitarbeiter" },
  { value: "30", label: "Auszubildende" },
  { value: "500+", label: "Projekte" },
];

export interface Firmengruppe {
  name: string;
  description: string;
}

export const firmengruppe: Firmengruppe[] = [
  { name: "Zimmerei Stark GmbH", description: "Holzbau & Kompletthaus" },
  { name: "Schreinerei Stark GmbH", description: "Möbel & Innenausbau" },
  { name: "Stark Immo GmbH", description: "Immobilienprojekte" },
  { name: "HRV Hausverwaltung GmbH", description: "Hausverwaltung" },
  { name: "BS Holzmodulbau GmbH", description: "Modulare Bauweise" },
  { name: "ARGE BBS", description: "Arbeitsgemeinschaft" },
];

export const contactInfo = {
  hauptsitz: {
    name: "Hauptsitz Auhausen",
    street: "Oettinger Straße 41",
    zip: "86736",
    city: "Auhausen",
    phone: "+49 9832 68310-0",
    fax: "+49 9832 68310-633",
    email: "info@stark-inspiration.de",
  },
  niederlassung: {
    name: "Niederlassung Birkach",
    street: "Birkach 123",
    zip: "91567",
    city: "Herrieden",
    phone: "+49 9804 913825",
  },
};
