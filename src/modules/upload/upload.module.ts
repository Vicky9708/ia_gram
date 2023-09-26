import { useUploadStore } from "../../store/upload.store";
import { postIAService } from "../../services/upload/upload.service";
import { useLoginStore } from "../../store/login.store";
import { routerLink } from "../utils/utils.module";
import { routes } from "../../routes/routes.routes";
import { message } from 'antd';


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
const saveImgs = () => {
	const { imageData, images, setImages } = useUploadStore.getState();
	postIAService(imageData.file)
	.then((response) => {
		const dataToSave = {
			user: useLoginStore.getState().userData.mail,
			src: imageData.src,
			title: imageData.title,
			ia:response
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

const deleteImgFeed = (imgTitle: string) => {
	const { images, setImages } = useUploadStore.getState();
	let newArrayImgs: any = [...images];
	newArrayImgs = newArrayImgs.filter((img: any) => img.title !== imgTitle);
	setImages(newArrayImgs);
};

export { deleteImg, onChangeInputFile, saveImgs, deleteImgFeed };
