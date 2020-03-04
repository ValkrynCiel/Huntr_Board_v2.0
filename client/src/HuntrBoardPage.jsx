import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './Column';
import styled from 'styled-components';

const ListDisplay = styled.div`
  width: 100vw;
  overflow-x: scroll;
  white-space: nowrap;
`
const FlexContainer =  styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  padding: 10px;
`

class HuntrBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colOrder: [2,1,3,4,5,6],
      columns: {
        1: {jobOrder: ['b', 'a'], id: '1'},
        2: {jobOrder: ['c'], id: '2'},
        3: {jobOrder: [], id: '3'},
        4: {jobOrder: [], id: '4'},
        5: {jobOrder: [], id: '5'},
        6: {jobOrder: [], id: '6'}
      },
      jobs: {
        a: {name: 'google', id: 'a'},
        b: {name: 'yahoo', id: 'b'},
        c: {name: 'heb', id: 'c'}
      }
    }
  }
  render() {
    return (
      <ListDisplay>
        <FlexContainer>
          <DragDropContext>
            {this.state.colOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const jobs = column.jobOrder.map(jobId => this.state.jobs[jobId]);
              return <Column key={columnId} column={column} jobs={jobs} />;
            })}
          </DragDropContext>
        </FlexContainer>
      </ListDisplay>
    );
  }
}

export default HuntrBoardPage;