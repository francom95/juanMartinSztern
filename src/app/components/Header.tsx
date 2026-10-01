"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">Dr. Juan Martín</span>
                </Link>

                <nav className="hidden md:flex gap-6">
                    <Link href="/#inicio" className="text-white hover:text-[#8e44ad] transition font-medium">Inicio</Link>
                    <Link href="/#sobre-mi" className="text-white hover:text-[#8e44ad] transition font-medium">Sobre Mí</Link>
                    <Link href="/#equipo" className="text-white hover:text-[#8e44ad] transition font-medium">Equipo</Link>
                    <Link href="/#servicios" className="text-white hover:text-[#8e44ad] transition font-medium">Servicios</Link>
                    <Link href="/#testimonios" className="text-white hover:text-[#8e44ad] transition font-medium">Testimonios</Link>
                    <Link href="/contacto" className="text-white hover:text-[#8e44ad] transition font-medium">Contacto</Link>
                </nav>

                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Abrir menú"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#121212]/98 backdrop-blur-md">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/#inicio"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/#sobre-mi"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Sobre Mí
                            </Link>
                            <Link
                                href="/#equipo"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Equipo
                            </Link>
                            <Link
                                href="/#servicios"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Servicios
                            </Link>
                            <Link
                                href="/#testimonios"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Testimonios
                            </Link>
                            <Link
                                href="/contacto"
                                className="text-white hover:text-[#8e44ad] transition font-medium py-2 px-4 rounded-md hover:bg-[#1a1a1a]"
                                onClick={closeMobileMenu}
                            >
                                Contacto
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header