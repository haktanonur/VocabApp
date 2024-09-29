     // src/addWordsToFirestore.js
     import { db } from './firebase';
     import { collection, doc, writeBatch } from "firebase/firestore";
     import kelimeler_parca1 from './kelimeler_parca1.json';
     import kelimeler_parca2 from './kelimeler_parca2.json';
     import kelimeler_parca3 from './kelimeler_parca3.json';
     import kelimeler_parca4 from './kelimeler_parca4.json';
     import kelimeler_parca5 from './kelimeler_parca5.json';
     import kelimeler_parca6 from './kelimeler_parca6.json';
     import kelimeler_parca7 from './kelimeler_parca7.json';
     import kelimeler_parca8 from './kelimeler_parca8.json';

     const addWordsToFirestore = async () => {
       const addWords = async (words, collectionName) => {
         const batch = writeBatch(db);
         const wordsCollection = collection(db, collectionName);

         Object.entries(words).forEach(([english, turkish]) => {
           const docRef = doc(wordsCollection, english);
           batch.set(docRef, { turkish });
         });

         await batch.commit();
         console.log(`${collectionName} koleksiyonuna kelimeler eklendi.`);
       };

       await addWords(kelimeler_parca1, 'words_part1');
       await addWords(kelimeler_parca2, 'words_part2');
       await addWords(kelimeler_parca3, 'words_part3');
       await addWords(kelimeler_parca4, 'words_part4');
       await addWords(kelimeler_parca5, 'words_part5');
       await addWords(kelimeler_parca6, 'words_part6');
       await addWords(kelimeler_parca7, 'words_part7');
       await addWords(kelimeler_parca8, 'words_part8');
     };

     export default addWordsToFirestore;