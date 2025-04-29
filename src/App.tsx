import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { Suspense, useEffect } from "react";
import { ChildrenT, RouteT } from "./types/interface";
import { GetCookie } from "./config/cookie";
import { Spin } from "antd";

const renderRoutes = (routes: (RouteT | ChildrenT)[]) => {
    return routes.map((route, index) => {
        if (route?.index) {
            return <Route key={index} index element={route.element} />;
        }

        return (
            <Route key={index} path={route.path} element={route.element}>
                {route.children && renderRoutes(route.children)}
            </Route>
        );
    });
};

const App = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = GetCookie("accessToken");
        const refreshToken = GetCookie("refreshToken");
        const user = GetCookie("user");
        if (!accessToken && !refreshToken && !user) {
            navigate("/login");
        }
    }, []);
    return (
        <Suspense
            fallback={
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
            }
        >
            <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
    );
};

export default App;
