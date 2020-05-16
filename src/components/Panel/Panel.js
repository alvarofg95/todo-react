import React from 'react';
import ToDoList from 'components/ToDoList/ToDoList';
import {connect} from 'react-redux';
import {addTodo} from 'redux/actions';

const Panel = ({data, addToDo}) => {
  return (
    <div id="panel">
      <h2>Bandeja de entrada</h2>
      <ToDoList data={data} onSubmit={addToDo} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToDo: (text) => dispatch(addTodo(text))
});

const mapStateToProps = ({ToDo}) => {
  console.log({ToDo});
  return {data: ToDo};
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
