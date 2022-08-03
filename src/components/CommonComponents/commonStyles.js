import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardStyled = styled.div`
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
    font-size: 1.3rem;
    color: #000;
    text-align: center;
  }
`;

export const Label = styled.label`
  flex: 1;
  width: 100%;
  display: block;
  font-size: 0.9rem;
`;

export const Text = styled.p`
  color: red;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0;
  margin: 0.5rem 0 1rem;
`;

export const InputStyled = styled.input`
  flex: 1 1;
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  border: 1px solid lightgrey;
  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 5px;
  margin-top: 2px;
  ${({ error }) => !error && `margin-bottom: 1rem`};
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const InputSelectStyle = styled.select`
  flex: 1 1;
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  border: 1px solid lightgrey;
  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 5px;
  margin-top: 2px;
  ${({ error }) => !error && `margin-bottom: 1rem`};
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const TextareaStyled = styled.textarea`
  resize: none;
  flex: 1 1;
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  border: 1px solid lightgrey;
  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 5px;
  margin-top: 2px;
  ${({ error }) => !error && `margin-bottom: 1rem`};
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;
