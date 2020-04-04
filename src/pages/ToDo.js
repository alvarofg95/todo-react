import React, { Component } from 'react';
import ToDoList from '../components/Lists/ToDoList';
import AddToDo from '../components/buttons/AddButton';
import Modal from '../components/Modals/Modal';
import CustomInput from '../components/inputs/CustomInput';

const array = [{ title: 'Nota 1' }, { title: 'Nota 2' }, { title: 'Nota 3' }];

class ToDo extends Component {
  state = {
    data: [],
    opened: false
  };

  handleModal = () => {
    this.setState(prevState => ({ opened: !prevState.opened }));
  };

  render() {
    const { opened } = this.state;
    return (
      <div>
        <AddToDo text="Add To Do" onClick={this.handleModal} />
        <ToDoList data={array} />
        <Modal opened={opened} onClose={this.handleModal}>
          <div>
            <CustomInput placeholder="Título" />
          </div>
          <div>
            <CustomInput placeholder="Descripción" textArea />
          </div>
        </Modal>
      </div>
    );
  }
}

export default ToDo;
