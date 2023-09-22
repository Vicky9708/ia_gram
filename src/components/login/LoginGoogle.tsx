/**Import logic */
import { loginGoogle, logout } from "../../modules/login/login.module";
/**Import libraries */
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export const LoginGoogle = () => {

    /**
     * Method that gets the Google access token
     */
	const login = useGoogleLogin({
		onSuccess: (codeResponse) => {
			loginGoogle(codeResponse.access_token);
		},
		onError: (error) => console.log("Login Failed:", error),
	});
    /**
     * Method that closes the Google connection
     */
	const logOut = () => {
		googleLogout();
		logout();
	};
	return (
		<>
			<Button
				size="large"
				onClick={() => {
					login();
				}}
                block
				icon={<GoogleOutlined />}
			>
				Incia sesión con Google
			</Button>
		</>
	);
};
