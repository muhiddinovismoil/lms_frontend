import { UserRole } from "../enum";

// login
export interface LoginT {
    username: string;
    password: string;
}

export interface TokenData {
    accessToken: string;
    access_token_expire: string;
    refreshToken: string;
    refresh_token_expire: string;
}

export interface UserT {
    full_name?: string;
    username?: string;
    password?: string;
    role?: UserRole;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
}

export interface LoginResponse {
    status: number;
    message: string;
    data: TokenData;
    user: UserT;
}

export interface RouteT {
    path: string;
    element: React.ReactNode;
    children?: ChildrenT[];
}
export interface ChildrenT {
    index?: boolean;
    path?: string;
    element: React.ReactNode;
    children?: ChildrenT[];
}
