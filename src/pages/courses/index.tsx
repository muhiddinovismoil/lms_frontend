import { Table, Tag, Button, Space, Avatar, Col, Spin } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import useGetAllStudent from "./service/query/useGetAllStudent";
import { useState } from "react";

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

const columns = [
    {
        title: "#",
        dataIndex: "key",
        key: "key",
    },
    {
        title: "Bolalar F.I.O",
        dataIndex: "name",
        key: "name",
        render: (text: string) => (
            <Space>
                <Avatar />
                {text}
            </Space>
        ),
    },
    {
        title: "Tug'ilgan sana",
        dataIndex: "birthday",
        key: "birthday",
    },
    {
        title: "Jinsi",
        dataIndex: "gender",
        key: "gender",
        render: (gender: string) => (
            <Tag color={gender === "O'g'il bola" ? "green" : "red"}>
                {gender}
            </Tag>
        ),
    },
    {
        title: "Gurux raqami",
        dataIndex: "group",
        key: "group",
    },
    {
        title: "Davomat",
        dataIndex: "attendance",
        key: "attendance",
        render: (attended: boolean) => (
            <Tag color={attended ? "green" : "red"}>{attended ? "✓" : "✕"}</Tag>
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
        render: () => (
            <Space>
                <Button icon={<EditOutlined />} />
                <Button icon={<DeleteOutlined />} danger />
            </Space>
        ),
    },
];

export const Courses = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const handleAddStudent = () => {
        navigate("/admin/students/add");
    };
    const { data, isLoading } = useGetAllStudent(page, 10);
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

    // const handleEditStudent = (key: string) => {
    //     navigate(`/students/edit/${key}`);
    // };
    // const handleDeleteStudent = (key: string) => {
    //     console.log(`Delete student with key: ${key}`);
    // };
    return (
        <div>
            <Col
                style={{
                    padding: "22px 20px 20px 20px",
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
                    Kurslar jadvali
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
            <Table
                columns={columns}
                dataSource={data?.data}
                pagination={{ pageSize: data?.meta.studentCount }}
            />
        </div>
    );
};
