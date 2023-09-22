import { routes } from "../../routes/routes.routes";
import { getProfileUserGoogleService } from "../../services/login/login.service";
import { useLoginStore } from "../../store/login.store";
import { routerLink } from "../utils/utils.module";
const loginGoogle = (token: any) => {
	getProfileUserGoogleService(token).then((response:any) => {
		useLoginStore.getState().setAuthorized(true)
		useLoginStore.getState().setUserData({
			name:response.name,
			mail:response.email,
			mobilePhone:'',
			photo:response.picture
		});
		routerLink(routes.FEED)
	});
};
const loginMicrosoft = (err: any, response: any, microsoftInstance: any) => {
	if (!err) {
		useLoginStore.getState().setAuthorized(true)
		useLoginStore.getState().setMicrosoftInstance(microsoftInstance);
		useLoginStore.getState().setUserData({
			name:response.displayName,
			mail:response.mail,
			mobilePhone:response.mobilePhone,
			photo:''
		});
		routerLink(routes.FEED)
	}
};
const logout = () => {
	if(useLoginStore.getState().userData.photo===""){
		useLoginStore.getState().microsoftInstance.logout();
	}
	useLoginStore.getState().setAuthorized(false)
	useLoginStore.getState().setUserData(null);
};
export { loginGoogle, loginMicrosoft,logout };
