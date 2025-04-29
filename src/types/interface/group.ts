export interface IGetGroupInterface {
    status: number;
    message: string;
    data: IGroup[];
}
export interface IGroup {
    group_id: string;
    name: string;
    description: string;
    course_id: string;
    teacher_id: string;
    status: string;
    created_at: string;
    updated_at: string;
}
