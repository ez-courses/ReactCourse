import React from 'react'
import { connect } from "react-redux";

class UserHeader extends React.Component {

  render() {
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    const user = this.props.user;
    if (!user) {
      return null;
    }
    console.log(user);
    return <div className="header">User Name</div>
    // return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find(user => user.id === ownProps.userId) }
};

export default connect(mapStateToProps)(UserHeader);
