import { Card } from "antd";
import { LoginGoogle } from "../components/login/LoginGoogle";
import { LoginMicrosoft } from "../components/login/LoginMicrosoft";
export const Login = () => {
	return (
		<div style={{ display: "flex",marginTop:'10%'}}>
			<div style={{ margin: "auto" }}>
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
