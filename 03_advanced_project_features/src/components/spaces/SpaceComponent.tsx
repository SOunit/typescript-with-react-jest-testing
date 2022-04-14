import React from "react";
import genericImage from "../../assets/field.jpg";
import "./SpaceComponent.css";

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends React.Component<SpaceComponentProps> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="" />;
    } else {
      return <img src={genericImage} alt="" />;
    }
  }

  render() {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <label className="name" htmlFor="">
          {this.props.name}
        </label>
        <br />
        <label className="spaceId" htmlFor="">
          {this.props.spaceId}
        </label>
        <br />
        <label className="location" htmlFor="">
          {this.props.location}
        </label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
