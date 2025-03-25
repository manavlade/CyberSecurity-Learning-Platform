import { useState } from "react";
import { motion } from "framer-motion";
import EasyQuiz from "./Quiz/EasyQuiz";
import MediumQuiz from "./Quiz/Medium";
import HardQuiz from "./Quiz/Hard";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const Quiz = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [showQuizSelection, setShowQuizSelection] = useState(true);
    const [progress, setProgress] = useState(0); 

    // Handle quiz selection
    const handleQuizSelection = (quizType) => {
        setSelectedQuiz(quizType);
        setShowQuizSelection(false);
        setProgress(0); 
    };

    const handleBack = () => {
        setShowQuizSelection(true);
        setSelectedQuiz(null);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white p-6">
            {/* Quiz Introduction */}
            {showQuizSelection && (
                <motion.div
                    className="text-center max-w-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold mb-3">Test Your Cybersecurity Knowledge! 🔐</h1>
                    <p className="text-gray-300 mb-6">
                        Choose a difficulty level and see how well you understand cybersecurity threats, attacks, and 
                        protection strategies.
                    </p>
                </motion.div>
            )}

            {/* Quiz Selection Buttons */}
            {showQuizSelection ? (
                <motion.div
                    className="space-x-4 flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Button
                        onClick={() => handleQuizSelection("easy")}
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-lg transition-all"
                    >
                        🟢 Easy
                    </Button>
                    <Button
                        onClick={() => handleQuizSelection("medium")}
                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg transition-all"
                    >
                        🟡 Medium
                    </Button>
                    <Button
                        onClick={() => handleQuizSelection("hard")}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-lg transition-all"
                    >
                        🔴 Hard
                    </Button>
                </motion.div>
            ) : (
                <motion.div
                    className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col justify-center items-center w-full p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white text-gray-900 p-8 rounded-lg max-w-lg w-full shadow-lg">
                        {/* Quiz Title */}
                        <h1 className="text-2xl font-bold text-center mb-4">
                            {selectedQuiz.charAt(0).toUpperCase() + selectedQuiz.slice(1)} Quiz
                        </h1>

                        {/* Progress Bar */}
                        <Progress value={progress} className="mb-4" />

                        {/* Render the corresponding quiz */}
                        {selectedQuiz === "easy" && <EasyQuiz setProgress={setProgress} />}
                        {selectedQuiz === "medium" && <MediumQuiz setProgress={setProgress} />}
                        {selectedQuiz === "hard" && <HardQuiz setProgress={setProgress} />}

                        {/* Back to Quiz Selection Button */}
                        <div className="text-center mt-4">
                            <Button onClick={handleBack} className="bg-gray-700 hover:bg-gray-600">
                                🔙 Back to Selection
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Quiz;
