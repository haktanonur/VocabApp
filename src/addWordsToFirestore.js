     // src/addWordsToFirestore.js
     import { db } from './firebase';
     import words from './kelimeler.json';
     import { collection, doc, writeBatch } from "firebase/firestore";

     const addWordsToFirestore = async () => {
       const batch = writeBatch(db);
       const wordsCollection = collection(db, 'words');
       Object.entries(words).forEach(([english, turkish]) => {
         const docRef = doc(wordsCollection, english);
         batch.set(docRef, { turkish });
       });
       await batch.commit();
       console.log('Kelimeler Firestore\'a eklendi.');
     };

     export default addWordsToFirestore;