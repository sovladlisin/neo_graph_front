import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Graph from './components/Graph';
import Home from './components/Home';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [authWindow, setauthWindow] = React.useState(false)
  return <Router>


    <Switch>
      <Route exact path="/graph/:uri" component={Graph} />
      <Route exact path="/" component={Home} />



    </Switch>

  </Router>

}

export default App;
