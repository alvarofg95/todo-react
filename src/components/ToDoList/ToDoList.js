import React, {Fragment, useState} from 'react';

const ToDoList = ({onSubmit}) => {
  const [taskInfo, setTaskInfo] = useState('');

  function handleInputChange({target: {value}}) {
    setTaskInfo(value);
  }

  function handleKeyDown({keyCode}) {
    if (keyCode === 13) {
      onSubmit(taskInfo);
      setTaskInfo('');
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Añadir tarea"
        value={taskInfo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </Fragment>
  );
};

export default ToDoList;
