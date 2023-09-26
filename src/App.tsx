import "./App.css";
import { Menubar } from "./components/layout/Menubar";
import { RoutesMain } from "./routes/main.routes";
import { useLoginStore } from "./store/login.store";
const App = () => {
	const auth = useLoginStore((state:any) => state.authorized);
	return (
		<div style={{background:'#EEF2F6'}}>
			<Menubar auth={auth} />
			<div className="flex h-100vh scrollbar-primary">
			<RoutesMain auth={auth} />
			</div>
			
		</div>
	);
};
export default App;
