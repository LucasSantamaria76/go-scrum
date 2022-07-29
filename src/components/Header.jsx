import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FiUserX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Button } from './Button';

const Header = () => {
  const navigate = useNavigate();
  const { tasks } = useSelector((state) => state.tasksReducer);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Navbar>
        <Logo src={process.env.PUBLIC_URL + '/img/goscrum.png'} alt='logo' />
        <div>
          <Button width='60px' height='30px' onClick={() => navigate('/donate', { replace: true })}>
            Donar
          </Button>
          <p>{`Cantidad de tareas creadas: ${tasks?.length}`}</p>
          <User>
            <p>{localStorage.getItem('userName')}</p>
            <UserIcon onClick={handleLogout} />
          </User>
        </div>
      </Navbar>
    </>
  );
};

export default Header;

const Navbar = styled.nav`
  height: 70px;
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

const Logo = styled.img`
  width: 130px;
  height: 30px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-right: 10px;
    font-size: 1.2rem;
    color: #000;
  }
`;

const UserIcon = styled(FiUserX)`
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
