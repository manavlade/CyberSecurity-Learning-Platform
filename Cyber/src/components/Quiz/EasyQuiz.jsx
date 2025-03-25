import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quizQuestions = [
    {
        question: "What is the strongest password?",
        options: [
            "123456",
            "Password123",
            "P@ssW0rD!2023",
            "qwerty"
        ],
        correctAnswer: "P@ssW0rD!2023"
    },
    {
        question: "What does HTTPS stand for?",
        options: [
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Protocol",
            "High-Tech Transfer Protocol System",
            "Home Transfer Text Secure"
        ],
        correctAnswer: "HyperText Transfer Protocol Secure"
    },
    {
        question: "What should you do if you receive a suspicious email?",
        options: [
            "Open it to check the content",
            "Click all links to verify",
            "Report and delete it",
            "Forward it to a friend"
        ],
        correctAnswer: "Report and delete it"
    },
    {
        question: "Which is the safest method to store passwords?",
        options: [
            "Write them in a notebook",
            "Save them in a text file",
            "Use a password manager",
            "Use the same password for everything"
        ],
        correctAnswer: "Use a password manager"
    },
    {
        question: "What is phishing?",
        options: [
            "A type of cyber attack using fake websites or emails",
            "An online fishing game",
            "A way to speed up the internet",
            "A new social media trend"
        ],
        correctAnswer: "A type of cyber attack using fake websites or emails"
    },
    {
        question: "What is Two-Factor Authentication (2FA)?",
        options: [
            "A way to verify identity using two security layers",
            "A backup method to recover passwords",
            "A faster way to log in",
            "A feature that blocks access to a website"
        ],
        correctAnswer: "A way to verify identity using two security layers"
    },
    {
        question: "Which of these is NOT a cybersecurity threat?",
        options: [
            "Ransomware",
            "Antivirus",
            "Phishing",
            "Trojan Horse"
        ],
        correctAnswer: "Antivirus"
    },
    {
        question: "What does a firewall do?",
        options: [
            "Blocks unauthorized access to a network",
            "Speeds up internet connection",
            "Deletes all files from a computer",
            "Creates backup copies of files"
        ],
        correctAnswer: "Blocks unauthorized access to a network"
    },
    {
        question: "Which of these passwords is the most secure?",
        options: [
            "JohnDoe123",
            "Pa$$w0rd",
            "gT6@9Lm!2z",
            "abcdefg"
        ],
        correctAnswer: "gT6@9Lm!2z"
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
        question: "Which of these is an example of social engineering?",
        options: [
            "A hacker using software to break a password",
            "An attacker tricking you into sharing personal data",
            "A software bug in an operating system",
            "An AI chatbot responding to your questions"
        ],
        correctAnswer: "An attacker tricking you into sharing personal data"
    },
    {
        question: "Why should you avoid using public Wi-Fi for online banking?",
        options: [
            "It is too slow",
            "It might be unsecured and expose your data",
            "It drains your phone battery",
            "It requires a password"
        ],
        correctAnswer: "It might be unsecured and expose your data"
    },
    {
        question: "What is malware?",
        options: [
            "A type of computer virus",
            "Malicious software that harms your device",
            "A programming language",
            "An online payment method"
        ],
        correctAnswer: "Malicious software that harms your device"
    },
    {
        question: "What is a brute force attack?",
        options: [
            "An attack where a hacker guesses passwords repeatedly",
            "A method to clean viruses from a system",
            "A way to recover lost files",
            "A technique for improving Wi-Fi speed"
        ],
        correctAnswer: "An attack where a hacker guesses passwords repeatedly"
    },
    {
        question: "How often should you update your passwords?",
        options: [
            "Every 5 years",
            "Only if you forget it",
            "Regularly, every 3-6 months",
            "Never, if it’s strong"
        ],
        correctAnswer: "Regularly, every 3-6 months"
    }
];

