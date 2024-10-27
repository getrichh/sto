// layout.tsx
import './globals.css'; // Импорт глобальных стилей
import CallButton from '@/components/CallButton';
import Header from '@/components/Header'; // Импортируем Header как отдельный компонент
import Footer from '@/components/Footer'; // Импортируем Footer как отдельный компонент

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