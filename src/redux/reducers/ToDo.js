const ToDo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'SET_DONE': {
      const prevState = [...state];
      const taskIndex = prevState.findIndex((task) => task.id === action.id);
      if (taskIndex > -1) {
        prevState[taskIndex].completed = true;
      }
      return [...prevState];
    }
    case 'SET_TO_DO': {
      const prevState = [...state];
      const taskIndex = prevState.findIndex((task) => task.id === action.id);
      if (taskIndex > -1) {
        prevState[taskIndex].completed = false;
      }
      return [...prevState];
    }
    default:
      return state;
  }
};

export default ToDo;
