//logic
import { loginMicrosoft } from "../../modules/login/login.module";
//libraries
import { Button } from "antd";
import { WindowsOutlined } from "@ant-design/icons";
import MicrosoftLogin from "react-microsoft-login";
import { CLIENT_ID_MICROSOFT } from "../../config/environment.config";

export const LoginMicrosoft = () => {
	return (
		<>
			<MicrosoftLogin
				clientId={CLIENT_ID_MICROSOFT}
				withUserData={true}
				authCallback={loginMicrosoft}
				children={
					<Button size="large" className="m-8 login-btn-text" icon={<WindowsOutlined />} block>
						Inicia sesión con Microsoft
					</Button>
				}
			/>
		</>
	);
};
