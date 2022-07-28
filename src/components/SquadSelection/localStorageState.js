export const localStorageMiddleware = ({getState}) => { // <--- FOCUS HERE
  return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(
          getState()
      ));
      return result;
  };
};


export const reHydrateStore = () => { // <-- FOCUS HERE

  if (localStorage.getItem('applicationState') !== null) {
      return JSON.parse(localStorage.getItem('applicationState')) // re-hydrate the store

  }
}