export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Firmengruppe STARK", href: "/ueber-uns/firmengruppe" },
      { label: "Historie", href: "/ueber-uns/historie" },
      { label: "Qualitätsanspruch", href: "/ueber-uns/qualitaet" },
      { label: "Musterhäuser", href: "/ueber-uns/musterhaeuser" },
      { label: "Ausstellungen", href: "/ueber-uns/ausstellungen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Beratung & Planung", href: "/leistungen/beratung-planung" },
      { label: "KomplettHausbau", href: "/leistungen/kompletthausbau" },
      { label: "ModulBau", href: "/leistungen/modulbau" },
      { label: "ObjektBau", href: "/leistungen/objektbau" },
      { label: "Küche & Einrichtung", href: "/leistungen/kueche-einrichtung" },
      { label: "NaturWagen", href: "/leistungen/naturwagen" },
      { label: "Weitere Leistungen", href: "/leistungen/weitere" },
    ],
  },
  {
    label: "Referenzen",
    href: "/referenzen",
    children: [
      { label: "Projekte", href: "/referenzen/projekte" },
      { label: "Bilder", href: "/referenzen/bilder" },
      { label: "Videos", href: "/referenzen/videos" },
    ],
  },
  {
    label: "Karriere",
    href: "/karriere",
    children: [
      { label: "STARKer Arbeitgeber", href: "/karriere/arbeitgeber" },
      { label: "Stellenangebote", href: "/karriere/jobs" },
      { label: "Ausbildung", href: "/karriere/ausbildung" },
      { label: "Online-Bewerbung", href: "/karriere/bewerbung" },
    ],
  },
  {
    label: "Aktuelles",
    href: "/aktuelles",
    children: [
      { label: "News", href: "/aktuelles/news" },
      { label: "Termine", href: "/aktuelles/termine" },
    ],
  },
];

export const footerNavigation = {
  leistungen: [
    { label: "KomplettHausbau", href: "/leistungen/kompletthausbau" },
    { label: "ModulBau", href: "/leistungen/modulbau" },
    { label: "ObjektBau", href: "/leistungen/objektbau" },
    { label: "Küche & Einrichtung", href: "/leistungen/kueche-einrichtung" },
    { label: "NaturWagen", href: "/leistungen/naturwagen" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Historie", href: "/ueber-uns/historie" },
    { label: "Karriere", href: "/karriere" },
    { label: "News", href: "/aktuelles/news" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/starkinspiration/", icon: "instagram" },
  { label: "Facebook", href: "https://de-de.facebook.com/stark.inspiration/", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCf2tOvgo_5ISvYFHJSXpqmw", icon: "youtube" },
  { label: "Pinterest", href: "https://www.pinterest.de/STARK_Inspiration/", icon: "pinterest" },
];
