import { connect } from "react-redux";
import ScaleVideo from "../components/ScaleVideo";
import { setVideoScale } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setVideoScale(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ScaleVideo);
