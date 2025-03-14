"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "et" | "ru"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, string>
}

const translations = {
  ru: {
    // Navigation
    about: "Обо мне",
    photos: "Фото",
    videos: "Видео",
    contact: "Контакты",
    bookNow: "Забронировать",
    menu: "Меню",

    // Hero
    vocalist: "Живые эмоции в каждой песне!",
    listenNow: "Смотреть",

    // About
    aboutTitle: "О Екатерине",
    aboutP1:
      "Екатерина Маргальникова — разносторонняя вокалистка, известная своими мощными выступлениями и эмоциональной глубиной. Имея за плечами более десяти лет карьеры, она зарекомендовала себя как захватывающая сольная исполнительница и динамичный участник группы.",
    aboutP2:
      "Её музыкальный путь начался в родном городе, где она получила музыкальное образование. Умение играть на фортепиано позволяет ей не только исполнять, но и глубже чувствовать и интерпретировать музыку. Благодаря этому её выступления всегда наполнены живыми эмоциями и особым звучанием.",
    aboutP3:
      "Как сольная исполнительница, она выпустила несколько признанных синглов и выступала на престижных площадках по всей стране.",
    fullBio: "Полная биография",

    // Photos
    photoGallery: "Фотогалерея",
    photoSolo: "Сольное выступление в Национальном концертном зале",
    photoBand: "Живое выступление с группой",
    photoStudio: "Запись дебютного альбома",
    photoAcoustic: "Акустический сет в камерном зале",
    photoOrchestra: "Специальное выступление с симфоническим оркестром",
    photoBackstage: "За кулисами перед главным шоу",
    viewGallery: "Посмотреть полную галерею",

    // Videos
    videoGallery: "Видео",
    videoZemfira: "Мы разбиваемся (Земфира Cover)",
    videoSneg: "Снег (cover Филипп Киркоров)",
    videoLove: "Любовь похожая на сон (cover Алла Пугачева)",
    videoMillion: "Миллион алых роз (cover Алла Пугачева)",
    videoSolo: "Сольное выступление",
    videoBand: "Выступление с группой",
    viewAllVideos: "Смотреть все видео",

    // Contact
    getInTouch: "Связаться",
    contactText:
      "Для бронирования или сотрудничества, пожалуйста, используйте контактную информацию ниже или заполните форму.",
    bookings: "Связаться",
    phone: "Телефон",
    email: "Email",

    // Contact Form
    contactForm: "Контактная форма",
    nameLabel: "Ваше имя",
    namePlaceholder: "Введите ваше имя",
    emailLabel: "Ваш email",
    emailPlaceholder: "Введите ваш email",
    eventTypeLabel: "Тип мероприятия",
    eventTypePlaceholder: "Выберите тип мероприятия",
    wedding: "Свадьба",
    birthday: "День рождения",
    corporate: "Корпоратив",
    private: "Частное мероприятие",
    other: "Другое",
    messageLabel: "Сообщение",
    messagePlaceholder: "Расскажите подробнее о вашем мероприятии...",
    send: "Отправить",
    formSuccess: "Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.",
    formError: "Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь напрямую по телефону или email.",
    required: "Обязательное поле",
    invalidEmail: "Пожалуйста, введите корректный email",

    // Footer
    allRightsReserved: "Все права защищены.",
    privacy: "Конфиденциальность",
    terms: "Условия",
    cookies: "Cookies",

    // Performances and Services
    performances: "Выступления и услуги",
    performancesTitle: "Я выступаю на:",
    weddingsTitle: "Свадьбах",
    weddingsDesc:
      "романтические баллады, душевные песни и зажигательные хиты сделают ваш день по-настоящему волшебным.",
    birthdaysTitle: "Днях рождения",
    birthdaysDesc: "подберу репертуар под настроение гостей, чтобы праздник стал ярким и запоминающимся.",
    corporateTitle: "Корпоративных вечеринках",
    corporateDesc:
      "профессиональный вокал и энергичная программа помогут создать легкую, праздничную атмосферу для вашего коллектива.",
    privateTitle: "Частных мероприятиях",
    privateDesc: "камерные вечера, юбилеи, семейные встречи – живая музыка украсит любое событие.",
    formatsTitle: "Форматы выступлений:",
    soloFormat: "Сольное выступление",
    soloDesc: "живой вокал под инструментальное сопровождение или минусовки.",
    bandFormat: "Выступление с группой",
    bandDesc: "живой звук, драйв и мощная энергетика.",
    customFormat: "Индивидуальный подход",
    customDesc: "готова обсудить ваш плейлист и подобрать музыкальное сопровождение под ваше событие.",
    adaptableProgram:
      "Я всегда адаптирую программу под специфику мероприятия, подбираю подходящие композиции и создаю уникальную атмосферу.",
    bookPerformance: "Забронировать выступление",
  },
  et: {
    // Navigation
    about: "Minust",
    photos: "Fotod",
    videos: "Videod",
    contact: "Kontakt",
    bookNow: "Broneeri",
    menu: "Menüü",

    // Hero
    vocalist: "Elavad emotsioonid igas laulus!",
    listenNow: "Vaata",

    // About
    aboutTitle: "Jekaterinast",
    aboutP1:
      "Jekaterina Margalnikova on mitmekülgne vokalist, kes on tuntud oma võimsate esinemiste ja emotsionaalse sügavuse poolest. Rohkem kui kümneaastase karjääriga on ta end tõestanud nii kaasahaarava sooloartistina kui ka dünaamilise bändiliikmena.",
    aboutP2:
      "Tema muusikaline teekond algas kodulinnas, kus ta sai muusikalise hariduse. Klaverimänguoskus võimaldab tal mitte ainult esitada, vaid ka sügavamalt tunda ja tõlgendada muusikat. Tänu sellele on tema esinemised alati täis elavaid emotsioone ja erilist kõla.",
    aboutP3:
      "Sooloartistina on ta avaldanud mitu tunnustatud singlit ja esinenud prestiižsetel lavadel üle kogu riigi.",
    fullBio: "Täielik biograafia",

    // Photos
    photoGallery: "Fotogalerii",
    photoSolo: "Sooloesinemine Rahvuslikus Kontserdimajas",
    photoBand: "Elav esinemine bändiga",
    photoStudio: "Debüütalbumi salvestamine",
    photoAcoustic: "Akustiline esinemine kammersaalis",
    photoOrchestra: "Eriline esinemine sümfooniaorkestriga",
    photoBackstage: "Lava taga enne peaesinemist",
    viewGallery: "Vaata täielikku galeriid",

    // Videos
    videoGallery: "Videod",
    videoZemfira: "Me puruneme (Zemfira Cover)",
    videoSneg: "Lumi (cover Filipp Kirkorov)",
    videoLove: "Armastus nagu uni (cover Alla Pugatšova)",
    videoMillion: "Miljon punast roosi (cover Alla Pugatšova)",
    videoSolo: "Sooloesinemine",
    videoBand: "Esinemine bändiga",
    viewAllVideos: "Vaata kõiki videoid",

    // Contact
    getInTouch: "Võta ühendust",
    contactText: "Broneerimiseks või koostööks kasutage allpool olevat kontaktteavet või täitke vorm.",
    bookings: "Võta ühendust",
    phone: "Telefon",
    email: "Email",

    // Contact Form
    contactForm: "Kontaktivorm",
    nameLabel: "Teie nimi",
    namePlaceholder: "Sisestage oma nimi",
    emailLabel: "Teie email",
    emailPlaceholder: "Sisestage oma email",
    eventTypeLabel: "Ürituse tüüp",
    eventTypePlaceholder: "Valige ürituse tüüp",
    wedding: "Pulm",
    birthday: "Sünnipäev",
    corporate: "Firmapidu",
    private: "Eraüritus",
    other: "Muu",
    messageLabel: "Sõnum",
    messagePlaceholder: "Rääkige lähemalt oma üritusest...",
    send: "Saada",
    formSuccess: "Tänan! Teie sõnum on saadetud. Võtan teiega peagi ühendust.",
    formError: "Tekkis viga. Palun proovige uuesti või võtke otse ühendust telefoni või e-posti teel.",
    required: "Kohustuslik väli",
    invalidEmail: "Palun sisestage korrektne email",

    // Footer
    allRightsReserved: "Kõik õigused kaitstud.",
    privacy: "Privaatsus",
    terms: "Tingimused",
    cookies: "Küpsised",

    // Performances and Services
    performances: "Esinemised ja teenused",
    performancesTitle: "Ma esinen:",
    weddingsTitle: "Pulmades",
    weddingsDesc:
      "romantilised ballaadid, südamlikud laulud ja energilised hitid teevad teie päeva tõeliselt maagiliseks.",
    birthdaysTitle: "Sünnipäevadel",
    birthdaysDesc: "valin repertuaari vastavalt külaliste meeleolule, et pidu oleks ergas ja meeldejääv.",
    corporateTitle: "Firmapidudel",
    corporateDesc:
      "professionaalne vokaal ja energiline programm aitavad luua kerge, piduliku õhkkonna teie kollektiivile.",
    privateTitle: "Eraüritustel",
    privateDesc: "kammerlikud õhtud, juubelid, perekondlikud kokkutulekud – elav muusika kaunistab iga sündmust.",
    formatsTitle: "Esinemisformaadid:",
    soloFormat: "Sooloesinemine",
    soloDesc: "elav vokaal instrumentaalse saate või miinuste taustal.",
    bandFormat: "Esinemine bändiga",
    bandDesc: "elav heli, drive ja võimas energeetika.",
    customFormat: "Individuaalne lähenemine",
    customDesc: "olen valmis arutama teie playlisti ja valima muusikalise saate vastavalt teie sündmusele.",
    adaptableProgram:
      "Kohandasin alati programmi vastavalt ürituse eripärale, valin sobivad kompositsioonid ja loon ainulaadse atmosfääri.",
    bookPerformance: "Broneeri esinemine",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "et",
  setLanguage: () => {},
  translations: translations.et,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("et")
  const [currentTranslations, setCurrentTranslations] = useState(translations.et)

  useEffect(() => {
    // Get saved language preference from localStorage if available
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "et" || savedLanguage === "ru")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update translations when language changes
    setCurrentTranslations(translations[language])
    // Save language preference to localStorage
    localStorage.setItem("language", language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

