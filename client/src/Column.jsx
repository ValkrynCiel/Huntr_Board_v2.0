import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Job from './Job';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border: rgb(140, 114, 189) solid 1px;
`
const ColumnHeader = styled.div`
  width: 305px;
  height: 100px;
  background-color:rgb(215, 203, 238); 
`

const DropArea = styled.div`
  flex: 1;
  width: 305px;
  background-color:rgb(215, 203, 238); 
  user-select: none;
  overflow-Y: scroll;
  color: rgb(85, 3, 85);
  flex-direction: column;
`

class Column extends Component {
  render () {
    return (
      <Container>
        <ColumnHeader>
          {this.props.column.name}
        </ColumnHeader>
        <Droppable droppableId={this.props.id}>
          {(provided) => (
            <DropArea
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
              {this.props.jobs.map((job, index) => (
                <Job key={job.id} job={job} index={index} />
              ))}
              {provided.placeholder}
            </DropArea>
          )}
        </Droppable>
      </Container>
    )
  }
}

export default Column;