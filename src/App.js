import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './assets/scss/global.scss'
import { RobotApp } from './pages/RobotApp';
import { AppHeader } from './cmps/AppHeader';
import { About } from './pages/About';
import { RobotDetails } from './pages/RobotDetails';
import { RobotEdit } from './pages/RobotEdit';

const PrivateRoute = (props) => {
    const isAdmin = true
    // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
    return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}

function App() {


    return (
        <Router>
            <div className="main-app">
                <AppHeader />
                <main className='container'>
                    <Switch>
                        <Route path='/robot/edit/:id?' component={RobotEdit} />
                        <PrivateRoute path='/robot/:id' component={RobotDetails} />
                        <Route path='/about' component={About} />
                        <Route path='/' component={RobotApp} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>
                        robotRights 2022 &copy;
                    </section>
                </footer>
            </div>
        </Router>
    );
}

export default App;
