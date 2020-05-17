import React from 'react';
import Image from 'components/images/Image';
import doneImg from 'assets/done.svg';

const ToDoList = ({data, handleDone, handleToDo}) => {
  const tasksToDo = data.filter((task) => !task.completed);
  const tasksDone = data.filter((task) => task.completed);

  return (
    <div className="taskList">
      {tasksToDo.map((task) => (
        <div className="task" onClick={() => handleDone(task.id)}>
          <Image src={doneImg} width="20" />
          <p>{task.text}</p>
        </div>
      ))}
      {tasksDone.length ? <span>Hecho</span> : null}
      {tasksDone.map((task) => (
        <div className="task" onClick={() => handleToDo(task.id)}>
          <Image src={doneImg} width="20" />
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
