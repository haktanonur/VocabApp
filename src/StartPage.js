import React from 'react';

const StartPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-4">
      <h1 className="text-4xl font-bold text-off-white mb-8">Vocab App</h1> {/* Başlığı en üste ekledim */}
      <div className="text-center">
        <img src="/logo.jpeg" alt="Logo" className="w-48 h-48 mb-8 mx-auto rounded-full" /> {/* Boyutu büyüt, ortala ve yuvarlaklaştır */}
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