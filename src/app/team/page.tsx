import { Film, Pen, Camera, Clapperboard } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Team() {
  // Les membres —  donnera les vrais noms et rôles plus tard
  const members = [
    {
      name: "Joedy Mulatris",
      role: "Co-fondatrice / Réalisatrice",
      icon: <Film size={32} className="text-gsl-beige" />,
    },
    {
      name: "Maidy",
      role: "Co-fondatrice / Scénariste",
      icon: <Pen size={32} className="text-gsl-beige" />,
    },
  ];

  // Profils recherchés pour agrandir l'équipe
  const profiles = [
    "Réalisateurs",
    "Scénaristes",
    "Cadreurs",
    "Monteurs",
    "Photographes",
    "Compositeurs",
    "Designers",
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gsl-dark/60" />
        <div className="relative z-10">
          <p className="text-gsl-beige/50 text-sm tracking-widest uppercase mb-4">Les visages derrière Genesis Light Studio
          </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">L&apos;Équipe</h1>
        </div>
      </section>

      {/* Fondatrices */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gsl-dark to-gsl-brown/80" />
        <div className="relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-10 text-center">Les fondatrices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="border border-gsl-beige/20 rounded-lg p-8 text-center hover:border-gsl-beige hover:bg-gsl-brown/30 transition-all duration-300 group"
                  >
                    <div className="w-20 h-20 bg-gsl-brown rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {member.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gsl-beige">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Profils recherchés */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gsl-brown/80 to-gsl-dark" />
        <div className="relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">On cherche aussi...</h2>
            <p className="text-gsl-beige mb-10">
              Toute personne passionnée par la création audiovisuelle
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {profiles.map((profile) => (
                <Link
                  key={profile}
                  href="/join"
                  className="border border-gsl-beige/30 text-gsl-beige px-5 py-2 rounded-full text-sm hover:bg-gsl-dark hover:border-gsl-beige transition-all duration-300"
                >
                  {profile}
                </Link>
              ))}
            </div>
            </div>
          </ScrollReveal>
        </div>
        
      </section>
    </div>
    )
}