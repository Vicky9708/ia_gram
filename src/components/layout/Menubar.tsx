import { logout } from "../../modules/login/login.module";
import { useLoginStore } from "../../store/login.store";
import { LogoutOutlined,UserOutlined } from "@ant-design/icons";
import { googleLogout } from "@react-oauth/google";

export const Menubar = (props: any) => {
	const user = useLoginStore((state) => state.userData);
    const logoutHandler=()=>{
       user.photo===""&& googleLogout();        
        logout()
    }
	return (
		<>
			{props.auth && (
				<div className="headbar">
                    <div style={{display:'flex'}}>
					<div style={{display:'flex'}}>
                        {user.photo!==""?
                        <img className="headerbar-photo" src={user.photo} />
                        :
                        <UserOutlined className="headerbar-photo" style={{fontSize:'85px'}} color="white" />
                        }
						
					</div>
					<div style={{marginLeft:'50px'}}>
						<p style={{fontSize:'larger'}}><b>{user.name}</b></p>
                        <p style={{marginTop:'-7px'}}>{user.mail}</p>
                        <p style={{marginTop:'-15px'}}>{user.mobilePhone}</p>
					</div>
                    </div>

					<div style={{display:'flex',marginRight:'20px'}}>
						<LogoutOutlined style={{fontSize:'30px',margin:'auto'}} onClick={logoutHandler} />
					</div>
				</div>
			)}
		</>
	);
};
