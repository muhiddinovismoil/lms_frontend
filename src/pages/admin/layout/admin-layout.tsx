import { useEffect, useState } from "react";
import {
    UserOutlined,
    TeamOutlined,
    BookOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input, Avatar, Typography, Button, Modal } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useAuthStore } from "../../../store/useAuthStore";
import { GetCookie } from "../../../config/cookie";
import { UserT } from "../../../types/interface";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [user, setUser] = useState({} as UserT);
    const navigate = useNavigate();
    const { logOut } = useAuthStore();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        logOut();
        navigate("/login");
    };

    useEffect(() => {
        const userData = GetCookie("user");
        setUser(userData);
    }, []);

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    width={220}
                    theme="light"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                >
                    <div style={{ textAlign: "center", padding: "16px" }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ maxWidth: "100%", height: "32px" }}
                        />
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ borderRight: 0 }}
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to={"/admin"}>Asosiy</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to={"/admin/students"}>O'quvchilar</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined />}>
                            <Link to={"/admin/teachers"}>O'qituvchilar</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BookOutlined />}>
                            <Link to={"/admin/groups"}>Guruhlar</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<TeamOutlined />}>
                            <Link to={"/admin/courses"}>Kurslar</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<SettingOutlined />}>
                            <Link to={"/admin/settings"}>Sozlamalar</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="8"
                            onClick={showModal}
                            icon={<LogoutOutlined />}
                            danger
                        >
                            Chiqish
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            background: "#fff",
                            padding: "0 24px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 64,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <Input.Search
                            placeholder="Qidiruv tizimi..."
                            style={{ maxWidth: 300 }}
                            allowClear
                        />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                            }}
                        >
                            <Button shape="circle">
                                <BellOutlined style={{ fontSize: 20 }} />
                            </Button>

                            <Avatar icon={<UserOutlined />} />

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    lineHeight: 1,
                                }}
                            >
                                <Text strong>{user?.full_name}</Text>
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                    {user?.role}
                                </Text>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            backgroundColor: "var(--stroka-rang-2)",
                            overflowY: "auto",
                            height: "calc(100vh - 65px)",
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
            <Modal
                title="Chiqish"
                cancelText="Yo'q"
                okText="Ha"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Rostanham chiqmoqchimisiz!!!</p>
            </Modal>
        </>
    );
};
