import { ICardPhoto } from "../../model/feed.model";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteImgFeed } from "../../modules/upload/upload.module";
import { useEffect } from "react";

export const CardPhoto = (props: ICardPhoto) => {
	const drawSquare = () => {
		var canvas: any = document.getElementById(`canva${props.index}`);
		var ctx = canvas.getContext("2d");
		const predictions = props.ia.predictions.filter(
			(prediction: any) => prediction.tagName === "Face"
		);
		console.log(predictions);
		

		const img = new Image();
		img.src = props.src;
		canvas.width = img.width;
		canvas.height = img.height;
		img.onload = function () {
			ctx.drawImage(img, 0, 0);
			ctx.strokeStyle = "chartreuse";
			predictions.forEach((prediction: any) => {
				console.log(prediction.boundingBox.left * 600,
					prediction.boundingBox.top * 300,
					prediction.boundingBox.width * 500,
					prediction.boundingBox.height * 250,img.width,img.height);
				
					ctx.strokeRect(
						prediction.boundingBox.left * 600,
						prediction.boundingBox.top * 300,
						prediction.boundingBox.width * 500,
						prediction.boundingBox.height * 250
					);
			});
		};
	};
	useEffect(() => {
		drawSquare();
	}, []);

	return (
		<>
			<div
				style={{
					borderRadius: "20px",
					textAlign: "center",
					paddingTop: "10px",
					marginBottom: "-50px",
					position: "relative",
				}}
			>
				<DeleteOutlined
					style={{
						fontSize: "30px",
						color: "pink",
						position: "absolute",
						right: "20px",
						top: "20px",
					}}
					onClick={() => deleteImgFeed(props.title)}
				/>
				<img className="hidden" src={props.src}/>
				<canvas style={{ borderRadius: "20px" }} id={`canva${props.index}`} />
				<div
					style={{
						display: "flex",
						top: "-100px",
						position: "relative",
						zIndex: "1",
					}}
				>
					<div
						style={{
							background: "#808080d1",
							margin: "auto",
							borderRadius: "5px",
							color: "white",
							width: "400px",
						}}
					>
						<p>{props.title}</p>
					</div>
				</div>
			</div>
		</>
	);
};
