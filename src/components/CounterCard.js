import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";

const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
  text-align: center;
  width: 250px;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 8px;
  margin: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CounterCard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card>
      <h2>Counter: {count}</h2>
      <div>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>−</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
      </div>
    </Card>
  );
};
