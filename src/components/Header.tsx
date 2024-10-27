// components/Header.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-black text-white p-4 shadow-lg">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-500" style={{ fontFamily: 'Terminator Genisys' }}>
                    СТО ФОРСАЖ
                </h1>

                {/* Навигация для больших экранов */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link href="/" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-orange-500 transition-colors duration-300">
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Контакты
                        </Link>
                    </li>
                </ul>

                {/* Кнопка меню для мобильных устройств */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Мобильное меню */}
            {isOpen && (
                <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
                    <li>
                        <Link href="/" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-orange-500 transition-colors duration-300">
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className="text-white hover:text-orange-500 transition-colors duration-300">
                            Контакты
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}