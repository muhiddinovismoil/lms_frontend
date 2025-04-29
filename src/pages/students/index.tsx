import {
    Table,
    Tag,
    Button,
    Space,
    Col,
    Spin,
    Typography,
    Image,
    Modal,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import useGetAllStudent from "./service/query/useGetAllStudent";
import { useState } from "react";
import { IStudetn } from "../../types/interface/student.interface";
import { useDeleteStudent } from "./service/mutation/usedeleteStudent";

// const data = [
//     {
//         key: "1",
//         name: "Sultonov Shokirjon Tursinjon o'g'li",
//         birthday: "15.05.2021",
//         gender: "O'g'il bola",
//         group: "15-gurux",
//         attendance: true,
//     },
//     {
//         key: "2",
//         name: "Nodirova Shodiya Tursinjon qizi",
//         birthday: "15.05.2021",
//         gender: "Qiz bola",
//         group: "15-gurux",
//         attendance: false,
//     },
// ];

export const Students = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<{
        open: boolean;
        user: { id: string | null; name: string | null };
    }>({
        open: false,
        user: { id: null, name: null },
    });
    const [page, setPage] = useState<number>(1);
    const handleAddStudent = () => {
        navigate("/admin/students/add");
    };
    const { data, isLoading } = useGetAllStudent(page, 10);
    const { mutate: deleteStudent } = useDeleteStudent();

    if (isLoading)
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spin />
            </div>
        );
    console.log(data);

    const handleEditStudent = (key: string) => {
        navigate(`/admin/students/${key}`);
    };
    const handleDeleteStudent = (id: string, name: string) => {
        setIsModalOpen({ open: true, user: { id, name } });
    };

    const handleOk = () => {
        console.log(isModalOpen);
        if (isModalOpen.user.id) {
            deleteStudent(isModalOpen.user.id, {
                onSuccess(data) {
                    console.log(data);
                },
                onError(err) {
                    console.log("error ", err);
                },
            });
        }
        setIsModalOpen({ open: false, user: { id: null, name: null } });
    };

    const handleCancel = () => {
        setIsModalOpen({ open: false, user: { id: null, name: null } });
    };

    const columns = [
        {
            title: "#",
            key: "key",
        },
        {
            title: "Bolalar F.I.O",
            key: "full_name",
            render: (student: IStudetn) => (
                <Space>
                    <Image
                        src={student.images[0].url}
                        alt="Img"
                        width={36}
                        height={36}
                        style={{ borderRadius: "20px" }}
                    />
                    {student.full_name}
                </Space>
            ),
        },
        {
            title: "Tug'ilgan sana",
            dataIndex: "data_of_birth",
            key: "data_of_birth",
            render: (date: string) => (
                <Typography.Text>{date.slice(0, 10)}</Typography.Text>
            ),
        },
        {
            title: "Jinsi",
            dataIndex: "gender",
            key: "gender",
            render: (gender: string) => (
                <Tag color={gender === "MALE" ? "green" : "red"}>{gender}</Tag>
            ),
        },
        {
            title: "Yashash joyi",
            dataIndex: "address",
            key: "group",
        },
        {
            title: "Davomat",
            dataIndex: "attendance",
            key: "attendance",
            render: (attended: boolean) => (
                <Tag color={attended ? "green" : "red"}>
                    {attended ? "✓" : "✕"}
                </Tag>
            ),
        },
        {
            title: "To'lov",
            key: "payment",
            render: () => <Button>To'lov</Button>,
        },
        {
            title: "Imkoniyatlar",
            key: "actions",
            render: (data: IStudetn) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEditStudent(data.user_id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() =>
                            handleDeleteStudent(data.user_id, data.full_name)
                        }
                        danger
                    />
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Col
                style={{
                    padding: "22px 20px 20px 20px",
                    borderBottom: "1px solid var(--qidiruv-tizimi-1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
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
                    O’quvchilar jadvali
                </Title>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    style={{
                        color: "var(--breand-rang-2)",
                        backgroundColor: "white",
                    }}
                    onClick={handleAddStudent}
                >
                    Qo'shish
                </Button>
            </Col>
            <Table<IStudetn>
                columns={columns}
                dataSource={data?.data}
                pagination={{
                    current: page,
                    pageSize: 10,
                    total: data?.meta.studentCount,
                    onChange: (pageNumber) => setPage(pageNumber),
                }}
                rowKey="user_id"
            />
            <Modal
                title="Chiqish"
                cancelText="Yo'q"
                okText="Ha"
                open={isModalOpen.open}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Rostanham {isModalOpen.user.name} ni o'chirmoqchimisiz.</p>
            </Modal>
        </div>
    );
};
