// Firebase'e eklenecek örnek veriler
export const seedData = {
  home: {
    title: "Musa Yücesan",
    subtitle: "ASBÜ Tarih (İngilizce) Mezunu & Deri El İşçiliği Sanatçısı"
  },
  
  about: {
    text1: "ASBÜ Tarih (İngilizce) bölümünden mezun oldum. Ben, entelektüel tarih ve modernleşme süreçleri üzerine yoğunlaşan bir araştırmacı adayıyım. Akademik ilgim özellikle Osmanlı-Türkiye modernleşmesi, 17. ve 18. yüzyıl Osmanlı düşünce tarihi, Kemalist ideoloji ve sol çevreler arasındaki ilişkiler üzerine odaklanmaktadır.",
    text2: "Akademik çalışmalarımın yanında, zanaatla da ilgilenmekteyim. Dericilikle amatör düzeyde uğraşıyor; el yapımı cüzdan ve benzeri ürünler tasarlayıp üretmekteyim. Bu yönelim, hem üretim estetiği hem de tarihsel zanaat kültürüne olan ilgimi besleyen önemli bir uğraştır."
  },
  
  contact: {
    email: "yucesan639@gmail.com",
    location: "Ankara, Türkiye",
    youtube: "https://youtube.com/@musayucesan8437?si=fJRmBz8kVSv_Oe0p",
    instagram: "https://www.instagram.com/musa.yucesan",
    linkedin: "https://www.linkedin.com/in/musa-y%C3%BCcesan-96983930b/"
  },
  
  resume: {
    education: [
      {
        date: "2019 - 2025",
        title: "ASBÜ İngilizce Tarih Bölümü Mezunu"
      },
      {
        date: "2024 - 2025",
        title: "Öğretmenlik Formasyonu"
      },
      {
        date: "2023",
        title: "Diksiyon Kursu",
        subtitle: "ASBÜ TÖMER"
      }
    ],
    experience: [
      {
        date: "2014 - Halen",
        title: "Youtube Kanalı Video Üreticiliği"
      },
      {
        date: "2022 - 2024",
        title: "ASBÜ Tarih Topluluğu Başkanlığı"
      },
      {
        date: "2023",
        title: "Türkiye Ulusal Ajansı: Erasmus+ Projesi",
        description: "Geleceğin Yolu: Gençlerin Gözünden Gönüllülük projesi kapsamında 8-12 Mayıs 2023 tarihleri arasında Ankara'da gerçekleştirilen İç Anadolu Bölge Çalıştayına katıldım."
      },
      {
        date: "2024",
        title: "TUBİTAK",
        description: "25-30 Haziran 2024 tarihinde, 28. Junior Balkan Olimpiyatları kapsamında Suudi Arabistan'dan gelen heyete rehberlik yaptım."
      },
      {
        date: "2025",
        title: "ASBÜ Dericilik Kursu"
      }
    ]
  },
  
  portfolio: {
    videos: [
      {
        id: 1,
        title: 'Stalin Ve Troçki',
        url: 'https://www.youtube.com/embed/1Hzvit2xBtQ?si=lIgOYSR8KggOVOtW'
      },
      {
        id: 2,
        title: 'Moğol Genarali Subutay',
        url: 'https://www.youtube.com/embed/sNY8LafYKP8?si=KBU7b6UBG8HzzBvL'
      },
      {
        id: 3,
        title: 'Çin ve Serçeler',
        url: 'https://www.youtube.com/embed/Y_2h0isoIhU?si=T2hhJcraYdTSxmuE'
      }
    ],
    projects: [
      { 
        id: 1, 
        title: 'Tez Çalışmam', 
        image: '/project1.jpg', 
        file: '/tez.docx' 
      }
    ],
    gallery: [
      { id: 1, src: '/galeri/DeriCuzdan1.jpg', description: 'Deri Cüzdan' },
      { id: 2, src: '/galeri/DeriCuzdan12.jpg', description: 'Deri Cüzdan' },
      { id: 3, src: '/galeri/DeriCuzdan3.jpg', description: 'Deri Cüzdan' },
      { id: 4, src: '/galeri/DeriCuzdan4.jpg', description: 'Deri Cüzdan' },
      { id: 5, src: '/galeri/DeriCuzdan5.jpg', description: 'Deri Cüzdan' },
      { id: 6, src: '/galeri/DeriCuzdan6.jpg', description: 'Deri Cüzdan' },
      { id: 7, src: '/galeri/DeriCuzdan11.jpg', description: 'Deri Cüzdan' },
      { id: 8, src: '/galeri/DeriCuzdan8.jpg', description: 'Deri Cüzdan' },
      { id: 9, src: '/galeri/DeriCuzdan9.jpg', description: 'Deri Cüzdan' },
      { id: 10, src: '/galeri/DeriCuzdan10.jpg', description: 'Deri Cüzdan' },
      { id: 11, src: '/galeri/DeriCuzdan7.jpg', description: 'Deri Kalemlik' },
      { id: 12, src: '/galeri/DeriCuzdan2.jpg', description: 'Deri Kalemlik' },
      { id: 13, src: '/galeri/DeriKemer1.jpg', description: 'Deri Kemer' },
      { id: 14, src: '/galeri/DeriKemer2.jpg', description: 'Deri Kemer' },
      { id: 15, src: '/galeri/Calisma1.jpg', description: 'Çalışma' },
      { id: 16, src: '/galeri/Calisma2.jpg', description: 'Çalışma' },
      { id: 17, src: '/galeri/Calisma3.jpg', description: 'Çalışma' },
      { id: 18, src: '/galeri/Calisma4.jpg', description: 'Çalışma' }
    ]
  }
};
