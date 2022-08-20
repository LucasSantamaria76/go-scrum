import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  form {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    @media (min-width: 400px) {
      width: 300px;
    }
    @media (min-width: 640px) {
      width: 500px;
    }
  }
`;
