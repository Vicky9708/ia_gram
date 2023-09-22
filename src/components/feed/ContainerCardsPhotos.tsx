import { CardPhoto } from "./CardPhoto";

export const ContainerCardsPhotos = (props: any) => {
	return (
		<>
			{props.cards.map((card: any, index: number) => {
				return (
					<CardPhoto
						key={index}
						photo={card.photo}
						title={card.title}
						description={card.description}
					/>
				);
			})}
		</>
	);
};
