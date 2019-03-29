import { connect } from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";

import { setTemp } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setTemp(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChangeTemperature);
