import React from 'react';

const Service = () => {
    return (
        <section className="container mx-auto my-16 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
                Our Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: 'Analytics',
                        description: 'Gain insights with our advanced analytics tools.',
                        icon: '📊',
                        bgColor: 'bg-blue-100',
                        textColor: 'text-blue-700',
                    },
                    {
                        title: 'Design',
                        description: 'Create stunning visuals with our design services.',
                        icon: '🎨',
                        bgColor: 'bg-green-100',
                        textColor: 'text-green-700',
                    },
                    {
                        title: 'Development',
                        description: 'Build robust applications with our development team.',
                        icon: '💻',
                        bgColor: 'bg-yellow-100',
                        textColor: 'text-yellow-700',
                    },
                    {
                        title: 'Support',
                        description: 'Get 24/7 support for all your technical needs.',
                        icon: '🛠️',
                        bgColor: 'bg-red-100',
                        textColor: 'text-red-700',
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg ${service.bgColor}`}
                    >
                        <div
                            className={`text-4xl mb-4 flex items-center justify-center h-16 w-16 rounded-full ${service.textColor} bg-white`}
                        >
                            {service.icon}
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${service.textColor}`}>
                            {service.title}
                        </h3>
                        <p className={`text-sm ${service.textColor}`}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Service;
