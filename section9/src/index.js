import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import reduxPromise from 'redux-promise';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew }/>
          <Route path="/posts/:id" component={ PostsShow }/>
          <Route path="/" component={ PostsIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
