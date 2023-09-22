import { Routes, Route } from "react-router-dom";
//Routes
import { RoutesPublic } from "../routes/public.routes";
import  {RoutesPrivate}  from "../routes/private.routes";
export const RoutesMain = (props: any) => {
	return (
		<Routes>
			<Route
				path="/*"
				element={
					props.auth ? (
							<RoutesPrivate />
					) : (
						<RoutesPublic />
					)
				}
			/>
		</Routes>
	);
};
