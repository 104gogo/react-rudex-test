import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './components/Header'
import MainSection from './components/MainSection'
import * as TodoActions from './actions/list'

class App extends Component {
  render() {
    const { list, actions } = this.props;
    return (
        <div>
            <Header actions={ actions } />
            <MainSection list={ list } actions={ actions } />
        </div>
    )
  }
}

export default App;

App.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
