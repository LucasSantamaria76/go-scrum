const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const fetchLogin = async (userName, password) => {
  const res = await fetch(`${API_ENDPOINT}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, password }),
  });

  const data = await res.json();

  if (data.status_code > 300) {
    throw new Error(data.message);
  }

  return { token: data.result.token, teamID: data.result.user.teamID };
};
