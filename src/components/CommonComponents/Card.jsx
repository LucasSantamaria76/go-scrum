import { CardStyled, Main } from './commonStyles';

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
