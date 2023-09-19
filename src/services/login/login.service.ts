import { get } from "../../config/rest.config";

export const getApiService = (): Promise<{}> =>
	get<{}>({
		url: '/products/1'
    }).then(resp => (resp));