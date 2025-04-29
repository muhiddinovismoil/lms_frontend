import React from "react";
import { Card, Row, Col, Progress, List } from "antd";

const ChildrenAgeStatistics = () => {
    // Yosh guruhlari bo'yicha ma'lumotlar
    const ageData = [
        { age: "2-3 yosh", percentage: 20, color: "#722ed1" },
        { age: "3-4 yosh", percentage: 30, color: "#eb2f96" },
        { age: "4-5 yosh", percentage: 10, color: "#fa8c16" },
        { age: "5-6 yosh", percentage: 20, color: "#fadb14" },
        { age: "6-7 yosh", percentage: 10, color: "#a0d911" },
    ];

    // CSS bilan yaratilgan aylana diagramma
    const CircleChart = ({ data }: any) => {
        let cumulativePercent = 0;

        return (
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                        "conic-gradient(" +
                        data
                            .map((item: any) => {
                                const segment = `${
                                    item.color
                                } ${cumulativePercent}% ${
                                    cumulativePercent + item.percentage
                                }%`;
                                cumulativePercent += item.percentage;
                                return segment;
                            })
                            .join(", ") +
                        ")",
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50%",
                        height: "50%",
                        backgroundColor: "white",
                        borderRadius: "50%",
                    }}
                ></div>
            </div>
        );
    };

    return (
        <Card
            style={{
                padding: "5px 58px 0 40px",
                width: "100%",
                backgroundColor: "var(--oq-rang-1)",
                border: 0,
                borderRadius: 0,
            }}
        >
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <CircleChart data={ageData} />
                </Col>
                <Col xs={24} md={12}>
                    <List
                        header={
                            <h3 style={{ textAlign: "center" }}>
                                Yosh guruhlari tafsilotlari
                            </h3>
                        }
                        dataSource={ageData}
                        renderItem={(item) => (
                            <List.Item>
                                <div style={{ width: "100%" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "10px",
                                                height: "10px",
                                                backgroundColor: `${item.color}`,
                                                borderRadius: "10px",
                                            }}
                                        ></div>
                                        <span>{item.age}</span>
                                        <span>{item.percentage}%</span>
                                    </div>
                                    {/* <Progress
                                        percent={item.percentage}
                                        strokeColor={item.color}
                                        showInfo={false}
                                        strokeWidth={10}
                                    /> */}
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default ChildrenAgeStatistics;
