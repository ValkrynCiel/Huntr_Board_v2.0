import React, {Component} from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.15)"
`
const ModalDisplay = styled.div`
  position: "absolute",
  background: "#fff",
  z-index: 1,
  top: 25,
  left: "10%",
  right: "10%",
  padding: 15,
  border: "2px solid #444"
`
class Modal extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }


  back(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {
    return (
      <ModalBackground onClick={this.back}>
        <ModalDisplay>
          <h1>{this.props.match.params.id}</h1>
          <button type="button" onClick={this.back}>
            Close
          </button>
        </ModalDisplay>
      </ModalBackground>
    );
  }
  
}

export default Modal;