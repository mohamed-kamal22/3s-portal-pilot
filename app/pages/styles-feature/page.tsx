'use client'
import React from 'react';
import './styles/style.scss'

export default function Page() {
    const StyleTailwind = {
        borderBottom: '3px solid'
    };

    return <main className='container'>
        <div className='tailwind'>
            <p className='flex justify-center font-bold capitalize text-3xl my-3 text-sky-500'>
                <p className='flex' style={StyleTailwind}>
                    <img className='mr-4' src="/Tailwind_CSS_Logo.svg" width={40} alt='tailwind-logo'/>
                    <span>tailwind Css</span>
                </p>
            </p>

            {/* Flex System */}
            <div className="mx-auto mb-4">
                <p className='p-2 text-2xl text-red-800'>Flex System</p>
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="bg-blue-500 text-white p-3 text-center">
                                Div 1
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="bg-green-500 text-white p-3 text-center">
                                Div 2
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="bg-yellow-500 text-white p-3 text-center">
                                Div 3
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="bg-red-500 text-white p-3 text-center">
                                Div 4
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid System */}
            <div className='mx-auto'>
                <p className='p-2 text-2xl text-red-800'>Grid System</p>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style={{padding: "0 8px"}}>
                    <div className="bg-blue-900 text-white p-3 text-center">Item 1</div>
                    <div className="bg-green-900 text-white p-3 text-center">Item 2</div>
                    <div className="bg-yellow-900 text-white p-3 text-center">Item 3</div>
                    <div className="bg-red-900 text-white p-3 text-center">Item 4</div>
                </div>
            </div>
        </div>
    </main>;
}