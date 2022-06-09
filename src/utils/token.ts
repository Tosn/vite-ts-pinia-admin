const key = 'x-token';
const setToken = (token: string) => {
  localStorage.setItem(key, token);
};

const removeToken = () => {
  localStorage.removeItem(key);
};

const getToken = () => localStorage.getItem(key);

export {
  setToken,
  removeToken,
  getToken,
};
