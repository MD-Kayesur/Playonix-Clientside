import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_API_ENDPOINT || "http://localhost:5000/api/v1";

const logoutAction = () => ({ type: "auth/logout" });

const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
    prepareHeaders: (headers) => {
        const accessToken = Cookies.get("access_token");
        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithRefresh: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        const refreshToken = Cookies.get("refreshToken");

        if (refreshToken) {
            const refreshResult: any = await rawBaseQuery(
                {
                    url: "/auth/refresh-token",
                    method: "POST",
                    body: { refreshToken },
                },
                api,
                extraOptions
            );

            if (refreshResult?.data?.access_token) {
                Cookies.set("access_token", refreshResult.data.access_token, { expires: 7 });

                if (refreshResult.data.refreshToken) {
                    Cookies.set("refreshToken", refreshResult.data.refreshToken, { expires: 30 });
                }

                result = await rawBaseQuery(args, api, extraOptions);
            } else {
                api.dispatch(logoutAction());
            }
        } else {
            api.dispatch(logoutAction());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefresh,
    tagTypes: ["User"],
    endpoints: () => ({}),
});
