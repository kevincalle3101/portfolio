"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { motion } from 'framer-motion';


const HeroSection = () => {

    return (
        <section className='lg:py-16'>
            <div className='grid items-center grid-cols-1 sm:grid-cols-12 gap-y-8' >
                <div className='col-span-7 xl:col-span-8 ml-0 text-center sm:text-left sm:justify-self-start'>
                    <motion.h1 className='text-4xl sm:text-5xl lg:text-7xl xl:text-8xl mb-2 font-extrabold min-h-[120px] xs:min-h-[0px] 
                    sm:min-h-[150px] md:min-h-[150px] lg:min-h-[220px] xl:min-h-[300px] 2xl:min-h-[0px] max-w-[200px] xs:max-w-none
                    sm:max-w-[280px] lg:max-w-[420px] xl:max-w-[560px] 2xl:max-w-none mx-auto 2xl:leading-normal'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-600' >{`Hello, I'm`}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Kevin Calle',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Backend Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            preRenderFirstString={true}
                        />
                    </motion.h1>
                    <p className='text-[#ADB7BE] mb-5 text-base sm:text-lg sm:mt-2  lg:text-xl'>Full Stack Web Developer</p>
                    <div className='flex flex-arrow space-x-5 justify-center mb-5 mt-0 sm:justify-start'>
                        <a href="https://github.com/kevincalle3101" target="_blank" className='flex justify-center items-center transform scale-100 hover:scale-110 transition-transform duration-300'>
                            <Image alt='github' src='/images/logoGithub.png' width={40} height={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-calle-mendoza-53935b273" target="blank" className='flex  justify-center items-center transform scale-100 hover:scale-110 transition-transform duration-300'>
                            <Image src='/images/logoLinkedln.png' alt='linkedin' width={40} height={40} />
                        </a>
                        <a href="mailto:kevincalle3101@gmail.com" target="_blank" className='flex justify-center items-center transform scale-100 hover:scale-110 transition-transform duration-300'>
                            <Image src='/images/logoMail.png' alt='gmail' width={40} height={40} />
                        </a>
                    </div>
                    <div className='items-center'>
                        <Link href="/#contact" className='px-6 inline-block w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-rose-300 via-rose-500 to-rose-600 hover:bg-slate-200 text-white 
                        transform scale-100 hover:scale-105 transition-transform duration-300'>Hire Me</Link>
                        <a href='/CV.pdf' download
                            className='px-1 inline-block w-full sm:w-fit py-1 rounded-full bg-gradient-to-br from-rose-300 via-rose-500 to-rose-600 hover:bg-slate-800 text-white border border-none mt-3 sm:mt-0'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </a>
                    </div>
                </div>
                <div className='col-span-5 xl:col-span-4 lg:mt-0 place-self-center sm:mb-auto sm:ml-auto'>
                    <div className='rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] md:w-[250px] md:h-[250px] relative lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src='/images/fotoPerfilPortfolioKev.png'
                            alt='foto de perfil' width={200} height={200}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[330px] lg:h-[425px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection