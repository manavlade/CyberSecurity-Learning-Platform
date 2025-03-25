import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mediumQuestions = [
    {
        question: "What is the most common method of cyber attack?",
        options: [
            "Phishing",
            "SQL Injection",
            "DDoS",
            "Man-in-the-Middle"
        ],
        correctAnswer: "Phishing"
    },
    {
        question: "Which of the following is the primary goal of a Ransomware attack?",
        options: [
            "Stealing personal information",
            "Encrypting the target's files and demanding a ransom",
            "Spreading malware across a network",
            "Intercepting sensitive communications"
        ],
        correctAnswer: "Encrypting the target's files and demanding a ransom"
    },
    {
        question: "What does a DNS server do?",
        options: [
            "Translates domain names into IP addresses",
            "Stores all your passwords",
            "Encrypts communications",
            "Blocks malware from accessing a network"
        ],
        correctAnswer: "Translates domain names into IP addresses"
    },
    {
        question: "Which of the following is a method of securing passwords?",
        options: [
            "Storing them in a text file",
            "Using a password manager",
            "Using the same password for multiple accounts",
            "Writing them down on paper"
        ],
        correctAnswer: "Using a password manager"
    },
    {
        question: "What is an IP address?",
        options: [
            "A unique identifier for a computer or device on a network",
            "A password protection method",
            "A type of encryption",
            "A social media platform"
        ],
        correctAnswer: "A unique identifier for a computer or device on a network"
    },
    {
        question: "What is a firewall used for?",
        options: [
            "Blocking unwanted network traffic",
            "Encrypting emails",
            "Storing data securely",
            "Scanning files for viruses"
        ],
        correctAnswer: "Blocking unwanted network traffic"
    },
    {
        question: "What does HTTPS stand for?",
        options: [
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Protocol",
            "High-Tech Transfer Protocol",
            "Home Transfer Protocol"
        ],
        correctAnswer: "HyperText Transfer Protocol Secure"
    },
    {
        question: "Which of these is NOT a type of cyber attack?",
        options: [
            "Malware",
            "Phishing",
            "Firewall",
            "DDoS"
        ],
        correctAnswer: "Firewall"
    },
    {
        question: "What is a VPN?",
        options: [
            "A Virtual Private Network that helps protect your data online",
            "A software tool for cleaning your computer",
            "A virus protection software",
            "A form of social engineering"
        ],
        correctAnswer: "A Virtual Private Network that helps protect your data online"
    },
    {
        question: "What is social engineering in the context of cybersecurity?",
        options: [
            "Manipulating people into revealing confidential information",
            "Breaking into systems by exploiting vulnerabilities",
            "Installing malware to infect systems",
            "Encrypting data to protect it from unauthorized access"
        ],
        correctAnswer: "Manipulating people into revealing confidential information"
    },
    {
        question: "What is the main goal of a DDoS (Distributed Denial of Service) attack?",
        options: [
            "To steal sensitive information",
            "To overwhelm a server with traffic and cause it to crash",
            "To infect a device with ransomware",
            "To hack into a network"
        ],
        correctAnswer: "To overwhelm a server with traffic and cause it to crash"
    },
    {
        question: "Which type of malware disguises itself as legitimate software?",
        options: [
            "Trojan Horse",
            "Ransomware",
            "Spyware",
            "Adware"
        ],
        correctAnswer: "Trojan Horse"
    },
    {
        question: "What does 'phishing' typically involve?",
        options: [
            "Sending fraudulent emails to deceive users into sharing personal information",
            "Stealing personal data through direct network access",
            "Injecting malware into legitimate software",
            "Man-in-the-middle attacks"
        ],
        correctAnswer: "Sending fraudulent emails to deceive users into sharing personal information"
    },
    {
        question: "Which is a good practice to protect your email account from unauthorized access?",
        options: [
            "Use the same password for all your accounts",
            "Enable Two-Factor Authentication (2FA)",
            "Share your password only with trusted people",
            "Don't use security questions"
        ],
        correctAnswer: "Enable Two-Factor Authentication (2FA)"
    },
    {
        question: "Which of the following is a common sign of a phishing attempt?",
        options: [
            "A legitimate-looking email asking you to click on a link and verify your account",
            "A warning message from your bank about suspicious activity",
            "A software update notification",
            "A password change notification from a website you use"
        ],
        correctAnswer: "A legitimate-looking email asking you to click on a link and verify your account"
    }
];

const mediumLevelQuizSet2 = [
    {
        question: "Which type of malware encrypts files and demands payment for decryption?",
        options: [
            "Trojan Horse",
            "Ransomware",
            "Spyware",
            "Adware"
        ],
        correctAnswer: "Ransomware"
    },
    {
        question: "What is the primary purpose of a penetration test?",
        options: [
            "To create new malware",
            "To test antivirus software",
            "To find vulnerabilities in a system",
            "To monitor employee activity"
        ],
        correctAnswer: "To find vulnerabilities in a system"
    },
    {
        question: "Which of these is a common form of phishing?",
        options: [
            "Sending fake invoices",
            "Asking for donations",
            "Playing online games",
            "Blocking social media accounts"
        ],
        correctAnswer: "Sending fake invoices"
    },
    {
        question: "A hacker uses a fake Wi-Fi hotspot to intercept user data. What is this attack called?",
        options: [
            "Man-in-the-Middle (MITM)",
            "Denial of Service (DoS)",
            "Phishing",
            "Brute Force"
        ],
        correctAnswer: "Man-in-the-Middle (MITM)"
    },
    {
        question: "What does SQL Injection target?",
        options: [
            "Web applications",
            "Networking devices",
            "Operating systems",
            "Cloud storage"
        ],
        correctAnswer: "Web applications"
    },
    {
        question: "Which security measure makes it harder for brute-force attacks to succeed?",
        options: [
            "Using CAPTCHA",
            "Opening all firewall ports",
            "Storing passwords in plaintext",
            "Using simple passwords"
        ],
        correctAnswer: "Using CAPTCHA"
    },
    {
        question: "What is a botnet?",
        options: [
            "A network of infected computers controlled remotely",
            "A social media automation tool",
            "A firewall security measure",
            "A type of antivirus software"
        ],
        correctAnswer: "A network of infected computers controlled remotely"
    },
    {
        question: "Which attack floods a server with excessive traffic to make it unavailable?",
        options: [
            "Brute Force Attack",
            "Denial-of-Service (DoS) Attack",
            "Zero-Day Attack",
            "DNS Spoofing"
        ],
        correctAnswer: "Denial-of-Service (DoS) Attack"
    },
    {
        question: "Which of the following best describes a zero-day vulnerability?",
        options: [
            "A security flaw that is publicly unknown and unpatched",
            "A virus detected on the first day of infection",
            "A type of two-factor authentication",
            "A new software update"
        ],
        correctAnswer: "A security flaw that is publicly unknown and unpatched"
    },
    {
        question: "Why is it dangerous to use the same password for multiple accounts?",
        options: [
            "It can make logging in faster",
            "A single data breach can compromise multiple accounts",
            "Hackers prefer unique passwords",
            "It improves security"
        ],
        correctAnswer: "A single data breach can compromise multiple accounts"
    },
    {
        question: "What is the main function of an Intrusion Detection System (IDS)?",
        options: [
            "To prevent unauthorized access",
            "To detect and alert about security threats",
            "To create backups of important files",
            "To increase internet speed"
        ],
        correctAnswer: "To detect and alert about security threats"
    },
    {
        question: "Which of these is an example of multi-factor authentication (MFA)?",
        options: [
            "Logging in with a username and password",
            "Entering a password and an OTP sent to your phone",
            "Using the same password on different accounts",
            "Saving passwords in a text file"
        ],
        correctAnswer: "Entering a password and an OTP sent to your phone"
    },
    {
        question: "What is social engineering in cybersecurity?",
        options: [
            "A method of building secure software",
            "Manipulating people to gain confidential information",
            "A way to speed up internet connections",
            "A technique to create strong passwords"
        ],
        correctAnswer: "Manipulating people to gain confidential information"
    },
    {
        question: "What should you check before entering sensitive information on a website?",
        options: [
            "The color of the webpage",
            "The presence of HTTPS in the URL",
            "The number of images on the page",
            "The font style of the text"
        ],
        correctAnswer: "The presence of HTTPS in the URL"
    },
    {
        question: "Which of these is a sign of a phishing attempt?",
        options: [
            "An email requesting urgent action with a suspicious link",
            "A regular system update notification",
            "An antivirus software performing a scan",
            "A Wi-Fi signal strength warning"
        ],
        correctAnswer: "An email requesting urgent action with a suspicious link"
    }
];

