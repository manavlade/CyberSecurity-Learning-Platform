import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hardQuestions = [
    {
        question: "Which encryption algorithm is considered the most secure for modern applications?",
        options: [
            "MD5",
            "SHA-1",
            "AES-256",
            "DES"
        ],
        correctAnswer: "AES-256"
    },
    {
        question: "What is the primary purpose of a Man-in-the-Middle (MITM) attack?",
        options: [
            "To infect a system with malware",
            "To secretly intercept and alter communications",
            "To flood a server with traffic",
            "To gain access to a database"
        ],
        correctAnswer: "To secretly intercept and alter communications"
    },
    {
        question: "Which protocol is often used in securing wireless networks?",
        options: [
            "FTP",
            "WEP",
            "WPA3",
            "Telnet"
        ],
        correctAnswer: "WPA3"
    },
    {
        question: "What does a penetration tester do?",
        options: [
            "Finds and exploits security vulnerabilities in a system",
            "Creates firewalls for businesses",
            "Develops anti-virus software",
            "Removes malware from systems"
        ],
        correctAnswer: "Finds and exploits security vulnerabilities in a system"
    },
    {
        question: "Which attack involves overwhelming a system with a massive number of requests?",
        options: [
            "SQL Injection",
            "DDoS Attack",
            "Phishing Attack",
            "Zero-Day Attack"
        ],
        correctAnswer: "DDoS Attack"
    },
    {
        question: "What is the main security risk of using outdated software?",
        options: [
            "It runs slower than updated versions",
            "It becomes incompatible with new devices",
            "It contains unpatched security vulnerabilities",
            "It takes up more storage space"
        ],
        correctAnswer: "It contains unpatched security vulnerabilities"
    },
    {
        question: "What is the function of an Intrusion Detection System (IDS)?",
        options: [
            "Blocks all incoming network traffic",
            "Detects and alerts about suspicious activity",
            "Automatically removes malware",
            "Enhances internet speed"
        ],
        correctAnswer: "Detects and alerts about suspicious activity"
    },
    {
        question: "Which cybersecurity framework is widely used for risk management?",
        options: [
            "NIST",
            "ISO 9001",
            "OSHA",
            "GDPR"
        ],
        correctAnswer: "NIST"
    },
    {
        question: "What is a Zero-Day Exploit?",
        options: [
            "A virus that spreads in zero seconds",
            "An attack on a system with an unknown vulnerability",
            "A security patch released on the same day",
            "A temporary firewall setting"
        ],
        correctAnswer: "An attack on a system with an unknown vulnerability"
    },
    {
        question: "Which of the following is an example of privilege escalation?",
        options: [
            "A hacker obtaining admin access from a basic user account",
            "A user logging into their account",
            "A software update that improves security",
            "A firewall blocking suspicious activity"
        ],
        correctAnswer: "A hacker obtaining admin access from a basic user account"
    },
    {
        question: "What is an example of a brute force attack?",
        options: [
            "A hacker guessing passwords using automated tools",
            "A virus that exploits software vulnerabilities",
            "A phishing attempt",
            "A password manager being used to store data"
        ],
        correctAnswer: "A hacker guessing passwords using automated tools"
    },
    {
        question: "What does SSL/TLS encryption protect against?",
        options: [
            "Data manipulation and eavesdropping",
            "File corruption",
            "Denial of Service attacks",
            "Data backup"
        ],
        correctAnswer: "Data manipulation and eavesdropping"
    },
    {
        question: "What is an example of social engineering?",
        options: [
            "A hacker using software to break a password",
            "An attacker tricking you into sharing personal data",
            "A software bug in an operating system",
            "An AI chatbot responding to your questions"
        ],
        correctAnswer: "An attacker tricking you into sharing personal data"
    },
    {
        question: "What is the purpose of a VPN?",
        options: [
            "To browse the internet securely",
            "To download files faster",
            "To play online games",
            "To increase Wi-Fi speed"
        ],
        correctAnswer: "To browse the internet securely"
    },
    {
        question: "Which of the following is the best practice for password security?",
        options: [
            "Use the same password for all accounts",
            "Share your password with trusted friends",
            "Use complex and unique passwords for each account",
            "Store your passwords on a physical note"
        ],
        correctAnswer: "Use complex and unique passwords for each account"
    },
    {
        question: "What is the best way to protect against phishing emails?",
        options: [
            "Clicking on the link to see if it’s legitimate",
            "Forwarding the email to others to verify",
            "Checking the sender’s email address and URL carefully",
            "Opening the attachment to verify"
        ],
        correctAnswer: "Checking the sender’s email address and URL carefully"
    }
];

