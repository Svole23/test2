import React, { Component } from 'react';
import Message from './Message'

class ChatWindow extends Component {
  render () {
    return (
      <div className="chat-window">
      {this.props.messages.map((message,index) => {
        return (
          <Message 
            key={index} 
            data={message.data} 
            isUser={message.isUser}/>
        )
      })}
      </div>
    )
  }
}

export default ChatWindow;