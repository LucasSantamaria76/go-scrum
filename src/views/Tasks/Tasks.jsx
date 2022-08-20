import { useState } from 'react';
import {
  ContainerGroup,
  TasksContainer,
  WrapperList,
} from '../../components/TasksComponents/tasksComponents';
import ListTasks from './../../components/TasksComponents/ListTasks';
import Header from '../../components/TasksComponents/Header';
import PieChart from '../../components/CommonComponents/PieChart';
import NewTask from '../../components/TasksComponents/NewTask';
import FilterForm from '../../components/TasksComponents/FilterForm';
import { Dialog, DialogContent } from '@mui/material';
import { TaskForm } from './../../components/TaskForm/TaskForm';

export const Tasks = () => {
  const [tasksfromWho, setTasksfromWho] = useState('ALL');
  const [search, setSearch] = useState('');
  const [searchImportance, setSearchImportance] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <TasksContainer>
        {/* <TaskForm /> */}
        <WrapperList>
          <h2>Mis Tareas</h2>
          <FilterForm
            setSearch={setSearch}
            searchImportance={searchImportance}
            setSearchImportance={setSearchImportance}
            tasksfromWho={tasksfromWho}
            setTasksfromWho={setTasksfromWho}
          />
          <ListTasks
            tasksfromWho={tasksfromWho}
            search={search}
            searchImportance={searchImportance}
          />
        </WrapperList>
        <ContainerGroup>
          <NewTask handleClickOpen={handleClickOpen} />
          <PieChart />
        </ContainerGroup>
      </TasksContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TaskForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
