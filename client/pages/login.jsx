import React from 'react';
import LoginHeader from './login-header';
import LoginForm from './login-form';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginHeader icon="....." appName="Welcom to BabyBuy!" description="Baby's first shopping list" />
        <LoginForm />
      </div>
    );
  }
}
