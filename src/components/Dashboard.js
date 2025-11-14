import styled from "styled-components";
import { CounterCard } from "./CounterCard";
import { ThemeToggle } from "./ThemeToggle";

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 920px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.text};
  opacity: 0.85;
`;

export const Dashboard = () => {
  return (
    <Page>
      <Column>
        <Header>
          <Title>Dashboard</Title>
          <Subtitle>Small demo of global state and theming</Subtitle>
        </Header>
        <ThemeToggle />
        <CounterCard />
      </Column>
    </Page>
  );
};
