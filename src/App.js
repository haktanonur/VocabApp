import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import WordCard from './wordCard';
import StartPage from './StartPage';
import './App.css';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [started, setStarted] = useState(false);
  const [sentence, setSentence] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPartMenu, setShowPartMenu] = useState(false);

  const fetchWords = async (category, part) => {
    try {
      setLoading(true);
      const wordCollection = collection(db, `words_part${part}`);
      const wordSnapshot = await getDocs(wordCollection);
      const wordsList = wordSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWords(wordsList);
      setCurrentWordIndex(Math.floor(Math.random() * wordsList.length));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching words:', err);
      setError('Quota exceeded. Please try again later.');
      setLoading(false);
    }
  };

  const handleNextWord = () => {
    setShowCard(false);
    setTimeout(() => {
      setCurrentWordIndex(Math.floor(Math.random() * words.length));
      setShowTranslation(false);
      setShowCard(true);
      setSentence('');
    }, 300);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
    setShowPartMenu(true);
  };

  const handlePartClick = (part) => {
    fetchWords(selectedCategory, part);
    setStarted(true);
    setShowPartMenu(false);
  };

  const handleBackToStart = () => {
    setShowCategoryMenu(false);
    setSelectedCategory(null);
    setShowPartMenu(false);
    setStarted(false);
  };

  const handleBackToCategoryMenu = () => {
    setShowPartMenu(false);
    setShowCategoryMenu(true);
    setStarted(false);
  };

  const handleBackToPartMenu = () => {
    setStarted(false);
    setShowPartMenu(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-4 relative">
      {!started ? (
        !showPartMenu ? (
          <StartPage onCategoryClick={handleCategoryClick} />
        ) : (
          <>
            <button
              onClick={handleBackToCategoryMenu}
              className="absolute top-4 right-4 px-4 py-2 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Back
            </button>
            <div className="text-center relative">
              <div className="flex flex-col items-center">
                <img src="/logo.jpeg" alt="Logo" className="w-48 h-48 mb-8 mx-auto rounded-full" />
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(8).keys()].map(i => (
                    <button
                      key={i}
                      onClick={() => handlePartClick(i + 1)}
                      className="px-6 py-3 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 mb-4"
                    >
                      {selectedCategory} {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              {loading ? (
                <div className="text-off-white">Loading...</div>
              ) : (
                <>
                  {words.length > 0 && (
                    <WordCard
                      english={words[currentWordIndex].id}
                      turkish={words[currentWordIndex].turkish}
                      showTranslation={showTranslation}
                      setShowTranslation={setShowTranslation}
                      showCard={showCard}
                    />
                  )}
                  {sentence && (
                    <div className="w-80 h-40 border-2 border-light-sea-green bg-moonstone p-6 m-4 rounded-lg shadow-xl flex flex-col justify-center items-center">
                      <p className="text-xl text-off-white">{sentence}</p>
                    </div>
                  )}
                  <button
                    onClick={handleNextWord}
                    className="mt-8 px-6 py-3 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Next
                  </button>
                  <button
                    onClick={handleBackToPartMenu}
                    className="absolute top-4 right-4 px-4 py-2 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                    >
                    Back
                  </button>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;