import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Crown, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FireworkCelebration from '../../components/Effects/FireworkCelebration';

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
  // Reorder for podium: [2nd, 1st, 3rd]
  const podiumOrder = top3.length === 3 ? [top3[1], top3[0], top3[2]] : top3;
  const others = offers.slice(3, 10);

  const extractYouTubeID = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  const getThumbnail = (offer: Offer) => {
    const ytId = extractYouTubeID(offer.video_url);
    return ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : offer.image_url;
  };

  return (
    <div className="min-h-full bg-black text-white p-4 md:p-8 overflow-y-auto no-scrollbar relative font-sans">
      {/* Header Section from Image */}
      <div className="text-center mb-16 relative z-10 pt-8">
        <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase mb-2">
          TOP RATED
        </h1>
        <div className="flex justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]" />
        </div>
      </div>

      {/* Podium Section - Perfectly matching the reference image */}
      <div className="max-w-6xl mx-auto flex items-end justify-center gap-3 md:gap-8 mb-24 relative z-10 px-2 lg:px-4">
        {top3.length > 0 && podiumOrder.map((offer) => {
          const isWinner = offer.id === top3[0].id; // Fortune Ox
          const isRunnerUp = offer.id === top3[1].id; // Golden Treasure Spin
          const position = isWinner ? 1 : isRunnerUp ? 2 : 3;

          return (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: position * 0.1, duration: 0.5 }}
              className="flex-1 flex flex-col items-center max-w-[340px] relative"
            >
              {/* Crown for Top 3 spots */}
              <div className="h-16 flex items-center justify-center mb-4 relative z-20">
                <Crown
                  size={isWinner ? 56 : 44}
                  className="text-yellow-500 fill-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                />
              </div>

              {/* Casino Image Component - Red marked aspect from image */}
              <div className="relative w-full group">
                {/* Reusable Firework Celebration Component */}
                <FireworkCelebration isVisible={isWinner} />

                <div
                  className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-[3px] mb-6 cursor-pointer shadow-2xl transition-transform hover:scale-[1.03] ${isWinner ? 'border-yellow-500 shadow-yellow-500/30' :
                    isRunnerUp ? 'border-gray-400/80 shadow-gray-400/10' :
                      'border-[#b45309]/80 shadow-orange-900/10'
                    }`}
                  onClick={() => navigate('/user/all', { state: { initialOfferId: offer.id, feedType: 'top-rated' } })}
                >
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    {/* Portrait inner container to match the red markup */}
                    <div className="h-full aspect-[9/16] relative">
                      <img src={getThumbnail(offer)} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center border border-white/30">
                          <Play size={20} fill="white" className="ml-1 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section Below Image */}
              <div className="text-center mb-8 w-full group">
                <h3 className="text-base md:text-2xl font-black text-white mb-2 uppercase tracking-tighter truncate selection:bg-yellow-500/30">
                  {offer.title}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star size={18} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-sm md:text-xl font-black text-white font-mono">{(offer.rating || 4.5).toFixed(1)}</span>
                </div>
                <button
                  onClick={() => offer.website_url && window.open(offer.website_url, '_blank')}
                  className={`px-6 md:px-10 py-2.5 md:py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all transform active:scale-95 ${isWinner ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-xl shadow-yellow-500/20' :
                    isRunnerUp ? 'bg-white text-black hover:bg-gray-100' :
                      'bg-[#b45309] text-white hover:bg-[#d97706]'
                    }`}
                >
                  PLAY NOW
                </button>
              </div>

              {/* Podium Base - Metallic Circle pedestals shadow-free */}
              <div className={`w-full flex items-center justify-center rounded-[50%_/_15%] transition-all duration-500 relative border-t-2 ${isWinner ? 'h-[200px] md:h-[300px] bg-gradient-to-b from-[#fccb0b] to-[#a16207] border-yellow-400/20' :
                  isRunnerUp ? 'h-[150px] md:h-[220px] bg-gradient-to-b from-[#f1f5f9] to-[#64748b] border-white/20' :
                    'h-[120px] md:h-[180px] bg-gradient-to-b from-[#fbbf24] to-[#92400e] border-orange-400/20'
                }`}>
                <span className="text-8xl md:text-[11rem] font-black text-white/40 select-none italic tracking-tighter">
                  {position}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Leaderboard Table - Refined for professional look */}
      <div className="max-w-4xl mx-auto mb-32 relative z-10 px-4">
        <div className="flex items-center gap-4 mb-10">
          <Trophy className="text-yellow-500" size={28} />
          <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">Global Leaderboard</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-[100px_1fr_120px_160px] px-10 py-6 bg-white/[0.03] border-b border-white/10 text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">
            <span>Rank</span>
            <span>Platform</span>
            <span className="text-center">Rating</span>
            <span className="text-right">Action</span>
          </div>

          <div className="divide-y divide-white/5">
            {others.map((offer, idx) => (
              <motion.div
                key={offer.id}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                className="grid grid-cols-[100px_1fr_120px_160px] items-center px-10 py-6 group cursor-pointer"
                onClick={() => navigate('/user/all', { state: { initialOfferId: offer.id, feedType: 'top-rated' } })}
              >
                <div className="flex items-center gap-2">
                  <Trophy size={14} className={idx === 0 ? "text-yellow-500 fill-yellow-500" : "text-white/20"} />
                  <span className={`text-base font-black italic ${idx === 0 ? 'text-yellow-500' : 'text-white/30'}`}>{idx + 4}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 p-1 border border-white/10 overflow-hidden">
                    <img src={getThumbnail(offer)} className="w-full h-full object-cover rounded-lg" alt="" />
                  </div>
                  <span className="text-[17px] font-black text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight">{offer.title}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-500 bg-yellow-400/5 px-4 py-1.5 rounded-full border border-yellow-400/10">
                  <Star size={14} fill="currentColor" />
                  <span className="text-base font-black italic">{(offer.rating || 4.2).toFixed(1)}</span>
                </div>
                <div className="text-right">
                  <button className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors underline decoration-2 underline-offset-8">
                    Explore Data
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Aesthetic Footer Branding */}
      <div className="pb-40 flex flex-col items-center gap-6 opacity-20 select-none grayscale pointer-events-none">
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        <p className="text-[10px] font-black tracking-[1em] uppercase text-center">Verified Marketplace Authority Feed</p>
      </div>
    </div >
  );
};

export default TopCasinos;