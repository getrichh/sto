import './globals.css'; // Импорт глобальных стилей
import CallButton from '@/components/CallButton';
import Link from 'next/link'; // Импорт компонента Link для навигации

export const metadata = {
    title: 'СТО',
    description: 'СТО — профессиональный автосервис',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header /> {/* Общий Header для всех страниц */}
        <main>{children}</main> {/* Содержимое каждой страницы */}
        <CallButton /> {/* Добавляем кнопку звонка */}
        <Footer /> {/* Общий Footer для всех страниц */}
        </body>
        </html>
    );
}

function Header() {
    return (
        <header className="bg-black text-white p-4 shadow-lg">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-500" style={{fontFamily: 'Terminator Genisys'}}>
                    СТО ФОРСАЖ
                </h1>
                <ul className="flex space-x-8">
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
                        <Link href="/services"
                              className="text-white hover:text-orange-500 transition-colors duration-300">
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts"
                              className="text-white hover:text-orange-500 transition-colors duration-300">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-7xl mx-auto text-center text-gray-400">
                <p className="text-lg">&copy; 2024 СТО. Все права защищены.</p>
                <p className="mt-2">Телефон: +7 (927) 710-21-71 | Email: info@sto.com</p>
            </div>
        </footer>
    );
}