import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/axios-instance";
import { LoginResponse, LoginT } from "../../../types/interface";

const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginT) =>
            request
                .post<LoginResponse>("/auth/login", data)
                .then((res) => res.data),
    });
};

export default useLogin;