const hardLevelQuizSet2 = [
    {
        question: "Which of the following is a common feature of an advanced persistent threat (APT)?",
        options: [
            "It involves long-term, targeted attacks on specific organizations",
            "It is a type of denial-of-service attack",
            "It uses ransomware to extort money from individuals",
            "It is designed to infect mobile devices only"
        ],
        correctAnswer: "It involves long-term, targeted attacks on specific organizations"
    },
    {
        question: "What is the primary goal of a buffer overflow attack?",
        options: [
            "To cause a system crash or gain unauthorized access",
            "To steal credit card information",
            "To slow down a website's response time",
            "To encrypt sensitive files on a system"
        ],
        correctAnswer: "To cause a system crash or gain unauthorized access"
    },
    {
        question: "Which type of attack exploits a vulnerability in the Border Gateway Protocol (BGP)?",
        options: [
            "BGP hijacking",
            "SQL injection",
            "Cross-site scripting (XSS)",
            "Session fixation"
        ],
        correctAnswer: "BGP hijacking"
    },
    {
        question: "What does a Distributed Denial-of-Service (DDoS) attack aim to achieve?",
        options: [
            "Overwhelm a network or server to make it unavailable",
            "Steal confidential data from a server",
            "Inject malicious code into a website",
            "Intercept communications between two systems"
        ],
        correctAnswer: "Overwhelm a network or server to make it unavailable"
    },
    {
        question: "Which of the following best describes the technique of 'SQL Injection'?",
        options: [
            "Injecting malicious SQL queries into input fields to exploit a database",
            "Using SQL queries to protect a database from malicious activity",
            "Querying a database to retrieve hidden data",
            "Injecting malicious code into a server's memory"
        ],
        correctAnswer: "Injecting malicious SQL queries into input fields to exploit a database"
    },
    {
        question: "Which of the following encryption algorithms is considered most secure for long-term data protection?",
        options: [
            "RSA with a key size of 2048 bits",
            "DES (Data Encryption Standard)",
            "AES (Advanced Encryption Standard) with a key size of 256 bits",
            "Blowfish with a key size of 128 bits"
        ],
        correctAnswer: "AES (Advanced Encryption Standard) with a key size of 256 bits"
    },
    {
        question: "What is the main goal of an 'Evil Twin' attack?",
        options: [
            "To set up a fake Wi-Fi hotspot to steal personal data",
            "To impersonate a legitimate website to steal login credentials",
            "To exploit vulnerabilities in social media platforms",
            "To inject malicious code into a website"
        ],
        correctAnswer: "To set up a fake Wi-Fi hotspot to steal personal data"
    },
    {
        question: "Which of the following best describes a Zero-Day vulnerability?",
        options: [
            "A vulnerability that is unknown to the software vendor or security community",
            "A vulnerability that has been patched and fixed by the vendor",
            "A vulnerability that only affects open-source software",
            "A vulnerability that is publicly disclosed and fixed immediately"
        ],
        correctAnswer: "A vulnerability that is unknown to the software vendor or security community"
    },
    {
        question: "What is the purpose of a 'Rootkit' in cybersecurity?",
        options: [
            "To gain and maintain privileged access to a system without detection",
            "To encrypt sensitive files for ransomware",
            "To monitor network traffic and block unauthorized access",
            "To inject malicious code into websites"
        ],
        correctAnswer: "To gain and maintain privileged access to a system without detection"
    },
    {
        question: "Which of the following is a common characteristic of polymorphic malware?",
        options: [
            "It changes its code each time it infects a new system",
            "It spreads via email attachments",
            "It encrypts files on infected devices",
            "It uses social engineering tactics to gain access"
        ],
        correctAnswer: "It changes its code each time it infects a new system"
    },
    {
        question: "What is 'Spear Phishing'?",
        options: [
            "A highly targeted phishing attack aimed at specific individuals or organizations",
            "An attack that uses social media platforms to distribute malware",
            "A general phishing attack targeting multiple random users",
            "A method to steal passwords from email providers"
        ],
        correctAnswer: "A highly targeted phishing attack aimed at specific individuals or organizations"
    },
    {
        question: "What is the primary objective of the 'Heartbleed' vulnerability?",
        options: [
            "To leak sensitive data from the memory of vulnerable servers",
            "To bypass security measures on websites",
            "To disrupt communication between devices on the network",
            "To alter encrypted files without detection"
        ],
        correctAnswer: "To leak sensitive data from the memory of vulnerable servers"
    },
    {
        question: "Which of the following is an example of a 'Denial of Service' (DoS) attack?",
        options: [
            "Flooding a server with excessive traffic to make it unavailable",
            "Stealing personal information from a database",
            "Injecting malicious scripts into a website",
            "Phishing an employee for login credentials"
        ],
        correctAnswer: "Flooding a server with excessive traffic to make it unavailable"
    },
    {
        question: "What is the main function of a 'Firewall' in network security?",
        options: [
            "To monitor and control incoming and outgoing network traffic based on predetermined security rules",
            "To encrypt files and ensure safe communication",
            "To store encrypted backups of sensitive data",
            "To detect and remove malware from a network"
        ],
        correctAnswer: "To monitor and control incoming and outgoing network traffic based on predetermined security rules"
    },
    {
        question: "Which of the following attack types targets vulnerabilities in public-facing applications?",
        options: [
            "Web Application Attacks",
            "Physical Security Breaches",
            "Social Engineering",
            "Man-in-the-middle Attacks"
        ],
        correctAnswer: "Web Application Attacks"
    }
];

