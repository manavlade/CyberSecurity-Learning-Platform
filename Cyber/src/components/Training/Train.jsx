import { motion } from "framer-motion";

const cyberThreats = [
    { 
        title: "Malware", 
        description: "Malicious software, such as viruses, worms, ransomware, and spyware, that infects and damages systems or steals data." 
    },
    { 
        title: "Phishing", 
        description: "Fraudulent attempts to obtain sensitive information (like passwords or credit card details) by pretending to be a trustworthy entity via email, messages, or fake websites." 
    },
    { 
        title: "Denial-of-Service (DoS) & DDoS Attacks", 
        description: "Overloading a network, server, or website with excessive traffic, making it unavailable to users." 
    },
    { 
        title: "Man-in-the-Middle (MitM) Attacks", 
        description: "Intercepting and altering communications between two parties without their knowledge, often to steal data or inject malicious content." 
    },
    { 
        title: "SQL Injection", 
        description: "Exploiting vulnerabilities in a website's database query to insert malicious SQL code, allowing attackers to access, modify, or delete sensitive data." 
    },
    { 
        title: "Zero-Day Exploits", 
        description: "Attacking vulnerabilities in software or hardware before the vendor has released a fix, giving hackers a 'zero-day' advantage." 
    }
];

const caseStudies = [
    { 
        title: "WannaCry Ransomware (2017)", 
        description: "Exploited a Windows vulnerability, encrypting files and demanding a ransom in Bitcoin.",
        impact: "Affected over 200,000 computers, disrupting hospitals, businesses, and government agencies."
    },
    { 
        title: "Google Docs Phishing Scam (2017)", 
        description: "Attackers sent fake Google Docs invites, tricking users into granting access to their accounts.",
        impact: "Thousands of users were affected, risking personal and business data leaks."
    },
    { 
        title: "Dyn DNS Attack (2016)", 
        description: "A massive DDoS attack targeted Dyn, using a botnet of IoT devices infected with Mirai malware.",
        impact: "Major websites like Twitter, Reddit, and Netflix were knocked offline for hours."
    },
    { 
        title: "Fake Public Wi-Fi Attack", 
        description: "Hackers set up rogue Wi-Fi hotspots in public places, intercepting users’ data.",
        impact: "Stolen login credentials, financial details, and personal information."
    },
    { 
        title: "2019 British Airways Hack", 
        description: "Hackers used SQL injection to steal 380,000 customers' payment details.",
        impact: "£20 million fine under GDPR regulations due to data breach."
    },
    { 
        title: "Stuxnet (2010)", 
        description: "Highly sophisticated malware exploited zero-day vulnerabilities to sabotage Iran’s nuclear centrifuges.",
        impact: "Damaged nearly 1,000 centrifuges and set back Iran’s nuclear program."
    }
];

const Training = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">🔐 Cybersecurity Training</h1>
            <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                Learn about the most common cyber threats and real-world hacking incidents.
            </p>

            {/* Cyber Threats Section */}
            <h2 className="text-3xl font-semibold mt-12 mb-6 text-center">🛡️ Common Cyber Threats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cyberThreats.map((threat, index) => (
                    <motion.div 
                        key={index}
                        className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-xl font-bold text-red-400">{threat.title}</h3>
                        <p className="text-gray-300 mt-2">{threat.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Case Studies Section */}
            <h2 className="text-3xl font-semibold mt-16 mb-6 text-center">📜 Real-World Cyber Attacks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((caseStudy, index) => (
                    <motion.div 
                        key={index}
                        className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-xl font-bold text-blue-400">{caseStudy.title}</h3>
                        <p className="text-gray-300 mt-2">{caseStudy.description}</p>
                        <p className="text-green-400 mt-4 font-semibold">Impact: {caseStudy.impact}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Training;
