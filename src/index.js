import React from 'react';
import { render } from 'react-dom';
import { destroy, onSnapshot } from 'mobx-state-tree';
// import { connectReduxDevtools } from "mst-middlewares"
import { Provider } from 'mobx-react';
import TodoStore from './models/todos';
import '@/assets/style/global.less';

const localStorageKey = 'mst-todomvc-example';

const initialState = {
  questionToScroll: '',
};

let store;
let snapshotListener;

function createTodoStore(snapshot) {
  console.log(snapshot);
  // clean up snapshot listener
  if (snapshotListener) snapshotListener();
  // kill old store to prevent accidental use and run clean up hooks

  if (store) destroy(store);

  // create new one
  store = TodoStore.create(snapshot);
  // connect devtools
  // connectReduxDevtools(require("remotedev"), store)
  // connect local storage
  snapshotListener = onSnapshot(store, snapshot =>
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
  );

  return store;
}

// Initial render
export default function renderApp(App) {
  render(
    <Provider store={createTodoStore(initialState)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

// Connect HMR
// if (module.hot) {
//     module.hot.accept(["./models/todos"], () => {
//         // Store definition changed, recreate a new one from old state
//         renderApp(App, createTodoStore(getSnapshot(store)))
//     })

//     module.hot.accept(["./components/App"], () => {
//         // Componenent definition changed, re-render app
//         renderApp(App, store)
//     })
// }
