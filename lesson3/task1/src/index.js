
   
import './index.scss';
import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { name: 'Hanny', age: 18 }));