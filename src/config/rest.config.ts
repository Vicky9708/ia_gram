import axios from "axios";
import { ENDPOINT } from "./environment.config";
/**
 * Method that handle network errors
 * @param reject 
 */
const handle_error = (reject: any) => {
	const errorStatus = reject?.response?.status;
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
axios.interceptors.response.use(
	(response) => {        
		return response.data;
	},
	async (error) => {
		handle_error(error);
		return Promise.reject(error);
	}
);
/**
 * Método de axios para postear información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const post = async <T>({
	url,
	payload,
	base=true
}: ISettingsService): Promise<T> => {
	return await axios.post(base?ENDPOINT+url:url, payload);
};
/**
 * Método de axios para actualizar información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const put = async <T>({
	url,
	payload,
	base=true
}: ISettingsService): Promise<T> => {
	return await axios.put(base?ENDPOINT+url:url,payload);
};
/**
 * Método de axios para obtener información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const get = async <T>({
	url,
	base=true,
	options
	}: ISettingsService): Promise<T> => {
	return await axios.get(base?ENDPOINT+url:url,options);
};

/** Axios interface. */
interface ISettingsService {
	/** Api. */
	url: string;
	/** Service body. */
	payload?: any;
	/** Additional config */
	options?:any;
	/**If we need url base */
	base?:boolean,

}
export { axios, post, put, get };
