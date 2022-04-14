import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../models/Model";
import { AuthService } from "../services/AuthService";

interface ProfileState {
  userAttributes: UserAttribute[];
}

interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  render() {
    let profileSpace;
    if (this.props.user) {
      profileSpace = <h3>Hello {this.props.user.userName}</h3>;
    } else {
      profileSpace = (
        <div>
          Please <Link to="/login">Login</Link>
        </div>
      );
    }

    return <div>{profileSpace}</div>;
  }
}
