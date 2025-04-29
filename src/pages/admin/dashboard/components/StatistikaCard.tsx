import { Col, Row } from "antd";
import CalendarIcon from "../../../../assets/calendar-icon.svg";
import Title from "antd/es/typography/Title";
import bgImage from "../../../../assets/bg-card.png";

export const StatistikaCard = ({
    title,
    price,
    percent,
    sub_title,
    svg,
}: {
    title: string;
    price: string;
    percent: string;
    sub_title: string;
    svg: string;
}) => {
    return (
        <Col
            style={{
                padding: "15px",
                boxShadow: " 2px 2px 4px 0 rgba(0, 0, 0, 0.1)",
                background: "var(--oq-rang-1)",
                border: " 1px solid var(--qidiruv-tizimi-1)",
                borderRadius: "4px",
                width: "full",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "top 19px right 15px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
            }}
        >
            <Col
                style={{
                    border: "1px solid var(--qidiruv-tizimi-1)",
                    borderRadius: "4px",
                    padding: "5px 8px 4px 8px",
                    width: "50px",
                    marginBottom: "5px",
                }}
            >
                <img width={32} height={32} src={svg} alt="" />
            </Col>
            <Title
                level={3}
                style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "var(--matn-rang-1)",
                    fontFamily: "var(--font-family)",
                    margin: 0,
                }}
            >
                {title}
            </Title>
            <Title
                level={3}
                style={{
                    fontWeight: 500,
                    fontSize: "26px",
                    color: "var(--matn-rang-1)",
                    fontFamily: "var(--font-family)",
                    margin: 0,
                    marginTop: "10px",
                }}
            >
                {price}
            </Title>

            <Row
                style={{ alignItems: "center", gap: "5px", marginTop: "20px" }}
            >
                <img src={CalendarIcon} alt="" />
                <Title
                    level={3}
                    style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "var(--matn-rang-1)",
                        fontFamily: "var(--font-family)",
                        lineHeight: "130%",
                        margin: 0,
                    }}
                >
                    {sub_title}
                    <span
                        style={{
                            fontWeight: 600,
                            color: "var(--qizil-rang-1)",
                        }}
                    >
                        {percent}
                    </span>
                </Title>
            </Row>
        </Col>
    );
};
