import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { LoginT, LoginResponse } from "../../types/interface";
import useLogin from "./mutation/use-login";
import { Button, Form, FormProps, Input, message, Typography } from "antd";
import { GetCookie } from "../../config/cookie";
import { CookiesEnum, UserRole } from "../../types/enum";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const { logIn } = useAuthStore((store) => store);
    const { mutate, isPending } = useLogin();

    useEffect(() => {
        const access = GetCookie(CookiesEnum.ACCESS_TOKEN);
        const refReshToken = GetCookie(CookiesEnum.REFRESH_TOKEN);
        const user = GetCookie(CookiesEnum.USER);
        if (access && refReshToken && user) {
            if (user.role === UserRole.ADMIN) {
                navigate("/admin", { replace: true });
            } else if (user.role === UserRole.TEACHER) {
                navigate("/teacher", { replace: true });
            }
        }
    }, [navigate]);

    const loginHandler: FormProps<LoginT>["onFinish"] = (data) => {
        mutate(data, {
            onSuccess(data: LoginResponse) {
                console.log(data);
                logIn({ user: data.user, data: data.data });
                messageApi.success("Success");
                if (data.user.role === UserRole.ADMIN) {
                    navigate("/admin", { replace: true });
                } else if (data.user.role === UserRole.TEACHER) {
                    navigate("/teacher", { replace: true });
                }
            },
            onError(error: any) {
                messageApi.error(error?.response?.statusText);
            },
        });
    };
    return (
        <div
            style={{
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {contextHolder}
            <div>
                <Typography.Paragraph
                    style={{
                        textAlign: "center",
                        fontSize: "32px",
                        color: "#0e1427",
                        fontWeight: "500",
                    }}
                >
                    Tizimga kirish
                </Typography.Paragraph>
                <Form
                    name="auth"
                    layout="vertical"
                    style={{ width: 350 }}
                    onFinish={loginHandler}
                >
                    <Form.Item<LoginT>
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                        style={{ marginBottom: "35px" }}
                    >
                        <Input
                            placeholder="username"
                            prefix={<i className="ri-user-line" />}
                            style={{
                                border: "none",
                                borderBottom: "2px solid #7D41ED",
                                borderRadius: 0,
                                boxShadow: "none",
                                backgroundColor: "transparent",
                                paddingLeft: "0",
                                paddingTop: "4px",
                                paddingBottom: "12px",
                                fontSize: "18px",
                            }}
                        />
                    </Form.Item>

                    <Form.Item<LoginT>
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                        style={{ marginBottom: "35px" }}
                    >
                        <Input.Password
                            placeholder="password"
                            prefix={<i className="ri-key-line" />}
                            style={{
                                border: "none",
                                borderBottom: "2px solid #7D41ED",
                                borderRadius: 0,
                                boxShadow: "none",
                                backgroundColor: "transparent",
                                paddingLeft: "0",
                                paddingTop: "4px",
                                paddingBottom: "12px",
                                fontSize: "18px",
                            }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            disabled={isPending}
                            type="primary"
                            htmlType="submit"
                            style={{
                                width: "100%",
                                backgroundColor: "#7D41ED",
                                border: "none",
                                borderRadius: "8px",
                                paddingTop: "20px",
                                paddingBottom: "20px",
                            }}
                        >
                            Kirish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
