'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import ReservationSection from '../form-reservation/reservation-section';

const lightImage = '/lyon.jpg';
const darkImage = '/lyoncity.jpg';

const HeroBanner = () => {
    const { theme, systemTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const currentTheme = theme === 'system' ? systemTheme : theme;
        setCurrentTheme(currentTheme);

        const preloadLight = document.createElement('link');
        preloadLight.rel = 'preload';
        preloadLight.as = 'image';
        preloadLight.href = lightImage;
        document.head.appendChild(preloadLight);

        const preloadDark = document.createElement('link');
        preloadDark.rel = 'preload';
        preloadDark.as = 'image';
        preloadDark.href = darkImage;
        document.head.appendChild(preloadDark);

        return () => {
            document.head.removeChild(preloadLight);
            document.head.removeChild(preloadDark);
        };
    }, [theme, systemTheme]);

 
    if (!mounted) {
        return null;
    }

    const imageSrc = currentTheme === 'dark' ? darkImage : lightImage;

    return (
        <div className="relative h-screen w-full">
            <Image
                src={imageSrc}
                fill
                alt="City of Lyon"
                className="object-cover object-center"
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-blue-300">ELITE</span> LYON TAXI
                    </h1>
                    <p className="text-xl md:text-2xl mb-4">
                        SPÉCIALISTE DU TRANSPORT VTC TAXI
                    </p>
                    <p className="text-lg md:text-xl">
                        Lyon - Rhône-Alpes - France Entière
                    </p>
                </div>

                <div className="w-full max-w-md">
                    <ReservationSection />
                </div>

                <div className="mt-8 flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
                    <Image
                        src="/google.svg" 
                        width={24}
                        height={24}
                        alt="Google logo"
                    />
                    <div className="ml-2 text-yellow-400">
                        ★★★★★
                    </div>
                    <span className="ml-2 text-sm">
                        4.9 (200+ avis)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;