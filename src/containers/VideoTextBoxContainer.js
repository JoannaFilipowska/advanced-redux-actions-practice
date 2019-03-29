import { connect } from "react-redux";
import VideoTextBox from "../components/VideoTextBox";
import { setVideoURL } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setVideoURL(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VideoTextBox);
