import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/axios-instance";
import {
    LoginI,
    LoginResponseI,
} from "../../../types/interfaces/login.interface";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginI) =>
            request
                .post<LoginResponseI>("/auth/login", data)
                .then((res) => res.data),
    });
};
