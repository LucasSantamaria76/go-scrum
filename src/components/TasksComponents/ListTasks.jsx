/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import { useResize } from '../../hooks/useResize';
import { CardList, ListGroup, TasksContainerPhone } from './tasksComponents';
import RenderList from './RenderList';
import { types } from '../../redux/types';

const ListTasks = ({ search, searchImportance, tasksfromWho }) => {
  const { tasks, error, loading } = useSelector((state) => state.tasksReducer);

  const [renderList, setRenderList] = useState([]);
  const [list, setList] = useState([]);
  const { isPhone } = useResize();
  const dispatch = useDispatch();

  const userName = localStorage.getItem('userName');

  const filtrar = () => {
    switch (true) {
      case tasksfromWho === 'ME' && !!search && ['LOW', 'MEDIUM', 'HIGH'].includes(searchImportance):
        setRenderList(
          list?.filter(
            (task) => task?.user.userName === userName && task.importance === searchImportance && task.title.toLowerCase().startsWith(search)
          )
        );
        break;
      case tasksfromWho === 'ME' && !!search:
        setRenderList(list?.filter((task) => task?.user.userName === userName && task.title.toLowerCase().startsWith(search)));
        break;
      case tasksfromWho === 'ME' && ['LOW', 'MEDIUM', 'HIGH'].includes(searchImportance):
        setRenderList(list?.filter((task) => task?.user.userName === userName && task.importance === searchImportance));
        break;
      case tasksfromWho === 'ME':
        setRenderList(list?.filter((task) => task?.user.userName === userName));
        break;

      case tasksfromWho === 'ALL' && !!search && ['LOW', 'MEDIUM', 'HIGH'].includes(searchImportance):
        setRenderList(list?.filter((task) => task.importance === searchImportance && task.title.toLowerCase().startsWith(search)));
        break;
      case tasksfromWho === 'ALL' && !!search:
        setRenderList(list?.filter((task) => task.title.toLowerCase().startsWith(search)));
        break;
      case tasksfromWho === 'ALL' && ['LOW', 'MEDIUM', 'HIGH'].includes(searchImportance):
        setRenderList(list?.filter((task) => task.importance === searchImportance));
        break;

      default:
        setRenderList(list);
        break;
    }
  };

  useEffect(() => {
    setList(tasks);
    setRenderList(tasks);
  }, [tasks]);

  useEffect(() => {
    filtrar();
  }, [tasksfromWho, searchImportance, search, list]);

  useEffect(() => {
    dispatch({ type: types.COUNT_TASKS_ACTIVAS, payload: renderList?.length });
  }, [renderList?.length]);

  if (error) return <h2>Hay un error</h2>;

  if (loading) return <Skeleton count={10} />;

  const hasTasks = renderList?.length;

  if (!hasTasks) return <h2>No hay tareas</h2>;

  const title = (column) => {
    if (column === 'NEW') return 'Tareas nuevas';
    if (column === 'IN PROGRESS') return 'Tareas en progreso';
    if (column === 'FINISHED') return 'Tareas finalizadas';
  };

  return (
    <>
      {isPhone ? (
        <TasksContainerPhone>{<RenderList column='ALL' renderList={renderList} />}</TasksContainerPhone>
      ) : (
        <ListGroup>
          <CardList>
            <h2>{title('NEW')}</h2>
            <RenderList column='NEW' renderList={renderList} />
          </CardList>
          <CardList>
            <h2>{title('IN PROGRESS')}</h2>
            <RenderList column='IN PROGRESS' renderList={renderList} />
          </CardList>
          <CardList>
            <h2>{title('FINISHED')}</h2>
            <RenderList column='FINISHED' renderList={renderList} />
          </CardList>
        </ListGroup>
      )}
    </>
  );
};

export default ListTasks;
