import { Dayjs } from "dayjs";

export interface FieldType {
    firstname: string;
    lastname: string;
    surname: string;
    gender: string;
    address: string;
    groupId: string;
    paymentType: string;
    sum: number;
    phone_number: string;
    data_of_birth: Dayjs;
}
