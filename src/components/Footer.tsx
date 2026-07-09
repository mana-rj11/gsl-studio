import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gsl-dark text-gsl-beige py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">GSL Studio</h3>
          <p className="text-sm italic">
            &quot;Illuminate the World. Let Your Light Shine.&quot;
          </p>
          <p className="text-sm mt-1">Genesis 1:2-4</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Navigation</h4>
          <div className="flex flex-col gap-1 text-sm">
            <Link href="/about" className="hover:text-white transition">À propos</Link>
            <Link href="/seasons" className="hover:text-white transition">Saisons</Link>
            <Link href="/join" className="hover:text-white transition">Rejoindre GSL</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">genesislight.studio@outlook.com</p>
          <a href="https://www.instagram.com/genesis.light.studio" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition">@genesis.light.studio</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gsl-brown text-center text-xs">
        © 2026 Genesis Light Studio. Tous droits réservés.
      </div>
    </footer>
  );
}