const mediumLevelQuizSet3 = [
    {
        question: "Which of the following is the safest way to connect to public Wi-Fi?",
        options: [
            "Use a VPN",
            "Disable your firewall",
            "Use the same password for all accounts",
            "Turn off your antivirus"
        ],
        correctAnswer: "Use a VPN"
    },
    {
        question: "Which of these is an example of a strong password?",
        options: [
            "password123",
            "MyDog2024",
            "H$g7!kL9@zM",
            "qwerty"
        ],
        correctAnswer: "H$g7!kL9@zM"
    },
    {
        question: "What is a keylogger?",
        options: [
            "A software that tracks every key you press",
            "A program that speeds up your keyboard",
            "A way to encrypt your passwords",
            "A type of firewall"
        ],
        correctAnswer: "A software that tracks every key you press"
    },
    {
        question: "Which of the following is an example of two-factor authentication (2FA)?",
        options: [
            "Logging in with just a password",
            "Using a fingerprint scan and a password",
            "Saving your password in a browser",
            "Writing your password on paper"
        ],
        correctAnswer: "Using a fingerprint scan and a password"
    },
    {
        question: "Which type of attack uses a fake login page to steal credentials?",
        options: [
            "Brute force attack",
            "Phishing attack",
            "Man-in-the-middle attack",
            "DDoS attack"
        ],
        correctAnswer: "Phishing attack"
    },
    {
        question: "What is the main goal of ethical hacking?",
        options: [
            "To damage company data",
            "To find and fix security vulnerabilities",
            "To hack into banking systems",
            "To install malware on company computers"
        ],
        correctAnswer: "To find and fix security vulnerabilities"
    },
    {
        question: "What should you do if your password has been leaked in a data breach?",
        options: [
            "Ignore it",
            "Change your password immediately",
            "Use the same password on another website",
            "Share your password with friends for safety"
        ],
        correctAnswer: "Change your password immediately"
    },
    {
        question: "Which of these is a good cybersecurity practice?",
        options: [
            "Using the same password for everything",
            "Clicking on all email links",
            "Enabling software updates regularly",
            "Disabling your firewall for faster internet"
        ],
        correctAnswer: "Enabling software updates regularly"
    },
    {
        question: "Which of these cyber attacks specifically targets CEOs or executives?",
        options: [
            "Pharming attack",
            "Spear phishing",
            "Ransomware attack",
            "Denial of Service attack"
        ],
        correctAnswer: "Spear phishing"
    },
    {
        question: "What does an SSL certificate do for a website?",
        options: [
            "Encrypts data sent between the user and the website",
            "Increases website loading speed",
            "Adds extra advertisements to the website",
            "Deletes user cookies"
        ],
        correctAnswer: "Encrypts data sent between the user and the website"
    },
    {
        question: "Which of these is a sign of malware on your computer?",
        options: [
            "Your computer runs faster than usual",
            "You receive pop-ups and your system slows down",
            "Your antivirus is working normally",
            "You can’t find any suspicious files"
        ],
        correctAnswer: "You receive pop-ups and your system slows down"
    },
    {
        question: "What is an example of a denial-of-service (DoS) attack?",
        options: [
            "A hacker forces a website to shut down by overloading it with traffic",
            "A hacker installs a keylogger",
            "A website is hacked and passwords are stolen",
            "A user forgets their password"
        ],
        correctAnswer: "A hacker forces a website to shut down by overloading it with traffic"
    },
    {
        question: "What is a social engineering attack?",
        options: [
            "A cyber attack that manipulates people into revealing sensitive information",
            "A type of software that prevents hacking",
            "An encryption method",
            "A way to secure social media accounts"
        ],
        correctAnswer: "A cyber attack that manipulates people into revealing sensitive information"
    },
    {
        question: "What should you do before clicking a link in an email?",
        options: [
            "Click it immediately",
            "Verify the sender and hover over the link to check its URL",
            "Share it with a friend",
            "Ignore it and delete the email"
        ],
        correctAnswer: "Verify the sender and hover over the link to check its URL"
    },
    {
        question: "What is the purpose of a CAPTCHA test?",
        options: [
            "To verify that a user is human and prevent bots",
            "To scan a computer for viruses",
            "To speed up internet browsing",
            "To delete browser cookies"
        ],
        correctAnswer: "To verify that a user is human and prevent bots"
    }
];

