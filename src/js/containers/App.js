import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/list';
import Header from '../components/index/Header';
// import Menu from '../components/index/Menu';
// import MainSection from '../components/index/MainSection';

class App extends Component {
    render() {
        const { list, actions } = this.props;
        
        return (
            <div>
               <Header />
               // <Menu />
               // <MainSection />
            </div>
        )
    }
}  

export default App;

// App.propTypes = {
//     list: PropTypes.array.isRequired,
//     actions: PropTypes.object.isRequired
// }

// function mapStateToProps(state) {
//     return {
//         list: state.list
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(TodoActions, dispatch)
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)
