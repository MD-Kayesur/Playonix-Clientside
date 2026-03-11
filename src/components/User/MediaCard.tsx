import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, Bookmark, Share2 } from 'lucide-react';
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
                className="absolute inset-0 w-full h-full overflow-hidden bg-black sm:rounded-[1rem] cursor-pointer"
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
                                src={logo}
                                alt="logo"
                                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover  "
                            />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-3">
                                <h2
                                    className="text-white font-black text-[20px] md:text-[24px] tracking-tighter cursor-pointer hover:text-[#FACC15] transition-colors pointer-events-auto leading-tight drop-shadow-lg"
                                    onClick={(e) => { e.stopPropagation(); offer.website_url && window.open(offer.website_url, '_blank'); }}
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
                                <div className="flex items-center gap-1 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
                                    <Star size={14} className="fill-[#FACC15] text-[#FACC15]" />
                                    <span className="text-[#FACC15] text-[13px] font-black italic">{(offer.rating || 0).toFixed(1)}</span>
                                </div>
                                {offer.ratingCount !== undefined && (
                                    <span className="text-white text-[13px] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {offer.ratingCount.toLocaleString()} <span className="text-white/60 font-medium">REVIEWS</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

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
                                className="flex items-center gap-1 text-white font-black text-[14px] sm:text-[15px]   transition-colors pointer-events-auto group/read"
                            >
                                <span>See More</span>
                                <ArrowUpRight size={18} className="group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (offer.website_url) window.open(offer.website_url, '_blank');
                        }}
                        type="button"
                        className="w-full px-6 py-3.5 font-black rounded-2xl bg-gradient-to-r from-[#FACC15] via-[#FFE55C] to-[#FACC15] text-black transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 pointer-events-auto border-none shadow-[0_0_20px_rgba(250,204,21,0.5)] animate-golden-glow text-[15px] tracking-wider"
                    >
                        {ctaText}
                    </button>
                </div>
            </div>

            {/* Back Side */}
            <div
                className="absolute inset-0 w-full h-full bg-card sm:rounded-[1rem] overflow-hidden p-6 sm:p-8 flex flex-col gap-6 custom-scrollbar overflow-y-auto transition-colors duration-300"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
                <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                        <h3 className="text-foreground text-xl md:text-2xl font-black truncate">{offer.title}</h3>
                        <p className="text-foreground/70 text-sm font-medium truncate">{offer.subtitle}</p>
                    </div>
                    {(offer.rating || 0) > 0 && (
                        <div className="flex flex-col items-end shrink-0">
                            <div className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg">
                                <Star size={14} className="fill-[#FACC15] text-[#FACC15]" />
                                <span className="text-foreground font-black italic">{offer.rating?.toFixed(1)}</span>
                            </div>
                            <span className="text-[10px] text-foreground/40 font-bold uppercase mt-1">{offer.ratingCount?.toLocaleString()} Reviews</span>
                        </div>
                    )}
                </div>

                <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="space-y-2">
                        <h4 className="text-foreground font-bold text-xs uppercase tracking-wider">About this offer</h4>
                        <p className="text-foreground/90 text-[15px] leading-relaxed">{offer.description}</p>
                    </div>

                    {offer.tags && offer.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 py-2">
                            {offer.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/10 rounded-lg text-foreground dark:text-white text-[10px] font-bold uppercase tracking-tight">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {offer.terms_highlights && (
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between">
                                <h4 className="text-foreground font-black text-[11px] uppercase tracking-wider">Key Highlights</h4>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 grayscale opacity-40">
                                        <Bookmark size={12} className="fill-current" />
                                        <span className="text-[11px] font-black italic">{offer.saves || 0}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 grayscale opacity-40">
                                        <Share2 size={12} className="fill-current" />
                                        <span className="text-[11px] font-black italic">{offer.shares || 0}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-2.5">
                                {offer.terms_highlights.map((term, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] mt-1.5 shrink-0" />
                                        {term}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="space-y-4 pt-6 mt-auto border-t border-border">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (offer.website_url) window.open(offer.website_url, '_blank');
                        }}
                        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl border border-primary/20 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] active:scale-95"
                    >
                        {ctaText}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCardId(null);
                        }}
                        className="w-full bg-foreground/5 text-foreground font-medium py-3 rounded-2xl hover:bg-foreground/10 transition-all text-sm transition-colors duration-300"
                    >
                        Back to {mediaLabel}
                    </button>
                    {offer.disclaimer && (
                        <p className="text-foreground/20 text-[10px] text-center leading-tight">
                            {offer.disclaimer}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default MediaCard;
