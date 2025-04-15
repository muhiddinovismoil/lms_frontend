import { RoleEnum } from "../enums/role.enum";

export interface LoginI {
    username: string;
    password: string;
}
export interface LoginResponseI {
    status: number;
    message: string;
    data: TokenI;
    user: UserI;
}
export interface TokenI {
    accessToken: string;
    access_token_expire: string;
    refreshToken: string;
    refresh_token_expire: "5d";
}
export interface UserI {
    full_name: string;
    username: string;
    password: string;
    role: RoleEnum;
    created_at: string;
    updated_at: string;
    user_id: string;
}
