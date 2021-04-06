import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PublicView from './PublicView';
import GameView from './GameView';
import PrivateRoute from './api/PrivateRoute';
import LogoutButton from './User/LogoutButton';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    {localStorage.getItem("token") ? <LogoutButton /> : null}
                </header>
                <Switch>
                    {/* <PrivateRoute exact path='/game' component={GameView} /> */}
                    <PrivateRoute exact path='/game' component={GameView} />
                    <Route path='/'>
                        <PublicView/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
