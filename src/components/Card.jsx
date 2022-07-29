import styled from '@emotion/styled';

export const Card = ({ direction, children, justify, m, maxWidth, p, title }) => {
  return (
    <Main>
      <CardStyled m={m} p={p} direction={direction} maxWidth={maxWidth} justify={justify}>
        {title && <h2>{title}</h2>}
        {children}
      </CardStyled>
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

const CardStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: flex-start;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 6px;
  border-radius: 5px;
  max-width: ${({ maxWidth }) => maxWidth ?? '400px'};
  padding: ${({ p }) => p ?? '10px'};
  ${({ m }) => m && `margin: ${m}`};
  h2 {
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: #000;
    text-align: left;
  }
`;
