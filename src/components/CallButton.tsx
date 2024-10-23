// components/CallButton.tsx

import { FaPhone } from 'react-icons/fa'; // Используем иконку телефона

export default function CallButton() {
    return (
        <a href="tel:+79277102171" // Замените на нужный номер
           className="fixed bottom-5 right-5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-transform duration-300 transform hover:scale-110 shadow-lg p-4 rounded-full text-white z-50"
           aria-label="Позвонить">
            <FaPhone size={24} />
        </a>
    );
}