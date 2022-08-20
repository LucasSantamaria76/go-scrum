import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../components';
import { Logo, Navbar, User, UserIcon } from './tasksComponents';

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
          <Button
            primary
            width='60px'
            height='30px'
            onClick={() => navigate('/donate', { replace: true })}>
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
