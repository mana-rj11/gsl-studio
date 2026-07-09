"use client";

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { link } from 'fs';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Acceuil" },
        { href: "/about", label: "À propos" },
        { href: "/seasons", label: "Saisons" },
        { href: "/team", label: "L'Équipe" },
        { href: "/join", label: "Rejoindre GSL" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="bg-gsl-dark text-white px-6 py-4">
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
                            className="text-gsl-beige hover:text-white transition text-sm"
                        >
                            {link.label}
                        </Link>
                    ))}
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="md:hidden mt-4 flex-col gap-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gsl-beige hover:text-white transition text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
        </nav>
    );
}
