import { UserCard } from "./components/UserCard";
import { Button, Col, Dropdown, MenuProps, Row, Spin } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
const dataSource = [
    {
        key: "1",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "2",
        name: "Nodirova Shodiya Tursinjon qizi",
        dob: "15.05.1996",
        gender: "female",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        key: "3",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "4",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "5",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "6",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "7",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "8",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "9",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "10",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "11",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        key: "12",
        name: "Sultonov Shokirjon Tursinjon o’g’li",
        dob: "15.05.1996",
        gender: "male",
        contact: "+998 (93) 123-45-67",
        address: "Toshkent. Sentr",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
];

import CategoryMenuIcon from "../../../assets/menu.icon.svg";
import { StatistikaCard } from "./components/StatistikaCard";
import { TodayArrivedStudentsCard } from "./components/TodayArrivedStudentsCard";
import ChildrenAgeStats from "./components/ChildStatistika";
import { useGetStatistics } from "../query/getStatistics";

import incomeSvg from "../../../assets/income.svg";
import costSvg from "../../../assets/cost.svg";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                Teachers
            </a>
        ),
    },
];

const Dashboard = () => {
    const [category, setCategory] = useState("Hamma");
    const { data, isLoading } = useGetStatistics(
        "",
        category === "Hamma"
            ? ""
            : category === "O’qituvchilar"
            ? "TEACHER"
            : category === "O’quvchilar"
            ? "STUDENT"
            : ""
    );

    console.log(data);

    return (
        <>
            <Col
                style={{
                    padding: "22px 20px 20px 20px",
                    borderBottom: "1px solid var(--qidiruv-tizimi-1)",
                }}
            >
                {" "}
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
                    {" "}
                    Asosiy bo’lim
                </Title>
            </Col>
            <Col
                style={{
                    padding: "30px 20px 0 20px",
                    fontFamily: "var(--font-family)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <Row style={{ width: "full", gap: "25px" }}>
                    <Col
                        style={{
                            background: "var(--oq-rang-1)",
                            border: "1px solid var(--qidiruv-tizimi-1)",
                            borderRadius: "4px",
                            width: "76%",
                        }}
                    >
                        <Row
                            justify={"space-between"}
                            style={{
                                padding: "20px",
                                borderBottom:
                                    "2px solid  var(--qidiruv-tizimi-1)",
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    fontWeight: 400,
                                    fontSize: "26px",
                                    color: "var(--matn-rang-1)",
                                    fontFamily: "var(--font-family)",
                                    margin: 0,
                                }}
                            >
                                {" "}
                                O’qituvchilar soni:{" "}
                                <span
                                    style={{
                                        fontSize: "22px",
                                        color: "var(--breand-rang-1)",
                                    }}
                                >
                                    {data?.data?.userCount ?? 0} ta
                                </span>
                            </Title>

                            <Row style={{ gap: "15px" }}>
                                <Dropdown menu={{ items }} placement="bottom">
                                    <Button style={{ padding: "0px 5px" }}>
                                        <img
                                            src={CategoryMenuIcon}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                            }}
                                            alt=""
                                        />
                                    </Button>
                                </Dropdown>

                                {["Hamma", "O’qituvchilar", "O’quvchilar"].map(
                                    (item, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => setCategory(item)}
                                            style={{
                                                fontWeight: 500,
                                                padding: "0px 20px",
                                                fontSize: "16px",
                                                color:
                                                    category === item
                                                        ? "var(--breand-rang-2)"
                                                        : "var(--matn-rang-1)",
                                                boxShadow:
                                                    category === item
                                                        ? "2px 2px 2px 0 rgba(0, 0, 0, 0.1)"
                                                        : "none",
                                                background:
                                                    "var(--stroka-rang-2)",
                                            }}
                                        >
                                            {item}
                                        </Button>
                                    )
                                )}
                            </Row>
                        </Row>
                        <Row
                            style={{
                                flexDirection: "column",
                                padding: "0px  20px",
                            }}
                        >
                            <Row
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "50px 1.5fr 1fr 100px 1.5fr 1.5fr",
                                    alignItems: "center",
                                    padding: "20px 15px",
                                    background: "var(--oq-rang-1)",
                                    borderRadius: "4px",
                                }}
                            >
                                {[
                                    "#",
                                    "O’qituvchilar F.I.O",
                                    "Tug’ilgan sana",
                                    "Jinsi",
                                    "Kontakt",
                                    "Yashash manzil",
                                ].map((item, index) => (
                                    <Title
                                        key={index}
                                        level={2}
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "var(--filter-matn-rang-1)",
                                            fontFamily: "var(--font-family)",
                                            margin: 0,
                                        }}
                                    >
                                        {item}
                                    </Title>
                                ))}
                            </Row>

                            {isLoading ? (
                                <Col
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "225px",
                                    }}
                                >
                                    <Spin />
                                </Col>
                            ) : (
                                <Col
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        height: "225px",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                        paddingRight: "10px",
                                    }}
                                >
                                    {data?.data.users.map((items, index) => (
                                        <UserCard
                                            key={index}
                                            id={index + 1}
                                            avatar={items?.images[0]?.url}
                                            fullname={items.full_name}
                                            birthDate={items.data_of_birth}
                                            gender={items.gender}
                                            phoneNumber={items.phone_number}
                                            address={items.address}
                                        />
                                    ))}
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col
                        style={{
                            width: "22%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <StatistikaCard
                            svg={incomeSvg}
                            title={"Kirimlar"}
                            price={`${data?.data.income.sum ?? 0} so’m`}
                            sub_title={`Kechagi kunga nisbatan `}
                            percent={`${data?.data.income.percent}%`}
                        />
                        <StatistikaCard
                            svg={costSvg}
                            title={"Chiqimlar"}
                            price={`${data?.data.cost.sum ?? 0} so’m`}
                            sub_title={`O’tgan haftaga nisbatan `}
                            percent={`${data?.data.cost.percent}%`}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            background: "var(--oq-rang-1)",
                            border: "1px solid var(--qidiruv-tizimi-1)",
                            borderRadius: "4px",
                            width: "37%",
                            height: "490px",
                        }}
                    >
                        <Row
                            style={{
                                padding: "20px 20px 10px 20px",
                                borderBottom:
                                    "2px solid  var(--qidiruv-tizimi-1)",
                                justifyContent: "space-between",
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    fontWeight: 400,
                                    fontSize: "26px",
                                    color: "var(--matn-rang-1)",
                                    margin: 0,
                                    maxWidth: "160px",
                                    fontFamily: "var(--font-family)",
                                }}
                            >
                                {" "}
                                Bugun kelgan bolalar soni:
                            </Title>
                            <Col>
                                <Row
                                    style={{
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <Title
                                        level={2}
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "var(--matn-rang-1)",
                                            margin: 0,
                                            fontFamily: "var(--font-family)",
                                        }}
                                    >
                                        Sana:
                                    </Title>
                                    <Row
                                        style={{
                                            padding: "6px 20px",
                                            border: "1px solid var(--qidiruv-tizimi-1)",
                                            borderRadius: "4px",
                                            background: "var(--stroka-rang-2)",
                                        }}
                                    >
                                        <Title
                                            level={2}
                                            style={{
                                                fontWeight: 500,
                                                fontSize: "16px",
                                                color: "var(--matn-rang-1)",
                                                margin: 0,
                                                fontFamily:
                                                    "var(--font-family)",
                                            }}
                                        >
                                            11.05.2024
                                        </Title>
                                    </Row>
                                </Row>
                                <Title
                                    level={2}
                                    style={{
                                        fontWeight: 500,
                                        fontSize: "22px",
                                        color: "var(--breand-rang-1)",
                                        margin: 0,
                                        fontFamily: "var(--font-family)",
                                    }}
                                >
                                    100 ta
                                </Title>
                            </Col>
                        </Row>
                        <Col
                            style={{
                                padding: "20px",
                            }}
                        >
                            <Col
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    height: "350px",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    paddingRight: "10px",
                                }}
                            >
                                {dataSource.map((items, index) => (
                                    <TodayArrivedStudentsCard
                                        id={index + 1}
                                        key={index}
                                        avatar={items.avatar}
                                        fullname={items.name}
                                        gender={items.gender}
                                    />
                                ))}
                            </Col>
                        </Col>
                    </Col>
                    <Col
                        style={{
                            background: "var(--oq-rang-1)",
                            border: "1px solid var(--qidiruv-tizimi-1)",
                            borderRadius: "4px",
                            width: "37%",
                            marginLeft: "20px",
                        }}
                    >
                        <Row
                            style={{
                                padding: "20px 20px 10px 20px",
                                borderBottom:
                                    "2px solid  var(--qidiruv-tizimi-1)",
                                justifyContent: "space-between",
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    fontWeight: 400,
                                    fontSize: "26px",
                                    color: "var(--matn-rang-1)",
                                    margin: 0,
                                    maxWidth: "200px",
                                    fontFamily: "var(--font-family)",
                                }}
                            >
                                Bolalarni yosh bo’yicha statiskasi
                            </Title>
                            <Col>
                                <Row
                                    style={{
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <Title
                                        level={2}
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "50px",
                                            color: "var(--breand-rang-1)",
                                            margin: 0,
                                            fontFamily: "var(--font-family)",
                                        }}
                                    >
                                        100%
                                    </Title>
                                </Row>
                            </Col>
                        </Row>
                        <Col
                            style={{
                                display: "flex",
                                gap: "50px",
                            }}
                        >
                            <ChildrenAgeStats />
                        </Col>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Dashboard;
