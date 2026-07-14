import { Film, Pen, Camera, Clapperboard } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="py-20 px-6 bg-gsl-brown text-center">
        <h1 className="text-4xl font-bold mb-4">L&apos;Équipe</h1>
        <p className="text-gsl-beige text-lg">
          Les visages derrière Genesis Light Studio
        </p>
      </section>

      {/* Fondatrices */}
      <section className="py-16 px-6 bg-gsl-dark">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Les fondatrices</h2>
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
      </section>

      {/* Profils recherchés */}
      <section className="py-16 px-6 bg-gsl-brown">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">On cherche aussi...</h2>
          <p className="text-gsl-beige mb-10">
            Toute personne passionnée par la création audiovisuelle
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {profiles.map((profile) => (
              <span
                key={profile}
                className="border border-gsl-beige/30 text-gsl-beige px-5 py-2 rounded-full text-sm hover:bg-gsl-dark hover:border-gsl-beige transition-all duration-300 cursor-default"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}