import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessful: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
    console.log("Setting user name to", event.target.value);
  }
  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    if (result) {
      console.log(result);
    } else {
      console.log("wrong login");
    }
  }

  render() {
    return (
      <div>
        <h2>Please login</h2>
        <form action="" onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(event) => this.setUserName(event)}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(event) => this.setPassword(event)}
          />
          <br />
          <input type="submit" value={"Login"} />
        </form>
      </div>
    );
  }
}
