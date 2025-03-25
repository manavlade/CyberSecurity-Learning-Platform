import React from "react";
import { motion } from "framer-motion";

const aboutContent = [
    "SecuraX – Defend Your Privacy, Defend Yourself! 🔐🚀",
    "In today's fast-paced digital world, cyber threats are constantly evolving, targeting individuals and businesses alike.",
    "From phishing scams to ransomware attacks, online dangers lurk at every corner.",
    "That’s where SecuraX comes in—your ultimate cybersecurity awareness and training platform, designed to educate, alert, and empower you against cyber risks.",
    "Why SecuraX?",
    "🔎 Real-Time Cyber Threat Updates – Stay informed about the latest security risks, breaches, and online threats with live updates and expert insights.",
    "🎓 Comprehensive Training Modules – Learn how to detect, prevent, and respond to cyber threats through interactive lessons and real-world scenarios.",
    "🚨 Instant Notifications – Receive alerts on emerging cyber risks to keep yourself and your data safe at all times.",
    "🕹️ Engaging Quizzes & Challenges – Test your cybersecurity knowledge with fun, interactive quizzes that enhance learning through gamification.",
    "At SecuraX, we believe cybersecurity isn’t just for experts—it’s for everyone!",
    "Don’t Be the Next Target—Take Control of Your Cybersecurity Today!",
    "Join SecuraX and become cyber-smart. Protect yourself, your data, and your future. 🔒🚀",
];

const About = () => {
    return (
        <div className=" p-6 bg-black bg-opacity-90 rounded-lg shadow-lg max-w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-start text-white">
            {aboutContent.map((line, index) => (
                <motion.div
                    key={index}
                    className="opacity-0 fade-in-line mb-4 text-lg leading-relaxed text-left w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                >
                    {line.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="mr-1 text-shadow">
                            {word}
                        </span>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default About;
