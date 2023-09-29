//interface
import { ICardPhoto } from "../../model/feed.model";
//logic
import {
	drawSquare,
	deleteImgFeed,
	deleteFavFeed,
	addFavFeed,
} from "../../modules/feed/feed.module";
//libraries
import { useEffect } from "react";
import {
	DeleteOutlined,
	HeartOutlined,
	PercentageOutlined,
	HeartFilled,
} from "@ant-design/icons";

export const CardPhoto = (props: ICardPhoto) => {
	useEffect(() => {
		drawSquare(props.src, props.index, props.ia, false, "load");
	}, [props.title]);

	return (
		<>
			<div className="feed-container-img">
				<div className="feed-container-icons-actions">
					<DeleteOutlined
						title="Eliminar"
						className="feed-icon-delete"
						onClick={() => deleteImgFeed(props.title)}
					/>
					{props.fav ? (
						<HeartFilled
							title="Eliminar de favoritos"
							className="feed-icon-fav"
							onClick={() => deleteFavFeed(props.title)}
						/>
					) : (
						<HeartOutlined
							title="Agregar a favoritos"
							className="feed-icon-fav"
							onClick={() => addFavFeed(props.title)}
						/>
					)}

					<PercentageOutlined
						title="Mostrar porcentaje que ocupa en pantalla"
						className="feed-icon-percentage"
						onClick={() =>
							drawSquare(
								props.src,
								props.index,
								props.ia,
								props.showPercentage,
								"icon"
							)
						}
					/>
				</div>

				<img className="hidden" src={props.src} />
				<canvas className="border-radius feed-img" id={`canva${props.index}`} />
				<div className="feed-container-title-img">
					<div className="feed-container-title-text">
						<p>{props.title}</p>
					</div>
				</div>
			</div>
		</>
	);
};