const mediumLevelQuizSet4 = [
    {
        question: "What is the primary function of an Intrusion Detection System (IDS)?",
        options: [
            "To prevent cyber attacks",
            "To detect and alert on suspicious activities",
            "To increase internet speed",
            "To remove malware from a computer"
        ],
        correctAnswer: "To detect and alert on suspicious activities"
    },
    {
        question: "Which of the following is a best practice when creating a new online account?",
        options: [
            "Using the same password as your email",
            "Choosing a strong, unique password",
            "Sharing your password with a friend for safety",
            "Using 'password' as your password for easy recall"
        ],
        correctAnswer: "Choosing a strong, unique password"
    },
    {
        question: "What does the term 'zero-day vulnerability' refer to?",
        options: [
            "A security flaw that is publicly known but not yet patched",
            "A vulnerability that has existed for a long time",
            "A cyber attack that happens after 24 hours",
            "An antivirus software update"
        ],
        correctAnswer: "A security flaw that is publicly known but not yet patched"
    },
    {
        question: "Which of the following is NOT a form of malware?",
        options: [
            "Trojan Horse",
            "Firewall",
            "Spyware",
            "Ransomware"
        ],
        correctAnswer: "Firewall"
    },
    {
        question: "Which security principle ensures that data is not modified or altered?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication"
        ],
        correctAnswer: "Integrity"
    },
    {
        question: "Which cyber attack floods a server with excessive traffic to make it unavailable?",
        options: [
            "Man-in-the-middle attack",
            "Phishing attack",
            "Denial-of-service (DoS) attack",
            "SQL injection"
        ],
        correctAnswer: "Denial-of-service (DoS) attack"
    },
    {
        question: "Which of the following is a secure way to store passwords?",
        options: [
            "Writing them on a sticky note",
            "Saving them in a text file",
            "Using a password manager",
            "Setting the same password for all accounts"
        ],
        correctAnswer: "Using a password manager"
    },
    {
        question: "What is a 'brute force' attack?",
        options: [
            "A method where a hacker guesses passwords repeatedly",
            "An attack using fake login pages",
            "A type of social engineering attack",
            "An attack that crashes the computer"
        ],
        correctAnswer: "A method where a hacker guesses passwords repeatedly"
    },
    {
        question: "What does 'social engineering' in cybersecurity mean?",
        options: [
            "A type of firewall configuration",
            "A way to securely share passwords",
            "Manipulating people into revealing confidential information",
            "Encrypting social media accounts"
        ],
        correctAnswer: "Manipulating people into revealing confidential information"
    },
    {
        question: "Which of the following is an example of multi-factor authentication (MFA)?",
        options: [
            "Logging in with just a password",
            "Using a fingerprint and a one-time password (OTP)",
            "Saving passwords in a browser",
            "Writing passwords down for easy recall"
        ],
        correctAnswer: "Using a fingerprint and a one-time password (OTP)"
    },
    {
        question: "What should you do if you suspect your computer is infected with malware?",
        options: [
            "Ignore it and hope it goes away",
            "Turn off your antivirus software",
            "Run a malware scan and remove suspicious files",
            "Delete all your files immediately"
        ],
        correctAnswer: "Run a malware scan and remove suspicious files"
    },
    {
        question: "What is the best way to verify a website's security before entering sensitive information?",
        options: [
            "Check if the URL starts with 'https'",
            "Look at the website's color scheme",
            "See if the website has a lot of ads",
            "Click on random links to test its security"
        ],
        correctAnswer: "Check if the URL starts with 'https'"
    },
    {
        question: "Which of the following is a sign of a phishing attack?",
        options: [
            "An email asking you to urgently verify your password",
            "A software update notification",
            "A reminder to change your password every 3 months",
            "A security message from your antivirus software"
        ],
        correctAnswer: "An email asking you to urgently verify your password"
    },
    {
        question: "What is the purpose of a Virtual Private Network (VPN)?",
        options: [
            "To browse the internet securely by encrypting your connection",
            "To increase internet speed",
            "To disable firewalls",
            "To store your passwords"
        ],
        correctAnswer: "To browse the internet securely by encrypting your connection"
    },
    {
        question: "Which of the following should you NOT do when using public Wi-Fi?",
        options: [
            "Log into your online banking account",
            "Use a VPN for security",
            "Avoid sharing sensitive information",
            "Verify if the network is legitimate"
        ],
        correctAnswer: "Log into your online banking account"
    }
];

