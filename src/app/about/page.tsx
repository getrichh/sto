"use client";

import { FaTools, FaUserTie, FaAward } from 'react-icons/fa'; // Импорт иконок
import Image from 'next/image'; // Импорт компонента Image для оптимизации изображений

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-10 space-y-16">
            {/* Заголовок с градиентом */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-fadeInUp mb-8 md:mb-12 tracking-tight text-center">
                О нашем СТО
            </h1>

            {/* Первый блок с карточками и иконками */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-10">
                <Card
                    icon={<FaTools size={40} className="text-orange-500" />}
                    title="Профессиональный ремонт"
                    description="Мы предоставляем услуги по ремонту и обслуживанию автомобилей с высоким качеством и вниманием к деталям."
                />
                <Card
                    icon={<FaUserTie size={40} className="text-orange-500" />}
                    title="Опытная команда"
                    description="Наша команда состоит из квалифицированных специалистов с многолетним опытом работы в автомобильной индустрии."
                />
                <Card
                    icon={<FaAward size={40} className="text-orange-500" />}
                    title="Гарантия качества"
                    description="Мы гордимся тем, что многие клиенты остаются довольны и возвращаются к нам снова. Ваше доверие — наша цель."
                />
            </div>

            {/* Второй блок с текстом и линиями */}
            <div className="space-y-8 md:space-y-12 max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto px-4 sm:px-0">
                <DecoratedText>
                    Наше СТО предоставляет профессиональные услуги по ремонту и обслуживанию автомобилей любых марок и моделей. Мы гордимся высоким качеством работы, вниманием к деталям и индивидуальным подходом к каждому клиенту.
                </DecoratedText>

                <DecoratedText>
                    Мы уверены, что профессионализм заключается не только в высоком уровне технической подготовки, но и в постоянном обучении и совершенствовании. Наши специалисты регулярно проходят сертификационные курсы, чтобы быть в курсе последних новинок автомобильной индустрии.
                </DecoratedText>

                <DecoratedText>
                    Особое внимание уделяется диагностике автомобиля, ведь от правильной диагностики зависит точность и качество последующего ремонта. Наши мастера знают, как правильно выявить неисправности и предложить оптимальные решения для их устранения.
                </DecoratedText>

                <DecoratedText>
                    Мы гордимся тем, что многие наши клиенты становятся постоянными, рекомендуют нас друзьям и коллегам. Доверие клиентов — это лучшая награда за нашу работу.
                </DecoratedText>
            </div>

            {/* Изображение команды с тенями и эффектом наведения */}
            <div className="mx-auto mt-8 md:mt-12 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-lg overflow-hidden">
                <Image
                    src="/images/img_1.png" // Путь к твоему изображению
                    alt="Черный спортивный автомобиль"
                    width={1024}
                    height={768}
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </div>
        </div>
    );
}

// Компонент для карточек
function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 group w-full sm:w-72 md:w-80">
            <div className="mb-4 flex items-center justify-center">{icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center text-white group-hover:text-orange-500 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-center text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

// Компонент для текста с декоративной линией
function DecoratedText({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative z-10 text-base sm:text-lg md:text-xl text-gray-300 bg-black px-4 py-4 text-center">
                {children}
            </div>
        </div>
    );
}