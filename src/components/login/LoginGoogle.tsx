//logic
import { loginGoogle } from "../../modules/login/login.module";
// libraries
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { message } from 'antd';

export const LoginGoogle = () => {

    /**
     * Method that gets the Google access token
     */
	const login = useGoogleLogin({
		onSuccess: (codeResponse) => {
			loginGoogle(codeResponse.access_token);
		},
		onError: (error) =>{
			message.error('Hubo un error al acceder con Google')
		} ,
	});
	return (
		<>
			<Button
				size="large"
				className="m-8 login-btn-text"
				onClick={() => {
					login();
				}}
                block
				icon={<GoogleOutlined />}
			>
				Inicia sesión con Google
			</Button>
		</>
	);
};