const quizQuestions2 = [
    {
        question: "What is the strongest password?",
        options: [
            "123456",
            "Password123",
            "P@ssW0rD!2023",
            "qwerty"
        ],
        correctAnswer: "P@ssW0rD!2023"
    },
    {
        question: "What does HTTPS stand for?",
        options: [
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Protocol",
            "High-Tech Transfer Protocol System",
            "Home Transfer Text Secure"
        ],
        correctAnswer: "HyperText Transfer Protocol Secure"
    },
    {
        question: "What should you do if you receive a suspicious email?",
        options: [
            "Open it to check the content",
        "Click all links to verify",
            "Report and delete it",
            "Forward it to a friend"
        ],
        correctAnswer: "Report and delete it"
    },
    {
        question: "Which is the safest method to store passwords?",
        options: [
            "Write them in a notebook",
            "Save them in a text file",
            "Use a password manager",
            "Use the same password for everything"
        ],
        correctAnswer: "Use a password manager"
    },
    {
        question: "What is phishing?",
        options: [
            "A type of cyber attack using fake websites or emails",
            "An online fishing game",
            "A way to speed up the internet",
            "A new social media trend"
        ],
        correctAnswer: "A type of cyber attack using fake websites or emails"
    },
    {
        question: "What is Two-Factor Authentication (2FA)?",
        options: [
            "A way to verify identity using two security layers",
            "A backup method to recover passwords",
            "A faster way to log in",
            "A feature that blocks access to a website"
        ],
        correctAnswer: "A way to verify identity using two security layers"
    },
    {
        question: "Which of these is NOT a cybersecurity threat?",
        options: [
            "Ransomware",
            "Antivirus",
            "Phishing",
            "Trojan Horse"
        ],
        correctAnswer: "Antivirus"
    },
    {
        question: "What does a firewall do?",
        options: [
            "Blocks unauthorized access to a network",
            "Speeds up internet connection",
            "Deletes all files from a computer",
            "Creates backup copies of files"
        ],
        correctAnswer: "Blocks unauthorized access to a network"
    },
    {
        question: "Which of these passwords is the most secure?",
        options: [
            "JohnDoe123",
            "Pa$$w0rd",
            "gT6@9Lm!2z",
            "abcdefg"
        ],
        correctAnswer: "gT6@9Lm!2z"
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
        question: "Which of these is an example of social engineering?",
        options: [
            "A hacker using software to break a password",
            "An attacker tricking you into sharing personal data",
            "A software bug in an operating system",
            "An AI chatbot responding to your questions"
        ],
        correctAnswer: "An attacker tricking you into sharing personal data"
    },
    {
        question: "Why should you avoid using public Wi-Fi for online banking?",
        options: [
            "It is too slow",
            "It might be unsecured and expose your data",
            "It drains your phone battery",
            "It requires a password"
        ],
        correctAnswer: "It might be unsecured and expose your data"
    },
    {
        question: "What is malware?",
        options: [
            "A type of computer virus",
            "Malicious software that harms your device",
            "A programming language",
            "An online payment method"
        ],
        correctAnswer: "Malicious software that harms your device"
    },
    {
        question: "What is a brute force attack?",
        options: [
            "An attack where a hacker guesses passwords repeatedly",
            "A method to clean viruses from a system",
            "A way to recover lost files",
            "A technique for improving Wi-Fi speed"
        ],
        correctAnswer: "An attack where a hacker guesses passwords repeatedly"
    },
    {
        question: "How often should you update your passwords?",
        options: [
            "Every 5 years",
            "Only if you forget it",
            "Regularly, every 3-6 months",
            "Never, if it’s strong"
        ],
        correctAnswer: "Regularly, every 3-6 months"
    },
    {
        question: "What is a strong password made of?",
        options: [
            "Only numbers",
            "A mix of letters, numbers, and symbols",
            "Just your birthdate",
            "Your name and year of birth"
        ],
        correctAnswer: "A mix of letters, numbers, and symbols"
    },
    {
        question: "Which of these is an example of a phishing attempt?",
        options: [
            "An email from your bank asking for your password",
            "A pop-up ad about a sale",
            "A text from a friend",
            "A weather notification"
        ],
        correctAnswer: "An email from your bank asking for your password"
    },
    {
        question: "What should you do if a website looks suspicious?",
        options: [
            "Enter your details to check if it works",
            "Close the page and avoid using it",
            "Share it with friends to see if they used it",
            "Disable your internet connection"
        ],
        correctAnswer: "Close the page and avoid using it"
    },
    {
        question: "What is a common sign of a scam email?",
        options: [
            "Spelling mistakes and urgent language",
            "An email from a trusted friend",
            "A newsletter you subscribed to",
            "A normal message with no links"
        ],
        correctAnswer: "Spelling mistakes and urgent language"
    },
    {
        question: "Which of these is safe to click?",
        options: [
            "A link in a spam email",
            "A random pop-up ad",
            "A verified website’s URL",
            "A download from an unknown source"
        ],
        correctAnswer: "A verified website’s URL"
    },
    {
        question: "What should you do if your computer gets a virus?",
        options: [
            "Ignore it and keep using it",
            "Run an antivirus scan and remove threats",
            "Unplug your computer",
            "Delete random files"
        ],
        correctAnswer: "Run an antivirus scan and remove threats"
    },
    {
        question: "Why should you log out of public computers?",
        options: [
            "So others can't access your accounts",
            "Because it makes the computer faster",
            "To save power",
            "It’s not necessary"
        ],
        correctAnswer: "So others can't access your accounts"
    },
    {
        question: "Which of these devices can be hacked?",
        options: [
            "Only computers",
            "Smartphones, computers, and smart devices",
            "Just gaming consoles",
            "Old devices only"
        ],
        correctAnswer: "Smartphones, computers, and smart devices"
    },
    {
        question: "What should you do before installing a new app?",
        options: [
            "Read its reviews and check permissions",
            "Install it immediately",
            "Download it from any website",
            "Ignore permissions"
        ],
        correctAnswer: "Read its reviews and check permissions"
    }
];

