import Link from "next/link";
import { Clapperboard, Camera, Theater } from "lucide-react";

export default function Solitude() {
    return (
        <div>
            {/* Header */}
            <section className="py-20 px-6 bg-gsl-brown text-center relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/solitude-bg.jpg')", backgroundPosition: "center 41%" }} />
                <div className="absolute inset-0 bg-gsl-dark/60"/>
                <div className="relative z-10">
                <p className="text-gsl-beige text-sm mb-2">Saison 1</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">SOLITUDE</h1>
                <p className="text-gsl-beige text-lg italic">
                    Même lorsque tout semble sombre, il existe toujours une lumière au bout du tunnel.
                </p>
                </div>
            </section>

            {/* Pitch */}
            <section className="py-16 px-6 bg-gsl-dark">
                <div className="maw-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Le pitch</h2>
                    <p className="text-gsl-beige text-lg leading-relaxed">
                        Alex est un jeune homme qui traverse une période de solitude intérieure.
                        Alors qu&apos;il pens avoir perdu sa lumière, une rencontre inattendue va changer sa vision des choses.
                    </p>
                </div>
            </section>

            {/* Synopsis */}
            <section className="py-16 px-6 bg-gsl-brown">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Synopsis</h2>
                    <p className="text-gsl-beige text-lg leading-relaxed">
                        Alex se sent différent de ses amis et lutte contre un conflit intérieur
                        qui l&apos;isole peu à peu. Convaicu que sa lumière s&apos;est éteinte,
                        il se laisse envahir par la solitude. Jusqu&apos;au jour où une rencontre
                        inattendue lui fait comprendre que cette obscurité pourrait être le début
                        d&apos;une nouvelle lumière.
                    </p>
                </div>
            </section>

            {/* Contenu prévu */}
            <section className="py-16 px-6 bg-gsl-dark">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Contenu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <Clapperboard size={36} className="text-gsl-beige" />, title: "Bande-annonce", desc: "Bientot disponible" },  
                            { icon: <Camera size={36} className="text-gsl-beige" />, title: "Photos", desc: "Behind the scenes" },
                            { icon: <Theater size={36} className="text-gsl-beige" />, title: "Casting", desc: "Casting terminé" },
                        ].map((item) => (
                            <div key={item.title} className="border border-gsl-beige/20 rounded-lg p-6 text-center flex flex-col items-ccenter">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-gsl-beige text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </div>
    )
}