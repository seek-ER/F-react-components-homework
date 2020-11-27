import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  setMessage = (message) => {
    let messages;
    messages = this.state.messages.concat(message);
    for (let i = 0; i < answersData.length; i += 1) {
      for (let j = 0; j < answersData[i].tags.length; j += 1) {
        if (message.text.indexOf(answersData[i].tags[j]) !== -1) {
          messages = messages.concat(answersData[i]);
          break;
        }
      }
    }
    this.setState({
      messages,
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onClickSend={this.setMessage} />
      </main>
    );
  }
}

export default Chat;
