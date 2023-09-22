import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID_GOOGLE } from "./config/environment.config";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/style/main.style.css"

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<GoogleOAuthProvider clientId={CLIENT_ID_GOOGLE}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GoogleOAuthProvider>
);
