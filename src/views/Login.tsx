import { getApi } from "../modules/login/login.module";

export const Login = () => {

	return (
		<>
			Hola Mundo
			<button onClick={()=>{getApi()}} >Hola</button>
		</>
	);
};
