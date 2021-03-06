import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { mainRoutes } from "./routes/routes";

class _ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const ScrollToTop = withRouter(_ScrollToTop);

function Routes() {
  // useGoogleAnalytics();
  return (
    <Switch>
      {mainRoutes.map((route) => (
        <AppRoute
          exact={route.exact || true}
          path={route.path}
          key={route.path}
          component={route.component}
          customProps={route.customProps}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
