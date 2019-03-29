import { connect } from "react-redux";
import Modal from "../components/Modal";
import { setIsLoading } from "../actions";
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

export default connect(
  mapStateToProps,
  null
)(Modal);



const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: txt => dispatch(setIsLoading(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Modal);