const additionalQuizQuestions = [
    {
        question: "What should you do if a website asks for too much personal information?",
        options: [
            "Provide the details quickly",
            "Ignore the request and leave the site",
            "Share the details with a friend first",
            "Only provide your full name"
        ],
        correctAnswer: "Ignore the request and leave the site"
    },
    {
        question: "Which of these is the best way to protect your online accounts?",
        options: [
            "Use the same password everywhere",
            "Enable Two-Factor Authentication (2FA)",
            "Write passwords on paper",
            "Never change your passwords"
        ],
        correctAnswer: "Enable Two-Factor Authentication (2FA)"
    },
    {
        question: "What is a safe practice when using social media?",
        options: [
            "Accepting friend requests from strangers",
            "Sharing your password in private messages",
            "Keeping personal details private",
            "Posting your home address online"
        ],
        correctAnswer: "Keeping personal details private"
    },
    {
        question: "Which of the following is an example of malware?",
        options: [
            "A useful app from a trusted website",
            "A computer virus",
            "A Microsoft Word document",
            "A Wi-Fi connection"
        ],
        correctAnswer: "A computer virus"
    },
    {
        question: "What should you do if your social media account is hacked?",
        options: [
            "Ignore it and hope it gets fixed",
            "Report the hack and change your password immediately",
            "Create a new account without reporting",
            "Post about it on social media"
        ],
        correctAnswer: "Report the hack and change your password immediately"
    },
    {
        question: "What does a strong password contain?",
        options: [
            "Only numbers",
            "A mix of uppercase, lowercase, numbers, and symbols",
            "Your birth year",
            "Only lowercase letters"
        ],
        correctAnswer: "A mix of uppercase, lowercase, numbers, and symbols"
    },
    {
        question: "How can you identify a fake website?",
        options: [
            "By checking for spelling errors and suspicious URLs",
            "If it looks nice, it’s real",
            "If it has images, it’s real",
            "Fake websites don’t exist"
        ],
        correctAnswer: "By checking for spelling errors and suspicious URLs"
    },
    {
        question: "What is an important rule when downloading files?",
        options: [
            "Download from trusted sources only",
            "Download everything you find",
            "Ignore warnings from your browser",
            "Download software from pop-up ads"
        ],
        correctAnswer: "Download from trusted sources only"
    },
    {
        question: "What should you do if a website says 'Your computer is infected! Click here'?",
        options: [
            "Click the link to remove the virus",
            "Close the site immediately",
            "Call the number displayed on the site",
            "Restart your computer"
        ],
        correctAnswer: "Close the site immediately"
    },
    {
        question: "Why should you avoid clicking unknown links in emails?",
        options: [
            "They may be scams or contain viruses",
            "They always contain useful information",
            "They increase your internet speed",
            "They help your device work faster"
        ],
        correctAnswer: "They may be scams or contain viruses"
    },
    {
        question: "Which of these is an example of a secure website URL?",
        options: [
            "http://example.com",
            "https://securebank.com",
            "www.bank-login.com",
            "http://login.secure"
        ],
        correctAnswer: "https://securebank.com"
    },
    {
        question: "What should you do if an online friend asks for personal details?",
        options: [
            "Share your phone number",
            "Give your home address",
            "Never share personal details online",
            "Send a picture of your ID"
        ],
        correctAnswer: "Never share personal details online"
    },
    {
        question: "What does a security update do for your device?",
        options: [
            "Slows down your device",
            "Protects it from new threats",
            "Deletes your files",
            "Makes it look newer"
        ],
        correctAnswer: "Protects it from new threats"
    },
    {
        question: "Which of these is a good way to avoid online scams?",
        options: [
            "Trust every email you receive",
            "Click on ads offering free prizes",
            "Verify the sender before sharing information",
            "Download random apps to stay updated"
        ],
        correctAnswer: "Verify the sender before sharing information"
    },
    {
        question: "Why is it dangerous to use the same password for all accounts?",
        options: [
            "It makes logging in slower",
            "If one account gets hacked, others are at risk",
            "It helps hackers create stronger passwords",
            "It’s actually the safest method"
        ],
        correctAnswer: "If one account gets hacked, others are at risk"
    }
];

