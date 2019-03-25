import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Profile from './Profile';
import ChatWindow from './ChatWindow';
import Input from './Input';
import io from "socket.io-client";

const messages = []

class App extends Component {
 
 constructor() {
    super()
    this.state = {
       messages
    }
    this.socket = io('localhost:8080');

    const addMessage = data => {
      console.log(data);
      let messages = [...this.state.messages];
      messages.push({ data });
      this.setState({ messages });
      console.log(this.state.messages);
    };

    this.socket.on('bot_message',function(data){
      addMessage(data);
    });
      
    this.socket.on('quick_reply', function(data){
      console.log('got answer from server', data)
      addMessage(data);
    });
  }

  handleChange() {
    let element = document.querySelector("#textInput")
    let messages = [...this.state.messages];
    messages.push(
      { 
        data: element.value,
        isUser: true
     });
    this.setState({ messages });
    this.socket.emit('send_message', { data: element.value });
    element.value = ''
  }

  pressed(event){
    if(event.keyCode === 13){
      let button = document.querySelector("#submitButton")
        button.click()
    }
  }

  render() {

    return (
      <div className="App" onKeyDown={this.pressed}
        tabIndex="0">
        <div className="profile-container">
          <Profile/>
        </div>
      	<div className="chat-container">
          <AppHeader/>
	        <ChatWindow 
            messages={this.state.messages}/>
			    <Input 
            handle={this.handleChange.bind(this)}
            />
          <AppFooter />
      	</div>
        <div className="bottom-shadow"></div>
      </div>
    );
  }
}

export default App;
