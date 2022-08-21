import { types } from './../types';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const getTasks = (path) => async (dispatch) => {
  dispatch({ type: types.TASKS_REQUEST });
  try {
    const res = await fetch(`${API_ENDPOINT}task/${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    const data = await res.json();

    if (data.status_code === 200) {
      dispatch({ type: types.TASKS_SUCCESS, payload: data.result });
    } else dispatch({ type: types.TASKS_FAILURE, payload: data.message });
  } catch (error) {
    dispatch({ type: types.TASKS_FAILURE, payload: error });
  }
};

/* export const getTasksByStatus = (status, path) => async (dispatch) => {
  dispatch({ type: types.TASKS_REQUEST });
  try {
    const res = await fetch(`${API_ENDPOINT}task/${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    if (data.status_code === 200) {
      const tasksByStatus = data.result.filter((task) => task.status === status);
      dispatch({ type: types.TASKS_SUCCESS_BY_STATUS, payload: { tasks: tasksByStatus, status } });
    } else dispatch({ type: types.TASKS_FAILURE, payload: data.message });
  } catch (error) {
    dispatch({ type: types.TASKS_FAILURE, payload: error });
  }
}; */

export const deleteTask = (id) => async (dispatch) => {
  try {
    await fetch(`${API_ENDPOINT}task/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    dispatch({ type: types.DELETE_TASK, payload: id });
  } catch (error) {
    dispatch({ type: types.TASKS_FAILURE, payload: error });
  }
};

export const editTaskStatus = (data) => async (dispatch) => {
  const statusArray = ['NEW', 'IN PROGRESS', 'FINISHED'];

  const newStatusIndex = statusArray.indexOf(data.status) > 1 ? 0 : statusArray.indexOf(data.status) + 1;

  try {
    await fetch(`${API_ENDPOINT}task/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({
        task: {
          title: data.title,
          importance: data.importance,
          status: statusArray[newStatusIndex],
          description: data.description,
        },
      }),
    });
    dispatch({ type: types.SET_STATUS, payload: { id: data._id, status: statusArray[newStatusIndex] } });
  } catch (error) {
    dispatch({ type: types.TASKS_FAILURE, payload: error });
  }
};
