import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export const Donate = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Section>
        <div>
          <h1>Colaborá con el proyecto</h1>
          <a href='https://mpago.la/2RW1MWq' target='_blank' rel='noreferrer'>
            Donar
          </a>
        </div>
        <Button
          primary
          width='280px'
          height='30px'
          onClick={() => navigate('/', { replace: true })}>
          Volver
        </Button>
      </Section>
    </Main>
  );
};

const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  div {
    text-align: center;
  }
  @media (max-width: 600px) {
    border: 1px solid #e9e9e9;
    width: 400px;
    border-radius: 8px;
    background-color: white;
  }
`;
