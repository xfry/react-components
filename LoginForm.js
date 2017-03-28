import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="small-11 medium-6 large-3">
        <div ClassName="row">
          <div ClassName="form-element_container medium-6 columns">
            <label for="username">Email</label>
            <input id="user-email" type="email" placeholder="" required/>
          </div>
          <div ClassName="form-element_container medium-6 columns">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="" required/>
            <p className="help-text" id="passwordHelpText">Your password must have at least 10 characters, a number, and an Emoji.</p>
          </div>
          <div className="form-btn_container">
            <button className="button">Enter</button>
          </div>
        </div>
      </form>
    );
  }
};

export default LoginForm;