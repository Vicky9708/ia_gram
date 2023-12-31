import { get } from "../../config/rest.config";

const getProfileUserGoogleService = (token:string): Promise<{}> =>
	get<{}>({
		url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
		base:false,
		options:{
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json'
			}
		}
	}).then((resp) => resp);

export { getProfileUserGoogleService };
