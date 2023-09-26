//logic
import {
	deleteImg,
	onChangeInputFile,
} from "../../modules/upload/upload.module";
//store
import { useUploadStore } from "../../store/upload.store";
//libraries
import { Image } from "antd";
import { shallow } from "zustand/shallow";
import {
	InboxOutlined,
	DeleteOutlined,
	PaperClipOutlined,
} from "@ant-design/icons";

export const UploadImg = () => {
	const { imageData, imageLoaded } = useUploadStore(
		(state) => ({
			imageData: state.imageData,
			imageLoaded: state.imageLoaded,
		}),
		shallow
	);
	return (
		<>
			{imageLoaded ? (
				<div>
					<div className="m-8 upload-center">
						<Image
							className="upload-preview"
							width={400}
							src={imageData?.src ?? ""}
						/>
						<DeleteOutlined
							onClick={deleteImg}
							className="upload-icon-delete"
						/>
						<p style={{ textAlign: "left" }}>
							<PaperClipOutlined />
							{imageData.nameFile}
						</p>
					</div>
				</div>
			) : (
				<div className="flex">
					<label className="upload-container-input-file">
						<InboxOutlined />
						<p className="ant-upload-text">
							Haz clic o arrastra en esta area para cargar tu foto
						</p>
						<input onChange={onChangeInputFile} accept=".jpg,.png,.jpeg" type="file" />
					</label>
				</div>
			)}
		</>
	);
};
