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
      colOrder: ['2','1','3','4','5','6'],
      columns: {
        1: {jobOrder: ['b', 'a'], name: 'applied'},
        2: {jobOrder: ['c'], name: 'phone screen'},
        3: {jobOrder: [], name: 'tech screen'},
        4: {jobOrder: [], name: 'onsite'},
        5: {jobOrder: [], name: 'job offer'},
        6: {jobOrder: [], name: 'rejected'}
      },
      jobs: {
        a: {name: 'google', id: 'a'},
        b: {name: 'yahoo', id: 'b'},
        c: {name: 'heb', id: 'c'}
      }
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd (result) {
    if (!result.destination) return;

    const { source, destination } = result;

    const dId = destination.droppableId;

    //dragging within column
    if (source.droppableId === destination.droppableId) {
      const newJobOrder = this._reorder(
        this._getJobOrder(dId),
        source.index,
        destination.index
      );
  
      this.setState(st => {
        let { [dId]: column, ...rest} = st.columns;
        let newCol = {...column, jobOrder: newJobOrder};
        return { columns: { [dId]: newCol, ...rest} };
      });
    } else {
      const sId = source.droppableId;
      const result = this._move(
        this._getJobOrder(sId),
        this._getJobOrder(dId),
        source,
        destination
    );
      this.setState(st => {
        const {[sId]: newSourceOrder, [dId]: newDestOrder} = result;
        let {[sId]: sourceCol, [dId]: destCol, ...rest} = st.columns;
        let newSourceCol = {...sourceCol, jobOrder: newSourceOrder};
        let newDestCol = {...destCol, jobOrder: newDestOrder};
        return { columns: { [dId]: newDestCol, [sId]: newSourceCol, ...rest} };
        
      })
    }
    
  }
   
  _getJobOrder(id) {
    return this.state.columns[id].jobOrder;
  }

  _move (source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

  _reorder(order, startIndex, endIndex) {
    const result = Array.from(order);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  render() {
    return (
      <ListDisplay>
        <FlexContainer>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.colOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const jobs = column.jobOrder.map(jobId => this.state.jobs[jobId]);
              return <Column key={columnId} id={columnId} column={column} jobs={jobs}/>;
            })}
          </DragDropContext>
        </FlexContainer>
      </ListDisplay>
    );
  }
}

export default HuntrBoardPage;