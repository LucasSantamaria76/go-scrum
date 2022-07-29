import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import debounce from 'lodash.debounce';

import { Header, Input, InputSelect, TaskForm } from './../../components';
import { Filters, TasksContainer, WrapperList } from './tasksComponents';
import ListTasks from './ListTasks';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export const Tasks = () => {
  const [tasksfromWho, setTasksfromWho] = useState('ALL');
  const [search, setSearch] = useState('');
  const [searchImportance, setSearchImportance] = useState('');

  const handleSearch = debounce((e) => {
    setSearch(e?.target?.value.toLowerCase());
  }, 1000);

  return (
    <>
      <Header />
      <TasksContainer>
        <TaskForm />
        <WrapperList>
          <h2>Mis Tareas</h2>
          <Filters>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                value={tasksfromWho}
                onChange={(event) => setTasksfromWho(event.currentTarget.value)}>
                <FormControlLabel value='ALL' control={<Radio color='error' />} label='Todas' />
                <FormControlLabel value='ME' control={<Radio color='error' />} label='Mis tareas' />
              </RadioGroup>
            </FormControl>
            <Input
              type='text'
              name='title'
              placeholder='Buscar por titulo...'
              onChange={handleSearch}
            />
            <InputSelect
              name='importance'
              placeholderText='Seleccionar una prioridad'
              onChange={(e) => setSearchImportance(e?.target?.value)}
              optionObj={{ ALL: 'Todas', LOW: 'baja', MEDIUM: 'media', HIGH: 'alta' }}
            />
          </Filters>
          <ListTasks
            tasksfromWho={tasksfromWho}
            search={search}
            searchImportance={searchImportance}
          />
        </WrapperList>
      </TasksContainer>
    </>
  );
};
