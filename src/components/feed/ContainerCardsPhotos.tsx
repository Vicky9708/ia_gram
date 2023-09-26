//Component
import { CardPhoto } from "./CardPhoto";

export const ContainerCardsPhotos = (props: any) => {
	return (
		<>
			{props.cards.map((card: any, index: number) => {
				return (
					<CardPhoto
						key={index}
						title={card.title}
						src={card.src}
						file={card.file}
						ia={card.ia}
						index={index}
						fav={card.fav}
						showPercentage={card.showPercentage}
					/>
				);
			})}
		</>
	);
};
