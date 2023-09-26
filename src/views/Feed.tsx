import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ContainerCardsPhotos } from "../components/feed/ContainerCardsPhotos";
import { routerLink } from "../modules/utils/utils.module";
import { routes } from "../routes/routes.routes";
import { useUploadStore } from "../store/upload.store";
export const Feed = () => {
	const { images } = useUploadStore(state=>({images:state.images}));
	return (
		<div className="m-auto">
			<ContainerCardsPhotos cards={images} />
			<FloatButton
				icon={<PlusOutlined />}
				onClick={() => {
					routerLink(routes.UPLOAD);
				}}
				type="default"
				style={{ background: "pink" }}
			/>
		</div>
	);
};
