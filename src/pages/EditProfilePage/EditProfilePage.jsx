import React, { Component } from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "", // Not sureif even necessary
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.props.user} />
        <div className="EditProfilePage">
          <EditProfile {...this.props} name={this.props.name} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default EditProfilePage;
