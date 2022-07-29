import styled from '@emotion/styled';

export const Input = ({ error, helperText, label, type, placeholder, ...props }) => {
  return (
    <>
      <Label>
        {label}
        <InputStyled type={type} error={error} {...props} placeholder={placeholder} />
        {error && <P>{helperText}</P>}
      </Label>
    </>
  );
};

const Label = styled.label`
  flex: 1;
`;

const P = styled.p`
  color: red;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0;
  margin: 0.5rem 0 1rem;
`;

const InputStyled = styled.input`
  flex: 1 1;
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  /* height: ${({ height }) => height ?? '35px'}; */
  border: 1px solid lightgrey;
  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 8px;
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
