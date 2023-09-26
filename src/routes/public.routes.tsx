//Libraries router
import { Routes, Route, Navigate } from "react-router-dom";
//logic
import { routes } from "./routes.routes";
//View
import { Login } from "../views/Login";
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
