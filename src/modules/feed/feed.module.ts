//store
import { useUploadStore } from "../../store/upload.store";
/**
 * Method thats deletes the img of feed
 * @param titleImg img to delete
 */
const deleteImgFeed = (titleImg: string) => {
	const { images, setImages } = useUploadStore.getState();
	let imagesStore: any = [...images];
	const newArrayImgs = imagesStore.filter((img: any) => img.title !== titleImg);
	setImages(newArrayImgs);
};
/**
 * Method thats adds the img to feed
 * @param titleImg img to add
 */
const addFavFeed = (titleImg: string) => {
	const { images, setImages } = useUploadStore.getState();
	const newArrayImgs: any = [...images];
	const imageFound = newArrayImgs.find((img: any) => img.title === titleImg);
	if (imageFound) {
		imageFound.fav = true;
	}
	setImages(newArrayImgs);
};
/**
 * Method thats deletes the img of favs
 * @param titleImg img to delete
 */
const deleteFavFeed = (titleImg: string) => {
	const { images, setImages } = useUploadStore.getState();
	const newArrayImgs: any = [...images];
	const imageFound = newArrayImgs.find((img: any) => img.title === titleImg);
	if (imageFound) {
		imageFound.fav = false;
	}
	setImages(newArrayImgs);
};
/**
 * Method thats adds the Rectangle for every face of img
 * @param src
 * @param index
 * @param ia
 * @param showPercentages
 * @param origin load|icon
 */
const drawSquare = (
	src: string,
	index: number,
	ia: any,
	showPercentages: boolean,
	origin: string
) => {
	let show = showPercentages;
	if (origin === "icon") {
		const { images, setImages } = useUploadStore.getState();
		const newArrayImgs: any = [...images];
		const imageFound = newArrayImgs.find((img: any) => img.src === src);
		if (imageFound) {
			imageFound.showPercentage = !showPercentages;
			show = !showPercentages;
		}
		setImages(newArrayImgs);
	}
	const canvas: any = document.getElementById(`canva${index}`);
	const ctx = canvas.getContext("2d");
	const img = new Image();

	const predictions = ia.predictions.filter(
		(prediction: any) => prediction.tagName === "Face"
	);

	img.src = src;
	canvas.width = img.width;
	canvas.height = img.height;

	img.onload = function () {
		ctx.drawImage(img, 0, 0);
		ctx.strokeStyle = "chartreuse";
		ctx.bac
		if (show) {
			ctx.font = "bold 15px serif";
			ctx.fillStyle = "chartreuse";
		}
		let totalFaces: number = 0;
		predictions.forEach((prediction: any) => {
				ctx.strokeRect(
					calcScale(prediction.boundingBox.left, img.width),
					calcScale(prediction.boundingBox.top, img.height),
					calcScale(prediction.boundingBox.width, img.width),
					calcScale(prediction.boundingBox.height, img.height)
				);

				if (show) {
					totalFaces =
						totalFaces +
						Number(
							calcPercentage(
								img.width,
								img.height,
								calcScale(prediction.boundingBox.width, img.width),
								calcScale(prediction.boundingBox.height, img.height)
							)
						);
					ctx.fillText(
						`${calcPercentage(
							img.width,
							img.height,
							calcScale(prediction.boundingBox.width, img.width),
							calcScale(prediction.boundingBox.height, img.height)
						)}%`,
						calcScale(prediction.boundingBox.left, img.width) + 10,
						calcScale(prediction.boundingBox.top, img.height) + 20
					);
				}
			
		});
		if (show) {
			ctx.fillText(`${totalFaces.toFixed(2)}%`, 10, 20);
		}
	};
};
/**
 * Method thats calculates the percentage of every face
 * @param widthImg
 * @param heightImg
 * @param widthRectangle
 * @param heightRectangle
 * @returns percentage
 */
const calcPercentage = (
	widthImg: number,
	heightImg: number,
	widthRectangle: number,
	heightRectangle: number
) => {
	const areaImg = widthImg * heightImg;
	const areaRectangle = widthRectangle * heightRectangle;
	const percentage = (areaRectangle * 100) / areaImg;
	return percentage.toFixed(2);
};
const calcScale = (valueToConvertPercentage: number, valueInPx: number) => {
	return (valueToConvertPercentage * 100 * valueInPx) / 100;
};
export { addFavFeed, deleteFavFeed, deleteImgFeed, drawSquare };
