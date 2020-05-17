import React, {useState} from 'react';
import ToDoList from 'components/ToDoList/ToDoList';
import {connect} from 'react-redux';
import {addToDo, setDone, setToDo} from 'redux/actions';
import CustomInput from 'components/inputs/CustomInput';

const Panel = ({data, addToDoRedux, setDoneRedux, setToDoRedux}) => {
  const [taskInfo, setTaskInfo] = useState('');

  function handleInputChange({target: {value}}) {
    setTaskInfo(value);
  }

  function handleKeyDown({keyCode}) {
    if (keyCode === 13) {
      handleSubmit();
    }
  }

  function handleSubmit() {
    if (taskInfo) {
      setTaskInfo('');
      addToDoRedux(taskInfo);
    }
  }

  function handleDone(id) {
    setDoneRedux(id);
  }

  function handleToDo(id) {
    setToDoRedux(id);
  }

  console.log({data});
  return (
    <div id="panel">
      <h2>Bandeja de entrada</h2>
      <div className="addTaskDiv">
        <CustomInput
          placeholder="Añadir tarea"
          value={taskInfo}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <p onClick={handleSubmit}>Crear</p>
      </div>
      <ToDoList data={data} handleDone={handleDone} handleToDo={handleToDo} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToDoRedux: (text) => dispatch(addToDo(text)),
  setDoneRedux: (id) => dispatch(setDone(id)),
  setToDoRedux: (id) => dispatch(setToDo(id))
});

const mapStateToProps = ({ToDo}) => ({data: ToDo});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
