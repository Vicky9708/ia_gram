import axios, { AxiosInstance } from "axios";
import { ENDPOINT } from "./environment.config";
const { CancelToken } = axios;
const { source } = CancelToken;
/**
 * Config
 */
const http: AxiosInstance = axios.create({
	baseURL: ENDPOINT,
	headers: {
		"Content-Type": "application/json; charset=UTF-8",
		"Access-Control-Allow-Origin": "*",
		Accept: "application/json",
	},
	cancelToken: source().token,
});
/**
 * Method that handle network errors
 * @param reject 
 */
const handle_error = (reject: any) => {
	const errorStatus = reject.response.status;
	switch (errorStatus) {
		case 400:
		case 401:
		case 403:
		case 404:
		case 500:
		default:
			alert("Error");
	}
};
/**
 * Method that intercept service's answer, if there is a error, it calls the handler
 */
http.interceptors.response.use(
	(response) => {        
		return response.data;
	},
	async (error) => {
		handle_error(error);
		return Promise.reject(error);
	}
);
/**
 * Método de Http para postear información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const post = async <T>({
	url,
	payload,
}: ISettingsService): Promise<T> => {
	return await http.post(ENDPOINT+ url, payload);
};
/**
 * Método de Http para actualizar información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const put = async <T>({
	url,
	payload,
}: ISettingsService): Promise<T> => {
	return await http.put(ENDPOINT + url, payload);
};
/**
 * Método de Http para obtener información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const get = async <T>({
	url,
}: ISettingsService): Promise<T> => {
	return await http.get(ENDPOINT+url);
};

/** Axios interface. */
interface ISettingsService {
	/** Api. */
	url: string;
	/** Service body. */
	payload?: any;
	/** Additional config */
	options?:any

}
export { http, post, put, get };
