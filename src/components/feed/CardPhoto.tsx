import { ICardPhoto } from "../../model/feed.model";

export const CardPhoto = (props: ICardPhoto) => {
	return (
		<>
			<div
				style={{
					borderRadius: "20px",
					textAlign: "center",
					paddingTop: "10px",
					marginBottom: "-50px",
				}}
			>
				<img style={{ borderRadius: "20px" }} width={500} src={props.photo} />
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
							background: "#8080802e",
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
