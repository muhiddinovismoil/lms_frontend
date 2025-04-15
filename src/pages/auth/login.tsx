import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./mutation/useLogin";
import { LoginI, LoginResponseI } from "../../types/interfaces/login.interface";
import { Form, FormProps, message, Typography, Input, Button } from "antd";

const Login = () => {
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useLogin();
    const { setUser } = useAuthStore((store) => store);

    const loginHandler: FormProps<LoginI>["onFinish"] = async (data) => {
        mutate(data, {
            onSuccess: (data: LoginResponseI) => {
                setUser(data.user);
                messageApi.success("Login successful");
                navigate("/");
            },
            onError: (err: any) => {
                console.log(err);
                messageApi.error(err?.response?.data?.message);
            },
        });
    };
    return (
        <>
            <div
                style={{
                    minWidth: "100vw",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {contextHolder}
                <div>
                    <Typography.Paragraph
                        style={{
                            textAlign: "center",
                            fontSize: "32px",
                            fontWeight: 500,
                            color: "#0e1427",
                        }}
                    >
                        Tizimga kirish
                    </Typography.Paragraph>
                    <Form
                        name="auth"
                        layout="vertical"
                        onFinish={loginHandler}
                        style={{
                            width: 350,
                        }}
                    >
                        <Form.Item<LoginI>
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Username is required",
                                },
                            ]}
                        >
                            <Input
                                prefix={<i className="ri-key-line" />}
                                style={{
                                    border: "none",
                                    borderBottom: "1px solid #7D41ED",
                                    borderRadius: "0px",
                                    fontSize: "18px",
                                    boxShadow: "none",
                                    paddingLeft: 0,
                                    fontWeight: 400,
                                    backgroundColor: "transparent",
                                }}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Password is required",
                                },
                            ]}
                            style={{
                                marginBottom: "35px",
                            }}
                        >
                            <Input.Password
                                prefix={<i className="ri-key-line" />}
                                style={{
                                    border: "none",
                                    borderBottom: "1px solid #7D41ED",
                                    borderRadius: "0px",
                                    fontSize: "18px",
                                    boxShadow: "none",
                                    paddingLeft: 0,
                                    paddingTop: "4px",
                                    fontWeight: 400,
                                    outline: "none",
                                    backgroundColor: "transparent",
                                }}
                                placeholder="Password"
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
                                    outline: "none",
                                    fontSize: "18px",
                                    lineHeight: "133%",
                                    fontWeight: 500,
                                    paddingBottom: "20px",
                                }}
                            >
                                Kirish
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;
