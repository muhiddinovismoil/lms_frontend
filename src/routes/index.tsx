import { lazy } from "react";
import RoleChecker from "../components/RoleChecker";
import { RouteT } from "../types/interface";
import { UserRole } from "../types/enum";
import { MainLayout } from "../pages/admin/layout/admin-layout";
import { Students } from "../pages/students";
import Dashboard from "../pages/admin/dashboard";
import { AddStudentForm } from "../pages/students-new";
import { Teacher } from "../pages/teachers";
import { Groups } from "../pages/groups";
import { Courses } from "../pages/courses";
import { UpdateStudentForm } from "../pages/students-update";

const Login = lazy(() => import("../pages/auth/login"));
// const Dashboard = lazy(() => import("../pages/dashboard"));
export const routes: RouteT[] = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <RoleChecker roles={[UserRole.ADMIN]} />,
        children: [
            {
                path: "",
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: "students",
                        element: <Students />,
                    },
                    {
                        path: "students/add",
                        element: <AddStudentForm />,
                    },
                    {
                        path: "students/:id",
                        element: <UpdateStudentForm />,
                    },
                    {
                        path: "teachers",
                        element: <Teacher />,
                    },
                    {
                        path: "teachers/add",
                        element: <Teacher />,
                    },
                    {
                        path: "groups",
                        element: <Groups />,
                    },
                    {
                        path: "groups/add",
                        element: <Groups />,
                    },
                    {
                        path: "courses",
                        element: <Courses />,
                    },
                    {
                        path: "courses/add",
                        element: <Courses />,
                    },
                    {
                        path: "settings",
                        element: <div>Settings</div>,
                    },
                ],
            },
        ],
    },
    {
        path: "/teacher",
        element: <RoleChecker roles={[UserRole.TEACHER]} />,
        children: [
            {
                path: "",
                element: <MainLayout />,
            },
        ],
    },
];
