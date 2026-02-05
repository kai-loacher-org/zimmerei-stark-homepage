import Link from "next/link";
import { projekte } from "@/data/content";
import Button from "@/components/ui/Button";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Referenzen() {
  // Show only first 4 projects on homepage
  const featuredProjekte = projekte.slice(0, 4);

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Referenzen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unsere Projekte
          </h2>
          <p className="text-lg text-white/70">
            Von privaten Wohnhäusern bis zu öffentlichen Gebäuden – 
            ein Auszug unserer realisierten Projekte.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjekte.map((projekt) => (
            <Link
              key={projekt.id}
              href={projekt.href}
              className="group relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={`/images/projekte/projekt-${['holzhaus', 'modern', 'bau', 'interior'][featuredProjekte.indexOf(projekt) % 4]}.jpg`}
                  alt={projekt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent flex flex-col justify-end p-6">
                {/* Category Badge */}
                <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-2 py-1 rounded mb-2 w-fit">
                  {projekt.category}
                </span>
                
                {/* Title */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                  {projekt.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-white/60">
                  <MapPin size={14} />
                  {projekt.location}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Stats */}
            <div className="flex items-center gap-12 text-center">
              <div>
                <div className="text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/60">Realisierte Projekte</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-4xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/60">Referenz-Objekte</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button href="/referenzen/projekte" variant="outline" size="lg">
              Alle Projekte ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
