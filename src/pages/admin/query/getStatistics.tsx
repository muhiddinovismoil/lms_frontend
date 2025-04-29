import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/axios-instance";
import { GetDashboardI } from "../../../types/interface/dashboard";

export const useGetStatistics = (fullname: string, category: string) => {
    return useQuery({
        queryKey: ["dashboard_", fullname, category],
        queryFn: () =>
            request
                .get<GetDashboardI>("statistics/dashboard", {
                    params: { fullname, category },
                })
                .then((res) => res.data),
    });
};
