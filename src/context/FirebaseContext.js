import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  collection, 
  doc, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const FirebaseContext = createContext();

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const FirebaseProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  // Sayfa verilerini çek
  const fetchPageData = useCallback(async (pageName) => {
    try {
      const docRef = doc(db, 'pages', pageName);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (err) {
      console.error(`Firebase veri yükleme hatası (${pageName}):`, err);
      setError(err.message);
      return null;
    }
  }, []);

  // Tüm sayfa verilerini çek
  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);
      const pages = ['home', 'about', 'contact', 'resume', 'portfolio'];
      const allData = {};

      for (const page of pages) {
        const pageData = await fetchPageData(page);
        if (pageData) {
          allData[page] = pageData;
        }
      }

      setData(allData);
    } catch (err) {
      console.error('Firebase veri yükleme hatası:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchPageData]);

  // Real-time dinleme
  const subscribeToPage = (pageName, callback) => {
    const docRef = doc(db, 'pages', pageName);
    return onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        callback(doc.data());
      }
    });
  };

  // Veri güncelleme
  const updatePageData = async (pageName, newData) => {
    try {
      const docRef = doc(db, 'pages', pageName);
      await updateDoc(docRef, newData);
      
      // Local state'i güncelle
      setData(prev => ({
        ...prev,
        [pageName]: { ...prev[pageName], ...newData }
      }));
    } catch (err) {
      console.error('Error updating page data:', err);
      setError(err.message);
    }
  };

  // Yeni veri ekleme
  const addData = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    } catch (err) {
      console.error('Error adding data:', err);
      setError(err.message);
      return null;
    }
  };

  // Veri silme
  const deleteData = async (collectionName, docId) => {
    try {
      await deleteDoc(doc(db, collectionName, docId));
    } catch (err) {
      console.error('Error deleting data:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const value = {
    data,
    loading,
    error,
    fetchPageData,
    fetchAllData,
    updatePageData,
    addData,
    deleteData,
    subscribeToPage
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
