     // src/WordCard.js
     import React from 'react';

     const WordCard = ({ english, turkish, showTranslation, setShowTranslation, showCard }) => {
       return (
         <div
           onClick={() => setShowTranslation(!showTranslation)}
           className={`w-80 h-40 border-2 border-light-sea-green bg-moonstone p-6 m-4 rounded-lg shadow-xl cursor-pointer flex flex-col justify-center items-center transition-opacity duration-300 transform ${showCard ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
         >
           <p className="text-3xl font-bold text-dark-green">{english}</p>
           {showTranslation && <p className="text-xl text-off-white mt-2">{turkish}</p>}
         </div>
       );
     };

     export default WordCard;