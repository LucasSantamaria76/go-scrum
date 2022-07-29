import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import { useResize } from '../../hooks/useResize';
import { TaskCard } from './TaskCard';
import { CardList, ListGroup, TasksContainerPhone } from './tasksComponents';
import { deleteTask, editTaskStatus, getTasks } from './../../redux/actions/tasksActions';

const ListTasks = ({ search, searchImportance, tasksfromWho }) => {
  const [list, setList] = useState(null);
  const [renderList, setRenderList] = useState(null);
  const { isPhone } = useResize();
  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state) => state.tasksReducer);

  useEffect(() => {
    dispatch(getTasks(tasksfromWho === 'ME' ? 'me' : ''));
  }, [tasksfromWho, dispatch]);

  useEffect(() => {
    if (tasks?.length) {
      setList(tasks);
      setRenderList(tasks);
    } else {
      setList(null);
      setRenderList(null);
    }
  }, [tasks]);

  useEffect(() => {
    if (searchImportance === 'ALL') {
      setRenderList(list);
    } else setRenderList(list?.filter((data) => data.importance === searchImportance));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchImportance]);

  useEffect(() => {
    if (search) setRenderList(list.filter((data) => data.title.toLowerCase().startsWith(search)));
    else setRenderList(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const renderColumnCards = (text) =>
    renderList
      ?.filter((data) => data.status === text)
      .map((data) => (
        <TaskCard
          key={data._id}
          data={data}
          deleteCard={handleDelete}
          editCardStatus={handleEditCardStatus}
        />
      ));

  const renderAllCards = () =>
    renderList?.map((data) => (
      <TaskCard
        key={data._id}
        data={data}
        deleteCard={handleDelete}
        editCardStatus={handleEditCardStatus}
      />
    ));

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditCardStatus = (data) => {
    dispatch(editTaskStatus(data));
  };

  if (error) return <div>Hay un error</div>;

  return (
    <>
      {isPhone ? (
        !renderList?.length ? (
          <div>No hay tareas creadas</div>
        ) : loading ? (
          <Skeleton count={6} />
        ) : (
          <TasksContainerPhone>{renderAllCards()}</TasksContainerPhone>
        )
      ) : (
        <ListGroup>
          {!renderList?.length ? (
            <div>No hay tareas creadas</div>
          ) : loading ? (
            <Skeleton count={6} />
          ) : (
            <>
              <CardList>
                <h3>Nueva</h3>
                {renderColumnCards('NEW')}
              </CardList>
              <CardList>
                <h3>En progreso</h3>
                {renderColumnCards('IN PROGRESS')}
              </CardList>
              <CardList>
                <h3>Terminadas</h3>
                {renderColumnCards('FINISHED')}
              </CardList>
            </>
          )}
        </ListGroup>
      )}
    </>
  );
};

export default ListTasks;
