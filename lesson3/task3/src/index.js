import { setLanguage } from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser } from './user.actions.js';
import store from './store';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'coffee' }));
store.dispatch(removeProduct(76));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ name: 'Tom' }));