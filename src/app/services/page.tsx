export default function Services() {
    const services = [
        { title: 'Диагностика, адаптация, калибровка, чип тюнинг', description: 'Профессиональная диагностика и адаптация систем, калибровка компонентов и чип тюнинг для улучшения характеристик.' },
        { title: 'Ремонт двигателей, МКПП, АКПП', description: 'Капитальный ремонт двигателей и коробок передач любой сложности.' },
        { title: 'Ремонт трансмиссии', description: 'Полный ремонт и обслуживание трансмиссий.' },
        { title: 'Ремонт подвески', description: 'Ремонт и обслуживание подвески для стабильной и безопасной езды.' },
        { title: 'Ремонт тормозной системы', description: 'Профессиональный ремонт тормозов для вашей безопасности.' },
        { title: 'Электрооборудование (стартеры, генераторы)', description: 'Ремонт и замена стартеров, генераторов и другого электрооборудования.' },
        { title: 'Чистка форсунок, ремонт топливной системы', description: 'Очистка форсунок и ремонт топливных систем для повышения эффективности работы двигателя.' },
        { title: 'Регулировка тепловых зазоров клапанов', description: 'Настройка тепловых зазоров клапанов для оптимальной работы двигателя.' },
        { title: 'Сварочные работы', description: 'Профессиональные сварочные работы для ремонта кузова и других элементов автомобиля.' },
        { title: 'Шиномонтаж', description: 'Услуги шиномонтажа с балансировкой и заменой шин.' },
        { title: 'Замена масла двигателей, МКПП, АКПП', description: 'Замена масла в двигателе и коробках передач для долговечности работы.' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans py-16">
            <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Наши Услуги
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group hover:shadow-orange-500/40 relative"
                    >
                        <div className="absolute -top-4 -left-4 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                            {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto text-center mt-16">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Иными словами, делаем ВСЕ! Проводим срочные работы в ночное время по предварительному звонку.
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    В случае поломки на трассе, один звонок, и мы поможем, будь то мелкий ремонт на месте или буксировка в наше СТО.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                    <strong>Режим работы:</strong> круглосуточно, без выходных.
                </p>
                <p className="text-lg text-gray-300 mt-2">
                    <strong>Телефон:</strong> <a href="tel:+79277102171" className="text-orange-500 hover:text-yellow-500">+7 (927) 710-2171</a>
                </p>
            </div>
        </div>
    );
}