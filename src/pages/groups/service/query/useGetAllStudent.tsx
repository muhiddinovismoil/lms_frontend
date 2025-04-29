import { request } from "../../../../config/axios-instance";
import { IGetStudentInterface } from "../../../../types/interface/student.interface";
import { useQuery } from "@tanstack/react-query";

const useGetAllStudent = (page: number, limit: number) => {
    return useQuery({
        queryKey: ["students_", page, limit],
        queryFn: () =>
            request
                .get<IGetStudentInterface>(
                    `/students?page=${page}&limit=${limit}`
                )
                .then((res) => res.data),
    });
};

export default useGetAllStudent;
