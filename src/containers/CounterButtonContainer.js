import { connect } from "react-redux";
import CounterButton from "../components/CounterButton";
import { increaseCounter } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    increase: txt => dispatch(increaseCounter(txt)),
    decrease: txt => dispatch(increaseCounter(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CounterButton);
