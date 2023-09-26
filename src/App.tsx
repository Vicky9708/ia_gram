import "./App.css";
import { Menubar } from "./components/layout/Menubar";
import { RoutesMain } from "./routes/main.routes";
import { routes } from "./routes/routes.routes";
import { useLoginStore } from "./store/login.store";
const App = () => {
	const auth = useLoginStore((state:any) => state.authorized);
	return (
		<div className="background-app">
			<Menubar auth={auth} />
			<div className={`flex scrollbar-primary ${auth?'h-100vh-inside':'h-100vh-outside'}`}>
			<RoutesMain auth={auth} />
			</div>
			
		</div>
	);
};
export default App;
