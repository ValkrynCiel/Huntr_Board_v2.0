import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

const JobLink = styled(Link)`
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
    const { location, job: {id, name}, index } = this.props;
    return (
        <Draggable 
          draggableId={id} 
          index={index}
        >
          {provided => (
            <JobLink to={{
              pathname: `/job/${id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {name}
            </JobLink>
          )}
        </Draggable>
    )
  }
}

export default withRouter(Job);