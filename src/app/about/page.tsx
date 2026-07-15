import ScrollReveal from "@/components/ScrollReveal";
import { Scroll } from "lucide-react";
export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 bg-gsl-brown text-center relative">
        <div className="absolute inset-0 bg-gsl-dark/60" />
        <div className="relative z-10">
          <ScrollReveal>
          <p className="text-gsl-beige/50 text-sm tracking-widest uppercase mb-4">Qui sommes-nous ?</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">À propos</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gsl-dark to-gsl-brown/80">
          <p className="text-gsl-beige text-lg leading-relaxed mb-8">
            Nous sommes une équipe d&apos;étudiants passionnés par le cinéma et le storytelling.
            Notre objectif est de créer des œuvres qui inspirent, encouragent et apportent
            de l&apos;espoir à travers des histoires authentiques.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 bg-gsl-brown">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Notre vision</h2>
          <p className="text-gsl-beige text-lg leading-relaxed">
            Illuminer le monde avec notre lumière en racontant des histoires qui touchent
            les cœurs et donnent de l&apos;espoir. Nous voulons aussi offrir un espace où
            chacun peut exprimer ses talents et laisser sa lumière briller.
          </p>
        </div>
        </ScrollReveal>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-gsl-dark">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Notre mission</h2>
          <div className="space-y-3 text-gsl-beige text-lg">
            <p>Mettre en lumière les combats invisibles.</p>
            <p>Parler de sujets dont on parle peu.</p>
            <p>Créer des histoires accessibles à tous.</p>
            <p>Encourager, inspirer et transmettre un message d&apos;espoir.</p>
            <p>Donner l&apos;opportunité à de jeunes talents de s&apos;exprimer.</p>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-6 bg-gsl-brown">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-10">Nos valeurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Espoir", "Authenticité", "Créativité", "Excellence", "Compassion", "Collaboration"].map((valeur) => (
              <div key={valeur} className="border border-gsl-beige/10 rounded-xl p-8 hover:border-gsl-beige/30 hover:bg-gsl-dark/50 transition-all duration-500">
                <p className="text-gsl-beige font-display text-xl">{valeur}</p>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}