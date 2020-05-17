let nextTodoId = 0;
export const addToDo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setDone = (id) => ({
  type: 'SET_DONE',
  id
});

export const setToDo = (id) => ({
  type: 'SET_TO_DO',
  id
});
