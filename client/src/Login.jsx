import React, {Component} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

const Form = styled.form`

`
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('user is now logged in');
    this.props.history.push('/board');
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input name="username" value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password:</label>
        <input name="password" type="password" value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Add!</button>
      </Form>
    );
  }
}

export default LoginForm;