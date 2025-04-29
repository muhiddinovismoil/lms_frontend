import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Upload,
    Row,
    Col,
    message,
    Typography,
} from "antd";
import {
    CheckOutlined,
    CloseOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useNavigate, useParams } from "react-router-dom";
import { UploadFile } from "antd/es/upload";
import { FieldType } from "../../types/interface/studentFildT";
import { useEffect, useState } from "react";
import { useUploadImgStudent } from "./mutation/fileUpload";
import { useCreateStudent } from "./mutation/useCreateStudent";
import { useGetAllGroup } from "./query/getGrup";
import { IGroup } from "../../types/interface/group";
import { useGetStudent } from "./query/getUser";
import dayjs from "dayjs";

const { Option } = Select;

export const UpdateStudentForm = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const { mutate: uploadMutate, isPending: createImgPeading } =
        useUploadImgStudent();
    const { mutate: createStudent, isPending: studentPan } = useCreateStudent();

    const { data: groupData } = useGetAllGroup();
    if (!id) {
        return;
    }
    const { data: studentData, isLoading } = useGetStudent(id);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!studentData) {
        return (
            <Col
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Col
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Typography.Text>Student topilmadi :(</Typography.Text>
                    <Button onClick={() => navigate("/admin/students")}>
                        Orqaga
                    </Button>
                </Col>
            </Col>
        );
    }
    const generateId = () => Math.random().toString(36).substring(2, 7);
    console.log(studentData);
    const [firstname, lastname, ...surname] = studentData.full_name.split(" ");
    console.log(firstname, lastname, surname);

    const onFinish = (values: FieldType) => {
        const user = {
            img_url: fileList[0]?.url,
            full_name: `${values.firstname} ${values.lastname} ${values.surname}`,
            username: `Id${generateId()}secret$11!`,
            password: `Id${generateId()}secret$11!`,
            gender: values.gender,
            address: values.address.trim(),
            groupId: values.groupId,
            paymentType: values.paymentType,
            sum: +values.sum,
            phone_number: values.phone_number,
            data_of_birth: values.data_of_birth.format("YYYY-MM-DD"),
        };
        createStudent(user, {
            onSuccess: () => {
                message.success("O'quvchi muvaffaqiyatli qo'shildi");
                setFileList([]);
                form.resetFields();
            },
            onError: (error) => {
                console.error("Xatolik:", error);
                message.error("O'quvchini qo'shishda xatolik yuz berdi");
            },
        });
    };

    return (
        <div style={{ padding: "0 20px" }}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row
                    style={{
                        padding: "22px 0 20px 0",
                        borderBottom: "1px solid var(--qidiruv-tizimi-1)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px",
                    }}
                >
                    <Title
                        level={2}
                        style={{
                            fontWeight: 600,
                            fontSize: "26px",
                            color: "var(--matn-rang-1)",
                            fontFamily: "var(--font-family)",
                            margin: 0,
                        }}
                    >
                        O'quvchilarni qo'shish
                    </Title>
                    <div style={{ display: "flex", gap: "16px" }}>
                        <Button
                            onClick={() => navigate("/admin/students")}
                            icon={<CloseOutlined />}
                            style={{
                                borderColor: "var(--qizil-rang-1)",
                                color: "var(--qizil-rang-1)",
                                fontWeight: 600,
                                background: "var(--oq-rang-1)",
                                boxShadow: "2px 2px 5px var(--mirrorname)",
                            }}
                        >
                            Bekor qilish
                        </Button>
                        <Button
                            loading={studentPan}
                            icon={<CheckOutlined />}
                            htmlType="submit"
                            style={{
                                borderColor: "var(--breand-rang-2)",
                                color: "var(--breand-rang-2)",
                                fontWeight: 600,
                                background: "var(--oq-rang-1)",
                                boxShadow: "2px 2px 5px var(--mirrorname)",
                            }}
                        >
                            Saqlash
                        </Button>
                    </div>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Form.Item label="Avatar" name="avatar">
                            <Upload
                                customRequest={({
                                    file,
                                    onSuccess,
                                    onError,
                                }) => {
                                    if (file && !createImgPeading) {
                                        uploadMutate(file as File, {
                                            onSuccess: (data) => {
                                                setFileList([
                                                    {
                                                        uid: (file as any).uid,
                                                        name: (file as any)
                                                            .name,
                                                        status: "done",
                                                        url: data.data
                                                            .image_url,
                                                    },
                                                ]);
                                                if (onSuccess) {
                                                    onSuccess("ok");
                                                }
                                            },
                                            onError: (error) => {
                                                if (onError) {
                                                    onError(error);
                                                }
                                            },
                                        });
                                    }
                                }}
                                listType="picture-card"
                                maxCount={1}
                                onRemove={() => setFileList([])}
                                fileList={fileList}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <UploadOutlined
                                        style={{
                                            fontSize: "24px",
                                            marginBottom: "8px",
                                        }}
                                    />
                                    <div style={{ fontSize: "14px" }}>
                                        Rasm yuklash
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Ism"
                            name="firstname"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Ism"
                                style={{ height: "45px" }}
                                defaultValue={firstname}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Familiya"
                            name="lastname"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Familiya"
                                style={{ height: "45px" }}
                                defaultValue={lastname}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Sharif"
                            name="surname"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Sharif"
                                style={{ height: "45px" }}
                                defaultValue={surname}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Tug'ilgan sana"
                            name="data_of_birth"
                            rules={[{ required: true }]}
                        >
                            <DatePicker
                                format="DD.MM.YYYY"
                                style={{ width: "100%", height: "45px" }}
                                placeholder="Tug'ilgan sana"
                                defaultValue={dayjs(studentData.data_of_birth)}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Jinsi"
                            name="gender"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="Jinsi"
                                style={{ height: "45px" }}
                                defaultValue={studentData.gender}
                            >
                                <Option value="MALE">Erkak</Option>
                                <Option value="FEMALE">Ayol</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Manzil"
                            name="address"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Manzil"
                                style={{ height: "45px" }}
                                defaultValue={studentData.address}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Telefon raqam"
                            name="phone_number"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Telefon raqam"
                                style={{ height: "45px" }}
                                defaultValue={studentData.phone_number}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Guruh"
                            name="groupId"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="Guruh"
                                style={{ height: "45px" }}
                                defaultValue={
                                    studentData.group_members[0].group.name
                                }
                            >
                                {groupData?.data.map((item: IGroup) => (
                                    <Option
                                        key={item.group_id}
                                        value={item.group_id}
                                    >
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="To'lov turi"
                            name="paymentType"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="To'lov turi"
                                style={{ height: "45px" }}
                            >
                                <Option value="CASH">Naqd</Option>
                                <Option value="CARD">Karta</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item<FieldType>
                            label="Summa"
                            name="sum"
                            rules={[{ required: true }]}
                        >
                            <Input
                                type="number"
                                placeholder="Summa"
                                style={{ height: "45px" }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