const additionalEasyQuizQuestions = [
    {
        question: "What should you do before entering your password on a website?",
        options: [
            "Make sure the website URL starts with 'https'",
            "Enter it as fast as possible",
            "Share it with a friend to confirm",
            "Write it down on paper"
        ],
        correctAnswer: "Make sure the website URL starts with 'https'"
    },
    {
        question: "What is the best way to protect your smartphone from hackers?",
        options: [
            "Install security updates regularly",
            "Use an easy-to-remember password",
            "Never lock your phone",
            "Download apps from unknown sources"
        ],
        correctAnswer: "Install security updates regularly"
    },
    {
        question: "Which of these passwords is the weakest?",
        options: [
            "CyberSecure2023!",
            "abcd1234",
            "Tr&!7wQp",
            "S!3cUr3Pa$$"
        ],
        correctAnswer: "abcd1234"
    },
    {
        question: "What should you do if you receive a message saying you won a prize but never entered a contest?",
        options: [
            "Click the link to claim your prize",
            "Reply with your personal details",
            "Ignore and delete the message",
            "Share it with your friends"
        ],
        correctAnswer: "Ignore and delete the message"
    },
    {
        question: "What is the purpose of antivirus software?",
        options: [
            "To make the internet faster",
            "To protect your device from viruses and malware",
            "To download files from the internet",
            "To open locked files"
        ],
        correctAnswer: "To protect your device from viruses and malware"
    },
    {
        question: "Why should you avoid sharing personal details on public forums?",
        options: [
            "Because everyone will respect your privacy",
            "Because hackers or scammers can misuse your information",
            "Because it helps you gain more followers",
            "Because it is required by law"
        ],
        correctAnswer: "Because hackers or scammers can misuse your information"
    },
    {
        question: "What is the safest way to handle spam emails?",
        options: [
            "Open and read them carefully",
            "Reply and ask for more information",
            "Delete them without clicking any links",
            "Forward them to a friend"
        ],
        correctAnswer: "Delete them without clicking any links"
    },
    {
        question: "Which of these is NOT a strong password?",
        options: [
            "P@ssw0rd!2024",
            "12345678",
            "Zx&7$g1P!mA",
            "SecurePass#45"
        ],
        correctAnswer: "12345678"
    },
    {
        question: "What does it mean if a website has a padlock icon in the address bar?",
        options: [
            "The site is 100% safe and secure",
            "The site uses encryption to protect data",
            "The site is infected with malware",
            "The site charges a fee to access it"
        ],
        correctAnswer: "The site uses encryption to protect data"
    },
    {
        question: "Why should you log out of accounts on public computers?",
        options: [
            "To keep your information safe",
            "To help the next user log in faster",
            "To reset the computer",
            "Because it's not necessary"
        ],
        correctAnswer: "To keep your information safe"
    },
    {
        question: "What is an example of social engineering?",
        options: [
            "A hacker using software to crack passwords",
            "Someone tricking you into revealing personal data",
            "A website giving free antivirus software",
            "A strong firewall blocking threats"
        ],
        correctAnswer: "Someone tricking you into revealing personal data"
    },
    {
        question: "How can you tell if an email is phishing?",
        options: [
            "It asks for personal or financial information",
            "It comes from a trusted friend",
            "It contains a funny joke",
            "It has no subject line"
        ],
        correctAnswer: "It asks for personal or financial information"
    },
    {
        question: "What is the main risk of using free Wi-Fi in public places?",
        options: [
            "It might be too slow",
            "Hackers can intercept your data",
            "It drains your phone battery faster",
            "It only works on certain devices"
        ],
        correctAnswer: "Hackers can intercept your data"
    },
    {
        question: "What should you do if an app asks for unnecessary permissions?",
        options: [
            "Grant all permissions",
            "Deny the unnecessary ones or avoid installing the app",
            "Ignore the warning and continue",
            "Turn off your phone"
        ],
        correctAnswer: "Deny the unnecessary ones or avoid installing the app"
    },
    {
        question: "Which of these is an example of multi-factor authentication?",
        options: [
            "Entering your password and a code sent to your phone",
            "Logging in with just a username",
            "Using the same password for all accounts",
            "Clicking 'Remember Me' on a website"
        ],
        correctAnswer: "Entering your password and a code sent to your phone"
    }
];

