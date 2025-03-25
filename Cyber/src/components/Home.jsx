const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="text-center px-6 md:px-12">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Welcome to <span className="text-blue-400">SecuraX</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Your ultimate cybersecurity training and awareness platform. Stay informed, stay protected!
                </p>
                <button className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                    Get Started
                </button>
            </div>

            {/* Key Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
                <div className="p-8 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-all">
                    <h3 className="text-3xl font-bold text-blue-400 mb-4">🔐 Cybersecurity Training</h3>
                    <p className="text-lg text-gray-300">Learn how to defend against cyber threats with our expert-led modules.</p>
                </div>
                <div className="p-8 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-all">
                    <h3 className="text-3xl font-bold text-blue-400 mb-4">⚡ Real-Time Threat Alerts</h3>
                    <p className="text-lg text-gray-300">Stay updated with the latest cybersecurity threats and trends.</p>
                </div>
                <div className="p-8 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-all">
                    <h3 className="text-3xl font-bold text-blue-400 mb-4">🎯 Interactive Quizzes</h3>
                    <p className="text-lg text-gray-300">Test your knowledge and become a cybersecurity expert.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
