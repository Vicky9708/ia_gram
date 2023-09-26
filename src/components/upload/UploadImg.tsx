import { Image } from "antd";
import { shallow } from "zustand/shallow";
import {
	InboxOutlined,
	DeleteOutlined,
	PaperClipOutlined,
} from "@ant-design/icons";

import { deleteImg, onChangeInputFile } from "../../modules/upload/upload.module";
import { useUploadStore } from "../../store/upload.store";

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
					<div style={{ textAlign: "center" }} className="m-8">
						<Image
							style={{ borderRadius: "20px", display: "block" }}
							width={400}
							src={imageData?.src ?? ""}
						/>
						<DeleteOutlined
							onClick={deleteImg}
							style={{ fontSize: "20px", color: "pink" }}
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
					<input onChange={onChangeInputFile} type="file" />
				</label>
				</div>

			)}
		</>
	);
};
