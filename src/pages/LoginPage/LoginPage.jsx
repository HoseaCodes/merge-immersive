import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";
// import Github from '../../components/Github/Github'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state); //or is it .signup
      this.props.handleSignUpOrLogin();
      this.props.history.push("/");
    } catch (err) {
      console.log("LoginPage Component: " + err);
      alert("Invalid Credentials!!!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <h3>Log In</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>
              <br />
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <div>


              </div>
              <br />
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <Link className="dark-text" to="/">Cancel</Link>
            </div>
          </div>
        </form>

        {/* <Link to="/auth/github"> */}
        {/* <Github /> */}
        {/* </Link> */}
      </div >
    );
  }
}

export default LoginPage;
