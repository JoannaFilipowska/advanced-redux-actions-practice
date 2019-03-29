import { connect } from "react-redux";
import ShowModal from "../components/ShowModal";
import { setIsLoading } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: txt => dispatch(setIsLoading(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowModal);
