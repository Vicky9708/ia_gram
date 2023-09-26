import { post } from "../../config/rest.config";

const postIAService = (binaryFile:any): Promise<{}> =>
	post<{}>({
		url: `https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c236acc4-7b76-41ba-b32e-582e5e980896/detect/iterations/challenge-frontend-appinit/image`.replaceAll(' ',''),
		base:false,
        payload:binaryFile,
		options:{
			headers: {
				'Accept': 'application/octet-stream',
                'Prediction-Key':'7e4a3bb513534ba9921d3f36b4cdd840',
				'Content-Type':'image/jpeg'
			},
			body:binaryFile
		}
	}).then((resp) => resp);
    export {postIAService}