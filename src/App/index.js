import React from "react";
import Main from "../containers/Main";
import News from "../containers/News";
import { HashRouter, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Login from "../containers/Login/index";
import Profile from "../containers/Profile";
import { getPasswordAndLogin, hideError, logout } from "../actions";
import Error from "../components/Error";
import { GlobalStyle } from "./styles";

class App extends React.Component {
  render() {
    const {
      profileAccess,
      getPasswordAndLogin,
      profileError,
      hideError,
      logout,
    } = this.props;
    return (
      <HashRouter>
        {profileError && (
          <Error
            hideError={hideError}
            text="Имя пользователя или пароль введены не верно."
          />
        )}
        <GlobalStyle />
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
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileAccess: state.profile.access,
    profileError: state.profile.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPasswordAndLogin: (object) => dispatch(getPasswordAndLogin(object)),
    hideError: () => dispatch(hideError()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
