export interface GetDashboardI {
    status: number;
    message: string;
    data: {
        teacherCount: number;
        users: UserI[];
        income: {
            sum: number;
            percent: number;
        };
        cost: {
            sum: number;
            percent: number;
        };
        studentCount: number;
        userCount: number;
        ageStats: Record<string, number>;
    };
}

interface UserI {
    full_name: string;
    username: string;
    password: string;
    role: string;
    address: string;
    phone_number: string;
    gender: string;
    data_of_birth: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    images: ImagesI[];
}

export interface ImagesI {
    url: string;
}
