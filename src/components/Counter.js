import { incrementByAmount } from 'myredux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Increment
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
};
