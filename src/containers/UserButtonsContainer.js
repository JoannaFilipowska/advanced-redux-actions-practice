import { connect } from "react-redux";
import UserButtons from "../components/UserButtons";
import { addUser } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    add: txt => dispatch(addUser(txt)),
    remove: txt => dispatch(removeUser(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserButtons);
