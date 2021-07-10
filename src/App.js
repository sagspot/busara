import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/sass/style.scss';
import Signin from './components/user/Signin';
import ResetPass from './components/user/ResetPass';
import Profile from './components/user/Profile';
import Forms from './components/survey/Forms';
import FillForm from './components/survey/FillForm';
import Form from './components/survey/forms/Form';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/reset-password" exact component={ResetPass} />
        <Route path="/" exact component={Forms} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/form" exact component={Form} />
        <Route path="/newform" exact component={FillForm} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
