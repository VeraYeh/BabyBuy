import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      dueDate: '',
      babyName: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      dueDate: this.state.dueDate,
      babyName: this.state.babyName,
      password: this.state.password
    };

    if (newUser.password.length < 10) {
      alert('password needs to exceed 10 characters');
      return;
    }

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(newUser => {
        window.location.hash = '#';
      })
      .catch(err => {
        throw err;
      });
  }

  render() {

    const email = this.state.email;
    const dueDate = this.state.dueDate;
    const babyName = this.state.babyName;
    const password = this.state.password;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">my email:</label>
          <input required type="email" name="email" id="email" placeholder="youremail@gmail.com" value={email} onChange={this.handleChange} />
          <label htmlFor="dueDate">my due date:</label>
          <input required type="text" name="dueDate" id="dueDate" placeholder="mm/dd/yyyy" value={dueDate} onChange={this.handleChange} />
          <label htmlFor="babyName">baby&#39;s name:</label>
          <input required type="text" name="babyName" id="babyName" placeholder="baby's name" value={babyName} onChange={this.handleChange} />
          <label htmlFor="password">password:</label>
          <input required type="password" name="password" id="password" placeholder="10 characters minimum" value={password} onChange={this.handleChange} />
          <button className="submit" type="submit">&gt;&gt; Enter</button>
          <p>*All fields are required. Don&#39;t worry! Date and baby name can be edited later.</p>
      </form>
    </div>
    );
  }
}

export default LoginForm;
