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
       const [error, setError] = useState(null); // Hata durumu ekleyin

       useEffect(() => {
         const fetchWords = async () => {
           try {
             const wordCollection = collection(db, 'words');
             const wordSnapshot = await getDocs(wordCollection);
             const wordsList = wordSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
             setWords(wordsList);
             setCurrentWordIndex(Math.floor(Math.random() * wordsList.length)); // Rastgele bir kelime seç
           } catch (err) {
             console.error('Error fetching words:', err);
             setError('Quota exceeded. Please try again later.'); // Hata mesajı ayarlayın
           }
         };

         fetchWords();
       }, []);

       const handleNextWord = () => {
         setShowCard(false); // Kartı gizle
         setTimeout(() => {
           setCurrentWordIndex(Math.floor(Math.random() * words.length)); // Rastgele bir kelime seç
           setShowTranslation(false); // Türkçe karşılığını gizle
           setShowCard(true); // Kartı göster
           setSentence(''); // Cümleyi sıfırla
         }, 300); // Geçiş süresi
       };

       const handleStart = () => {
         setStarted(true);
       };

       const handleBackToStart = () => {
         setStarted(false);
       };

       return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-4 relative">
           {!started ? (
             <StartPage onStart={handleStart} />
           ) : (
             <>
               <button
                 onClick={handleBackToStart}
                 className="absolute top-4 right-4 px-4 py-2 bg-straw text-dark-green font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
               >
                 Back
               </button>
               {error ? (
                 <div className="text-red-500">{error}</div> // Hata mesajını göster
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
                 </>
               )}
             </>
           )}
         </div>
       );
     }

     export default App;