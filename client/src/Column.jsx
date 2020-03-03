import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Job from './Job';

const Container = styled.div`
  display: inline-block;
  width: 200px;
  height: 1000px;
  border: 1px solid red;
`

class Column extends Component {
  render () {
    return (
      <Container>
        <Droppable droppableId={this.props.column.id}>
        
          {(provided) => (
            <div 
              innerRef={provided.innerRef} 
              {...provided.droppableProps}
            >
              {this.props.jobs.map((job, index) => (
                <Job key={job.id} job={job} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    )
  }
}

export default Column;