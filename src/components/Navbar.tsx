"use client";

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    //usePathname() retourne l'URL actuelle
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Acceuil" },
        { href: "/about", label: "À propos" },
        { href: "/seasons", label: "Saisons" },
        { href: "/team", label: "L'Équipe" },
        { href: "/join", label: "Rejoindre GSL" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="bg-gsl-dark text-white px-6 py-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/">
                  <Image src="/logo-light.png" alt="GSL Studio" width={120} height={40}/>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm transition ${
                                pathname === link.href
                                    ? "text-white font-semibold border-b-2 border-gsl-beige pb-1"
                                    : "text-gsl-beige hover:text-white"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    </div>

                    {/* Mobile burger */}
                    <button 
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="md:hidden mt-4 flex-col gap-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm transition ${
                                        pathname === link.href
                                            ? "text-white font-semibold"
                                            : "text-gsl-beige hover:text-white"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                    </nav>
                );
            }
