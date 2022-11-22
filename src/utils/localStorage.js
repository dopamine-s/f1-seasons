export const getFromStorage = (key) => {
  if (!localStorage.getItem(key)) return;

  return JSON.parse(localStorage.getItem(key));
};

export const setToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
