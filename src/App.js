import React, { Component } from 'react';
import './App.scss';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Profile from './Profile';
import ChatWindow from './ChatWindow';
import Input from './Input';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';


const socket = io('https://git.heroku.com/react-test-task-back.git', { origins: 'http://127.0.0.1:*'});
socket.on('connection', msg => {
  console.log(msg)
  debugger; 
});

const bot_messages = [
  {
    text: "who'll win?"
  },
  {
    text: "who'll do what?"
  }
]

const user_messages = []

class App extends Component {
 
 constructor() {
    super()
    this.state = {
       bot_messages: bot_messages,
       user_messages: user_messages
    }
  }
  
  handleChange() {
    let element = document.querySelector("#textInput")
    let newValue = {
      text : element.value
    }
    let user_messages = [...this.state.user_messages];
    user_messages.push({ text: element.value });
    this.setState({ user_messages });
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
            bot_messages={this.state.bot_messages} 
            user_messages={this.state.user_messages}/>
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