const moreEasyQuizQuestions = [
    {
        question: "What should you do if a website asks for personal details that seem unnecessary?",
        options: [
            "Enter the details anyway",
            "Check if the website is trustworthy before sharing",
            "Share false information",
            "Ignore the warning and proceed"
        ],
        correctAnswer: "Check if the website is trustworthy before sharing"
    },
    {
        question: "Which of these is a good cybersecurity habit?",
        options: [
            "Using the same password for all accounts",
            "Ignoring software updates",
            "Using two-factor authentication (2FA)",
            "Clicking on every email link"
        ],
        correctAnswer: "Using two-factor authentication (2FA)"
    },
    {
        question: "What should you do if your device starts acting strangely and slows down?",
        options: [
            "Ignore it and continue using it",
            "Click on pop-ups offering to fix your device",
            "Scan your device for malware and viruses",
            "Download random software to fix the issue"
        ],
        correctAnswer: "Scan your device for malware and viruses"
    },
    {
        question: "What is the safest way to store important files?",
        options: [
            "Only on your computer’s desktop",
            "In a secure cloud storage with backup",
            "On a USB drive without encryption",
            "In a text document with your passwords"
        ],
        correctAnswer: "In a secure cloud storage with backup"
    },
    {
        question: "What is one way hackers try to steal your personal information?",
        options: [
            "By sending fake emails pretending to be a trusted source",
            "By giving away free security software",
            "By creating strong passwords for users",
            "By blocking viruses"
        ],
        correctAnswer: "By sending fake emails pretending to be a trusted source"
    },
    {
        question: "What should you do if you suspect your online account has been hacked?",
        options: [
            "Do nothing and hope for the best",
            "Immediately change your password and enable 2FA",
            "Share your login details with tech support",
            "Delete your account without checking"
        ],
        correctAnswer: "Immediately change your password and enable 2FA"
    },
    {
        question: "Which of these is an example of a strong password?",
        options: [
            "John1234",
            "Password2024",
            "A$9p!z&L2",
            "123456"
        ],
        correctAnswer: "A$9p!z&L2"
    },
    {
        question: "What is the best way to identify a fake website?",
        options: [
            "Check for spelling mistakes and a missing padlock in the URL",
            "Make sure the website loads quickly",
            "Look for a colorful design",
            "Check if the website has many pop-ups"
        ],
        correctAnswer: "Check for spelling mistakes and a missing padlock in the URL"
    },
    {
        question: "Which of these is a sign that an email might be a phishing attempt?",
        options: [
            "It comes from a well-known company",
            "It asks you to click a link and enter personal information",
            "It contains a friendly greeting",
            "It has an attachment from a trusted contact"
        ],
        correctAnswer: "It asks you to click a link and enter personal information"
    },
    {
        question: "What is the best way to secure your home Wi-Fi?",
        options: [
            "Keep the default router password",
            "Change the default password and enable WPA2 or WPA3 encryption",
            "Share the password with everyone in your neighborhood",
            "Use 'password' as your Wi-Fi password"
        ],
        correctAnswer: "Change the default password and enable WPA2 or WPA3 encryption"
    },
    {
        question: "What should you do before downloading a new app?",
        options: [
            "Check its reviews and permissions",
            "Download it as quickly as possible",
            "Give it all permissions it asks for",
            "Trust all apps on the app store"
        ],
        correctAnswer: "Check its reviews and permissions"
    },
    {
        question: "How can you recognize a secure website?",
        options: [
            "It has 'http://' in the URL",
            "It has a green background",
            "It has 'https://' and a padlock icon",
            "It asks for your password immediately"
        ],
        correctAnswer: "It has 'https://' and a padlock icon"
    },
    {
        question: "Why should you use a password manager?",
        options: [
            "To store and generate strong passwords securely",
            "To share your passwords with friends",
            "To use the same password everywhere",
            "To write down passwords in a notebook"
        ],
        correctAnswer: "To store and generate strong passwords securely"
    },
    {
        question: "What does an antivirus program do?",
        options: [
            "Speeds up your computer",
            "Detects and removes malware",
            "Deletes old files",
            "Makes your internet connection faster"
        ],
        correctAnswer: "Detects and removes malware"
    },
    {
        question: "What is a CAPTCHA used for?",
        options: [
            "To slow down website loading",
            "To verify if the user is human",
            "To improve internet security speed",
            "To block all website visitors"
        ],
        correctAnswer: "To verify if the user is human"
    }
];

const questionSets = [
    quizQuestions,
    quizQuestions2,
    additionalQuizQuestions,
    additionalEasyQuizQuestions,
    moreEasyQuizQuestions
];

const EasyQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    // Select a random question set when the component renders
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questionSets.length);
        setSelectedQuestions(questionSets[randomIndex]);
    }, []);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === selectedQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < selectedQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {!quizFinished ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-6">{selectedQuestions[currentQuestion]?.question}</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {selectedQuestions[currentQuestion]?.options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Question {currentQuestion + 1} of {selectedQuestions.length}
                        </p>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold">Quiz Completed! 🎉</h2>
                        <p className="text-xl mt-4">
                            Your Score: <span className="text-green-400">{score}</span> / {selectedQuestions.length}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default EasyQuiz;
