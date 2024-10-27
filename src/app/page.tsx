"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">

            {/* Hero-секция */}
            <section className="relative flex items-center justify-center h-screen">
                {/* Фоновое изображение */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/img.png" // Убедись, что изображение находится в папке public/images
                        alt="СТО"
                        fill // Новый способ использовать layout="fill"
                        style={{objectFit: "cover"}} // Заменяет objectFit="cover"
                        quality={100} // Увеличиваем качество изображения
                        priority={true} // Указываем Next.js загружать изображение с приоритетом
                        className="opacity-50" // Затемнение изображения для улучшения контраста текста
                    />
                </div>

                {/* Текст поверх изображения */}
                <div className="relative z-10 text-center p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                        Профессиональный сервис для вашего автомобиля
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-200 leading-relaxed tracking-wide">
                        Мы предлагаем высококачественное обслуживание и ремонт автомобилей всех марок, используя самые
                        передовые технологии.
                    </p>
                    <a href="tel:+79277102171" className="inline-block">
                        <Button
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-transform duration-300 transform hover:scale-110 shadow-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full">
                            Позвонить
                        </Button>
                    </a>
                </div>
            </section>

            {/* Блок с преимуществами */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                    Наши Преимущества
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
                    <div
                        className="relative bg-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 group hover:shadow-orange-500/60">
                        <div
                            className="absolute -top-4 -left-4 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            1
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-300">
                            Профессионализм
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Опытные специалисты с многолетним стажем, которые знают, как быстро и качественно решить любую проблему с вашим автомобилем.
                        </p>
                    </div>
                    <div className="relative bg-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 group hover:shadow-orange-500/60">
                        <div className="absolute -top-4 -left-4 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            2
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-300">
                            Современные технологии
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Мы используем новейшее оборудование для точной диагностики и быстрого ремонта автомобилей любой марки.
                        </p>
                    </div>
                    <div className="relative bg-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 group hover:shadow-orange-500/60">
                        <div className="absolute -top-4 -left-4 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            3
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-300">
                            Гарантия качества
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Мы гарантируем высокое качество всех выполненных работ и обеспечиваем долгосрочную поддержку клиентов.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}