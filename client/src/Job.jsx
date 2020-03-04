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
  box-shadow: 0px 4px 8px rgba(24,0,69,0.3);
  position: relative;
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