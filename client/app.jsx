import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import { parseRoute } from './lib';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const hashRoute = parseRoute(window.location.hash);
      this.setState({ route: hashRoute });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'login') {
      return <Login />;
    }
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
