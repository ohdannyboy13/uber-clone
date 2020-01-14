import React from "react";
import { Link } from "react-router-dom";
import { GetCurrentUser_GetCurrentUser_user } from "../../types/api";

import * as S from "./MenuStyle";

interface IProps {
	data?: any;
	toggleDrivingFn: any;
	logout: any;
}

const MenuPresenter: React.FC<IProps> = ({
	data: { GetCurrentUser: { user = null } = {} } = {},
	toggleDrivingFn,
	logout
}) => {
	return (
		<S.Container>
			{user && user.fullName && (
				<React.Fragment>
					<S.Header>
						<S.Grid>
							<Link to={"/edit-account"}>
								<S.Image
									src={
										user.profilePhoto ||
										"https://lh3.googleusercontent.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAUg/8T5nFuIdnHE/photo.jpg"
									}
								/>
							</Link>
							<S.Text>
								<S.Name>{user.fullName}</S.Name>
								<S.Rating>4.5</S.Rating>
							</S.Text>
						</S.Grid>
					</S.Header>
					<S.LinkExtend to="/trips">Your Trips</S.LinkExtend>
					<S.LinkExtend to="/settings">Settings</S.LinkExtend>
					<S.ToggleDriving
						onClick={toggleDrivingFn}
						isDriving={user.isDriving}
					>
						{user.isDriving ? "Stop driving" : "Start driving"}
					</S.ToggleDriving>
					<S.ButtonExtend value={"SIGN OUT"} onClick={logout} />
				</React.Fragment>
			)}
		</S.Container>
	);
};

export default MenuPresenter;
