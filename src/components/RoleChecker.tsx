import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { UserRole } from "../types/enum";

const RoleChecker = ({ roles }: { roles: string[] }) => {
    const { user, token } = useAuthStore();

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (!roles.includes(user.role ?? "")) {
        if (UserRole.ADMIN === user.role) {
            return <Navigate to="/admin" replace />;
        } else if (UserRole.TEACHER === user.role) {
            return <Navigate to="/teacher" replace />;
        }
    }

    return <Outlet />;
};

export default RoleChecker;
