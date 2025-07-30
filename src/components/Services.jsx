import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ServicesContainer from './ServicesContainer';

const Services = () => {
    return (
        <>
            <div className='bg-[rgba(228,221,228,0.533)] px-10 py-20'>
                <div className='text-red-600 text-3xl font-semibold ml-20'>
                    Our Eye Services
                </div>
                <hr className='w-42 ml-20 text-red-600 mt-2'></hr>
                <div className='flex mt-4 mb-6 ml-20 items-center'>
                    <div className='text-3xl mr-90'>
                        <strong>Give Best Care For Your</strong> Eyes Our Eye Services
                    </div>
                    <button className='flex items-center bg-black text-white py-2 px-5 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out hover:cursor-pointer text-lg'>
                    View All <span className='ml-4 bg-white p-3 rounded-xl text-black '><FaArrowRight className='hover:rotate-[-45deg] transition duration-300 ease-in-out'/></span>
                    </button>
                </div>

                <div className='grid grid-cols-4 gap-4 ml-16 mr-10'>
                    <ServicesContainer />
                </div>
            </div>
        </>
    )
}

export default Services
