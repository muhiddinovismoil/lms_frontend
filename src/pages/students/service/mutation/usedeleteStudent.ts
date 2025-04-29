import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/axios-instance";

export const useDeleteStudent = () => {
    return useMutation({
        mutationFn: (id: string) =>
            request.delete(`/students/${id}`).then((data) => data.data),
    });
};
