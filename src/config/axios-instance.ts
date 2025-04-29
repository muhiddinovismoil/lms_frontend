import axios from "axios";
import { GetCookie } from "./cookie";
// import createAuthRefreshInterceptor from "axios-auth-refresh";

export const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

request.interceptors.request.use((config) => {
    if (config.url !== "/auth/refresh") {
        const accessToken = GetCookie("accessToken");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
    }
    return config;
});

// const refreshAuthLogic = async (failedRequest: {
//     response: { config: { headers: { [x: string]: string } } };
// }) => {
//     try {
//         const response = await request.post("/auth/refresh", {
//             refreshToken: Cookie.get("refreshToken"),
//         });
//         const newAccessToken = response.data.accessToken;
//         Cookie.set("accessToken", newAccessToken);
//         failedRequest.response.config.headers[
//             "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         return Promise.resolve();
//     } catch (err) {
//         Cookie.remove("accessToken");
//         Cookie.remove("refreshToken");
//         console.error("Error refreshing access token:", err);
//         window.location.href = "/login";
//         return Promise.reject(err);
//     }
// };

// createAuthRefreshInterceptor(request, refreshAuthLogic, {
//     statusCodes: [401],
// });
