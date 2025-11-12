import styled from "styled-components";
import { CounterCard } from "./CounterCard";
import { ThemeToggle } from "./ThemeToggle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Dashboard = () => {
  return (
    <Wrapper>
      <ThemeToggle />
      <CounterCard />
    </Wrapper>
  );
};
