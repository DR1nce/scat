import React, { useState, useEffect } from 'react';
import { Twitter, MessageCircle, BellRing, ExternalLink, Copy, Megaphone, Languages, Moon, Sun, Music } from 'lucide-react';

const fontUrl = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Russo+One&display=swap';

const ScatmanLanding = () => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('neon');
  const [isPlaying, setIsPlaying] = useState(false);

  const contractAddress = "EQDQb_tKnEj8ju9T4LJpYAPlLj4K-WmWvaUQtT0VIh4VbY2n";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const translations = {
    en: {
      title: "$SCATMAN",
      tagline: "ski-ba-bop-ba-dop-bop",
      description: "The cutest cat-themed memecoin on TON! 😺",
      about: {
        title: "ABOUT $SCT:",
        text1: "1. OUR COIN IS BASED ON LEGENDARY MEME SCATMAN🐱",
        text2: "2. WE HAVE A GREAT COMMUNITY AND HUGE PLANS",
        text3: "3. PLEASANT GIVEAWAYS",
        text4: "4. STRONG HOLDERS",
        text5: "5. PRIVATE CHAT FOR WHALES WITH INSIDES",
      },
      roadmap:{
       phase1: "Phase 1",
       phase2: "Phase 2",
       phase3: "Phase 3",
       phase4: "Phase 4",
       phase1text: "DeDust Listing",
       phase2text: "DEX Updates",
       phase3text:"Custom Sticker Pack",
       phase4text:"Community Giveaways"
      }

      
      
    },
    ru: {
      title: "$SCATMAN",
      tagline: "ski-ba-bop-ba-dop-bop",
      description: "Самый милый мем-токен с котиками на TON! 😺",
      about: {
        title: "О $SCT:",
        text1: "1. НАША МОНЕТА СОЗДАНА ПО МОТИВАМ ЛЕГЕНДАРНОГО МЕМА SCATMAN🐱",
        text2: "2. У НАС ПРЕКРАСНОЕ СООБЩЕСТВО И ОГРОМНЫЕ ПЛАНЫ",
        text3: "3. ПРИЯТНЫЕ ПОДАРКИ",
        text4: "4. СИЛЬНЫЕ ХОЛДЕРЫ",
        text5: "5. ПРИВАТНЫЙ ЧАТ ДЛЯ КИТОВ С ИНСАЙДАМИ",
        
      },
      roadmap:{
        phase1: "Фаза 1",
        phase2: "Фаза 2",
        phase3: "Фаза 3",
        phase4: "Фаза 4",
        phase1text: "Листинг на DeDust",
        phase2text: "DEX обновления",
        phase3text:"Кастомный стикер-пак",
        phase4text:"Подарки для сообщества"
       }
    }
  };

  const currentLang = translations[language];

  const toggleMusic = () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${theme === 'neon' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-[#191c23] text-[#d0cde1]'} relative overflow-hidden`}>
      
      {/* Летающие иконки тона */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="ton-icon absolute animate-float" style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`
          }}>
            <img src="ton_symbol.png" alt="TON Icon" className="w-8 h-8 opacity-50 mix-blend-overlay" />
          </div>
        ))}
      </div>

    


      {/* Неоновая анимация иконок и переключение язков */}
      <div className="relative top-4 left-4 flex gap-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
          className="p-3 bg-opacity-50 bg-gray-700 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <Languages size={24} />
        </button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'neon' : 'dark')}
          className="p-3 bg-opacity-50 bg-gray-700 rounded-full hover:scale-110 transition-transform duration-200"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Основной контент */}
      <header className="container mx-auto px-4 py-8 relative z-10" style={{ fontFamily: 'Russo One, sans-serif' }}>
      <nav className="relative flex flex-col sm:flex-row justify-between items-center mb-8 p-4 sm:p-0">

       <div className='flex flex-col gap-2 mb-5'>
        
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest neon-effect text-center sm:text-left w-full sm:w-auto mb-4 sm:mb-0">
      {currentLang.title}
    </h1>
    </div>
    
   
    <div className='flex gap-14'>
    <div className=" absolute sm:static top-full sm:top-0 right-0 sm:right-auto flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0">
      <a
        href="https://dedust.io/swap/EQDQb_tKnEj8ju9T4LJpYAPlLj4K-WmWvaUQtT0VIh4VbY2n/DUST"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-opacity-80 border-2 border-current rounded-full 
        hover:bg-opacity-100 transition-transform neon-effect 
        text-xs sm:text-sm md:text-base 
        max-w-full"
      >
        <img 
          src="ton_symbol.png" 
          alt="TON" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
        />
        Buy on DeDust
      </a>
</div>

<a
        href="https://dexscreener.com/ton/eqb0sc5erhv0izunx6nydjndebwnwjixmqbwi7_udie8xjqs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-opacity-80 border-2 border-current rounded-full 
        hover:bg-opacity-100 transition-transform neon-effect 
        text-xs sm:text-sm md:text-base 
        max-w-full"
      >
        <img 
          src="ton_symbol.png" 
          alt="TON" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
        />
        DexScreener
      </a>

    </div>
  </nav>

  {/* Header Content */}
  <div className="flex flex-col items-center text-center mt-28">
    <div className="relative mb-8 animate-bounce">
      <img
        src="IMG_2450.PNG"
        alt="Scatman Cat"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full neon-effect transition-transform duration-200"
      />
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 neon-effect">
      {currentLang.tagline}
    </h2>
    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl px-4 sm:px-0 neon-effect">
      {currentLang.description}
    </p>

    <button
    onClick={copyAddress}
    ontouchend={copyAddress}
    className="flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-opacity-80 border-2 border-current rounded-full hover:bg-opacity-100 transition-transform neon-effect text-xs sm:text-sm md:text-base max-w-full"
  >
    <Copy size={20} />
    <span className=" md:inline">EQDQb_tKnEj8ju9T4LJpYAPlLj4K-WmWvaUQtT0VIh4VbY2n</span>
    
  </button>
  </div>
      </header>

      {/* Музыкальный проигрыватель */}
      
      <div className="fixed bottom-4 md:left-1/2 left-[85%] transform md:-translate-x-1/2 -translate-x-1/2 z-50 flex items-center bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full shadow-lg">
   <button onClick={toggleMusic} className="p-2 text-white hover:scale-110 transition-transform">
     <Music size={24} />
   </button>
   <span className="ml-4 text-white md:block hidden" style={{ fontFamily: 'Press Start 2P, sans-serif' }}>Play Scatman</span>
   <audio id="audio-player" src="scatman.mp3" />
 </div>




{copied && (
    <div className="text-sm text-white fixed left-1/2 transform -translate-x-1/2 top-0 mt-4 px-4 py-2 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg animate-fadeInUp">
      Address Copied!
    </div>
  )}

      {/* Секция About с неоновой рамкой */}
      <section className="container mx-auto px-4 py-16 relative z-10" style={{ fontFamily: 'Press Start 2P, sans-serif' }}>
        <div className="bg-opacity-30 border-2 border-current rounded-2xl p-8 max-w-3xl mx-auto neon-effect">
          <h2 className="text-4xl font-bold text-center mb-8">{currentLang.about.title}</h2>
          <div className="space-y-4 text-lg font-bold">
            {Object.values(currentLang.about).slice(1).map((text, index) => (
              <p key={index} className="hover:text-purple-300 transition-colors duration-150 ease-in-out">{text}</p>
            ))}
          </div>
        </div>
      </section>
        {/* Roadmap Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
  <h2 className="text-4xl font-bold text-center mb-12 neon-effect">Roadmap</h2>
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {['phase1', 'phase2', 'phase3', 'phase4'].map((phaseKey, index) => {
      const isCompleted = index < 2; // Первые две фазы выполнены
      return (
        <div
          key={index}
          className={`p-6 rounded-2xl neon-effect transform hover:scale-105 transition-transform duration-200 ${
            isCompleted ? 'bg-green-500 text-white border-green-500' : 'bg-opacity-30 border-2 border-current'
          }`}
        >
          <div className="text-3xl mb-4">{['🚀', '⚡', '🎨', '🎁'][index]}</div>
          <h3 className="text-2xl font-bold mb-4">{currentLang.roadmap[phaseKey]}</h3>
          <p className="text-lg">{currentLang.roadmap[`${phaseKey}text`]}</p>
          {isCompleted && (
            <div className="text-green-200 mt-4 font-semibold flex items-center">
              <span className="text-2xl mr-2">✔️</span> Completed
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>

  {/* Кнопки с чатом, каналом и Х*/}
  <div className="fixed bottom-4 left-4 flex gap-4 z-50">
      <a 
        href="https://t.me/scatmanchat" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 bg-gray-700 bg-opacity-50 rounded-full hover:scale-110 transition-transform duration-200 text-white"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="https://t.me/scatmanonton" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 bg-gray-700 bg-opacity-50 rounded-full hover:scale-110 transition-transform duration-200 text-white"
      >
        <BellRing size={24} />
      </a>
      <a 
        href="https://x.com/scatmanmp3alt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 bg-gray-700 bg-opacity-50 rounded-full hover:scale-110 transition-transform duration-200 text-white"
      >
        <Twitter size={24} />
      </a>
    </div>

      {/* Footer */}
      <footer className="container mx-auto pb-32 px-4 py-8 text-center relative z-10">
        <p className="neon-effect">© 2024 $SCT - The Cutest Meme Token on TON 🐱</p>
      </footer>

    </div>
  );
};

export default ScatmanLanding;
