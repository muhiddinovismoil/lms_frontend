import { Avatar, Row, Tag } from "antd";
import Title from "antd/es/typography/Title";

export interface IUserCard {
    id: number;
    avatar: string;
    fullname: string;
    birthDate: string;
    phoneNumber: string;
    address: string;
    gender: string;
}

export const UserCard = ({
    id,
    avatar,
    fullname,
    birthDate,
    gender,
    phoneNumber,
    address,
}: IUserCard) => {
    return (
        <Row
            style={{
                boxShadow: " 2px 2px 4px 0 rgba(0, 0, 0, 0.1)",
                background: "#fff",
                border: " 1px solid #ddd",
                borderRadius: "4px",
                padding: "15px",
            }}
        >
            <Row style={{ alignItems: "center", gap: "30px" }}>
                <Row style={{ alignItems: "center", gap: "15px" }}>
                    {" "}
                    <Title
                        level={2}
                        style={{
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#1c274c",
                            margin: 0,
                        }}
                    >
                        {id}
                    </Title>
                    <Avatar src={avatar} />
                    <Title
                        level={2}
                        style={{
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#1c274c",
                            margin: 0,
                            width: "230px",
                            overflow: "hidden",
                        }}
                    >
                        {fullname}
                    </Title>{" "}
                </Row>
                <Row style={{ alignItems: "center", gap: "35px" }}>
                    <Title
                        level={2}
                        style={{
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#1c274c",
                            margin: 0,
                        }}
                    >
                        {birthDate.slice(0, 10)}
                    </Title>
                    <Tag
                        color={gender === "MALE" ? "green" : "red"}
                        style={{ marginLeft: "50px" }}
                    >
                        {gender === "MALE" ? "O’g’il bola" : "Qiz bola"}
                    </Tag>
                    <Title
                        level={2}
                        style={{
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#1c274c",
                            margin: 0,
                        }}
                    >
                        {phoneNumber}
                    </Title>
                    <Title
                        level={2}
                        style={{
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#1c274c",
                            margin: 0,
                            marginLeft: "130px",
                        }}
                    >
                        {address}
                    </Title>
                </Row>
            </Row>
        </Row>
    );
};
