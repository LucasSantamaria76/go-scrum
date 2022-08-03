import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 10px;
  span {
    font-size: 0.8rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    @media (min-width: 900px) {
      padding-right: 25px;
    }
    @media (min-width: 1300px) {
      div {
        flex-direction: row;
        gap: 0.8rem;
      }
    }
  }
`;
