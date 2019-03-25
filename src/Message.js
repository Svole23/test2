import React, { Component } from 'react';
import { ReactComponent as JennaLogo } from './svg/jenna_logo_small.svg';

class Message extends Component {
	render () {
    	if(this.props.isUser) {
    		return (
    			<div className="message user">
				    <div className="icon-container">
                        <JennaLogo className="icon"/>
                    </div>
				    <div className="text-container">{this.props.data}</div>	
    		  </div>
    		)
    	}
    	else {
    		return ( 
    			<div className="message bot">
				  	<div className="icon-container">
                        <img className="icon" src={require('./svg/logo-01.png')} alt="spartan-chat"/>
                    </div>
				  	<div className="text-container">{this.props.data}</div>	
    			</div>
    		)
    	}
		
	}
}

export default Message;