import React from 'react';
import { User, Trash2, Star, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewModerationListProps {
    offerId: number;
    commentsMap: Record<number, any[]>;
    setCommentsMap: (map: Record<number, any[]>) => void;
}

const ReviewModerationList: React.FC<ReviewModerationListProps> = ({
    offerId,
    commentsMap,
    setCommentsMap
}) => {
    const reviews = commentsMap[offerId] || [];

    const deleteReview = (reviewId: number) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            const newMap = { ...commentsMap };
            newMap[offerId] = (newMap[offerId] || []).filter((c: any) => c.id !== reviewId);
            setCommentsMap(newMap);
            localStorage.setItem('media_comments', JSON.stringify(newMap));
            toast.success('Review deleted');
        }
    };

    const deleteReply = (parentReviewId: number, replyId: number) => {
        if (window.confirm('Are you sure you want to delete this reply?')) {
            const newMap = { ...commentsMap };
            newMap[offerId] = (newMap[offerId] || []).map((review: any) => {
                if (review.id === parentReviewId) {
                    return {
                        ...review,
                        replies: (review.replies || []).filter((r: any) => r.id !== replyId)
                    };
                }
                return review;
            });
            setCommentsMap(newMap);
            localStorage.setItem('media_comments', JSON.stringify(newMap));
            toast.success('Reply deleted');
        }
    };

    return (
        <div className="space-y-6">
            <h4 className="font-bold text-lg border-b border-gray-800 pb-2">Reviews Moderation</h4>
            {reviews.length > 0 ? (
                reviews.map((comment: any) => (
                    <div key={comment.id} className="space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                <User size={14} className="text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm">{comment.user}</span>
                                        {comment.rating && (
                                            <div className="flex items-center gap-1 bg-[#FACC15]/20 px-2 py-0.5 rounded text-[#FACC15] text-[10px] font-bold">
                                                {comment.rating.toFixed(1)} <Star size={8} className="fill-current" />
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => deleteReview(comment.id)}
                                        className="text-red-500 hover:text-red-400 p-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-300 mt-1">{comment.text}</p>
                                <span className="text-[10px] text-gray-500 mt-1 block">{comment.timestamp}</span>

                                {/* Replies */}
                                {comment.replies && comment.replies.length > 0 && (
                                    <div className="mt-4 ml-4 pl-4 border-l border-gray-800 space-y-4">
                                        {comment.replies.map((reply: any) => (
                                            <div key={reply.id} className="flex gap-3">
                                                <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                                                    <User size={10} className="text-gray-500" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-bold text-xs">{reply.user}</span>
                                                        <button
                                                            onClick={() => deleteReply(comment.id, reply.id)}
                                                            className="text-red-500 hover:text-red-400 p-1"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-0.5">{reply.text}</p>
                                                    <span className="text-[9px] text-gray-600 mt-1 block">{reply.timestamp}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="py-10 text-center text-gray-500">
                    <MessageCircle size={32} className="mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No reviews yet</p>
                </div>
            )}
        </div>
    );
};

export default ReviewModerationList;

