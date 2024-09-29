import React, { useState } from 'react';

const StartPage = ({ onCategoryClick }) => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleStartClick = () => {
    setShowCategoryMenu(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  const handleBackToStart = () => {
    setShowCategoryMenu(false);
    setSelectedCategory(null);
  };

  const buttonStyle = "w-34 px-6 py-3 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 mb-4";
  const disabledButtonStyle = "w-34 px-6 py-3 bg-gray-400 text-dark-green font-bold rounded-full shadow-lg mb-4 cursor-not-allowed";

  return (
    <>
      {showCategoryMenu && (
        <button
          onClick={handleBackToStart}
          className="absolute top-4 right-4 px-4 py-2 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Back
        </button>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-4 relative">
        <img src="/logo.jpeg" alt="Logo" className="w-48 h-48 mb-8 mx-auto rounded-full" />
        <div className="text-center relative">
          {!showCategoryMenu ? (
            <button
              onClick={handleStartClick}
              className={buttonStyle}
            >
              Start
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleCategoryClick('Adjectives')}
                className={buttonStyle}
              >
                Adjectives
              </button>
              <button
                disabled
                className={disabledButtonStyle}
              >
                Adverbs (Coming Soon)
              </button>
              <button
                disabled
                className={disabledButtonStyle}
              >
                Verbs (Coming Soon)
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StartPage;