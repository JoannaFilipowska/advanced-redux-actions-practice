import { connect } from "react-redux";
import CounterButton from "../components/CounterButton";
import { increaseCounter, decreaseCounter } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    increase: txt => dispatch(increaseCounter(txt)),
    decrease: txt => dispatch(decreaseCounter(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CounterButton);
