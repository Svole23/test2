import React, { Component } from 'react';
import { ReactComponent as PlaneImage } from './svg/plane.svg';
import { ReactComponent as MenuImage } from './svg/menu.svg';

class Input extends Component {

	render () {
		return (
			<div className="input-container">
				<div className="input-container__inner">
					<button className="btn input-menu">
						<MenuImage/>
					</button>
						<input 
							id="textInput" 
							className="text-input" 
							label="Type answer here..." 
							type="text"/>
						<button 
							id="submitButton"
							onClick= {this.props.handle}
							className="btn input-button" 
							type="submit">
							<span className="button-text">Send</span> <PlaneImage/>
						</button>
					</div>
				</div>
			)
		}
	}

export default Input;