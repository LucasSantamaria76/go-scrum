import 'react-loading-skeleton/dist/skeleton.css';
import debounce from 'lodash.debounce';

import { Input, InputSelect } from './../../components';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Filters } from './tasksComponents';

const FilterForm = ({
  searchImportance,
  setSearch,
  setSearchImportance,
  setTasksfromWho,
  tasksfromWho,
}) => {
  const handleSearch = debounce((e) => {
    setSearch(e?.target?.value.toLowerCase());
  }, 1000);
  return (
    <Filters>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          value={tasksfromWho}
          onChange={(e) => setTasksfromWho(e.currentTarget.value)}>
          <FormControlLabel value='ALL' control={<Radio color='error' />} label='Todas' />
          <FormControlLabel value='ME' control={<Radio color='error' />} label='Mis tareas' />
        </RadioGroup>
      </FormControl>
      <Input type='text' name='title' placeholder='Buscar por titulo...' onChange={handleSearch} />
      <InputSelect
        name='importance'
        value={searchImportance}
        placeholderText='Seleccionar una prioridad'
        onChange={(e) => setSearchImportance(e?.target?.value)}
        optionObj={{ ALL: 'Todas', LOW: 'baja', MEDIUM: 'media', HIGH: 'alta' }}
      />
    </Filters>
  );
};

export default FilterForm;
