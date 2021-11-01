export const ADD = "ADD/ADD";
export const DELETE = "DELETE/DELETE";

export const addUser = (userData) => {
  return {
    type: ADD,
    userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE,
    id,
  };
};
