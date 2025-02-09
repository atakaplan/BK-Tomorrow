# Haber Akış Uygulaması

Bu proje, React ve Vite kullanarak geliştirilmiş bir haber akış uygulamasıdır. Kullanıcılar haberleri görüntüleyebilir, favorilerine ekleyebilir ve haber detaylarını inceleyebilirler.

## Kullanılan Teknolojiler

- React
- Vite
- React Router
- Axios
- Tailwind CSS

## Bileşenler

### `NewsContext`

Haber verilerini ve favori haberleri yönetmek için kullanılan context bileşeni.

### `NewsCard`

Her bir haber kartını temsil eden bileşen.

### `Navbar`

Navigasyon çubuğunu temsil eden bileşen.

### `Home`

Ana sayfa bileşeni, haberleri listeler ve arama yapmayı sağlar.

### `Detail`

Haber detaylarını gösteren bileşen.

### `Favorites`

Favori haberleri listeleyen bileşen.

### `ArticleFrame`

Haber kaynağını iframe içinde gösteren yeni bileşen.

### `NewsSource`

Haber kaynağını iframe içinde gösteren bileşen.

## Kurulum

Projeyi yerel ortamınıza klonladıktan sonra aşağıdaki adımları izleyin:

1. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
## Proje Yapısı
Proje dosya yapısı şu şekildedir:
```
/src
  /components
    NewsCard.jsx
    Navbar.jsx
    Home.jsx
    Detail.jsx
    Favorites.jsx
    ArticleFrame.jsx
    NewsSource.jsx
  /context
    NewsContext.jsx
  /styles
    App.css
    index.css
  App.jsx
  main.jsx
```

## Kullanım

- Ana sayfada haberleri görüntüleyebilir ve arama yapabilirsiniz.
- Haber kartlarına tıklayarak detay sayfasına gidebilirsiniz.
- Detay sayfasında haberleri favorilerinize ekleyebilir veya çıkarabilirsiniz.
- Favoriler sayfasında favori haberlerinizi görüntüleyebilirsiniz.
- Haber kaynağını iframe içinde görüntülemek için ilgili butona tıklayabilirsiniz.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
