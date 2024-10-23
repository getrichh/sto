export default function Contacts() {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                {/* Заголовок */}
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-fadeInUp mb-12 tracking-tight text-center">
                    Контакты
                </h1>

                {/* Описание */}
                <p className="text-lg text-gray-300 mb-10 text-center">
                    Мы всегда рады помочь вам с любыми вопросами или предложениями. Вы можете связаться с нами по следующим контактам, или посетить наш автосервис по указанному адресу.
                </p>

                {/* Блок с контактной информацией */}
                <div className="space-y-6 text-center">
                    <p className="text-lg text-gray-300">
                        <span className="font-bold">Адрес:</span> г. Москва, ул. Автодорожная, 7
                    </p>
                    <p className="text-lg text-gray-300">
                        <span className="font-bold">Телефон:</span> <a href="tel:+79277102171" className="text-orange-500 hover:text-orange-600 transition-colors duration-300">+7 (999) 123-45-67</a>
                    </p>
                    <p className="text-lg text-gray-300">
                        <span className="font-bold">Email:</span> <a href="mailto:info@sto.com" className="text-orange-500 hover:text-orange-600 transition-colors duration-300">info@sto.com</a>
                    </p>
                </div>

                {/* Визуальный разделитель */}
                <div className="my-10 w-full border-t border-gray-600"></div>

                {/* Карта с улучшенной стилистикой */}
                <div className="w-full max-w-3xl mt-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.89663719432!2d37.377142126896774!3d55.7416254876454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5fa5b1e80f%3A0x400bfbffef66b239!2z0JzQtdC90LjQvdCw0Y8g0JzQvtGC0LXRgNGB0LjRjyDQv9C-0LHQu9C-0LLQvtCz0L4g0JzQtdC90YLRgNCw!5e0!3m2!1sru!2sru!4v1630984734234!5m2!1sru!2sru"
                        width="100%"
                        height="400"
                        className="border-0 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Дополнительный блок информации */}
                <div className="mt-12 text-center text-gray-300 space-y-4">
                    <p className="text-lg">
                        <span className="font-bold text-orange-500">Рабочее время:</span> Мы работаем круглосуточно, без выходных.
                    </p>
                    <p className="text-lg">
                        Если у вас возникли срочные вопросы, звоните по номеру, и мы постараемся помочь вам как можно скорее.
                    </p>
                </div>
            </div>
        </div>
    );
}