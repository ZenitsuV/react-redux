import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const disPatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    //disPatch({ type: 'increment' });  - only for redux
    disPatch(counterActions.increment());
  };

  const decrementHandler = () => {
    //disPatch({ type: 'decrement' });  - only for redux
    disPatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // disPatch({ type: 'increase', value: 5 });  - only for redux
    disPatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    // disPatch({ type: 'toggle' });  - only for redux
    disPatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>10</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
