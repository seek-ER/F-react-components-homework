import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: {},
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      message: {
        text: event.target.value,
        role: 'CUSTOMER',
        tags: ['DEFAULT'],
      },
    });
  };

  handleSend = () => {
    this.props.onClickSend(this.state.message);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} />
        <button type="button" onClick={this.handleSend}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
