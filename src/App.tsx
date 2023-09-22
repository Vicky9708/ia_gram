import "./App.css";
import { Menubar } from "./components/layout/Menubar";
import { RoutesMain } from "./routes/main.routes";
import { useLoginStore } from "./store/login.store";
const App = () => {
	const auth = useLoginStore((state) => state.authorized);
	return (
		<>
			<Menubar auth={auth} />
			<RoutesMain auth={auth} />
		</>
	);
};
export default App;
