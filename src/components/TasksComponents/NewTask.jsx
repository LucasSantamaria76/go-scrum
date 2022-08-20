import { NewTaskContainer } from './tasksComponents';
import { Button } from './../CommonComponents/Button';

const NewTask = ({ handleClickOpen }) => {
  return (
    <NewTaskContainer>
      <Button primary width='75%' height='60px' onClick={handleClickOpen}>
        Nueva tarea
      </Button>

      <div className='team'>
        <p>Id del Equipo</p>
        <p>{localStorage.getItem('teamID')}</p>
        <p>{`Usuario: ${localStorage.getItem('userName')}`}</p>
      </div>
    </NewTaskContainer>
  );
};

export default NewTask;
