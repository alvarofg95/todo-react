import React, { Component } from 'react';
import ToDoList from '../components/Lists/ToDoList';

class ToDo extends Component {
  render() {
    console.log('tODO');
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default ToDo;
