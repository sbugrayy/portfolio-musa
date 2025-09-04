# Musa Yücesan Portfolyo

Modern ve responsive bir portfolyo web sitesi. React ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- 🎨 Modern ve şık tasarım
- 🌓 Açık/Koyu tema desteği
- 📱 Tam responsive tasarım
- ⚡ Hızlı sayfa yüklemeleri
- 🎭 Yumuşak animasyonlar ve geçişler
- 📝 İletişim formu
- 🖼️ Portfolyo galerisi
- 🎥 YouTube video entegrasyonu

## Teknolojiler

- React
- Styled Components
- Framer Motion
- React Icons
- React Scroll
- React Intersection Observer
- Firebase (Firestore, Storage, Analytics)

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/portfolio-musa.git
cd portfolio-musa
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapılandırma

### Firebase Environment Variables

Vercel'de aşağıdaki environment variables'ları ekleyin:

```
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
REACT_APP_FIREBASE_APP_ID=your_app_id_here
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

### Firebase Kurulumu

1. Firebase Console'da Firestore Database'i etkinleştirin
2. Test mode'da başlatın
3. Browser console'da verileri yükleyin:
```javascript
import { loadDataToFirebase } from './src/firebase/initData';
loadDataToFirebase();
```

### Dinamik İçerik

Artık tüm içerik Firebase'den geliyor:
- Ana sayfa başlık ve alt başlık
- Hakkında sayfası metinleri
- İletişim bilgileri
- CV eğitim ve deneyim listesi
- Portfolyo videolar, projeler ve galeri

### Tema Renkleri

Tema renklerini değiştirmek için `src/styles/GlobalStyles.js` dosyasındaki CSS değişkenlerini düzenleyin.

## Derleme

Projeyi production için derlemek için:

```bash
npm run build
```

Derlenen dosyalar `build` klasöründe oluşturulacaktır.

## Lisans

MIT

## İletişim

Buğra Yıldırım - [@bugrayildirim](www.linkedin.com/in/buğra-yıldırım)

Proje Linki: [https://github.com/sbugrayy/portfolio-musa](https://github.com/sbugrayy/portfolio-musa)
