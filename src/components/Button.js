import styled from '@emotion/styled';

export const Button = styled.button`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '35px'};
  font-size: ${({ height }) => `calc(${height} / 2)`};
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  border: 1px solid rgba(241, 88, 32, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 2px 2px 8px -1px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(235, 149, 149, 1), rgba(236, 53, 15, 1));

  &:hover {
    background: linear-gradient(rgba(236, 53, 15, 1), rgba(235, 149, 149, 1));
  }
  &:active {
    box-shadow: none;
  }
`;
