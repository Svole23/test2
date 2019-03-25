import React, { Component } from 'react';
import { ReactComponent as EditImage } from './svg/edit.svg';
import { ReactComponent as ProfileImage } from './svg/profile.svg';

class Profile extends Component {
	render () {
		return (
			<div className="profile">
				<button className="btn edit-button">
					<EditImage/>
				</button>
				<button className="btn profile-button">
					<ProfileImage/>
				</button>
			</div>
		);
	}
}

export default Profile;