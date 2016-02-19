import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/app';
import Header from '../components/index/Header';
import Menu from '../components/index/Menu';
// import MainSection from '../components/index/MainSection';

class App extends Component {
    render() {
        const { header, menu, actions, location } = this.props;

        return (
            <div>
                <Header header={ header } action={ actions.clickUserName } />
                <Menu location={ location } />
                { this.props.children }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { header, menu } = state.app.toJS();

    return {
        header,
        menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
