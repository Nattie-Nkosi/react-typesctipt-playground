import { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props)

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps):void {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList():JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div style={{ width: '18rem', cursor: 'pointer'}} onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          <li className='list-group-item'>
          {todo.title}
          </li>
        </div>
      );
    });
  }

  render(): JSX.Element {
    return (
      <div className='container'>
        <button onClick={this.onButtonClick} style={{ margin: '10px' }} className='btn btn-primary'>Fetch</button>
        {this.state.fetching ? 'LOADING...' : null}
         {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo [] } => {
  return { todos };
};

export const App  = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App); 
