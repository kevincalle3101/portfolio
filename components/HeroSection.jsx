import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12' >
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold' >
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-600' >Hello, I'm {" "}</span>
                        Kevin Calle
                    </h1>
                    <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>Full Stack Web Developer</p>
                    <div>
                        <button className='px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-rose-300 via-rose-500 to-rose-600 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button className='px-1 w-full sm:w-fit py-1 rounded-full bg-gradient-to-br from-rose-300 via-rose-500 to-rose-600 hover:bg-slate-800 text-white border border-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0' >
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src='/images/fotoPerfilPorfolioKevin.png'
                            alt='foto de perfil' width={200} height={200}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[280px] lg:h-[350px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection