import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const Counter = () => {

  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>dispatch(counterActions.increment())}>Increment</button>
        <button onClick={()=>dispatch(counterActions.increase(5))}>Increase By 5</button>
        <button onClick={()=>dispatch(counterActions.decrement())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
