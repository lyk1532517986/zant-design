import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../components/common/history';

import App from '../components/common/App';
import Home from '../components/common/Home';
import PageNotFound from '../components/404';

class MRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/app" component={App}/>
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default MRoute;