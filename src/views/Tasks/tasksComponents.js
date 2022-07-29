import styled from '@emotion/styled';

export const TasksContainer = styled.div`
  padding: 0px 30px 5px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const WrapperList = styled.div`
  padding: 10px;
  margin-top: 5px;
  min-width: 60%;
  height: calc(100vh - 95px);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  flex: 2;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    margin-top: 0;
  }
  @media (min-width: 1300px) {
    flex: 1;
  }
`;

export const Filters = styled.div`
  margin: 5px 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ListGroup = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: row;
  gap: 5px 10px;
  h3 {
    margin-top: 0;
  }
`;

export const CardList = styled.div`
  flex: 1;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 6px;
  padding: 10px;
  overflow-y: auto;
`;

export const TasksContainerPhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
