import TodoItem from '../TodoItem/TodoItem';
import { useRecoilValue } from 'recoil';
import TodoListStats from '../TodoListStats/TodoListStats';
import TodoListFilters from '../TodoListFilters/TodoListFilters';
import TodoItemCreator from '../TodoItemCreator/TodoItemCreator';
import { filteredTodoListState } from '../../atoms/atoms';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
