import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/axios-instance";
import { IStudetn } from "../../../types/interface/student.interface";

export const useGetStudent = (id: string) => {
    return useQuery({
        queryKey: [`studet_${id}`],
        queryFn: () =>
            request.get<IStudetn>(`students/${id}`).then((data) => data.data),
    });
};
