import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
import "./CounterCard.css";

export const CounterCard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-card" role="region" aria-label="counter card">
      <div className="counter-accent" />
      <div className="counter-header">
        <h3 className="counter-title">Counter</h3>
      </div>

      <div className="counter-value" aria-live="polite">{count}</div>

      <div className="counter-actions">
        <button className="btn-primary" aria-label="increment" onClick={() => dispatch(increment())}>+</button>
        <button className="btn-primary" aria-label="decrement" onClick={() => dispatch(decrement())}>−</button>
        <button className="btn-ghost" aria-label="reset" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
