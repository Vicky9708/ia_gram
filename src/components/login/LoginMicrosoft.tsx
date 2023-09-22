import MicrosoftLogin from "react-microsoft-login";
import { CLIENT_ID_MICROSOFT } from "../../config/environment.config";
import {
	loginMicrosoft,
} from "../../modules/login/login.module";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

export const LoginMicrosoft = () => {
	return (
		<>
			<MicrosoftLogin
				clientId={CLIENT_ID_MICROSOFT}
				withUserData={true}
				authCallback={loginMicrosoft}
				children={
					<Button size="large" icon={<GoogleOutlined />} block >
						Incia sesión con Microsoft
					</Button>
				}
			/>
		</>
	);
};
