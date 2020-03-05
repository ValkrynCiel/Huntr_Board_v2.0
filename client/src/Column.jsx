import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Job from './Job';

const Container = styled.div`
  height: calc(100vh - 125px);
  width: 305px;
  background-color:rgb(215, 203, 238); 
  user-select: none;
  overflow-Y: scroll;
  border: rgb(140, 114, 189) solid 1px;
  border-top: 0px;
  color: rgb(85, 3, 85);
  flex-direction: column;
  margin: 10px;
`

class Column extends Component {
  render () {
    return (
        <Droppable droppableId={this.props.id}>
        
          {(provided) => (
            <Container 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
              <>
              {this.props.column.name}
              {this.props.jobs.map((job, index) => (
                <Job key={job.id} job={job} index={index} />
              ))}
              {provided.placeholder}
              </>
            </Container>
          )}
        </Droppable>
    )
  }
}

export default Column;