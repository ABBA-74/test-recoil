import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../atoms/atoms';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    console.log(value);
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>Tout</option>
        <option value='Show Completed'>Terminés</option>
        <option value='Show Uncompleted'>Non-terminés</option>
      </select>
    </>
  );
};

export default TodoListFilters;
