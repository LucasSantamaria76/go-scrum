import { TaskCard } from './TaskCard';
import { useDispatch } from 'react-redux';
import { deleteTask, editTaskStatus } from '../../redux/actions/tasksActions';
import toast, { Toaster } from 'react-hot-toast';

const RenderList = ({ column, renderList }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    setTimeout(() => {
      toast.success('Tarea eliminada con éxito', {
        position: 'top-center',
        autoClose: 3000,
        style: {
          padding: '10px',
          borderRadius: '8px',
          background: '#00000057',
          color: '#fff',
          fontSize: '1.5rem',
        },
      });
    }, 1000);
  };

  const handleEditCardStatus = (data) => {
    dispatch(editTaskStatus(data));
    setTimeout(() => {
      toast.success('Tarea movida con éxito', {
        position: 'top-center',
        autoClose: 3000,
        style: {
          padding: '10px',
          borderRadius: '8px',
          background: '#00000057',
          color: '#fff',
          fontSize: '1.5rem',
        },
      });
    }, 1000);
  };
  return (
    <>
      {renderList
        ?.filter((data) => data.status === column)
        .map((data) => (
          <TaskCard key={data._id} data={data} deleteCard={handleDelete} editCardStatus={handleEditCardStatus} />
        ))}
      <Toaster />
    </>
  );
};

export default RenderList;
