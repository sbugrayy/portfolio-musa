import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { db } from './config';
import { seedData } from './seedData';

// Firebase'e veri yükleme fonksiyonu
export const initializeFirebaseData = async () => {
  try {
    console.log('Firebase verileri yükleniyor...');
    
    // Her sayfa için veriyi yükle
    for (const [pageName, pageData] of Object.entries(seedData)) {
      const docRef = doc(db, 'pages', pageName);
      await setDoc(docRef, pageData);
      console.log(`${pageName} sayfası verisi yüklendi.`);
    }
    
    console.log('Tüm veriler başarıyla yüklendi!');
    return true;
  } catch (error) {
    console.error('Veri yükleme hatası:', error);
    return false;
  }
};

// Tek bir portfolyo öğesi ekleme fonksiyonu (senin önerdiğin gibi)
export async function addPortfolioItem(itemData) {
  try {
    const docRef = await addDoc(collection(db, "portfolioItems"), {
      title: itemData.title || "Yeni Proje",
      description: itemData.description || "Proje açıklaması",
      imageUrl: itemData.imageUrl || "https://example.com/default-image.jpg",
      youtubeUrl: itemData.youtubeUrl || "",
      category: itemData.category || "Genel",
      date: new Date(),
      ...itemData // Diğer özel alanlar
    });
    console.log("Portfolyo öğesi başarıyla eklendi, ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Portfolyo öğesi eklerken hata oluştu: ", e);
    return null;
  }
}

// Manuel olarak veri yüklemek için
export const loadDataToFirebase = () => {
  // Bu fonksiyonu browser console'da çalıştırabilirsin
  return initializeFirebaseData();
};

// Örnek portfolyo öğesi ekleme
export const addSamplePortfolioItem = async () => {
  return await addPortfolioItem({
    title: "Firebase ile Portfolyo Yönetimi",
    description: "Bu proje, Firebase ve Firestore kullanarak dinamik bir portfolyo oluşturmayı hedefliyor.",
    imageUrl: "https://example.com/firebase-image.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example",
    category: "Web Geliştirme"
  });
};
