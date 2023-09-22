// Import router
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../views/Login";
import { routes } from "./routes.routes";
export const RoutesPublic = () => {
	return (
		<>
			<Routes>
				<Route path={routes.LOGIN} element={<Login />} />
				<Route path="*" element={<Navigate to={routes.LOGIN} />} />
			</Routes>
		</>
	);
};
