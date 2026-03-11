import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Play, ChevronRight, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Offer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  likes: number;
  comments: number;
  image_url: string;
  video_url: string;
  website_url: string;
  tags: string[];
  rating?: number;
  ratingCount?: number;
}

const TopCasinos = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [activeTab, setActiveTab] = useState('New Casinos');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/mediaData.json')
      .then((response) => response.json())
      .then((data) => {
        const loadedOffers = Array.isArray(data) ? data : [data];
        const sorted = [...loadedOffers].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        setOffers(sorted);
      })
      .catch((error) => console.error('Error fetching offers:', error));
  }, []);

  const top3 = offers.slice(0, 3);
  // Reorder for podium: [2, 1, 3]
  const podiumOrder = top3.length === 3 ? [top3[1], top3[0], top3[2]] : top3;
  const others = offers.slice(3, 10);

  const tabs = ['New Casinos', 'Live Casinos', 'Mobile Casinos', 'Crypto Casinos'];

  const extractYouTubeID = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  const getThumbnail = (offer: Offer) => {
    const ytId = extractYouTubeID(offer.video_url);
    return ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : offer.image_url;
  };

  return (
    <div className="min-h-full bg-black text-white p-4 md:p-8 overflow-y-auto no-scrollbar relative">
      {/* Animated Background Confetti/Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -10,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 10,
              opacity: [0, 1, 0],
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 20 - 10}px)`
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm font-bold transition-all ${activeTab === tab ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
              }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 shadow-[0_0_10px_#facc15]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-[1px] w-24 bg-gradient-to-l from-yellow-500 to-transparent" />
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            TOP RATED
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-yellow-500 to-transparent" />
        </motion.div>
        <div className="flex justify-center gap-1.5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#facc15]"
            />
          ))}
        </div>
      </div>

      {/* Podium Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end justify-center gap-1 md:gap-4 mb-20 px-2">
        {top3.length > 0 && podiumOrder.map((offer) => {
          const isWinner = offer.id === top3[0].id;
          const isRunnerUp = offer.id === top3[1].id;
          const position = isWinner ? 1 : isRunnerUp ? 2 : 3;

          const heightClass = isWinner ? "h-[320px] md:h-[400px]" : isRunnerUp ? "h-[260px] md:h-[320px]" : "h-[220px] md:h-[280px]";
          const widthClass = isWinner ? "w-full md:w-[320px]" : "w-full md:w-[260px]";
          const zIndex = isWinner ? "z-30" : "z-20";

          return (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: position * 0.2 }}
              className={`relative flex flex-col items-center ${widthClass} ${zIndex}`}
            >
              {/* Crown for Winner */}
              {isWinner && (
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 z-40"
                >
                  <Crown size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_20px_#facc15]" />
                </motion.div>
              )}

              {/* Casino Card */}
              <div
                className={`relative w-full aspect-video rounded-2xl overflow-hidden border-2 mb-4 group cursor-pointer shadow-2xl transition-all duration-500 hover:scale-105 ${isWinner ? 'border-yellow-400 shadow-yellow-500/30' :
                  isRunnerUp ? 'border-gray-400 shadow-gray-500/20' :
                    'border-orange-600 shadow-orange-700/20'
                  }`}
                onClick={() => {
                  navigate('/user/all', {
                    state: {
                      initialOfferId: offer.id,
                      feedType: 'top-rated'
                    }
                  });
                }}
              >
                <img src={getThumbnail(offer)} className="w-full h-full object-cover" alt={offer.title} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={40} className="text-white drop-shadow-lg" fill="white" />
                </div>

                {/* Visual Glow */}
                <div className={`absolute inset-0 pointer-events-none ${isWinner ? 'bg-gradient-to-t from-yellow-500/20 to-transparent' :
                  isRunnerUp ? 'bg-gradient-to-t from-gray-400/10 to-transparent' :
                    'bg-gradient-to-t from-orange-600/10 to-transparent'
                  }`} />
              </div>

              {/* Info Box */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-black truncate max-w-[200px] mb-1">{offer.title}</h3>
                <div className="flex items-center justify-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold">{(offer.rating || 0).toFixed(1)}</span>
                </div>
                <button
                  onClick={() => offer.website_url && window.open(offer.website_url, '_blank')}
                  className={`mt-3 px-6 py-1.5 rounded-lg text-xs font-black tracking-widest transition-all ${isWinner ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)]' :
                    isRunnerUp ? 'bg-gray-200 text-black hover:bg-white' :
                      'bg-orange-700 text-white hover:bg-orange-600'
                    }`}>
                  PLAY NOW
                </button>
              </div>

              {/* Podium Base */}
              <div className={`relative w-full ${heightClass} flex flex-col items-center justify-start pt-8 rounded-t-3xl overflow-hidden ${isWinner ? 'bg-gradient-to-b from-[#b38a11] via-[#8c6b0d] to-[#4d3a07]' :
                isRunnerUp ? 'bg-gradient-to-b from-[#4a4a4a] via-[#2a2a2a] to-[#1a1a1a]' :
                  'bg-gradient-to-b from-[#7d3c12] via-[#5d2c0d] to-[#2d1607]'
                } border-t border-white/20 shadow-inner`}>

                {/* Shine Animation */}
                <motion.div
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                />

                <span className="text-7xl md:text-9xl font-black opacity-40 select-none">
                  {position}
                </span>

                {/* Confetti Animation for Winner */}
                {isWinner && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-yellow-200"
                        animate={{
                          y: [-20, 100],
                          x: [0, (i % 2 === 0 ? 50 : -50)],
                          rotate: 360,
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        style={{ top: '10%', left: `${Math.random() * 80 + 10}%` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Top 10 List */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Trophy className="text-yellow-500" size={24} />
          <h2 className="text-2xl font-black italic tracking-tight">Top 10 Casinos</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="space-y-3">
          {others.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                navigate('/user/all', {
                  state: {
                    initialOfferId: offer.id,
                    feedType: 'top-rated'
                  }
                });
              }}
              className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-yellow-500/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-xl font-black text-white/30 w-8">{idx + 4}.</span>
                <span className="text-lg font-bold group-hover:text-yellow-400 transition-colors">{offer.title}</span>
              </div>
              <div className="flex items-center gap-1.5 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <span className="text-lg font-black italic">{(offer.rating || 0).toFixed(1)}</span>
                <ChevronRight size={20} className="ml-2 text-white/20 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stylish Bottom Decorative Element */}
      <div className="mt-20 flex justify-center opacity-20">
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    </div>
  );
};

export default TopCasinos;