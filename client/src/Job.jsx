import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  width: 275px;
  height: 90px;
  border-radius: 4px;
  margin: 0 15px 15px 15px;
  display: flex; 
  color: white;
  position: relative;
  background-color: red;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0 5px 10px 3px rgba(0,0,0,0.3);
    transition: opacity 0.15s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`

class Job extends Component {
  render() {
    return (
        <Draggable 
          draggableId={this.props.job.id} 
          index={this.props.index}
        >
          {provided => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {this.props.job.name}
            </Container>
          )}
        </Draggable>
    )
  }
}

export default Job;