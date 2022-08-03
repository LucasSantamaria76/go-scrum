import { types } from './../types';

const initialState = {
  tasks: [],
  loading: false,
  error: '',
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.TASKS_SUCCESS:
      return {
        loading: false,
        error: '',
        tasks: action.payload,
      };
    case types.TASKS_FAILURE:
      return {
        tasks: [],
        error: action.payload,
        loading: false,
      };
    case types.NEW_TASK:
      return {
        error: '',
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
};
