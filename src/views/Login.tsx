//Components
import { LoginGoogle } from "../components/login/LoginGoogle";
import { LoginMicrosoft } from "../components/login/LoginMicrosoft";
//Libraries
import { Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Login = () => {
	return (
		<div className="m-auto">
			<div>
				<Card className="w-500">
					<div className="login-container-avatar">
					<Avatar size={150} className="login-avatar" icon={<UserOutlined />} />
					</div>				
					<LoginGoogle />
					<LoginMicrosoft />
				</Card>
			</div>
		</div>
	);
};
