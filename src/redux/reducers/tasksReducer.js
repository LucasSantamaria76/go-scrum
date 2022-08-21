import { types } from './../types';

const initialState = {
  tasks: [],
  countTasksActivas: 0,
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
        ...state,
        loading: false,
        error: '',
        tasks: action.payload,
      };
    case types.TASKS_FAILURE:
      return {
        ...state,
        tasks: [],
        error: action.payload,
        loading: false,
      };
    case types.NEW_TASK:
      return {
        ...state,
        error: '',
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case types.SET_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id !== action.payload.id) return task;

          return { ...task, status: action.payload.status };
        }),
      };
    case types.COUNT_TASKS_ACTIVAS:
      return {
        ...state,
        countTasksActivas: action.payload,
      };

    default:
      return state;
  }
};
