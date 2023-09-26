//services
import { postIAService } from "../../services/upload/upload.service";
//store
import { useLoginStore } from "../../store/login.store";
import { useUploadStore } from "../../store/upload.store";
//logic
import { routerLink } from "../utils/utils.module";
import { routes } from "../../routes/routes.routes";
//library
import { message } from 'antd';
/**
 * Method thats gets file uploaded
 * @param event thats contains file
 */
const onChangeInputFile = (event: any) => {
	const { imageData, setImageData, setImageLoaded } = useUploadStore.getState();
	const archivo: any = event.target.files[0];
	const readerBlob = new FileReader();
	const readerSrc = new FileReader();

	readerBlob.onload = function (eBlob: any) {
		const blob = new Blob([new Uint8Array(eBlob.target.result)], {
			type: archivo.type,
		});
		readerSrc.onload = function (eSrc: any) {
			setImageData({ src: eSrc.target.result,file: blob, nameFile: archivo.name,title:imageData.title });
		};
		readerSrc.readAsDataURL(archivo);
	};
	readerBlob.readAsArrayBuffer(archivo);

	setImageLoaded(true);
};
/**
 * Mehos that deletes the img loaded in fileInput
 */
const deleteImg = () => {
	const data = {
		...useUploadStore.getState().imageData,
		src: "",
		file: null,
		nameFile: "",
	};
	useUploadStore.getState().setImageLoaded(false);
	useUploadStore.getState().setImageData(data);
};
/**
 * Method that publishes the imgs and it searchs in the IA
 */
const saveImgs = () => {
	const { imageData, images, setImages } = useUploadStore.getState();
	postIAService(imageData.file)
	.then((response) => {
		const dataToSave = {
			user: useLoginStore.getState().userData.mail,
			src: imageData.src,
			title: imageData.title,
			ia:response,
			fav:false,
			showPercentage:false
		};
		const newArrayImgs: any = [...images];
		newArrayImgs.push(dataToSave);
		setImages(newArrayImgs);
		routerLink(routes.FEED);
	})
	.catch((err) => {
		message.error('Error al cargar la imagen')
	});	
};

export { deleteImg, onChangeInputFile, saveImgs };
