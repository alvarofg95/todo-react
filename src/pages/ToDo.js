import React, { Component } from 'react';
import ToDoList from '../components/Lists/ToDoList';
import AddToDo from '../components/buttons/CustomButton';
import Modal from '../components/Modals/Modal';
import CustomInput from '../components/inputs/CustomInput';
import CustomButton from '../components/buttons/CustomButton';

let array = [{ title: 'Nota 1' }, { title: 'Nota 2' }, { title: 'Nota 3' }];

class ToDo extends Component {
  state = {
    data: [],
    toDoData: null,
    opened: false,
  };

  handleModal = () => {
    this.setState((prevState) => ({ opened: !prevState.opened }));
  };

  handleChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    this.setState({ toDoData: { [name]: value } });
  };

  newToDo = () => {
    console.log({ state: this.state });
    const {
      toDoData: { title, description },
    } = this.state;
    array.push({ title, description });
    this.setState({ data: null });
  };

  render() {
    const { opened } = this.state;
    return (
      <div>
        <AddToDo text="Add To Do" onClick={this.handleModal} />
        <ToDoList data={array} />
        <Modal opened={opened} onClose={this.handleModal}>
          <div>
            <CustomInput name="title" placeholder="Title" onChange={this.handleChange} />
          </div>
          <div>
            <CustomInput
              name="description"
              placeholder="Description (optional)"
              textArea
              onChange={this.handleChange}
            />
          </div>
          <CustomButton text="OK" onClick={this.newToDo} />
          <CustomButton text="Cancel" onClick={this.handleModal} />
        </Modal>
      </div>
    );
  }
}

export default ToDo;
