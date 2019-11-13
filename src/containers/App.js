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
                {/*因为 Header 组件不是通过静态路由渲染出来的，所以需要手动给它传递一个属性值*/}
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