import { create } from "zustand";
import Cookie from "js-cookie";
import { TokenData, UserT } from "../types/interface";
import { CookiesEnum } from "../types/enum";
import { GetCookie, RemoveCookie, SaveCookie } from "../config/cookie";
interface storeT {
    user: UserT | null;
    token: string | null;
    logIn: ({ user, data }: { user: UserT; data: TokenData }) => void;
    logOut: () => void;
}

export const useAuthStore = create<storeT>()((set) => ({
    user: GetCookie(CookiesEnum.USER) || null,
    token: Cookie.get(CookiesEnum.ACCESS_TOKEN) as string | null,

    logIn: ({ user, data }: { user: UserT; data: TokenData }) => {
        SaveCookie(
            CookiesEnum.ACCESS_TOKEN,
            data.accessToken,
            data.access_token_expire
        );
        SaveCookie(
            CookiesEnum.REFRESH_TOKEN,
            data.refreshToken,
            data.refresh_token_expire
        );
        SaveCookie(CookiesEnum.USER, user, data.access_token_expire);

        set({ user, token: data.accessToken });
    },

    logOut: () => {
        RemoveCookie(CookiesEnum.ACCESS_TOKEN);
        RemoveCookie(CookiesEnum.USER);
        RemoveCookie(CookiesEnum.REFRESH_TOKEN);

        set({ user: null, token: null });
    },
}));