const mediumLevelQuizSet5 = [
    {
        question: "Which of the following is a common method hackers use to steal login credentials?",
        options: [
            "Phishing emails",
            "Using antivirus software",
            "Clearing browser cache",
            "Updating passwords regularly"
        ],
        correctAnswer: "Phishing emails"
    },
    {
        question: "What does a 'man-in-the-middle' attack involve?",
        options: [
            "Intercepting communication between two parties",
            "Guessing passwords repeatedly",
            "Launching a virus on a network",
            "Using two-factor authentication"
        ],
        correctAnswer: "Intercepting communication between two parties"
    },
    {
        question: "Which of the following best describes a ransomware attack?",
        options: [
            "A hacker locks your files and demands payment to unlock them",
            "A software that improves cybersecurity",
            "A backup service to restore lost files",
            "A legal tool used to track hackers"
        ],
        correctAnswer: "A hacker locks your files and demands payment to unlock them"
    },
    {
        question: "What is an SQL injection attack?",
        options: [
            "An attack that exploits vulnerabilities in a database query",
            "A way to speed up website performance",
            "A method of encrypting sensitive data",
            "A process to remove malware from a system"
        ],
        correctAnswer: "An attack that exploits vulnerabilities in a database query"
    },
    {
        question: "Which of these is NOT a good cybersecurity practice?",
        options: [
            "Using public Wi-Fi for financial transactions",
            "Using two-factor authentication (2FA)",
            "Keeping software up to date",
            "Using complex and unique passwords"
        ],
        correctAnswer: "Using public Wi-Fi for financial transactions"
    },
    {
        question: "What does the term 'social engineering' mean in cybersecurity?",
        options: [
            "Manipulating people into revealing confidential information",
            "Using a firewall to block hackers",
            "Encrypting files to protect them",
            "Installing antivirus software"
        ],
        correctAnswer: "Manipulating people into revealing confidential information"
    },
    {
        question: "Which of the following is a sign that an email might be a phishing attempt?",
        options: [
            "An urgent request for sensitive information",
            "A greeting from a known sender",
            "An attachment containing a PDF file",
            "A request to change your profile picture"
        ],
        correctAnswer: "An urgent request for sensitive information"
    },
    {
        question: "What is the purpose of a security patch?",
        options: [
            "To fix vulnerabilities in software",
            "To make a computer run faster",
            "To upgrade hardware components",
            "To remove unnecessary files"
        ],
        correctAnswer: "To fix vulnerabilities in software"
    },
    {
        question: "Which of the following is an example of a strong password?",
        options: [
            "John123",
            "P@ssword",
            "G#5hT!9bQ2k",
            "12345678"
        ],
        correctAnswer: "G#5hT!9bQ2k"
    },
    {
        question: "What is the main function of a honeypot in cybersecurity?",
        options: [
            "To attract and trap hackers",
            "To speed up a network connection",
            "To store encrypted passwords",
            "To remove spyware from devices"
        ],
        correctAnswer: "To attract and trap hackers"
    },
    {
        question: "What is a digital signature used for?",
        options: [
            "Verifying the authenticity of a digital message or document",
            "Encrypting files on a hard drive",
            "Scanning for malware on a device",
            "Hiding personal information from websites"
        ],
        correctAnswer: "Verifying the authenticity of a digital message or document"
    },
    {
        question: "Why should you disable Bluetooth when not in use?",
        options: [
            "To prevent unauthorized access to your device",
            "To save battery life",
            "To improve internet speed",
            "To avoid losing your phone"
        ],
        correctAnswer: "To prevent unauthorized access to your device"
    },
    {
        question: "What is the primary function of a VPN?",
        options: [
            "Encrypting internet traffic for privacy",
            "Boosting internet speed",
            "Blocking viruses and malware",
            "Providing free Wi-Fi access"
        ],
        correctAnswer: "Encrypting internet traffic for privacy"
    },
    {
        question: "What is the purpose of an access control list (ACL) in cybersecurity?",
        options: [
            "To define permissions for users and systems",
            "To increase network speed",
            "To store usernames and passwords",
            "To monitor CPU usage"
        ],
        correctAnswer: "To define permissions for users and systems"
    },
    {
        question: "What should you do first if you suspect your online account has been hacked?",
        options: [
            "Change your password immediately",
            "Ignore the warning and continue using the account",
            "Post about it on social media",
            "Delete the account without investigation"
        ],
        correctAnswer: "Change your password immediately"
    }
];

