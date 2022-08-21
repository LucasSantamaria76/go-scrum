import styled from '@emotion/styled';
import { FiUserX } from 'react-icons/fi';

// Header Components
export const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    p {
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      & > p {
        display: none;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 130px;
  height: 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  #userName {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(5, 117, 134);
    text-transform: capitalize;
  }
`;

export const UserIcon = styled(FiUserX)`
  width: 35px;
  height: 35px;
  //  padding: 4px;
  color: #df0303;
  &:hover {
    cursor: pointer;
    color: #b1afaf;
  }
`;
// Header Components

export const TasksContainer = styled.div`
  padding: 0px 20px 5px 20px;
  min-width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const WrapperList = styled.div`
  padding: 10px;
  margin-top: 5px;
  min-width: 60%;
  height: calc(100vh - 80px);
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
  flex: 2;
  overflow: hidden;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    margin-top: 0;
    //overflow-y: scroll;
  }
  @media (min-width: 1300px) {
    flex: 1;
  }
`;

export const Filters = styled.div`
  margin: 5px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
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
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #df0303;
    border-radius: 8px;
  }
`;

export const TasksContainerPhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 100%;
  min-width: 150px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  padding: 0.8rem 1.1rem 0.9rem;
  position: relative;
  transition: all 0.2s ease-out;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.2rem;
  }
  h5,
  h6 {
    color: #424242;
    font-size: 0.8rem;
    margin: 0 0 0.1rem;
  }
  p {
    color: #424242;
    display: block;
    font-size: 0.8rem;
    margin: 0 0 0.2rem;
  }
`;

export const BtnClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 18px;
  transition: background-color 0.2s ease-out;
  &:hover {
    color: #000;
  }
`;

export const BtnData = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ bgColor }) => bgColor};
  opacity: 0.7;
  border-radius: 4px;
  color: #fff;
  padding: 0.075rem 0.3rem;
  margin: 3px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 1;
  }
`;

export const NewTaskContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  .team {
    font-size: 0.8rem;
    margin-top: 0.8rem;
  }
  .team #teamID {
    font-weight: bold;
    color: red;
  }
  .team #user {
    font-weight: bold;
    font-size: 1rem;
    color: rgb(5, 117, 134);
    text-transform: capitalize;
    margin-top: 1rem;
  }
  @media (min-width: 900px) {
    margin: 0;
  }
`;

export const ContainerGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (min-width: 900px) {
    width: 30%;
    margin: 0 25px;
    flex-direction: column;
    gap: 20px;
  }
`;
