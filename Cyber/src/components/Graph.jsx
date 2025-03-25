import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LiveGraphs = () => {
    const [graphData, setGraphData] = useState({
        labels: [],
        datasets: [
            {
                label: "Cybersecurity Attacks (Real-time)",
                data: [],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    });

    // Simulate real-time data (replace with real-time API if available)
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly generate attack data
            const newDataPoint = Math.floor(Math.random() * 100);
            const currentTime = new Date().toLocaleTimeString();

            setGraphData((prevData) => ({
                labels: [...prevData.labels, currentTime].slice(-10), // Show last 10 timestamps
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [...prevData.datasets[0].data, newDataPoint].slice(-10), // Keep last 10 data points
                    },
                ],
            }));
        }, 3000); // Update data every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-6">Live Cybersecurity Attack Data</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] h-[500px] flex items-center justify-center">
                <Line 
                    data={graphData} 
                    options={{ 
                        responsive: true, 
                        maintainAspectRatio: false, 
                        scales: { 
                            x: { 
                                title: {
                                    display: true,
                                    text: "Time",
                                    font: { size: 16, weight: "bold" },
                                    color: "#333"
                                },
                                beginAtZero: true 
                            },
                            y: { 
                                title: {
                                    display: true,
                                    text: "Number of Attacks",
                                    font: { size: 16, weight: "bold" },
                                    color: "#333"
                                },
                                beginAtZero: true 
                            } 
                        } 
                    }} 
                    width={750} 
                    height={450} 
                />
            </div>
        </div>
    );
};

export default LiveGraphs;
