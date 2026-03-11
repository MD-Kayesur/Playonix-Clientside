import { motion } from 'framer-motion';

interface FireworkCelebrationProps {
    isVisible: boolean;
}

const FireworkCelebration = ({ isVisible }: FireworkCelebrationProps) => {
    if (!isVisible) return null;

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-visible">
            {[...Array(4)].map((_, burstIdx) => (
                <div
                    key={burstIdx}
                    className="absolute"
                    style={{
                        left: `${50 + (burstIdx === 0 ? -15 : burstIdx === 1 ? 15 : burstIdx === 2 ? -25 : 25)}%`,
                        top: `${40 + (burstIdx % 2 === 0 ? -15 : 15)}%`,
                    }}
                >
                    {[...Array(20)].map((_, i) => {
                        const angle = (i * 18) * (Math.PI / 180);
                        const colors = ['#facc15', '#ffffff', '#ff2d55', '#fbbf24'];
                        const color = colors[i % colors.length];
                        return (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                animate={{
                                    scale: [0, 1.2, 0.4, 0],
                                    opacity: [0, 1, 1, 0],
                                    x: Math.cos(angle) * (180 + Math.random() * 120),
                                    y: Math.sin(angle) * (180 + Math.random() * 120),
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: burstIdx * 0.6 + (Math.random() * 0.1),
                                    ease: "easeOut",
                                }}
                                className="absolute w-1 h-4 rounded-full"
                                style={{
                                    backgroundColor: color,
                                    boxShadow: `0 0 12px ${color}`,
                                    transform: `rotate(${angle}rad)`,
                                }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FireworkCelebration;
