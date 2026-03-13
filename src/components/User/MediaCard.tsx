import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Bookmark, Share2, MessageCircle } from 'lucide-react';
import logo from '../../assets/12142.png';
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
    terms_highlights: string[];
    disclaimer: string;
    rating?: number;
    ratingCount?: number;
    saves?: number;
    shares?: number;
    logo_url?: string;
}

interface MediaCardProps {
    offer: Offer;
    index: number;
    currentIndex: number;
    flippedCardId: number | null;
    setFlippedCardId: (id: number | null) => void;
    renderMedia: (offer: Offer, index: number) => React.ReactNode;
    isDescriptionExpanded: boolean;
    ctaText?: string;
    mediaLabel?: string;
    onRatingClick?: (id: number) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
    offer,
    index,
    currentIndex,
    flippedCardId,
    setFlippedCardId,
    renderMedia,
    isDescriptionExpanded,
    ctaText = 'CLAIM BONUS',
    mediaLabel = 'Photo',
    onRatingClick
}) => {
    const { t } = useTranslation();
    return (
        <motion.div
            animate={{
                rotateY: flippedCardId === offer.id ? 180 : 0,
                scale: flippedCardId === offer.id ? 0.95 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full sm:flex-1 bg-card sm:rounded-[1rem] shadow-2xl sm:border border-border lg:border-none relative group transition-colors duration-300"
        >
            {/* Front Side */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-black sm:rounded-[1rem]  "
                style={{ backfaceVisibility: "hidden" }}
                onClick={() => {
                    if (index === currentIndex && window.innerWidth < 640) {
                        setFlippedCardId(flippedCardId === offer.id ? null : offer.id);
                    }
                }}
            >
                {renderMedia(offer, index)}

                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-20" />

                {/* Overlaid Info Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pr-16 sm:pr-6 space-y-4 z-30 pointer-events-none">
                    <div className="flex items-start gap-4">
                        <div
                            className="shrink-0 pt-1 pointer-events-auto cursor-pointer transition-transform active:scale-95"
                            onClick={(e) => { e.stopPropagation(); offer.website_url && window.open(offer.website_url, '_blank'); }}
                        >
                            <img
                                src={offer.logo_url || logo}
                                alt="logo"
                                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover  "
                            />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-3">
                                <h2
                                    className="text-white font-normal text-[20px] md:text-[24px] tracking-tighter   transition-colors pointer-events-auto leading-tight drop-shadow-lg"
            
                                >
                                    {offer.title}
                                </h2>
                            </div>

                            <div
                                className="flex items-center gap-2 cursor-pointer pointer-events-auto hover:grayscale-[0.5] transition-all w-fit"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRatingClick?.(offer.id);
                                }}
                            >
                                <div className="flex items-center gap-1.5 drop-shadow-lg">
                                    <Star size={16} className="fill-[#FACC15] text-[#FACC15]" />
                                    <span className="text-white text-[15px] font-normal leading-none">{(offer.rating || 0).toFixed(1)}</span>
                                </div>
                                {offer.ratingCount !== undefined && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/60 text-[10px]">•</span>
                                        <span className="text-white text-[15px] font-normal tracking-tight drop-shadow-lg">
                                            {offer.ratingCount.toLocaleString()} <span className="font-medium text-white">{t("media.reviews")}</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (offer.website_url) window.open(offer.website_url, '_blank');
                        }}
                        type="button"
                        className="w-full px-6 py-3.5 font-normal rounded-2xl bg-gradient-to-r from-[#FACC15] via-[#FFE55C] to-[#FACC15] text-black transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 pointer-events-auto border-none shadow-lg text-[15px] tracking-wider"
                    >
                        {ctaText}
                    </button>




                    <div className="space-y-1 flex flex-col">
                        <div className={`text-white/90 text-[14px] leading-relaxed drop-shadow-lg ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
                            {offer.description.slice(0, 70)}....
                        </div>
                        <div className="flex justify-end pt-1">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFlippedCardId(offer.id);
                                }}
                                className="flex items-center gap-1 text-white font-normal text-[14px] sm:text-[15px]   transition-colors pointer-events-auto group/read"
                            >
                                <span>{t("media.see_more")}</span>
                                <ArrowRight size={18} className="animate-arrow-move" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Back Side */}
            <div
                className="absolute inset-0 w-full h-full bg-[#0D0D0D] sm:rounded-[1rem] overflow-hidden p-6 sm:p-8 flex flex-col gap-6 custom-scrollbar overflow-y-auto transition-colors duration-300 shadow-inner"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
                <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                        <h3 className="text-white text-xl md:text-2xl font-black truncate">{offer.title}</h3>
                        <p className="text-white/80 text-sm max-sm:font-normal lg:font-normal font-medium truncate">{offer.subtitle || t("media.about_offer")}</p>
                    </div>
                    {/* Only show original rating/reviews on desktop */}
                    <div className="hidden sm:flex flex-col items-end shrink-0">
                        {(offer.rating || 0) > 0 && (
                            <>
                                <div className="flex items-center gap-1.5 px-2 py-1">
                                    <Star size={14} className="fill-[#FACC15] text-[#FACC15]" />
                                    <span className="text-white font-black">{(offer.rating || 0).toFixed(1)}</span>
                                </div>
                                <span className="text-[10px] text-white/40 font-bold mt-1 uppercase tracking-wider">{offer.ratingCount?.toLocaleString()} {t("media.reviews")}</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="space-y-2">
                        <h4 className="text-white/60 max-sm:font-normal lg:font-normal font-black text-sm sm:font-bold sm:text-xs uppercase tracking-wider">{t("media.about_offer")}</h4>
                        <p className="text-white text-[15px] leading-relaxed max-sm:font-normal lg:font-normal font-medium sm:font-normal">{offer.description}</p>
                    </div>

                    {/* Engagement Stats Section */}
                    <div className="grid grid-cols-4 gap-2 py-5 border-y border-white/10">
                        <div className="flex flex-col items-center justify-center gap-1 border-r border-white/10">
                            <Star size={18} className="text-[#FACC15] fill-[#FACC15]" />
                            <span className="text-[15px] max-sm:font-normal lg:font-normal font-black text-white">{(offer.rating || 0).toFixed(1)}</span>
                            <span className="text-[9px] uppercase max-sm:font-normal lg:font-normal font-black tracking-tighter text-white/60">{t("media.rating")}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-r border-white/10">
                            <MessageCircle size={18} className="text-white" />
                            <span className="text-[15px] max-sm:font-normal lg:font-normal font-black text-white">{offer.comments || 0}</span>
                            <span className="text-[9px] uppercase max-sm:font-normal lg:font-normal font-black tracking-tighter text-white/60">{t("media.comments")}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-r border-white/10">
                            <Share2 size={18} className="text-white" />
                            <span className="text-[15px] max-sm:font-normal lg:font-normal font-black text-white">{offer.shares || 0}</span>
                            <span className="text-[9px] uppercase max-sm:font-normal lg:font-normal font-black tracking-tighter text-white/60">{t("media.shares")}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Bookmark size={18} className="text-white" />
                            <span className="text-[15px] max-sm:font-normal lg:font-normal font-black text-white">{offer.saves || 0}</span>
                            <span className="text-[9px] uppercase max-sm:font-normal lg:font-normal font-black tracking-tighter text-white/60">{t("media.saves")}</span>
                        </div>
                    </div>

                    <div className="sm:max-lg:hidden space-y-4">
                        <h4 className="text-white/60 max-sm:font-normal font-black text-sm uppercase tracking-wider">{t("media.bonuses")}</h4>
                        <div className="flex flex-col gap-3">
                            {offer.terms_highlights && offer.terms_highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="px-6 py-3 flex flex-wrap bg-gradient-to-r from-[#FF3AC6] to-[#A056FF] rounded-full text-white text-[15px] max-sm:font-normal font-bold text-center shadow-lg transform transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    {highlight}
                                    {idx === 0 && "🤝"}
                                    {idx === 1 && "⚖️"}
                                    {idx === 2 && "🌍"}
                                    {idx === 3 && "✨"}
                                    {idx === 4 && "🧠"}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Redundant Desktop Design Section Hidden if logic matches */}
                    {offer.terms_highlights && (
                        <div className="hidden sm:max-lg:block space-y-3 pt-2">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white/60 font-black text-[11px] uppercase tracking-wider">{t("media.bonuses")}</h4>
                            </div>
                            <ul className="space-y-2.5">
                                {offer.terms_highlights.map((term, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] mt-1.5 shrink-0" />
                                        {term}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {offer.tags && offer.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 py-2">
                            {offer.tags.map((tag, idx) => (
                                <span key={idx} className="px-4 py-1.5 bg-white/10 rounded-full sm:rounded-lg lg:rounded-full text-white text-[11px] sm:text-[10px] max-sm:font-normal lg:font-normal font-black sm:font-bold uppercase tracking-widest sm:tracking-tight border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-4 pt-6 mt-auto border-t border-white/10">

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (offer.website_url) window.open(offer.website_url, '_blank');
                        }}
                        className="w-full px-6 py-4 font-normal rounded-2xl bg-gradient-to-r from-[#FACC15] via-[#FFE55C] to-[#FACC15] text-black transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 pointer-events-auto border-none shadow-lg text-[15px] tracking-wider"
                    >
                        {ctaText}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCardId(null);
                        }}
                        className="w-full bg-white/5 text-white font-normal sm:font-medium lg:font-normal py-3 rounded-2xl hover:bg-white/10 transition-all text-sm"
                    >
                        {t("media.back_to")} {mediaLabel === 'Photo' ? t("media.photos") : t("media.videos")}
                    </button>
                    <p className="text-white/60 text-[10px] text-center leading-tight max-sm:font-normal lg:font-normal">
                        {t("media.disclaimer")}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default MediaCard;
