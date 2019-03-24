import React, { Component } from 'react';
import './ChatWindow.scss';
import { ReactComponent as JennaLogo } from './jenna_logo_small.svg';

class ChatWindow extends Component {
	render () {
		return (
			<div className="chat-window">
			{this.props.bot_messages.map((message,index) => {
        return (
        	<div key={index} className="bot-window">
            <div className="icon-container"></div>
          	<div className="text-container">
            	{message.text}
          	</div>
          </div>
        )
      })}
			{this.props.user_messages.map((message,index) => {
        return (
        	<div key={index} className="user-window">
          	<div className="text-container">
            	{message.text}
          	</div>
            <div className="icon-container"><JennaLogo className="icon"/></div>
          </div>
        )
      })}
      </div>
		)
	}
}

export default ChatWindow;