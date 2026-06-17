import { baseApi } from "@/redux/hooks/baseApi";

export const ratingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitRating: builder.mutation({
            query: (ratingData) => ({
                url: "/rating",
                method: "POST",
                body: ratingData,
            }),
            invalidatesTags: (_result, _error, { mediaId }) => [
                { type: "Rating", id: mediaId },
                { type: "Rating", id: `STATS_${mediaId}` }
            ],
        }),
        getMediaRatings: builder.query({
            query: (mediaId) => ({
                url: `/rating/media/${mediaId}`,
                method: "GET",
            }),
            providesTags: (_result, _error, mediaId) => [{ type: "Rating", id: mediaId }],
        }),
        getMediaRatingStats: builder.query({
            query: (mediaId) => ({
                url: `/rating/media/${mediaId}/stats`,
                method: "GET",
            }),
            providesTags: (_result, _error, mediaId) => [{ type: "Rating", id: `STATS_${mediaId}` }],
        }),
    }),
});

export const {
    useSubmitRatingMutation,
    useGetMediaRatingsQuery,
    useGetMediaRatingStatsQuery,
} = ratingApi;
