import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Seasons() {
    // liste des saisons, facile à agrandir plus tard
    const seasons = [
        {
            number: 1,
            title: "Solitude",
            description: "Même lorsque tout semble sombre, il existe toujours une lumière au bout du tunner.",
            status: "En production",
            link: "/seasons/solitude",
        }, 
        // ajout d'un objet ici, quand a la saison 2
    ];

    return (
        <div>
            {/* Header */}
            <section className="py-20 px-6 bg-gsl-brown text-center relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/seasons-bg.jpg')" }} />
                <div className="absolute inset-0 bg-gsl-dark/60" />
                <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">Les Saisons</h1>
                <p className="text-gsl-beige text-lg">
                    Chaque saison explore différents thèmes de la vie quotidienne
                    à travers des courts-métrages.
                </p>
                </div>
            </section>

            {/* Thèmes */}
            <section className="py-16 px-6 bg-gsl-dark">
                <ScrollReveal>
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-8">Nos thématiques</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Solitude", "Identité", "Peur", "Rejet", "Pardon", "Santé mentale", "Espoir"].map((theme) => (
                            <span key={theme} className="border border-gsl-beige/30 text-gsl-beige px-4 py-2 rounded-full text-sm">
                                {theme}
                            </span>
                        ))}
                    </div>
                </div>
                </ScrollReveal>
            </section>

            {/* Liste des saisons */}
            <section className="py-16 px-6 bg-gsl-brown">
                <ScrollReveal>
                <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
                    {seasons.map((season) => (
                        <Link href={season.link} key={season.number} className="block group">
                            <div className="border border-gsl-beige/20 rounded-lg p-8 hover:border-gsl-beige transition">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">
                                        Saison {season.number} — {season.title}
                                    </h3>
                                    <span className="bg-gsl-dark text-gsl-beige text-xs px-3 py-1 rounded-full">
                                        {season.status}
                                    </span>
                                </div>
                                <p className="text-gsl-beige">{season.description}</p>
                                <p className="text-gsl-beige/50 text-sm mt-4 group-hover:text-white transition">
                                    Voir les détails →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                </ScrollReveal>
            </section>




        </div>
    )
}