const hardLevelQuizSet3 = [
    {
        question: "Which type of attack manipulates the transmission of data between two parties by intercepting and modifying the data?",
        options: [
            "Man-in-the-Middle Attack",
            "Denial of Service Attack",
            "Phishing Attack",
            "Brute Force Attack"
        ],
        correctAnswer: "Man-in-the-Middle Attack"
    },
    {
        question: "What is a 'watering hole' attack?",
        options: [
            "Compromising a website frequently visited by the target to infect the victim's system",
            "Targeting a specific individual for phishing",
            "Using malware to infect users' home routers",
            "Exploiting a vulnerability in a popular operating system"
        ],
        correctAnswer: "Compromising a website frequently visited by the target to infect the victim's system"
    },
    {
        question: "Which encryption standard is recommended by the US government for securing sensitive data?",
        options: [
            "AES-256",
            "RSA-1024",
            "3DES",
            "RC4"
        ],
        correctAnswer: "AES-256"
    },
    {
        question: "What does a 'SQL Injection' attack typically target?",
        options: [
            "Web applications and databases",
            "Networking protocols",
            "Physical hardware",
            "Email servers"
        ],
        correctAnswer: "Web applications and databases"
    },
    {
        question: "Which of the following describes a 'cross-site scripting' (XSS) attack?",
        options: [
            "Injecting malicious scripts into a website to execute on users' browsers",
            "Injecting malicious code into a server's memory",
            "Intercepting network traffic and modifying it",
            "Exploiting the weakness of the operating system"
        ],
        correctAnswer: "Injecting malicious scripts into a website to execute on users' browsers"
    },
    {
        question: "What is the primary purpose of the 'Shellshock' vulnerability?",
        options: [
            "Exploiting a flaw in the Bash shell to execute arbitrary commands",
            "Hijacking user credentials through phishing",
            "Manipulating the network stack of a system",
            "Accessing encrypted data without the decryption key"
        ],
        correctAnswer: "Exploiting a flaw in the Bash shell to execute arbitrary commands"
    },
    {
        question: "Which cybersecurity protocol is designed to ensure the confidentiality, integrity, and authenticity of data transmitted over the Internet?",
        options: [
            "TLS/SSL",
            "IPSec",
            "HTTP",
            "SSH"
        ],
        correctAnswer: "TLS/SSL"
    },
    {
        question: "What does the term 'RAT' stand for in cybersecurity?",
        options: [
            "Remote Access Trojan",
            "Root Access Tool",
            "Ransomware Attack Tool",
            "Recurrent Authentication Token"
        ],
        correctAnswer: "Remote Access Trojan"
    },
    {
        question: "Which method is commonly used to crack password hashes by trying all possible combinations of characters?",
        options: [
            "Brute-force attack",
            "Dictionary attack",
            "Rainbow table attack",
            "Man-in-the-Middle attack"
        ],
        correctAnswer: "Brute-force attack"
    },
    {
        question: "What is a key characteristic of ransomware attacks?",
        options: [
            "Encrypting the victim's data and demanding a ransom for decryption",
            "Stealing login credentials through phishing",
            "Performing Distributed Denial-of-Service (DDoS) attacks",
            "Injecting malicious code into web browsers"
        ],
        correctAnswer: "Encrypting the victim's data and demanding a ransom for decryption"
    },
    {
        question: "What is the purpose of the 'OWASP Top 10' list?",
        options: [
            "To identify the most critical web application security risks",
            "To outline the latest security tools and technologies",
            "To provide guidelines for network security configurations",
            "To create a framework for secure software development"
        ],
        correctAnswer: "To identify the most critical web application security risks"
    },
    {
        question: "Which attack involves using the victim's own authentication information to gain unauthorized access to their system?",
        options: [
            "Pass-the-Hash Attack",
            "Credential Stuffing",
            "Brute Force Attack",
            "Phishing Attack"
        ],
        correctAnswer: "Pass-the-Hash Attack"
    },
    {
        question: "What does a 'Privilege Escalation' attack attempt to achieve?",
        options: [
            "Gain higher privileges or access rights on a compromised system",
            "Hijack a user's session and impersonate them",
            "Perform a DDoS attack on a target system",
            "Inject malware into a web server"
        ],
        correctAnswer: "Gain higher privileges or access rights on a compromised system"
    },
    {
        question: "Which of the following tools is commonly used to exploit vulnerabilities in web applications?",
        options: [
            "Burp Suite",
            "Wireshark",
            "Nmap",
            "Metasploit"
        ],
        correctAnswer: "Burp Suite"
    },
    {
        question: "What does the term 'Zero-Day Attack' refer to?",
        options: [
            "An attack that targets a vulnerability that has not been publicly disclosed or patched",
            "An attack that occurs during the installation of software updates",
            "An attack involving the installation of a rootkit on a system",
            "An attack targeting a known vulnerability in a system that has been patched"
        ],
        correctAnswer: "An attack that targets a vulnerability that has not been publicly disclosed or patched"
    }
];

