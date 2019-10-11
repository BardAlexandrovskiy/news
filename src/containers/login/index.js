import React from 'react';
import { LoginContainer, InputName, InputPassword, ButtonSend } from './styles';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNameValue: '',
      inputPasswordValue: ''
    };
  }

  handleChangeInputName = e => {
    this.setState({ inputNameValue: e.target.value });
  };

  handleChangeInputPassword = e => {
    this.setState({ inputPasswordValue: e.target.value });
  };

  handleClickButtonSend = () => {
    const { getPasswordAndLogin } = this.props;
    const { inputNameValue, inputPasswordValue } = this.state;
    if (inputNameValue.trim() && inputPasswordValue.trim()) {
      getPasswordAndLogin({
        login: inputNameValue,
        password: inputPasswordValue
      });
    }
  };

  render() {
    const { inputNameValue, inputPasswordValue } = this.state;
    const { profileAccess } = this.props;
    if (profileAccess) {
      return <Redirect to="/profile" />;
    }
    return (
      <LoginContainer>
        <InputName
          type="text"
          placeholder="username"
          value={inputNameValue}
          onChange={this.handleChangeInputName}
        />
        <InputPassword
          type="password"
          placeholder="password"
          value={inputPasswordValue}
          onChange={this.handleChangeInputPassword}
        />
        <ButtonSend onClick={this.handleClickButtonSend}>Вход</ButtonSend>
      </LoginContainer>
    );
  }
}

export default Login;
