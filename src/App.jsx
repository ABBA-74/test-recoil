import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList/TodoList';
import './app.css';
export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
