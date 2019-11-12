import React, {Component, Fragment} from 'react';
import Header from '../components/Header';
import {renderRoutes, matchRoutes} from 'react-router-config';
import actions from '../store/actions/session';
import styles from './App.css';
import withStyles from '../withStyles';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header staticContext={this.props.staticContext}/>
                <div className="container" className={styles.app}>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </Fragment>
        )
    }
}

App.loadData = function (store) {
    return store.dispatch(actions.getUser());
};
export default withStyles(App, styles);