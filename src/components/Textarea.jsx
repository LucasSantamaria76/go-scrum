import styled from '@emotion/styled';

export const Textarea = ({ error, helperText, placeholder, ...props }) => {
  return (
    <>
      <TextareaStyled error={error} {...props} placeholder={placeholder} warp='hard' rows='5' />
      {error && <P>{helperText}</P>}
    </>
  );
};

const P = styled.p`
  color: red;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0;
  margin: 0.5rem 0 1rem;
`;

const TextareaStyled = styled.textarea`
  width: ${({ width }) => width ?? '99%'};

  border: 1px solid lightgrey;
  resize: none;

  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 8px;

  ${({ error }) => !error && `margin-bottom: 1rem`};
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;
