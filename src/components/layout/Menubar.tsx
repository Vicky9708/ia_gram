//logic
import { logout } from "../../modules/login/login.module";
//store
import { useLoginStore } from "../../store/login.store";
//libraries
import {
	LogoutOutlined,
	UserOutlined,
	HeartFilled,
	HeartOutlined,
} from "@ant-design/icons";
import { googleLogout } from "@react-oauth/google";
import { useUploadStore } from "../../store/upload.store";

export const Menubar = (props: any) => {
	const user = useLoginStore((state) => state.userData);
	const { showFavs, setShowFavs } = useUploadStore((state) => ({
		showFavs: state.showFavs,
		setShowFavs: state.setShowFavs,
	}));
	const logoutHandler = () => {
		user.photo === "" && googleLogout();
		logout();
	};
	return (
		<>
			{props.auth && (
				<div className="headbar">
					<div className="flex">
						<div className="flex">
							{user.photo !== "" ? (
								<img className="headerbar-photo" src={user.photo} />
							) : (
								<UserOutlined
									className="headerbar-photo"
									style={{ fontSize: "85px" }}
									color="white"
								/>
							)}
						</div>
						<div className="headbar-container-info">
							<p className="headbarr-name">
								<b>{user.name}</b>
							</p>
							<p className="headbar-mail">{user.mail}</p>
							<p className="headbar-mobilePhone">{user.mobilePhone}</p>
						</div>
					</div>

					<div className="headbar-container-icon-exit">
						{showFavs ? (
							<HeartFilled
								onClick={() => setShowFavs(false)}
								title="Ver todos"
								className="header-icon-fav"
							/>
						) : (
							<HeartOutlined
								title="Ver favoritos"
								className="header-icon-fav"
								onClick={() => setShowFavs(true)}
							/>
						)}

						<LogoutOutlined
							title="Cerrar sesión"
							className="headbar-icon-exit"
							onClick={logoutHandler}
						/>
					</div>
				</div>
			)}
		</>
	);
};
