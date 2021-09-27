import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Home from './pages';
import SignIn from './pages/SignIn';
function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