const hardLevelQuizSet4 = [
    {
        question: "Which attack targets an organization's website by overwhelming its servers with massive amounts of traffic?",
        options: [
            "Denial of Service (DoS)",
            "Man-in-the-Middle Attack",
            "SQL Injection",
            "Cross-Site Scripting (XSS)"
        ],
        correctAnswer: "Denial of Service (DoS)"
    },
    {
        question: "What is the primary purpose of a Public Key Infrastructure (PKI)?",
        options: [
            "To manage digital certificates and public-key encryption",
            "To secure user authentication in a network",
            "To store user credentials",
            "To implement two-factor authentication"
        ],
        correctAnswer: "To manage digital certificates and public-key encryption"
    },
    {
        question: "Which of the following is a type of malware that spreads by exploiting software vulnerabilities?",
        options: [
            "Worm",
            "Ransomware",
            "Spyware",
            "Trojan Horse"
        ],
        correctAnswer: "Worm"
    },
    {
        question: "What does the 'Zero Trust' security model advocate for?",
        options: [
            "Never trust, always verify, regardless of the location of the user or device",
            "Trust all devices on the internal network",
            "Trust only devices with a static IP address",
            "Trust users once they authenticate successfully"
        ],
        correctAnswer: "Never trust, always verify, regardless of the location of the user or device"
    },
    {
        question: "Which technique is used to hide malicious code inside seemingly innocent files or messages?",
        options: [
            "Obfuscation",
            "Encryption",
            "Keylogging",
            "Sniffing"
        ],
        correctAnswer: "Obfuscation"
    },
    {
        question: "Which cryptographic algorithm is known for its use in securing online banking transactions?",
        options: [
            "RSA",
            "AES",
            "SHA-256",
            "Triple DES"
        ],
        correctAnswer: "RSA"
    },
    {
        question: "What is the main goal of a 'pharming' attack?",
        options: [
            "Redirecting users from legitimate websites to malicious ones",
            "Stealing login credentials through phishing emails",
            "Injecting malware into an application",
            "Intercepting communications between two parties"
        ],
        correctAnswer: "Redirecting users from legitimate websites to malicious ones"
    },
    {
        question: "What is the name of the security technique used to isolate systems or networks from the internet in order to protect them from external attacks?",
        options: [
            "Air-gapping",
            "Segmentation",
            "Firewalling",
            "VPN"
        ],
        correctAnswer: "Air-gapping"
    },
    {
        question: "What is the primary purpose of a network intrusion detection system (NIDS)?",
        options: [
            "To monitor network traffic for suspicious activity",
            "To block unauthorized access to a network",
            "To manage firewall settings",
            "To encrypt sensitive data transmitted across a network"
        ],
        correctAnswer: "To monitor network traffic for suspicious activity"
    },
    {
        question: "Which of the following is a method to defend against brute-force attacks?",
        options: [
            "Account lockout after multiple failed attempts",
            "Using CAPTCHA on login pages",
            "Two-Factor Authentication (2FA)",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the primary purpose of a sandbox in cybersecurity?",
        options: [
            "To test suspicious files or code in an isolated environment",
            "To encrypt data before transmission",
            "To block all incoming connections from untrusted sources",
            "To generate random keys for cryptographic algorithms"
        ],
        correctAnswer: "To test suspicious files or code in an isolated environment"
    },
    {
        question: "What type of attack uses a large number of compromised devices to launch a coordinated attack on a target system?",
        options: [
            "Distributed Denial of Service (DDoS)",
            "Phishing",
            "Brute-force",
            "Eavesdropping"
        ],
        correctAnswer: "Distributed Denial of Service (DDoS)"
    },
    {
        question: "Which cryptographic protocol is used to ensure secure communication over the internet for web traffic?",
        options: [
            "SSL/TLS",
            "HTTPS",
            "SSH",
            "IPSec"
        ],
        correctAnswer: "SSL/TLS"
    },
    {
        question: "What is a major threat posed by an 'insider threat' in cybersecurity?",
        options: [
            "Malicious actions taken by individuals within the organization",
            "Data leakage from external hackers",
            "Ransomware attacks from external sources",
            "Social engineering attacks"
        ],
        correctAnswer: "Malicious actions taken by individuals within the organization"
    },
    {
        question: "Which attack vector involves an attacker tricking a victim into revealing sensitive information through fake websites or emails?",
        options: [
            "Phishing",
            "SQL Injection",
            "Cross-Site Request Forgery (CSRF)",
            "Man-in-the-Middle"
        ],
        correctAnswer: "Phishing"
    }
];

const hardLevelQuizSet5 = [
    {
        question: "Which of the following is a vulnerability associated with a web application's input validation?",
        options: [
            "SQL Injection",
            "DDoS",
            "Buffer Overflow",
            "Zero-Day Attack"
        ],
        correctAnswer: "SQL Injection"
    },
    {
        question: "What is the purpose of a 'man-in-the-middle' (MITM) attack?",
        options: [
            "To intercept and alter communications between two parties",
            "To inject malicious code into a victim's system",
            "To steal login credentials from a user",
            "To block access to a system or website"
        ],
        correctAnswer: "To intercept and alter communications between two parties"
    },
    {
        question: "Which of the following is an example of a passive reconnaissance attack?",
        options: [
            "Scanning a website for open ports",
            "Phishing",
            "Wi-Fi Sniffing",
            "Exploiting a known vulnerability"
        ],
        correctAnswer: "Wi-Fi Sniffing"
    },
    {
        question: "What is the primary function of a rootkit in cybersecurity?",
        options: [
            "To provide unauthorized access to a system while hiding its presence",
            "To encrypt sensitive data",
            "To prevent malware from being detected",
            "To monitor network traffic"
        ],
        correctAnswer: "To provide unauthorized access to a system while hiding its presence"
    },
    {
        question: "What type of attack involves an attacker attempting to gain access to a system by guessing user credentials repeatedly?",
        options: [
            "Brute Force Attack",
            "Phishing",
            "Cross-Site Scripting (XSS)",
            "Social Engineering"
        ],
        correctAnswer: "Brute Force Attack"
    },
    {
        question: "Which of the following is a key benefit of using a Web Application Firewall (WAF)?",
        options: [
            "To filter and monitor HTTP traffic to and from a web application",
            "To prevent DDoS attacks",
            "To monitor system logs for suspicious activity",
            "To prevent malware from being downloaded"
        ],
        correctAnswer: "To filter and monitor HTTP traffic to and from a web application"
    },
    {
        question: "What is the primary objective of a 'buffer overflow' attack?",
        options: [
            "To overwrite memory and execute malicious code",
            "To crash a server",
            "To steal login credentials",
            "To redirect traffic to a fake website"
        ],
        correctAnswer: "To overwrite memory and execute malicious code"
    },
    {
        question: "Which technique is commonly used in a phishing attack to make a malicious email appear legitimate?",
        options: [
            "Spoofing the email sender's address",
            "Encrypting the email body",
            "Using multiple domains",
            "Including false system alerts"
        ],
        correctAnswer: "Spoofing the email sender's address"
    },
    {
        question: "Which of the following describes a key characteristic of a ransomware attack?",
        options: [
            "Encrypting the victim's data and demanding payment for the decryption key",
            "Accessing the victim's device without permission",
            "Intercepting communications and altering them",
            "Gathering information from a victim’s system without their knowledge"
        ],
        correctAnswer: "Encrypting the victim's data and demanding payment for the decryption key"
    },
    {
        question: "What is the purpose of a 'time-of-check to time-of-use' (TOCTOU) vulnerability?",
        options: [
            "To exploit the delay between the verification and usage of a resource",
            "To bypass authentication by exploiting race conditions",
            "To exploit an issue where a device’s firmware becomes corrupted",
            "To inject malicious scripts into a system"
        ],
        correctAnswer: "To exploit the delay between the verification and usage of a resource"
    },
    {
        question: "What is the primary function of an Intrusion Prevention System (IPS)?",
        options: [
            "To detect and block potential threats in real time",
            "To log all traffic data for analysis",
            "To filter out spam emails",
            "To monitor user behavior on a network"
        ],
        correctAnswer: "To detect and block potential threats in real time"
    },
    {
        question: "Which attack uses a victim's trust in a legitimate website to steal their credentials?",
        options: [
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery (CSRF)",
            "Phishing",
            "Man-in-the-Middle"
        ],
        correctAnswer: "Cross-Site Request Forgery (CSRF)"
    },
    {
        question: "What is a Zero-Day vulnerability?",
        options: [
            "A vulnerability that is unknown to the software vendor and has no fix available",
            "A vulnerability that is only available in outdated software versions",
            "A vulnerability caused by incorrect configuration",
            "A vulnerability that only affects specific devices"
        ],
        correctAnswer: "A vulnerability that is unknown to the software vendor and has no fix available"
    },
    {
        question: "What is the goal of a DNS Spoofing attack?",
        options: [
            "To redirect traffic from legitimate websites to malicious websites",
            "To steal sensitive information from a target's DNS server",
            "To prevent a target from accessing a website",
            "To overload a DNS server with requests"
        ],
        correctAnswer: "To redirect traffic from legitimate websites to malicious websites"
    },
    {
        question: "Which cryptographic attack involves systematically testing all possible keys to break encryption?",
        options: [
            "Brute Force Attack",
            "Side-Channel Attack",
            "Birthday Attack",
            "Man-in-the-Middle Attack"
        ],
        correctAnswer: "Brute Force Attack"
    }
];

// Your Question Sets
const QuestionSet = [
    hardQuestions,
    hardLevelQuizSet2,
    hardLevelQuizSet3,
    hardLevelQuizSet4,
    hardLevelQuizSet5
];

const HardQuiz = () => {
    // Randomly pick one of the question sets
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        // Randomly select a set of questions when the component mounts
        const randomSet = QuestionSet[Math.floor(Math.random() * QuestionSet.length)];
        setSelectedQuestions(randomSet);
    }, []);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === selectedQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestion + 1 < selectedQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {!quizFinished ? (
                    <>
                        {/* Question */}
                        <h2 className="text-2xl font-semibold mb-6">{selectedQuestions[currentQuestion]?.question}</h2>

                        {/* Answer Options */}
                        <div className="grid grid-cols-1 gap-4">
                            {selectedQuestions[currentQuestion]?.options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>

                        {/* Progress */}
                        <p className="mt-6 text-gray-400">
                            Question {currentQuestion + 1} of {selectedQuestions.length}
                        </p>
                    </>
                ) : (
                    // Quiz Completion Message
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold">Quiz Completed! 🎉</h2>
                        <p className="text-xl mt-4">Your Score: <span className="text-red-400">{score}</span> / {selectedQuestions.length}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default HardQuiz;
