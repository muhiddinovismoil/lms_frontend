import { ConfigProvider } from "antd";
import React from "react";

const AntProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3aada8",
          colorInfo: "#3aada8",
          colorSuccess: "#52c41a",
          colorError: "#ff5f5f",
          colorTextBase: "#1c274c",
          colorBgContainer: "#f9f9f9",
          colorBorder: "#ddd",
        },
        components: {
          Button: {
            colorPrimary: "#c3e1ff",
          },
          Input: {
            colorBgContainer: "#f9f9f9",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntProvider;
