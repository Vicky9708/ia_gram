import { Card } from "antd";
import { LoginGoogle } from "../components/login/LoginGoogle";
import { LoginMicrosoft } from "../components/login/LoginMicrosoft";
export const Login = () => {
	return (
		<div className="m-auto">
			<div>
				<Card
					style={{ width: 500 }}					
				>
					<LoginGoogle />
					<LoginMicrosoft />
				</Card>
			</div>
		</div>
	);
};
