import React from 'react';
import img1 from '../assets/collection/img1.webp';
import img2 from '../assets/collection/img2.webp';
import img3 from '../assets/collection/img3.webp';
import img4 from '../assets/collection/img4.webp';
import img5 from '../assets/collection/img5.webp';

const collections = [
    {
        title: 'Sunglasses',
        image: img5
    },
    {
        title: 'Eyeglasses',
        image: img3
    },
    {
        title: 'BLU Computer Glasses',
        image: img1
    },
    {
        title: 'DIGI HOOPER',
        image: img2
    },
    {
        title: 'Power Sunglasses',
        image: img4
    },
    {
        title: 'Sports Glasses',
        image: img4
    }
];

const ExploreCollection = () => {
    return (
        <section className="py-16 px-26 bg-white text-center">
            <h2 className="text-3xl font-bold mb-2">Explore Our Collections</h2>
            <hr className='w-102 ml-92 mb-4'></hr>
            <p className="text-gray-600 mb-10">Hand-picked styles for every vision and personality.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {collections.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-all">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-50 text-white py-3 text-lg font-semibold">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExploreCollection;
