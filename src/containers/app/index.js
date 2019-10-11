import React from 'react';
import Main from '../main/index';
import News from '../news/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../../containers/login/index';
import Profile from '../profile/index';
import { getPasswordAndLogin, hideError, logout } from '../../actions/profile';
import ErrorProfile from '../../components/error/index';

class App extends React.Component {
  render() {
    const {
      profileAccess,
      getPasswordAndLogin,
      profileError,
      hideError,
      logout
    } = this.props;
    return (
      <BrowserRouter>
        {profileError ? <ErrorProfile hideError={hideError} /> : null}
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/news" component={News} />
        <Route path="/profile">
          {profileAccess ? (
            <Profile logout={logout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route
          path="/login"
          render={() => (
            <Login
              getPasswordAndLogin={getPasswordAndLogin}
              profileAccess={profileAccess}
            />
          )}
        />
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileAccess: state.profile.access,
    profileError: state.profile.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPasswordAndLogin: object => dispatch(getPasswordAndLogin(object)),
    hideError: () => dispatch(hideError()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
