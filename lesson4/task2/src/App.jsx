import React from "react";
import { Provider } from "react-redux";
import { store, increment, decrement } from "./counter";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const App = () => {
  return (
    <Provider store={store}>
      <div className=""></div>
    </Provider>
  );
};

export default App;
