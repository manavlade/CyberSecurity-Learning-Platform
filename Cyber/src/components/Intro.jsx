import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = ({ onIntroEnd }) => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Hide intro after animation duration
        const timer = setTimeout(() => {
            setShowIntro(false);
            if (onIntroEnd) onIntroEnd(); // Notify parent component
        }, 4000); // Matches animation duration

        return () => clearTimeout(timer);
    }, [onIntroEnd]);

    if (!showIntro) return null; // Hide intro after animation

    return (
        <motion.div
            className="bg-[#121212] flex justify-center items-center h-screen w-full text-center px-5 overflow-hidden fixed top-0 left-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div>
                <motion.h2
                    className="text-5xl font-semibold mb-3 tracking-wide opacity-0 
                               text-white shadow-[2px_2px_5px_rgba(0,0,0,0.6)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                >
                    Defend Your Privacy, Defend Yourself!
                </motion.h2>

                <motion.p
                    className="text-2xl font-medium tracking-wide opacity-0 text-white 
                               shadow-[2px_2px_5px_rgba(0,0,0,0.6)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, delay: 1 }}
                >
                    Welcome to SecuraX
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Intro;
