import { Todo, Action, ActionTypes } from "../actions";


const todosReducer = (state: Todo[] = [], actions: Action) => {

  switch (actions.type) {
    case ActionTypes.fetchTodos:
      return actions.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== actions.payload);
    default:
      return state;
  }
}

export default todosReducer;