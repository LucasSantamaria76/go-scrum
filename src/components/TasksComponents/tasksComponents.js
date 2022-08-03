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
    gap: 15px;
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
  justify-content: space-between;

  p {
    margin-right: 10px;
    font-size: 1.2rem;
    color: #000;
  }
`;

export const UserIcon = styled(FiUserX)`
  width: 35px;
  height: 35px;
  padding: 4px;
  color: #df0303;
  &:hover {
    cursor: pointer;
    background-color: #b1afaf;
    border-radius: 50%;
  }
`;
// Header Components

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
  height: calc(100vh - 80px);
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
    font-size: 0.6rem;
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
