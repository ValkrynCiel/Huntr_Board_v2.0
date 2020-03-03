import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

class Job extends Component {
  render() {
    return (
      <Draggable 
        draggableId={this.props.job.id} 
        index={this.props.index}
      >
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.job.name}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Job;