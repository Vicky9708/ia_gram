//Components
import { ContainerCardsPhotos } from "../components/feed/ContainerCardsPhotos";
//logic
import { routerLink } from "../modules/utils/utils.module";
import { routes } from "../routes/routes.routes";
//store
import { useUploadStore } from "../store/upload.store";
//libraries
import { FloatButton } from "antd";
import { PlusOutlined, FrownOutlined } from "@ant-design/icons";
import { useLoginStore } from "../store/login.store";

export const Feed = () => {
	const { images,showFavs } = useUploadStore((state) => ({ images: state.images,showFavs:state.showFavs }));
	const {userData}=useLoginStore(state=>({userData:state.userData}))
	const imagesOwns=images.filter((img:any)=>img.user===userData.mail)
	const imagesToShow=showFavs?imagesOwns.filter((img:any)=>img.fav):imagesOwns
	
	return (
		<div className="m-auto">
			<ContainerCardsPhotos cards={imagesToShow} />
			{imagesToShow.length === 0 && (
				<div>
					<FrownOutlined className="feed-icon-empty" />
					<p className="feed-text-empty">Nos has cargado una foto todavía</p>
				</div>
			)}
			<FloatButton
				icon={<PlusOutlined title="Cargar nueva foto" />}
				onClick={() => {
					routerLink(routes.UPLOAD);
				}}
				type="default"
			/>
		</div>
	);
};
