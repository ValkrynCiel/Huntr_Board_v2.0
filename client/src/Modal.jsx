import React, {Component} from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.25);
`
const ModalDisplay = styled.div`
  position: absolute;
  background: #fff;
  z-index: 100;
  top: 10%;
  left: 10%;
  right: 10%;
  padding: 15;
  border: 2px solid #444;
`
class Modal extends Component {
  constructor(props) {
    super(props);
    this.goToBoard = this.goToBoard.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }


  goToBoard(e) {
    this.props.history.push(`/new/board`);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <ModalBackground onClick={this.goToBoard}>
        <ModalDisplay onClick={this.stopPropagation}>
          <h1>{this.props.match.params.id}</h1>
          <button type="button" onClick={this.goToBoard}>
            Close
          </button>
        </ModalDisplay>
      </ModalBackground>
    );
  }
  
}

export default Modal;