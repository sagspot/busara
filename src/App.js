import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/sass/style.scss';
import Signin from './components/user/Signin';
import ResetPass from './components/user/ResetPass';
import Profile from './components/user/Profile';
import Forms from './components/survey/home/Forms';
import FormDetail from './components/survey/form/FormDetail';
import Form from './components/survey/fillForm/Form';
import NotFound from './components/NotFound';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/reset-password" exact component={ResetPass} />
        <PrivateRoute path="/" exact component={Forms} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/newform" exact component={Form} />
        <PrivateRoute path="/:id" component={FormDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
