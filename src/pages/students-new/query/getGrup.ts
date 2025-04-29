import { request } from "../../../config/axios-instance";
import { IGetGroupInterface } from "../../../types/interface/group";
import { useQuery } from "@tanstack/react-query";

export const useGetAllGroup = () => {
    return useQuery({
        queryKey: ["groups"],
        queryFn: () =>
            request
                .get<IGetGroupInterface>("groups?page=1&limit=1000")
                .then((res) => res.data),
    });
};
