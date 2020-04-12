import React, { Component } from 'react';
import ToDoList from '../components/Lists/ToDoList';
import Modal from '../components/Modals/Modal';
import CustomInput from '../components/inputs/CustomInput';
import CustomButton from '../components/buttons/CustomButton';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: null,
      description: null,
      opened: false,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('myInfo');
    console.log({ storage });
    if (storage) {
      const data = JSON.parse(storage);
      this.setState({ data });
    }
  }

  handleModal = () => {
    this.setState((prevState) => ({ opened: !prevState.opened }));
  };

  handleChange = ({ target: { name, value } }) => {
    console.log({ name, value });
    this.setState({ [name]: value });
  };

  saveData = () => {
    this.setState(
      (prevState) => {
        const { data, title, description } = prevState;
        const id = data.length + 1;
        data.push({ id, title, description });
        return { data, title: null, description: null, opened: false };
      },
      () => {
        const { data } = this.state;
        localStorage.setItem('myInfo', JSON.stringify(data));
      }
    );
  };

  render() {
    const { data, opened } = this.state;
    return (
      <div>
        <CustomButton text="Add To Do" onClick={this.handleModal} />
        <ToDoList data={data} />
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
          <CustomButton text="OK" onClick={this.saveData} />
          <CustomButton text="Cancel" onClick={this.handleModal} />
        </Modal>
      </div>
    );
  }
}

export default ToDo;
