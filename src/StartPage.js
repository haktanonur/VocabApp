import React from 'react';

const StartPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-4">
      <div className="text-center">
        {/*<img src="/logo.png" alt="Logo" className="w-32 h-32 mb-4" /> */}
        <h1 className="text-4xl font-bold text-off-white mb-8">Word Study Application</h1>
        <button
          onClick={onStart}
          className="px-6 py-3 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;