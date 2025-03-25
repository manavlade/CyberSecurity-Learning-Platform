import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const trainingModules = [
    {
        name: "Malware",
        content: (
            <>
                <h2 className="text-2xl font-bold mb-3">🦠 What is Malware?</h2>
                <p className="mb-4">
                    Malware (malicious software) is a broad term for software designed to disrupt, damage, or gain unauthorized access to systems. It includes:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Viruses:</strong> Attach to files and spread when executed.</li>
                    <li><strong>Worms:</strong> Self-replicate and spread without user action.</li>
                    <li><strong>Ransomware:</strong> Encrypts files and demands a ransom.</li>
                    <li><strong>Spyware:</strong> Secretly collects user information.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">💀 Famous Malware Attacks:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>WannaCry (2017):</strong> Affected 200,000+ computers, demanding Bitcoin ransom.</li>
                    <li><strong>ILOVEYOU Virus (2000):</strong> Spread via email and crashed millions of PCs.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">🛡️ How to Stay Safe?</h3>
                <ul className="list-disc pl-5">
                    <li>🔄 Keep software & OS updated.</li>
                    <li>🛑 Never download files from untrusted sources.</li>
                    <li>🔐 Use reliable antivirus & enable firewalls.</li>
                    <li>🕵️‍♂️ Be cautious of suspicious emails & attachments.</li>
                </ul>
            </>
        ),
    },
    {
        name: "Phishing",
        content: (
            <>
                <h2 className="text-2xl font-bold mb-3">🎣 What is Phishing?</h2>
                <p className="mb-4">
                    Phishing attacks trick users into revealing sensitive information (passwords, bank details) by pretending to be a trusted entity.
                </p>
                <h3 className="text-xl font-semibold mb-2">💀 Famous Phishing Scams:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Google Docs Phishing (2017):</strong> Tricked users into granting access to fake Google accounts.</li>
                    <li><strong>PayPal Scam Emails:</strong> Fake PayPal warnings asking for login credentials.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">🚫 How to Avoid Phishing?</h3>
                <ul className="list-disc pl-5">
                    <li>📩 Don’t click on suspicious email links.</li>
                    <li>🔑 Use two-factor authentication (2FA) for extra security.</li>
                    <li>🛑 Verify the sender before sharing sensitive information.</li>
                    <li>🔍 Look for HTTPS and spelling errors in URLs.</li>
                </ul>
            </>
        ),
    },
    {
        name: "DDoS Attacks",
        content: (
            <>
                <h2 className="text-2xl font-bold mb-3">🌐 What is a DDoS Attack?</h2>
                <p className="mb-4">
                    A Distributed Denial-of-Service (DDoS) attack floods a website or network with massive traffic, causing disruptions.
                </p>
                <h3 className="text-xl font-semibold mb-2">💀 Real-World DDoS Attacks:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Dyn Attack (2016):</strong> Took down Twitter, Reddit, and Netflix using a botnet.</li>
                    <li><strong>Amazon AWS Attack (2020):</strong> One of the largest DDoS attacks recorded.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">🛡️ How to Prevent DDoS Attacks?</h3>
                <ul className="list-disc pl-5">
                    <li>🌍 Use a Content Delivery Network (CDN) to absorb traffic spikes.</li>
                    <li>🔎 Monitor network traffic for unusual patterns.</li>
                    <li>🔐 Implement DDoS mitigation tools like Cloudflare.</li>
                    <li>🚀 Limit access to critical servers.</li>
                </ul>
            </>
        ),
    },
    {
        name: "Man-in-the-Middle",
        content: (
            <>
                <h2 className="text-2xl font-bold mb-3">🕵️‍♂️ What is a Man-in-the-Middle (MitM) Attack?</h2>
                <p className="mb-4">
                    MitM attacks occur when hackers secretly intercept and alter communication between two parties.
                </p>
                <h3 className="text-xl font-semibold mb-2">💀 Famous MitM Attacks:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Fake Wi-Fi Hotspots:</strong> Hackers set up free Wi-Fi to steal data.</li>
                    <li><strong>SSL Stripping:</strong> Attackers downgrade HTTPS connections to HTTP.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">🔐 How to Stay Protected?</h3>
                <ul className="list-disc pl-5">
                    <li>🔍 Always use HTTPS-secured websites.</li>
                    <li>🛑 Avoid public Wi-Fi for sensitive transactions.</li>
                    <li>🚀 Use a VPN for secure browsing.</li>
                    <li>🔐 Enable multi-factor authentication.</li>
                </ul>
            </>
        ),
    },
];


const CybersecurityTraining = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completedModules, setCompletedModules] = useState([]);
    const navigate = useNavigate(); 

    const handleNext = () => {
        setCompletedModules((prev) => [...new Set([...prev, currentIndex])]);
        if (currentIndex < trainingModules.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleSubmit = () => {
        navigate("/quiz"); 
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-2">
            <div className="w-4/5 flex shadow-lg rounded-lg overflow-hidden bg-gray-800">
                
                {/* Sidebar: Module List */}
                <div className="w-1/4 bg-gray-700 p-6">
                    <h2 className="text-lg font-bold mb-4">📖 Training Modules</h2>
                    <ul className="space-y-3">
                        {trainingModules.map((module, index) => (
                            <li
                                key={index}
                                className={`p-3 rounded-lg cursor-pointer transition ${
                                    currentIndex === index
                                        ? "bg-blue-500 text-white"
                                        : completedModules.includes(index)
                                        ? "bg-green-500 text-white"
                                        : "hover:bg-gray-600"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                {module.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Content Area */}
                <motion.div
                    key={currentIndex}
                    className="w-3/4 p-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4">{trainingModules[currentIndex].name}</h2>
                    <p className="mb-6">{trainingModules[currentIndex].content}</p>

                    {/* Navigation Buttons */}
                    {currentIndex < trainingModules.length - 1 ? (
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                            onClick={handleNext}
                        >
                            Next ➡️
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                            onClick={handleSubmit}
                        >
                            Submit ✅
                        </button>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default CybersecurityTraining;