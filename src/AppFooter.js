import React, { Component } from 'react';
import { ReactComponent as JennaLogo } from './svg/jenna_logo_small.svg';

class AppFooter extends Component {
	render () {
		return (
			<div className="app-footer">
				<div className="footer-container">
					<div className="footer-item terms">
						<a href="javascript:void(0)">Terms/</a>
						<a href="javascript:void(0)">Conditions</a>
					</div>
					<div className="footer-item policy">
						<a href="javascript:void(0)">Privacy Policy</a>
					</div>
					<div className="footer-item jenna-logo">
						<span className="jenna-logo__text">Powered by</span><JennaLogo/>
					</div>
				</div>
			</div>
		);
	}
}

export default AppFooter;