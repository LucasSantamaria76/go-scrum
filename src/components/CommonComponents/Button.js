import styled from '@emotion/styled';

export const Button = styled.button`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '35px'};
  font-size: ${({ height }) => `calc(${height} / 2)`};
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  border: 1px solid /* rgba(241, 88, 32, 1) */;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 2px 2px 8px -1px rgba(0, 0, 0, 1);
  background: ${({ primary }) => (primary ? 'var(--bgPrimary)' : 'var(--bgSecondary)')};

  &:hover {
    background: ${({ primary }) => (primary ? 'var(--hoverPrimary)' : 'var(--hoverSecondary)')};
  }
  &:active {
    box-shadow: none;
  }
`;