const questionSets = [
   mediumQuestions,
   mediumLevelQuizSet2,
   mediumLevelQuizSet3,
   mediumLevelQuizSet4,
   mediumLevelQuizSet5
];

const MediumQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedQuizSet, setSelectedQuizSet] = useState([]); // Holds the randomly selected quiz set

    // Function to shuffle quiz questions
    const shuffleQuizSet = () => {
        const randomSet = questionSets[Math.floor(Math.random() * questionSets.length)];
        setSelectedQuizSet(randomSet);
    };

    useEffect(() => {
        shuffleQuizSet(); // Shuffle and select a quiz set when the component mounts
    }, []);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === selectedQuizSet[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestion + 1 < selectedQuizSet.length) {
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
                        <h2 className="text-2xl font-semibold mb-6">{selectedQuizSet[currentQuestion]?.question}</h2>

                        {/* Answer Options */}
                        <div className="grid grid-cols-1 gap-4">
                            {selectedQuizSet[currentQuestion]?.options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>

                        {/* Progress */}
                        <p className="mt-6 text-gray-400">
                            Question {currentQuestion + 1} of {selectedQuizSet.length}
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
                        <p className="text-xl mt-4">Your Score: <span className="text-green-400">{score}</span> / {selectedQuizSet.length}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default MediumQuiz;