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
    /*     case 'ADD_TASK_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_TASK_FULFILLED':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case 'ADD_TASK_REJECTED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'DELETE_TASK_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_TASK_FULFILLED':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case 'DELETE_TASK_REJECTED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'UPDATE_TASK_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_TASK_FULFILLED':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
        loading: false,
      };
    case 'UPDATE_TASK_REJECTED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }; */
    default:
      return state;
  }
};
