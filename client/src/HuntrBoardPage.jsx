import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './Column';

class HuntrBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colOrder: [2,1],
      columns: {
        1: {jobOrder: ['b', 'a'], id: '1'},
        2: {jobOrder: ['c'], id: '2'}
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
      <DragDropContext>
        {this.state.colOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const jobs = column.jobOrder.map(jobId => this.state.jobs[jobId]);
          return <Column key={columnId} column={column} jobs={jobs} />;
        })}
      </DragDropContext>
    );
  }
}

export default HuntrBoardPage;