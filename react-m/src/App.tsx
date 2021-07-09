import React, { Component, Suspense } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import AppHeader from './components/app-header';
// import { GameMenu, Loading } from './components';
import RouterConfig  from './router/index';
import { Provider } from 'mobx-react';
import store from './store';
import APIs from './http/APIs';
import 'antd-mobile/dist/antd-mobile.less';
import './assets/style/common/common.styl';
import './App.css';
import Socket from './socket';
import 'lib-flexible';
import { Drawer, List, Toast } from 'antd-mobile';
import Panel from './views/panel';


@observer
class App extends Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Panel></Panel>
          <article className="pg-c">
            <AppHeader />
            <article className="page-view">
              <RouterConfig />
            </article>
          </article>
        </Router>
      </Provider>
    );
  }
}

export default App;
