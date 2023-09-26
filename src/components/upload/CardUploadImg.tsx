import { Button, Card, Input } from "antd";
import { UploadImg } from "./UploadImg";
import { saveImgs } from "../../modules/upload/upload.module";
import { useUploadStore } from "../../store/upload.store";
import { routerLink } from "../../modules/utils/utils.module";
import { routes } from "../../routes/routes.routes";

export const CardUploadImg = () => {
	const { imageData, setImageData } = useUploadStore((state) => ({
		imageData: state.imageData,
		setImageData: state.setImageData,
	}));
	return (
		<>
			<Card className="upload-card">
				<UploadImg />
				<div className="flex m-8">
					<div className="m-auto">
						<Input
							size="large"
							className="m-8 w-input-title"
							placeholder="Ingresa un título para la imagen"
							value={imageData?.title}
							onInput={(event:any)=>setImageData({...imageData,title:event.target.value})}
						/>
						<div className="flex">
						<Button size="large" className="m-8"  type="primary" onClick={saveImgs} block>
							Publicar
						</Button>
						<Button size="large" className="m-8" type="default" onClick={()=>routerLink(routes.FEED)} block>
							Cancelar
						</Button>
						</div>

					</div>
				</div>
			</Card>
		</>
	);
};
